-- Create and manage a simple HTTP server for the AP client to interface with

local host = '*'
local port = 28920
local socket = require('socket')
local server = nil

-- Initialize the server
server = assert(socket.bind(host, port))
local x, y = server:getsockname()
console.log("Hosting on " .. x .. " at port " .. y)

coroutine.create(function()
	while 1 do
		-- Wait for client connections, set timeout to 1 second to prevent blocking
		local client = server:accept()
		client:settimeout(1)

		-- Receive a message
		local msg, err = client:receive()
		if err then
			-- Log the error
			console.log(err)
		else
			-- Echo the message back to the sender
			client:send('Received: ' .. msg)
		end

		-- Close the connection
		client:close()
	end
end)