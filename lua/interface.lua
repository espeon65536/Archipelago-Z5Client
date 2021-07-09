local socket = require("socket.core")
local connection
local host = '127.0.0.1'
local port = 28920
local messageLoopReady = true
local connectionClosed = false

connection, err = socket:tcp()
if err ~= nil then
	emu.print(err)
	return
end

local returnCode, errorMessage = connection:connect(host, port)
if (returnCode == nil) then
	print('Error while connecting: ' .. errorMessage)
	print('Please restart the LUA script to reconnect to the AP Client.')
	return
end
connection:settimeout(0)

messageWatcher = coroutine.create(function()
	while 1 do
		-- If the connection has been closed, stop looping and end the coroutine
		if connectionClosed then break end

		(function()
			-- If the current request is not complete, do nothing
			if not messageLoopReady then return end

			local msg, status = connection:receive('*l')

			-- If no message has arrived, do nothing
			if status == 'timeout' then
				messageLoopReady = true
				return
			end

			if status == 'closed' then
				print('Lost connection to client.')
				connection:close()
				connectionClosed = true
				messageLoopReady = true
				return
			end

			if not msg then
				print(status)
				messageLoopReady = true
				return
			end
		end)()
	end
end)
