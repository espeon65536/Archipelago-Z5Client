local socket = require("socket.core")
local ootLib = require("ootLib")
local connection
local host = '127.0.0.1'
local port = 28920
local clientConnected = false

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
							'then restart this LUA script.')
					return
				end
			end

			local msg, status = connection:receive()

			-- If the server has closed the connection, do nothing
			if status == 'closed' then
				print('Lost connection to AP Client.')
				connection:close()
				clientConnected = false
				return
			end

			-- If no message was received before a timeout, do nothing
			if status == 'timeout' then return end

			-- If the message is empty, also do nothing
			if not msg then return end

			-- TODO: Handle the message
			print(msg)

		end)()
		coroutine.yield()
	end
end)

-- Connect to the AP Client's socket server
clientConnected = connectToAPClient()

-- Wait for incoming messages
while true do
	-- If a message bas been received on the socket connection, act on it
	runMessageWatcher();

	-- Advance the emulator by one frame
	emu.frameadvance()
end
