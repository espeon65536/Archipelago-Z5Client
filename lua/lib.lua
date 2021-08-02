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

local save_context = 0x11A5D0
local internal_count_addr = save_context + 0x90

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
    -- Increment the internal item counter
    local internal_count = mainmemory.read_u16_be(internal_count_addr)
    internal_count = internal_count + 1
    mainmemory.write_u16_be(internal_count_addr, internal_count)

    -- Grant item to player
    mainmemory.write_u16_be(incoming_player_addr, senderId) -- player slot number
    mainmemory.write_u16_be(incoming_item_addr, itemId) -- id fo the item to be sent
end

lib.getLocationChecks = scanner.check_all_locations

lib.localPlayerNumber = mainmemory.read_u8(player_id_addr)

return lib
