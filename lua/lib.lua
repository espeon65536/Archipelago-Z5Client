local ootController = require("ootController")
local scanner = require("scanner")
lib = {}

local rando_context = mainmemory.read_u32_be(0x1C6E90 + 0x15D4) - 0x80000000
local coop_context = mainmemory.read_u32_be(rando_context + 0x0000) - 0x80000000

local player_id_addr        = coop_context + 4

local incoming_player_addr  = coop_context + 6
local incoming_item_addr    = coop_context + 8

local outgoing_key_addr     = coop_context + 12
local outgoing_item_addr    = coop_context + 16
local outgoing_player_addr  = coop_context + 18

local player_names_address  = coop_context + 20
local player_name_length    = 8 -- 8 bytes
local rom_name_location     = player_names_address + 0x800

local save_context = 0x11A5D0
local internal_count_addr = save_context + 0x90

local bytes_to_string = function(bytes)
    local string = ''
    for i=0,#(bytes) do
        if bytes[i] == 0 then return string end
        string = string .. string.char(bytes[i])
    end
    return string
end

lib.isItemReceivable = function()
    local shop_scenes = {[0x2C]=1, [0x2D]=1, [0x2E]=1, [0x2F]=1, [0x30]=1, [0x31]=1, [0x32]=1, [0x33]=1,
                         [0x42]=1, [0x4B]=1}
    local details
    local scene
    _, details = ootController.get_current_game_mode()
    scene = ootController.ctx:rawget('cur_scene'):rawget()

    local playerQueued = mainmemory.read_u16_be(incoming_player_addr)
    local itemQueued = mainmemory.read_u16_be(incoming_item_addr)

    -- Safe to receive an item if the scene is normal, player is not in a shop, and no item is already queued
    return details.name == "Normal Gameplay" and shop_scenes[scene] == nil and playerQueued == 0 and itemQueued == 0
end

-- Find the number of items received by the ROM
lib.getReceivedItemCount = function()
    return mainmemory.read_u16_be(internal_count_addr)
end

lib.receiveItem = function(senderId, itemId)
    -- Grant item to player
    mainmemory.write_u16_be(incoming_player_addr, senderId) -- player slot number
    mainmemory.write_u16_be(incoming_item_addr, itemId) -- id of the item to be sent
end

lib.getRomName = function()
    local rom_name_bytes = mainmemory.readbyterange(rom_name_location, 16)
    return bytes_to_string(rom_name_bytes)
end

lib.setPlayerName = function(id, name)
    local name_address = player_names_address + (id * player_name_length)
    local name_index = 0

    for _,c in pairs({string.byte(name, 1, 100)}) do
        if c >= string.byte('0') and c <= string.byte('9') then
            c = c - string.byte('0')
        elseif c >= string.byte('A') and c <= string.byte('Z') then
            c = c + 0x6A
        elseif c >= string.byte('a') and c <= string.byte('z') then
            c = c + 0x64
        elseif c == string.byte('.') then
            c = 0xEA
        elseif c == string.byte('-') then
            c = 0xE4
        elseif c == string.byte(' ') then
            c = 0xDF
        else
            c = nil
        end

        if c ~= nil then
            mainmemory.write_u8(name_address + name_index, c)

            name_index = name_index + 1
            if name_index >= 8 then
                break
            end
        end
    end

    for i = name_index, player_name_length - 1 do
        mainmemory.write_u8(name_address + i, 0xDF)
    end
end

lib.getLocationChecks = scanner.check_all_locations

lib.localPlayerNumber = mainmemory.read_u8(player_id_addr)

return lib
