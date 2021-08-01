local socket = require("socket.core")
local lib = require("lib")
local connection
local host = '127.0.0.1'
local port = 28920
local clientConnected = false

local stringSplit = function(str, sep)
    local parts = {}
    for str in string.gmatch(str, "([^" .. sep .. "]+)") do
        table.insert(parts, str)
    end
    return parts
end

local connectToAPClient = function()
	-- Open a TCP socket
	print('Connecting to AP client at ' .. host .. ':' .. port)
	connection, err = socket:tcp()
	if err ~= nil then
		print(err)
		return false
	end

	-- Establish connection to socket server hosted on AP Client
	connection:setoption('linger', {['on']=false, ['timeout']=0})
	local returnCode, errorMessage = connection:connect(host, port)
	if (returnCode == nil) then
		print('Error while connecting: ' .. errorMessage)
		print('Please restart the LUA script to reconnect to the AP Client.')
		return false
	end
	print('Connection established.')
	connection:settimeout(0)
	return true
end

local runMessageWatcher = coroutine.wrap(function()
	while true do
		(function()
			-- If the connection has been closed, stop looping and end the coroutine
			if not clientConnected then
				print('Connection has been closed. Attempting to reconnect.')
				if not connectToAPClient() then
					print('Unable to re-establish connection to AP Client. Please make sure it is running, ' ..
							'then restart this script.')
					return
				end
			end

			local msg, status = connection:receive()

			-- If the server has closed the connection, do nothing
			if status == 'closed' then
				print('Lost connection to AP Client. Make sure the client is running, then restart this script.')
				connection:close()
				clientConnected = false
				return
			end

			-- If no message was received before a timeout, do nothing
			if status == 'timeout' then return end

			-- If the message is empty, also do nothing
			if not msg then return end

			-- Handle the message
			-- Message structure: requestId|command|arg1|arg2|...
			-- Different commands have different expectations of arguments, described in comments where each
			-- command is handled
			local messageParts = stringSplit(msg, '|')
			if not messageParts[0] or not messageParts[1] then return end
			local requestId = messageParts[0]
            local command = messageParts[1]

            -- Expects message format: "requestId|receiveItem|itemOffset"
            -- Returns message format: "requestId|successful"
		    if command == 'receiveItem' then
                local itemOffset = messageParts[2]

		        if not lib.safeToReceiveItem() then
		            connection:send(requestId .. "|0")
		            return
		        end
		        lib.receiveItem(lib.localPlayerNumber,tonumber(itemOffset))
		        connection:send(requestId .. '|1')
			    return
			end

            -- Expects message format: "requestId|readyToReceiveItem"
            -- Returns message format: "requestId|readyStatus"
			if command == 'readyToReceiveItem' then
                local readyForItem = lib.safeToReceiveItem()
                local readyStatus = if lib.safeToReceiveItem() then '1' else '0' end
                connection:send(requestId .. '|' .. readyStatus)
			    return
			end

            -- Expects message format: "requestId|getReceivedItemCount"
            -- Returns message format: "requestId|receivedItemCount"
            if command == 'getReceivedItemCount' then
                connection:send(requestId .. '|' .. lib.getReceivedItemCount())
                return
            end

            -- Expects message format: "requestId|player1Slot|player1Name|player2Slot|player2Name|..."
            -- Returns message format: "requestId"
            if command == 'setNames' then
                print('Command: setNames\nRaw: ' .. msg)
                connection:send(requestId)
                return
            end
		end)()
		coroutine.yield()
	end
end)

-- Sends pipe delimited location checks in format: "locationChecks|location1Name|location1Checked|..."
local sendLocationChecks = function()
    local message = "locationChecks"
    for location_name, checked in pairs(lib.getLocationChecks()) do
        message = message .. "|" .. location_name .. "|"
        if checked then
            message = message .. "1"
        else
            message = message .. "0"
        end
    end
    connection:send(message)
end

-- Connect to the AP Client's socket server
clientConnected = connectToAPClient()

-- Wait for incoming messages
while true do
    if not clientConnected then break end

	-- If a the client is connected and a message bas been received on the socket connection, act on it
	if clientConnected then runMessageWatcher() end

	-- Advance the emulator by one frame
	emu.frameadvance()

    -- If the client is connected, send location checks to the server
	if clientConnected then sendLocationChecks() end

    -- Advance the emulator by one frame
	emu.frameadvance()
end
