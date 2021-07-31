local scanner = {}

-- USER TOGGLES
local NUM_BIG_POES_REQUIRED = 1

-- The offset constants are all from N64 RAM start. Offsets in the check statements are relative.
local save_context_offset = 0x11A5D0
local equipment_offset = save_context_offset + 0x70 -- 0x11A640
local scene_flags_offset = save_context_offset + 0xD4 --0x11A6A4
local shop_context_offset = save_context_offset + 0x5B4 --0x11AB84
local skulltula_flags_offset = save_context_offset + 0xE9C --0x11B46C
local event_context_offset = save_context_offset + 0xED4 --0x11B4A4
local big_poe_points_offset =  save_context_offset + 0xEBC -- 0x11B48C
local fishing_context_offset = save_context_offset + 0xEC0 --0x11B490
local item_get_inf_offset = save_context_offset + 0xEF0 --0x11B4C0
local inf_table_offset = save_context_offset + 0xEF8 -- 0x11B4C8

-- Offsets for scenes can be found here
-- https://wiki.cloudmodding.com/oot/Scene_Table/NTSC_1.0
-- Each scene is 0x1c bits long, chests at 0x0, switches at 0x4, collectibles at 0xc
local scene_check = function(scene_offset, bit_to_check, scene_data_offset)
    local local_scene_offset = scene_flags_offset + (0x1c * scene_offset) + scene_data_offset;
    local nearby_memory = mainmemory.read_u32_be(local_scene_offset)
    return bit.check(nearby_memory,bit_to_check)
end

local chest_check = function(scene_offset, bit_to_check)
    return scene_check(scene_offset, bit_to_check, 0x0)
end

local on_the_ground_check = function(scene_offset, bit_to_check)
    return scene_check(scene_offset, bit_to_check, 0xC)
end

-- NOTE: Scrubs seem to be stored in the "unused" block of scene memory
local scrub_check = function(scene_offset, bit_to_check)
    return scene_check(scene_offset, bit_to_check, 0x10)
end

local cow_check = function(scene_offset, bit_to_check)
    return scene_check(scene_offset, bit_to_check, 0xC)
end

local bean_sale_check = function(scene_offset, bit_to_check)
    return scene_check(scene_offset, bit_to_check, 0xC)
end

local great_fairy_magic_check = function(scene_offset,bit_to_check)
    return scene_check(scene_offset, bit_to_check, 0x4)
end

local membership_card_check = function(scene_offset,bit_to_check)
    return scene_check(scene_offset, bit_to_check, 0x4)
end

--Helper method to resolve skulltula lookup location
local function skulltula_scene_to_array_index(i)
    return  (i + 3) - 2 * (i % 4)
end

-- NOTE: The Rando LocationList offsets are bit masks not locations, so
-- 0x1 -> 0 offset, 0x2 -> 1 offset, 0x4 -> 2 offset, 0x8 -> 3 offset, etc.
-- NOTE:  8-bit array, scene_offsets are filled on [0x00,0x15] but use a lookup array above
local skulltula_check = function(scene_offset, bit_to_check)
    --For some reason the skulltula array isn't a straight mapping from the scene ID
    scene_offset = skulltula_scene_to_array_index(scene_offset)
    local local_skulltula_offset = skulltula_flags_offset + (scene_offset);
    local nearby_memory = mainmemory.read_u8(local_skulltula_offset)
    return bit.check(nearby_memory,bit_to_check)
end

-- Left shelf bit masks are:
-- 0x8    0x2
-- 0x4    0x1
local shop_check = function(shop_offset, item_offset)
    local local_shop_offset = shop_context_offset;
    local nearby_memory = mainmemory.read_u32_be(local_shop_offset)
    local bitToCheck = shop_offset*4 + item_offset
    return bit.check(nearby_memory,bitToCheck)
end

-- NOTE: Getting the bit poe bottle isn't flagged directly, instead only the points on the card are saved and
-- checked on each big poe turn in.
local big_poe_bottle_check = function()
    local nearby_memory = mainmemory.read_u32_be(big_poe_points_offset)
    local points_required = 100*NUM_BIG_POES_REQUIRED
    return (nearby_memory >= points_required)
end

-- Offsets can be found at the OOT save context layout here:
-- https://wiki.cloudmodding.com/oot/Save_Format#event_chk_inf
local event_check = function(major_offset,bit_to_check)
    -- shifting over to the next 4 hex digits
    local event_address = event_context_offset + 0x2 * major_offset;
    local u_16_event_row = mainmemory.read_u16_be(event_address)
    return bit.check(u_16_event_row,bit_to_check)
end

-- Used by the game to track some non-quest item event flags
local item_get_info_check = function(check_offset,bit_to_check)
    local local_offset = item_get_inf_offset + (check_offset);
    local nearby_memory = mainmemory.read_u8(local_offset)
    return bit.check(nearby_memory,bit_to_check)
end

-- Used by the game to track lots of misc information (Talking to people, getting items, etc.)
local info_table_check = function(check_offset,bit_to_check)
    local local_offset = inf_table_offset + (check_offset);
    local nearby_memory = mainmemory.read_u8(local_offset)
    return bit.check(nearby_memory,bit_to_check)
end

-- The fishing records are intricate and in their own memory area
-- NOTE: Fishing in rando is patched and getting the adult reward first doesn't result in the "Golden scale glitch"
local fishing_check = function(isAdult)
    local bitToCheck = 10 --for child
    if(isAdult) then
        bitToCheck = 11 --for adult
    end

    local nearby_memory = mainmemory.read_u32_be(fishing_context_offset)
    return bit.check(nearby_memory,bitToCheck)
end

local big_goron_sword_check = function ()
    local nearby_memory = mainmemory.read_u32_be(equipment_offset)
    local bitToCheck = 0x8
    return bit.check(nearby_memory,bitToCheck)
end

local read_kokiri_forest_checks = function()
    local checks = {}
    checks["KF Midos Top Left Chest"] = chest_check(0x28, 0x00)
    checks["KF Midos Top Right Chest"] = chest_check(0x28, 0x01)
    checks["KF Midos Bottom Left Chest"] = chest_check(0x28, 0x02)
    checks["KF Midos Bottom Right Chest"] = chest_check(0x28, 0x03)
    checks["KF Kokiri Sword Chest"] = chest_check(0x55, 0x00)
    checks["KF Storms Grotto Chest"] = chest_check(0x3E, 0x0C)
    checks["KF Links House Cow"] = cow_check(0x34, 0x18)

    checks["KF GS Know It All House"] = skulltula_check(0x0C, 0x1)
    checks["KF GS Bean Patch"] = skulltula_check(0x0C, 0x0)
    checks["KF GS House of Twins"] = skulltula_check(0x0C, 0x2)

    checks["KF Shop Item 5"] = shop_check(0x6, 0x0)
    checks["KF Shop Item 6"] = shop_check(0x6, 0x1)
    checks["KF Shop Item 7"] = shop_check(0x6, 0x2)
    checks["KF Shop Item 8"] = shop_check(0x6, 0x3)
    return checks
end

local read_lost_woods_checks = function()
    local checks = {}
    checks["LW Gift from Saria"] = event_check(0xC, 0x1)
    checks["LW Ocarina Memory Game"] = item_get_info_check(0x3, 0x7)
    checks["LW Target in Woods"] = item_get_info_check(0x2, 0x5)
    checks["LW Near Shortcuts Grotto Chest"] = chest_check(0x3E, 0x14)
    checks["Deku Theater Skull Mask"] = item_get_info_check(0x2, 0x6)
    checks["Deku Theater Mask of Truth"] = item_get_info_check(0x2, 0x7)
    checks["LW Skull Kid"] = item_get_info_check(0x3, 0x6)
    checks["LW Deku Scrub Near Bridge"] = scrub_check(0x5B, 0xA)
    checks["LW Deku Scrub Near Deku Theater Left"] = scrub_check(0x5B, 0x1)
    checks["LW Deku Scrub Near Deku Theater Right"] = scrub_check(0x5B, 0x2)
    checks["LW Deku Scrub Grotto Front"] = scrub_check(0x1F, 0xB)
    checks["LW Deku Scrub Grotto Rear"] = scrub_check(0x1F, 0x4)

    checks["LW GS Bean Patch Near Bridge"] = skulltula_check(0x0D, 0x0)
    checks["LW GS Bean Patch Near Theater"] = skulltula_check(0x0D, 0x1)
    checks["LW GS Above Theater"] = skulltula_check(0x0D, 0x2)
    return checks
end

local read_sacred_forest_meadow_checks = function()
    local checks = {}
    checks["SFM Wolfos Grotto Chest"] = chest_check(0x3E, 0x11)
    checks["SFM Deku Scrub Grotto Front"] = scrub_check(0x18, 0x8)
    checks["SFM Deku Scrub Grotto Rear"] = scrub_check(0x18, 0x9)
    checks["SFM GS"] = skulltula_check(0x0D, 0x3)
    return checks
end

local read_deku_tree_checks = function()
    local checks = {}
    checks["Deku Tree Map Chest"] = chest_check(0x00, 0x3)
    checks["Deku Tree Slingshot Room Side Chest"] = chest_check(0x00, 0x5)
    checks["Deku Tree Slingshot Chest"] = chest_check(0x00, 0x1)
    checks["Deku Tree Compass Chest"] = chest_check(0x00, 0x2)
    checks["Deku Tree Compass Room Side Chest"] = chest_check(0x00, 0x6)
    checks["Deku Tree Basement Chestt"] = chest_check(0x00, 0x4)

    checks["Deku Tree GS Compass Room"] = skulltula_check(0x0, 0x3)
    checks["Deku Tree GS Basement Vines"] = skulltula_check(0x0, 0x2)
    checks["Deku Tree GS Basement Gate"] = skulltula_check(0x0, 0x1)
    checks["Deku Tree GS Basement Back Room"] = skulltula_check(0x0, 0x0)

    checks["Deku Tree Queen Gohma Heart"] = on_the_ground_check(0x11, 0x1F)
    return checks
end

local read_forest_temple_checks = function()
    local checks = {}
    checks["Forest Temple First Room Chest"] = chest_check(0x3, 0x3)
    checks["Forest Temple First Stalfos Chest"] = chest_check(0x3, 0x0)
    checks["Forest Temple Raised Island Courtyard Chest"] = chest_check(0x3, 0x5)
    checks["Forest Temple Map Chest"] = chest_check(0x3, 0x1)
    checks["Forest Temple Well Chest"] = chest_check(0x3, 0x9)
    checks["Forest Temple Eye Switch Chest"] = chest_check(0x3, 0x4)
    checks["Forest Temple Boss Key Chest"] = chest_check(0x3, 0xE)
    checks["Forest Temple Floormaster Chest"] = chest_check(0x3, 0x2)
    checks["Forest Temple Red Poe Chest"] = chest_check(0x3, 0xD)
    checks["Forest Temple Bow Chest"] = chest_check(0x3, 0xC)
    checks["Forest Temple Blue Poe Chest"] = chest_check(0x3, 0xF)
    checks["Forest Temple Falling Ceiling Room Chest"] = chest_check(0x3, 0x7)
    checks["Forest Temple Basement Chest"] = chest_check(0x3, 0xB)

    checks["Forest Temple GS First Room"] = skulltula_check(0x03, 0x1)
    checks["Forest Temple GS Lobby"] = skulltula_check(0x03, 0x3)
    checks["Forest Temple GS Raised Island Courtyard"] = skulltula_check(0x03, 0x0)
    checks["Forest Temple GS Level Island Courtyard"] = skulltula_check(0x03, 0x2)
    checks["Forest Temple GS Basement"] = skulltula_check(0x03, 0x4)

    checks["Forest Temple Phantom Ganon Heart"] = on_the_ground_check(0x14, 0x1F)
    return checks
end

local read_hyrule_field_checks = function()
    local checks = {}
    checks["HF Ocarina of Time Item"] = event_check(0x4, 0x3)
    checks["HF Near Market Grotto Chest"] = chest_check(0x3E, 0x00)
    checks["HF Tektite Grotto Freestanding PoH"] = on_the_ground_check(0x3E, 0x01)
    checks["HF Southeast Grotto Chest"] = chest_check(0x3E, 0x02)
    checks["HF Open Grotto Chest"] = chest_check(0x3E, 0x03)
    checks["HF Deku Scrub Grotto"] = scrub_check(0x10, 0x3)
    checks["HF Cow Grotto Cow"] = cow_check(0x3E, 0x19)

    checks["HF GS Cow Grotto"] = skulltula_check(0x0A, 0x0)
    checks["HF GS Near Kak Grotto"] = skulltula_check(0x0A, 0x1)
    return checks
end

local read_lon_lon_ranch_checks = function()
    local checks = {}
    checks["LLR Talons Chickens"] = item_get_info_check(0x1, 0x2)
    checks["LLR Freestanding PoH"] = on_the_ground_check(0x4C, 0x01)
    checks["LLR Tower Left Cow"] = cow_check(0x4C, 0x18)
    checks["LLR Tower Right Cow"] = cow_check(0x4C, 0x19)

    -- checks["Lon Lon Ranch - Epona"] = event_check(0x1, 0x8)

    checks["LLR Deku Scrub Grotto Left"] = scrub_check(0x26, 0x1)
    checks["LLR Deku Scrub Grotto Center"] = scrub_check(0x26, 0x4)
    checks["LLR Deku Scrub Grotto Right"] = scrub_check(0x26, 0x6)

    checks["LLR Stables Left Cow"] = cow_check(0x36, 0x18)
    checks["LLR Stables Right Cow"] = cow_check(0x36, 0x19)

    checks["LLR GS House Window"] = skulltula_check(0x0B, 0x2)
    checks["LLR GS Tree"] = skulltula_check(0x0B, 0x3)
    checks["LLR GS Rain Shed"] = skulltula_check(0x0B, 0x1)
    checks["LLR GS Back Wall"] = skulltula_check(0x0B, 0x0)
    return checks
end

--NOTE Logic has bombchus from bomchu bowling here, but it's an endless drop so it is not printed
local read_market_checks = function()
    local checks = {}
    checks["Market Shooting Gallery Reward"] = item_get_info_check(0x0, 0x5)
    checks["Market Bombchu Bowling First Prize"] = item_get_info_check(0x3, 0x1)
    checks["Market Bombchu Bowling Second Prize"] = item_get_info_check(0x3, 0x2)
    checks["Market Treasure Chest Game Reward"] = item_get_info_check(0x2, 0x3)
    checks["Market Lost Dog"] = info_table_check(0x33, 0x1)
    checks["Market 10 Big Poes"] = big_poe_bottle_check()
    checks["ToT Light Arrows Cutscene"] = event_check(0xC, 0x4)

    checks["Market GS Guard House"] = skulltula_check(0x0E, 0x3)

    checks["Market Bazaar Item 5"] = shop_check(0x4, 0x0)
    checks["Market Bazaar Item 6"] = shop_check(0x4, 0x1)
    checks["Market Bazaar Item 7"] = shop_check(0x4, 0x2)
    checks["Market Bazaar Item 8"] = shop_check(0x4, 0x3)

    checks["Market Potion Shop Item 5"] = shop_check(0x8, 0x0)
    checks["Market Potion Shop Item 6"] = shop_check(0x8, 0x1)
    checks["Market Potion Shop Item 7"] = shop_check(0x8, 0x2)
    checks["Market Potion Shop Item 8"] = shop_check(0x8, 0x3)

    checks["Market Bombchu Shop Item 5"] = shop_check(0x1, 0x0)
    checks["Market Bombchu Shop Item 6"] = shop_check(0x1, 0x1)
    checks["Market Bombchu Shop Item 7"] = shop_check(0x1, 0x2)
    checks["Market Bombchu Shop Item 8"] = shop_check(0x1, 0x3)
    return checks
end

local read_hyrule_castle_checks = function()
    local checks = {}
    checks["HC Malon Egg"] = event_check(0x1, 0x2)
    checks["HC Zeldas Letter"] = event_check(0x4, 0x0)
    checks["HC Great Fairy Reward"] = item_get_info_check(0x2, 0x1)
    checks["HC GS Tree"] = skulltula_check(0xE, 0x2)
    checks["HC GS Storms Grotto"] = skulltula_check(0xE, 0x1)
    return checks
end

local read_kakariko_village_checks = function()
    local checks = {}
    checks["Kak Anju as Child"] = item_get_info_check(0x0, 0x4)
    checks["Kak Anju as Adult"] = item_get_info_check(0x4, 0x4)
    checks["Kak Impas House Freestanding PoH"] = on_the_ground_check(0x37, 0x1)
    checks["Kak Windmill Freestanding PoH"] = on_the_ground_check(0x48, 0x1)

    checks["Kak Man on Roof"] = item_get_info_check(0x3, 0x5)
    checks["Kak Open Grotto Chest"] = chest_check(0x3E, 0x08)
    checks["Kak Redead Grotto Chest"] = chest_check(0x3E, 0x0A)
    checks["Kak Shooting Gallery Reward"] = item_get_info_check(0x0, 0x6)
    checks["Kak 10 Gold Skulltula Reward"] = event_check(0xD, 0xA)
    checks["Kak 20 Gold Skulltula Reward"] = event_check(0xD, 0xB)
    checks["Kak 30 Gold Skulltula Reward"] = event_check(0xD, 0xC)
    checks["Kak 40 Gold Skulltula Reward"] = event_check(0xD, 0xD)
    checks["Kak 50 Gold Skulltula Reward"] = event_check(0xD, 0xE)
    checks["Kak Impas House Cow"] = cow_check(0x37, 0x18)

    checks["Kak GS Tree"] = skulltula_check(0x10, 0x5)
    checks["Kak GS Guards House"] = skulltula_check(0x10, 0x1)
    checks["Kak GS Watchtower"] = skulltula_check(0x10, 0x2)
    checks["Kak GS Skulltula House"] = skulltula_check(0x10, 0x4)
    checks["Kak GS House Under Construction"] = skulltula_check(0x10, 0x3)
    checks["Kak GS Above Impas House"] = skulltula_check(0x10, 0x6)

    --In rando these shops contain different items from market bazaar/potion
    checks["Kak Bazaar Item 5"] = shop_check(0x7, 0x0)
    checks["Kak Bazaar Item 6"] = shop_check(0x7, 0x1)
    checks["Kak Bazaar Item 7"] = shop_check(0x7, 0x2)
    checks["Kak Bazaar Item 8"] = shop_check(0x7, 0x3)

    checks["Kak Potion Shop Item 5"] = shop_check(0x3, 0x0)
    checks["Kak Potion Shop Item 6"] = shop_check(0x3, 0x1)
    checks["Kak Potion Shop Item 7"] = shop_check(0x3, 0x2)
    checks["Kak Potion Shop Item 8"] = shop_check(0x3, 0x3)
    return checks
end

local read_graveyard_checks = function()
    local checks = {}
    checks["Graveyard Shield Grave Chest"] = chest_check(0x40, 0x00)
    checks["Graveyard Heart Piece Grave Chest"] = chest_check(0x3F, 0x00)
    checks["Graveyard Composers Grave Chest"] = chest_check(0x41, 0x00)
    checks["Graveyard Freestanding PoH"] = on_the_ground_check(0x53, 0x4)
    checks["Graveyard Dampe Gravedigging Tour"] = on_the_ground_check(0x53, 0x8)
    checks["Graveyard Hookshot Chest"] = chest_check(0x48, 0x00)
    checks["Graveyard Dampe Race Freestanding PoH"] = on_the_ground_check(0x48, 0x7)

    checks["Graveyard GS Bean Patch"] = skulltula_check(0x10, 0x0)
    checks["Graveyard GS Wall"] = skulltula_check(0x10, 0x7)
    return checks
end

local read_bottom_of_the_well_checks = function()
    local checks = {}
    checks["Bottom of the Well Front Left Fake Wall Chest"] = chest_check(0x08, 0x08)
    checks["Bottom of the Well Front Center Bombable Chest"] = chest_check(0x08, 0x02)
    checks["Bottom of the Well Back Left Bombable Chest"] = chest_check(0x08, 0x04)
    checks["Bottom of the Well Underwater Left Chest"] = chest_check(0x08, 0x09)
    checks["Bottom of the Well Freestanding Key"] = on_the_ground_check(0x08, 0x01)
    checks["Bottom of the Well Compass Chest"] = chest_check(0x08, 0x01)
    checks["Bottom of the Well Center Skulltula Chest"] = chest_check(0x08, 0x0E)
    checks["Bottom of the Well Right Bottom Fake Wall Chest"] = chest_check(0x08, 0x05)
    checks["Bottom of the Well Fire Keese Chest"] = chest_check(0x08, 0x0A)
    checks["Bottom of the Well Like Like Chest"] = chest_check(0x08, 0x0C)
    checks["Bottom of the Well Like Like Chest"] = chest_check(0x08, 0x07)
    checks["Bottom of the Well Underwater Front Chest"] = chest_check(0x08, 0x10)
    checks["Bottom of the Well Invisible Chest"] = chest_check(0x08, 0x14)
    checks["Bottom of the Well Lens of Truth Chest"] = chest_check(0x08, 0x03)

    checks["Bottom of the Well GS West Inner Room"] = skulltula_check(0x08, 0x2)
    checks["Bottom of the Well GS East Inner Room"] = skulltula_check(0x08, 0x1)
    checks["Bottom of the Well GS Like Like Cage"] = skulltula_check(0x08, 0x0)
    return checks
end

local read_shadow_temple_checks = function()
    local checks = {}
    checks["Shadow Temple Map Chest"] = chest_check(0x07, 0x01)
    checks["Shadow Temple Hover Boots Chest"] = chest_check(0x07, 0x07)
    checks["Shadow Temple Compass Chest"] = chest_check(0x07, 0x03)
    checks["Shadow Temple Early Silver Rupee Chest"] = chest_check(0x07, 0x02)
    checks["Shadow Temple Invisible Blades Visible Chest"] = chest_check(0x07, 0x0C)
    checks["Shadow Temple Invisible Blades Invisible Chest"] = chest_check(0x07, 0x16)
    checks["Shadow Temple Falling Spikes Lower Chest"] = chest_check(0x07, 0x05)
    checks["Shadow Temple Falling Spikes Upper Chest"] = chest_check(0x07, 0x06)
    checks["Shadow Temple Falling Spikes Switch Chest"] = chest_check(0x07, 0x04)
    checks["Shadow Temple Invisible Spikes Chest"] = chest_check(0x07, 0x09)
    checks["Shadow Temple Freestanding Key"] = on_the_ground_check(0x07, 0x01)
    checks["Shadow Temple Wind Hint Chest"] = chest_check(0x07, 0x15)
    checks["Shadow Temple After Wind Enemy Chest"] = chest_check(0x07, 0x08)
    checks["Shadow Temple After Wind Hidden Chest"] = chest_check(0x07, 0x14)
    checks["Shadow Temple Spike Walls Left Chest"] = chest_check(0x07, 0x0A)
    checks["Shadow Temple Boss Key Chest"] = chest_check(0x07, 0x0B)
    checks["Shadow Temple Invisible Floormaster Chest"] = chest_check(0x07, 0x0D)

    checks["Shadow Temple GS Like Like Room"] = skulltula_check(0x07, 0x3)
    checks["Shadow Temple GS Falling Spikes Room"] = skulltula_check(0x07, 0x1)
    checks["Shadow Temple GS Single Giant Pot"] = skulltula_check(0x07, 0x0)
    checks["Shadow Temple GS Near Ship"] = skulltula_check(0x07, 0x4)
    checks["Shadow Temple GS Triple Giant Pot"] = skulltula_check(0x07, 0x2)

    checks["Shadow Temple Bongo Bongo Heart"] = on_the_ground_check(0x18, 0x1F)
    return checks
end

local read_death_mountain_trail_checks = function()
    local checks = {}
    checks["DMT Freestanding PoH"] = on_the_ground_check(0x60, 0x1E)
    checks["DMT Chest"] = chest_check(0x60, 0x01)
    checks["DMT Storms Grotto Chest"] = chest_check(0x3E, 0x17)
    checks["DMT Great Fairy Reward"] = great_fairy_magic_check(0x3B, 0x18)
    checks["DMT Biggoron"] = big_goron_sword_check()
    checks["DMT Cow Grotto Cow"] = cow_check(0x3E, 0x18)

    checks["DMT GS Near Kak"] = skulltula_check(0x0F, 0x2)
    checks["DMT GS Bean Patch"] = skulltula_check(0x0F, 0x1)
    checks["DMT GS Above Dodongos Cavern"] = skulltula_check(0x0F, 0x3)
    checks["DMT GS Falling Rocks Path"] = skulltula_check(0x0F, 0x4)
    return checks
end

local read_goron_city_checks = function()
    local checks = {}
    checks["GC Darunias Joy"] = event_check(0x3, 0x6)
    checks["GC Pot Freestanding PoH"] = on_the_ground_check(0x62, 0x1F)
    checks["GC Rolling Goron as Child"] = info_table_check(0x22, 0x6)
    checks["GC Rolling Goron as Adult"] = info_table_check(0x20, 0x1)
    checks["GC Medigoron"] = on_the_ground_check(0x62, 0x1)
    checks["GC Maze Left Chest"] = chest_check(0x62, 0x00)
    checks["GC Maze Right Chest"] = chest_check(0x62, 0x01)
    checks["GC Maze Center Chest"] = chest_check(0x62, 0x02)
    checks["GC Deku Scrub Grotto Left"] = scrub_check(0x25, 0x1)
    checks["GC Deku Scrub Grotto Center"] = scrub_check(0x25, 0x4)
    checks["GC Deku Scrub Grotto Right"] = scrub_check(0x25, 0x6)
    checks["GC GS Center Platform"] = skulltula_check(0x0F, 0x5)
    checks["GC GS Boulder Maze"] = skulltula_check(0x0F, 0x6)

    checks["GC Shop Item 5"] = shop_check(0x5, 0x0)
    checks["GC Shop Item 6"] = shop_check(0x5, 0x1)
    checks["GC Shop Item 7"] = shop_check(0x5, 0x2)
    checks["GC Shop Item 8"] = shop_check(0x5, 0x3)
    return checks
end

local read_death_mountain_crater_checks = function()
    local checks = {}
    checks["DMC Volcano Freestanding PoH"] = on_the_ground_check(0x61, 0x08)
    checks["DMC Wall Freestanding PoH"] = on_the_ground_check(0x61, 0x02)
    checks["DMC Upper Grotto Chest"] = chest_check(0x3E, 0x1A)
    checks["DMC Great Fairy Reward"] = great_fairy_magic_check(0x3B, 0x10)

    checks["DMC Deku Scrub"] = scrub_check(0x61, 0x6)
    checks["DMC Deku Scrub Grotto Left"] = scrub_check(0x23, 0x1)
    checks["DMC Deku Scrub Grotto Center"] = scrub_check(0x23, 0x4)
    checks["DMC Deku Scrub Grotto Right"] = scrub_check(0x23, 0x6)

    checks["DMC GS Crate"] = skulltula_check(0x0F, 0x7)
    checks["DMC GS Bean Patch"] = skulltula_check(0x0F, 0x0)
    return checks
end

local read_dodongos_cavern_checks = function()
    local checks = {}
    checks["Dodongos Cavern Map Chest"] = chest_check(0x01, 0x8)
    checks["Dodongos Cavern Compass Chest"] = chest_check(0x01, 0x5)
    checks["Dodongos Cavern Bomb Flower Platform Chest"] = chest_check(0x01, 0x6)
    checks["Dodongos Cavern Bomb Bag Chest"] = chest_check(0x01, 0x4)
    checks["Dodongos Cavern End of Bridge Chest"] = chest_check(0x01, 0xA)
    checks["Dodongos Cavern Boss Room Chest"] = chest_check(0x12, 0x0)

    checks["Dodongos Cavern Deku Scrub Lobby"] = scrub_check(0x1, 0x5)
    checks["Dodongos Cavern Deku Scrub Side Room Near Dodongos"] = scrub_check(0x1, 0x2)
    checks["Dodongos Cavern Deku Scrub Near Bomb Bag Left"] = scrub_check(0x1, 0x1)
    checks["Dodongos Cavern Deku Scrub Near Bomb Bag Right"] = scrub_check(0x1, 0x4)

    checks["Dodongos Cavern GS Side Room Near Lower Lizalfos"] = skulltula_check(0x01, 0x4)
    checks["Dodongos Cavern GS Scarecrow"] = skulltula_check(0x01, 0x1)
    checks["Dodongos Cavern GS Alcove Above Stairs"] = skulltula_check(0x01, 0x2)
    checks["Dodongos Cavern GS Vines Above Stairs"] = skulltula_check(0x01, 0x0)
    checks["Dodongos Cavern GS Back Room"] = skulltula_check(0x01, 0x3)

    checks["Dodongos Cavern King Dodongo Heart"] = on_the_ground_check(0x12, 0x1F)
    return checks
end

local read_fire_temple_checks = function()
    local checks = {}
    checks["Fire Temple Near Boss Chest"] = chest_check(0x04, 0x01)
    checks["Fire Temple Flare Dancer Chest"] = chest_check(0x04, 0x00)
    checks["Fire Temple Boss Key Chest"] = chest_check(0x04, 0x0C)
    checks["Fire Temple Big Lava Room Lower Open Door Chest"] = chest_check(0x04, 0x04)
    checks["Fire Temple Big Lava Room Blocked Door Chest"] = chest_check(0x04, 0x02)
    checks["Fire Temple Boulder Maze Lower Chest"] = chest_check(0x04, 0x03)
    checks["Fire Temple Boulder Maze Side Room Chest"] = chest_check(0x04, 0x08)
    checks["Fire Temple Map Chest"] = chest_check(0x04, 0x0A)
    checks["Fire Temple Boulder Maze Shortcut Chest"] = chest_check(0x04, 0x0B)
    checks["Fire Temple Boulder Maze Upper Chest"] = chest_check(0x04, 0x06)
    checks["Fire Temple Scarecrow Chest"] = chest_check(0x04, 0x0D)
    checks["Fire Temple Compass Chest"] = chest_check(0x04, 0x07)
    checks["Fire Temple Megaton Hammer Chest"] = chest_check(0x04, 0x05)
    checks["Fire Temple Highest Goron Chest"] = chest_check(0x04, 0x09)

    checks["Fire Temple GS Boss Key Loop"] = skulltula_check(0x04, 0x1)
    checks["Fire Temple GS Song of Time Room"] = skulltula_check(0x04, 0x0)
    checks["Fire Temple GS Boulder Maze"] = skulltula_check(0x04, 0x2)
    checks["Fire Temple GS Scarecrow Climb"] = skulltula_check(0x04, 0x4)
    checks["Fire Temple GS Scarecrow Top"] = skulltula_check(0x04, 0x3)

    checks["Fire Temple Volvagia Heart"] = on_the_ground_check(0x15, 0x1F)
    return checks
end

local read_zoras_river_checks = function()
    local checks = {}
    checks["ZR Magic Bean Salesman"] = bean_sale_check(0x54, 0x1)
    checks["ZR Open Grotto Chest"] = chest_check(0x3E, 0x09)
    checks["ZR Frogs in the Rain"] = event_check(0xD, 0x6)
    checks["ZR Frogs Ocarina Game"] = event_check(0xD, 0x0)
    checks["ZR Near Open Grotto Freestanding PoH"] = on_the_ground_check(0x54, 0x04)
    checks["ZR Near Domain Freestanding PoH"] = on_the_ground_check(0x54, 0x0B)
    checks["ZR Deku Scrub Grotto Front"] = scrub_check(0x15, 0x8)
    checks["ZR Deku Scrub Grotto Rear"] = scrub_check(0x15, 0x9)

    checks["ZR GS Tree"] = skulltula_check(0x11, 0x1)
    --NOTE: There is no GS in the soft soil. It's the only one that doesn't have one.
    checks["ZR GS Ladder"] = skulltula_check(0x11, 0x0)
    checks["ZR GS Near Raised Grottos"] = skulltula_check(0x11, 0x4)
    checks["ZR GS Above Bridge"] = skulltula_check(0x11, 0x3)
    return checks
end

local read_zoras_domain_checks = function()
    local checks = {}
    checks["ZD Diving Minigame"] = event_check(0x3, 0x8)
    checks["ZD Chest"] = chest_check(0x58, 0x00)
    checks["ZD King Zora Thawed"] = info_table_check(0x26, 0x1)
    checks["ZD GS Frozen Waterfall"] = skulltula_check(0x11, 0x6)

    checks["ZD Shop Item 5"] = shop_check(0x2, 0x0)
    checks["ZD Shop Item 6"] = shop_check(0x2, 0x1)
    checks["ZD Shop Item 7"] = shop_check(0x2, 0x2)
    checks["ZD Shop Item 8"] = shop_check(0x2, 0x3)
    return checks
end

local read_zoras_fountain_checks = function()
    local checks = {}
    checks["ZF Great Fairy Reward"] = item_get_info_check(0x2, 0x0)
    checks["ZF Iceberg Freestanding PoH"] = on_the_ground_check(0x59, 0x01)
    checks["ZF Bottom Freestanding PoH"] = on_the_ground_check(0x59, 0x14)
    checks["ZF GS Above the Log"] = skulltula_check(0x11, 0x2)
    checks["ZF GS Tree"] = skulltula_check(0x11, 0x7)
    checks["ZF GS Hidden Cave"] = skulltula_check(0x11, 0x5)
    return checks
end

local read_jabu_checks = function()
    local checks = {}
    checks["Jabu Jabus Belly Boomerang Chest"] = chest_check(0x02, 0x01)
    checks["Jabu Jabus Belly Map Chest"] = chest_check(0x02, 0x02)
    checks["Jabu Jabus Belly Compass Chest"] = chest_check(0x02, 0x04)
    checks["Jabu Jabus Belly Deku Scrub"] = scrub_check(0x02, 0x1)
    checks["Jabu Jabus Belly GS Water Switch Room"] = skulltula_check(0x02, 0x3)
    checks["Jabu Jabus Belly GS Lobby Basement Lower"] = skulltula_check(0x02, 0x0)
    checks["Jabu Jabus Belly GS Lobby Basement Upper"] = skulltula_check(0x02, 0x1)
    checks["Jabu Jabus Belly GS Near Boss"] = skulltula_check(0x02, 0x2)

    checks["Jabu Jabus Belly Barinade Heart"] = on_the_ground_check(0x13, 0x1F)
    return checks
end

local read_ice_cavern_checks = function()
    local checks = {}

    checks["Ice Cavern Map Chest"] = chest_check(0x09, 0x00)
    checks["Ice Cavern Compass Chest"] = chest_check(0x09, 0x01)
    checks["Ice Cavern Freestanding PoH"] = on_the_ground_check(0x09, 0x01)
    checks["Ice Cavern Iron Boots Chest"] = chest_check(0x09, 0x02)
    checks["Ice Cavern GS Spinning Scythe Room"] = skulltula_check(0x09, 0x1)
    checks["Ice Cavern GS Heart Piece Room"] = skulltula_check(0x09, 0x2)
    checks["Ice Cavern GS Push Block Room"] = skulltula_check(0x09, 0x0)
    return checks
end

local read_lake_hylia_checks = function()
    local checks = {}
    checks["LH Underwater Item"] = event_check(0x3, 0x1)
    checks["LH Child Fishing"] = fishing_check(false)
    checks["LH Adult Fishing"] = fishing_check(true)
    checks["LH Lab Dive"] = item_get_info_check(0x3, 0x0)
    checks["LH Freestanding PoH"] = on_the_ground_check(0x57, 0x1E)
    --It's not actually a chest, but it is marked in the chest section
    checks["LH Sun"] = chest_check(0x57, 0x0)
    checks["LH Deku Scrub Grotto Left"] = scrub_check(0x19, 0x1)
    checks["LH Deku Scrub Grotto Center"] = scrub_check(0x19, 0x4)
    checks["LH Deku Scrub Grotto Right"] = scrub_check(0x19, 0x6)

    checks["LH GS Lab Wall"] = skulltula_check(0x12, 0x2)
    checks["LH GS Bean Patch"] = skulltula_check(0x12, 0x0)
    checks["LH GS Small Island"] = skulltula_check(0x12, 0x1)
    checks["LH GS Lab Crate"] = skulltula_check(0x12, 0x3)
    checks["LH GS Tree"] = skulltula_check(0x12, 0x4)
    return checks
end

local read_water_temple_checks = function()
    local checks = {}
    checks["Water Temple Compass Chest"] = chest_check(0x05, 0x09)
    checks["Water Temple Map Chest"] = chest_check(0x05, 0x02)
    checks["Water Temple Cracked Wall Chest"] = chest_check(0x05, 0x00)
    checks["Water Temple Torches Chest"] = chest_check(0x05, 0x01)
    checks["Water Temple Boss Key Chest"] = chest_check(0x05, 0x05)
    checks["Water Temple Central Pillar Chest"] = chest_check(0x05, 0x06)
    checks["Water Temple Central Bow Target Chest"] = chest_check(0x05, 0x08)
    checks["Water Temple Longshot Chest"] = chest_check(0x05, 0x07)
    checks["Water Temple River Chest"] = chest_check(0x05, 0x03)
    checks["Water Temple Dragon Chest"] = chest_check(0x05, 0x0A)

    checks["Water Temple GS Behind Gate"] = skulltula_check(0x05, 0x0)
    checks["Water Temple GS Near Boss Key Chest"] = skulltula_check(0x05, 0x3)
    checks["Water Temple GS Central Pillar"] = skulltula_check(0x05, 0x2)
    checks["Water Temple GS Falling Platform Room"] = skulltula_check(0x05, 0x1)
    checks["Water Temple GS River"] = skulltula_check(0x05, 0x4)

    checks["Water Temple Morpha Heart"] = on_the_ground_check(0x16, 0x1F)
    return checks
end

local read_gerudo_valley_checks = function()
    local checks = {}
    checks["GV Crate Freestanding PoH"] = on_the_ground_check(0x5A, 0x2)
    checks["GV Waterfall Freestanding PoH"] = on_the_ground_check(0x5A, 0x1)
    checks["GV Chest"] = chest_check(0x5A, 0x00)
    checks["GV Deku Scrub Grotto Front"] = scrub_check(0x1A, 0x8)
    checks["GV Deku Scrub Grotto Rear"] = scrub_check(0x1A, 0x9)
    checks["GV Cow"] = cow_check(0x5A, 0x18)

    checks["GV GS Small Bridge"] = skulltula_check(0x13, 0x1)
    checks["GV GS Bean Patch"] = skulltula_check(0x13, 0x0)
    checks["GV GS Behind Tent"] = skulltula_check(0x13, 0x3)
    checks["GV GS Pillar"] = skulltula_check(0x13, 0x2)
    return checks
end

local read_gerudo_fortress_checks = function()
    local checks = {}
    checks["GF North F1 Carpenter"] = on_the_ground_check(0xC, 0xC)
    checks["GF North F2 Carpenter"] = on_the_ground_check(0xC, 0xA)
    checks["GF South F1 Carpenter"] = on_the_ground_check(0xC, 0xE)
    checks["GF South F2 Carpenter"] = on_the_ground_check(0xC, 0xF)
    checks["GF Gerudo Membership Card"] = membership_card_check(0xC, 0x2)
    checks["GF Chest"] = chest_check(0x5D, 0x0)
    -- checks["Gerudo Fortress - Free North F1 Carpenter"] = event_check(0x9, 0x0)
    -- checks["Gerudo Fortress - Free North F2 Carpenter"] = event_check(0x9, 0x3)
    -- checks["Gerudo Fortress - Free South F1 Carpenter"] = event_check(0x9, 0x1)
    -- checks["Gerudo Fortress - Free South F2 Carpenter"] = event_check(0x9, 0x2)
    checks["GF HBA 1000 Points"] = info_table_check(0x33, 0x0)
    checks["GF HBA 1500 Points"] = item_get_info_check(0x0, 0x7)
    checks["GF GS Top Floor"] = skulltula_check(0x14, 0x1)
    checks["GF GS Archery Range"] = skulltula_check(0x14, 0x0)
    return checks
end

local read_gerudo_training_ground_checks = function()
    local checks = {}
    checks["Gerudo Training Grounds Lobby Left Chest"] = chest_check(0x0B, 0x13)
    checks["Gerudo Training Grounds Lobby Right Chest"] = chest_check(0x0B, 0x07)
    checks["Gerudo Training Grounds Stalfos Chest"] = chest_check(0x0B, 0x00)
    checks["Gerudo Training Grounds Before Heavy Block Chest"] = chest_check(0x0B, 0x11)
    checks["Gerudo Training Grounds Heavy Block First Chest"] = chest_check(0x0B, 0x0F)
    checks["Gerudo Training Grounds Heavy Block Second Chest"] = chest_check(0x0B, 0x0E)
    checks["Gerudo Training Grounds Heavy Block Third Chest"] = chest_check(0x0B, 0x14)
    checks["Gerudo Training Grounds Heavy Block Fourth Chest"] = chest_check(0x0B, 0x02)
    checks["Gerudo Training Grounds Eye Statue Chest"] = chest_check(0x0B, 0x03)
    checks["Gerudo Training Grounds Near Scarecrow Chest"] = chest_check(0x0B, 0x04)
    checks["Gerudo Training Grounds Hammer Room Clear Chest"] = chest_check(0x0B, 0x12)
    checks["Gerudo Training Grounds Hammer Room Switch Chest"] = chest_check(0x0B, 0x10)
    checks["Gerudo Training Grounds Freestanding Key"] = on_the_ground_check(0x0B, 0x1)
    checks["Gerudo Training Grounds Maze Right Central Chest"] = chest_check(0x0B, 0x05)
    checks["Gerudo Training Grounds Maze Right Side Chest"] = chest_check(0x0B, 0x08)
    checks["Gerudo Training Grounds Underwater Silver Rupee Chest"] = chest_check(0x0B, 0x0D)
    checks["Gerudo Training Grounds Beamos Chest"] = chest_check(0x0B, 0x01)
    checks["Gerudo Training Grounds Hidden Ceiling Chest"] = chest_check(0x0B, 0x0B)
    checks["Gerudo Training Grounds Maze Path First Chest"] = chest_check(0x0B, 0x06)
    checks["Gerudo Training Grounds Maze Path Second Chest"] = chest_check(0x0B, 0x0A)
    checks["Gerudo Training Grounds Maze Path Third Chest"] = chest_check(0x0B, 0x09)
    checks["Gerudo Training Grounds Maze Path Final Chest"] = chest_check(0x0B, 0x0C)
    return checks
end

local read_haunted_wasteland_checks = function()
    local checks = {}
    checks["Wasteland Bombchu Salesman"] = on_the_ground_check(0x5E, 0x01)
    checks["Wasteland Chest"] = chest_check(0x5E, 0x00)
    checks["Wasteland GS"] = skulltula_check(0x15, 0x1)
    return checks
end

local read_desert_colossus_checks = function()
    local checks = {}
    checks["Colossus Great Fairy Reward"] = item_get_info_check(0x2, 0x2)
    checks["Colossus Freestanding PoH"] = on_the_ground_check(0x5C, 0xD)
    checks["Colossus Deku Scrub Grotto Front"] = scrub_check(0x27, 0x8)
    checks["Colossus Deku Scrub Grotto Rear"] = scrub_check(0x27, 0x9)

    checks["Colossus GS Bean Patch"] = skulltula_check(0x15, 0x0)
    checks["Colossus GS Tree"] = skulltula_check(0x15, 0x3)
    checks["Colossus GS Hill"] = skulltula_check(0x15, 0x2)
    return checks
end

local read_spirit_temple_checks = function()
    local checks = {}
    checks["Spirit Temple Child Bridge Chest"] = chest_check(0x06, 0x08)
    checks["Spirit Temple Child Early Torches Chest"] = chest_check(0x06, 0x00)
    checks["Spirit Temple Child Climb North Chest"] = chest_check(0x06, 0x06)
    checks["Spirit Temple Child Climb East Chest"] = chest_check(0x06, 0x0C)
    checks["Spirit Temple Map Chest"] = chest_check(0x06, 0x03)
    checks["Spirit Temple Sun Block Room Chest"] = chest_check(0x06, 0x01)
    checks["Spirit Temple Silver Gauntlets Chest"] = chest_check(0x5C, 0x0B)

    checks["Spirit Temple Compass Chest"] = chest_check(0x06, 0x04)
    checks["Spirit Temple Early Adult Right Chest"] = chest_check(0x06, 0x07)
    checks["Spirit Temple First Mirror Left Chest"] = chest_check(0x06, 0x0D)
    checks["Spirit Temple First Mirror Right Chest"] = chest_check(0x06, 0x0E)
    checks["Spirit Temple Statue Room Northeast Chest"] = chest_check(0x06, 0x0F)
    checks["Spirit Temple Statue Room Hand Chest"] = chest_check(0x06, 0x02)
    checks["Spirit Temple Near Four Armos Chest"] = chest_check(0x06, 0x05)
    checks["Spirit Temple Hallway Right Invisible Chest"] = chest_check(0x06, 0x14)
    checks["Spirit Temple Hallway Left Invisible Chest"] = chest_check(0x06, 0x15)
    checks["Spirit Temple Mirror Shield Chest"] = chest_check(0x5C, 0x09)

    checks["Spirit Temple Boss Key Chest"] = chest_check(0x06, 0x0A)
    checks["Spirit Temple Topmost Chest"] = chest_check(0x06, 0x12)

    checks["Spirit Temple GS Metal Fence"] = skulltula_check(0x06, 0x4)
    checks["Spirit Temple GS Sun on Floor Room"] = skulltula_check(0x06, 0x3)
    checks["Spirit Temple GS Hall After Sun Block Room"] = skulltula_check(0x06, 0x0)
    checks["Spirit Temple GS Lobby"] = skulltula_check(0x06, 0x2)
    checks["Spirit Temple GS Boulder Room"] = skulltula_check(0x06, 0x1)

    checks["Spirit Temple Twinrova Heart"] = on_the_ground_check(0x17, 0x1F)
    return checks
end

local read_ganons_castle_checks = function()
    local checks = {}
    checks["Ganons Castle Forest Trial Chest"] = chest_check(0x0D, 0x09)
    checks["Ganons Castle Water Trial Left Chest"] = chest_check(0x0D, 0x07)
    checks["Ganons Castle Water Trial Right Chest"] = chest_check(0x0D, 0x06)
    checks["Ganons Castle Shadow Trial Front Chest"] = chest_check(0x0D, 0x08)
    checks["Ganons Castle Shadow Trial Golden Gauntlets Chest"] = chest_check(0x0D, 0x05)
    checks["Ganons Castle Light Trial First Left Chest"] = chest_check(0x0D, 0x0C)
    checks["Ganons Castle Light Trial Second Left Chest"] = chest_check(0x0D, 0x0B)
    checks["Ganons Castle Light Trial Third Left Chest"] = chest_check(0x0D, 0x0D)
    checks["Ganons Castle Light Trial First Right Chest"] = chest_check(0x0D, 0x0E)
    checks["Ganons Castle Light Trial Second Right Chest"] = chest_check(0x0D, 0x0A)
    checks["Ganons Castle Light Trial Third Right Chest"] = chest_check(0x0D, 0x0F)
    checks["Ganons Castle Light Trial Invisible Enemies Chest"] = chest_check(0x0D, 0x10)
    checks["Ganons Castle Light Trial Lullaby Chest"] = chest_check(0x0D, 0x11)
    checks["Ganons Castle Spirit Trial Crystal Switch Chest"] = chest_check(0x0D, 0x12)
    checks["Ganons Castle Spirit Trial Invisible Chest"] = chest_check(0x0D, 0x14)

    checks["Ganons Castle Deku Scrub Left"] = scrub_check(0xD, 0x8)
    checks["Ganons Castle Deku Scrub Center-Left"] = scrub_check(0xD, 0x6)
    checks["Ganons Castle Deku Scrub Center-Right"] = scrub_check(0xD, 0x4)
    checks["Ganons Castle Deku Scrub Right"] = scrub_check(0xD, 0x9)

    checks["Ganons Tower Boss Key Chest"] = chest_check(0x0A, 0x0B)
    return checks
end

local read_outside_ganons_castle_checks = function()
    local checks = {}
    checks["OGC Great Fairy Reward"] = great_fairy_magic_check(0x3B, 0x8)
    checks["OGC GS"] = skulltula_check(0x0E, 0x0)
    return checks
end

local read_song_checks = function()
    local checks = {}
    checks["Song from Impa"] = event_check(0x5, 0x9) -- Zelda's Lullaby
    checks["Song from Malon"] = event_check(0x5, 0x8) -- Epona's Song
    checks["Song from Saria"] = event_check(0x5, 0x7) -- Saria's Song
    checks["Song from Composers Grave"] = event_check(0x5, 0xA) -- Sun's Song
    checks["Song from Ocarina of Time"] = event_check(0xA, 0x9) -- Song of Time
    checks["Song from Windmill"] = event_check(0x5, 0xB) -- Song of Storms
    checks["Sheik in Forest"] = event_check(0x5, 0x0) -- Minuet of Forest
    checks["Sheik in Crater"] = event_check(0x5, 0x1) -- Bolero of Fire
    checks["Sheik in Ice Cavern"] = event_check(0x5, 0x2) -- Serenade of Water
    checks["Sheik at Colossus"] = event_check(0xA, 0xC) -- Requiem of Spirit
    checks["Sheik in Kakariko"] = event_check(0x5, 0x4) -- Nocturne of Shadows
    checks["Sheik at Temple"] = event_check(0x5, 0x5) -- Prelude of Light
    return checks
end

-- Not actually used multiworld or the randomizer in general
local read_dungeon_reward_checks = function()
    local checks = {}
    checks["Queen Gohma"] = event_check(0x0, 0x7)
    checks["King Dodongo"] = event_check(0x2, 0x5)
    checks["Barinade"] = event_check(0x3, 0x7)
    checks["Phantom Ganon"] = event_check(0x4, 0x8)
    checks["Volvagia"] = event_check(0x4, 0x9)
    checks["Morpha"] = event_check(0x4, 0xA)
    --NOTE: During the test playthrough there were no event bits or scene bits were set for shadow medallion being
    -- collected, only the Quest Status items were updated. As such, the Bongo Bongo heart container is used as an
    -- approximation of the Shadow Medallion check
    checks["Bongo Bongo"] = on_the_ground_check(0x18, 0x1F) -- shadow medallion
    checks["Twinrova"] = event_check(0xC, 0x8)
    return checks
end

scanner.check_all_locations = function()
    local location_checks = {}
    for k,v in pairs(read_kokiri_forest_checks()) do location_checks[k] = v end
    for k,v in pairs(read_lost_woods_checks()) do location_checks[k] = v end
    for k,v in pairs(read_sacred_forest_meadow_checks()) do location_checks[k] = v end
    for k,v in pairs(read_deku_tree_checks()) do location_checks[k] = v end
    for k,v in pairs(read_forest_temple_checks()) do location_checks[k] = v end
    for k,v in pairs(read_hyrule_field_checks()) do location_checks[k] = v end
    for k,v in pairs(read_lon_lon_ranch_checks()) do location_checks[k] = v end
    for k,v in pairs(read_market_checks()) do location_checks[k] = v end
    for k,v in pairs(read_hyrule_castle_checks()) do location_checks[k] = v end
    for k,v in pairs(read_kakariko_village_checks()) do location_checks[k] = v end
    for k,v in pairs(read_graveyard_checks()) do location_checks[k] = v end
    for k,v in pairs(read_bottom_of_the_well_checks()) do location_checks[k] = v end
    for k,v in pairs(read_shadow_temple_checks()) do location_checks[k] = v end
    for k,v in pairs(read_death_mountain_trail_checks()) do location_checks[k] = v end
    for k,v in pairs(read_goron_city_checks()) do location_checks[k] = v end
    for k,v in pairs(read_death_mountain_crater_checks()) do location_checks[k] = v end
    for k,v in pairs(read_dodongos_cavern_checks()) do location_checks[k] = v end
    for k,v in pairs(read_fire_temple_checks()) do location_checks[k] = v end
    for k,v in pairs(read_zoras_river_checks()) do location_checks[k] = v end
    for k,v in pairs(read_zoras_domain_checks()) do location_checks[k] = v end
    for k,v in pairs(read_zoras_fountain_checks()) do location_checks[k] = v end
    for k,v in pairs(read_jabu_checks()) do location_checks[k] = v end
    for k,v in pairs(read_ice_cavern_checks()) do location_checks[k] = v end
    for k,v in pairs(read_lake_hylia_checks()) do location_checks[k] = v end
    for k,v in pairs(read_water_temple_checks()) do location_checks[k] = v end
    for k,v in pairs(read_gerudo_valley_checks()) do location_checks[k] = v end
    for k,v in pairs(read_gerudo_fortress_checks()) do location_checks[k] = v end
    for k,v in pairs(read_gerudo_training_ground_checks()) do location_checks[k] = v end
    for k,v in pairs(read_haunted_wasteland_checks()) do location_checks[k] = v end
    for k,v in pairs(read_desert_colossus_checks()) do location_checks[k] = v end
    for k,v in pairs(read_spirit_temple_checks()) do location_checks[k] = v end
    for k,v in pairs(read_ganons_castle_checks()) do location_checks[k] = v end
    for k,v in pairs(read_outside_ganons_castle_checks()) do location_checks[k] = v end
    for k,v in pairs(read_song_checks()) do location_checks[k] = v end
    return location_checks
end

return scanner
