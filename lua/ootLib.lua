local ootController = require("ootController")
ootLib = {}

local rando_context = mainmemory.read_u32_be(0x1C6E90 + 0x15D4) - 0x80000000
local coop_context = mainmemory.read_u32_be(rando_context + 0x0000) - 0x80000000
local protocol_version_addr = coop_context + 0

local player_id_addr        = coop_context + 4
local player_name_id_addr   = coop_context + 5
local player_num = mainmemory.read_u8(player_id_addr)

local incoming_player_addr  = coop_context + 6
local incoming_item_addr    = coop_context + 8
local outgoing_key_addr     = coop_context + 12
local outgoing_item_addr    = coop_context + 16
local outgoing_player_addr  = coop_context + 18
local player_names_addr     = coop_context + 20

local save_context = 0x11A5D0
local internal_count_addr = save_context + 0x90

ootLib.safeToReceiveItem = function()
    local shop_scenes = {[0x2C]=1, [0x2D]=1, [0x2E]=1, [0x2F]=1, [0x30]=1, [0x31]=1, [0x32]=1, [0x33]=1,
                         [0x42]=1, [0x4B]=1}
    local details
    local scene
    _, details = ootController.get_current_game_mode()
    scene = ootController.ctx:rawget('cur_scene'):rawget()
    return details.name == "Normal Gameplay" and shop_scenes[scene] == nil
end

ootLib.receiveItem = function(senderId, itemId)
    -- In case an item cannot be received at this time, inform the caller by returning false
    if not ootLib.safeToReceiveItem() then return false end

    local internal_count = mainmemory.read_u16_be(internal_count_addr)
    internal_count = internal_count + 1
    mainmemory.write_u16_be(internal_count_addr, internal_count)
    mainmemory.write_u16_be(incoming_player_addr, senderId) -- tells the game who sent the item
    mainmemory.write_u16_be(incoming_item_addr, itemId) -- sends the item
    return true -- Item was given to player
end

ootLib.getLastFoundItem = function()
    -- Find which item it is, and who it belongs to
    local item = mainmemory.read_u16_be(outgoing_item_addr)
    local player = mainmemory.read_u16_be(outgoing_player_addr)

    -- If there is no item data present or the last found item belongs to the local player, no action is required
    if not item or not player or player == player_num then return nil end

    -- clear the pending item data
    mainmemory.write_u16_be(outgoing_item_addr, 0)
    mainmemory.write_u16_be(outgoing_player_addr, 0)

    -- notify the client an item needs to be sent
    return item, player
end

return ootLib
