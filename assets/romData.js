const items = {
  'Bombs (5)': 0x01,
  'Deku Nuts (5)': 0x02,
  'Bombchus (10)': 0x03,
  'Boomerang': 0x06,
  'Deku Stick (1)': 0x07,
  'Lens of Truth': 0x0A,
  'Megaton Hammer': 0x0D,
  'Cojiro': 0x0E,
  'Bottle': 0x0F,
  'Bottle with Milk': 0x14,
  'Rutos Letter': 0x15,
  'Magic Bean': 0x16,
  'Skull Mask': 0x17,
  'Spooky Mask': 0x18,
  'Keaton Mask': 0x1A,
  'Bunny Hood': 0x1B,
  'Mask of Truth': 0x1C,
  'Pocket Egg': 0x1D,
  'Pocket Cucco': 0x1E,
  'Odd Mushroom': 0x1F,
  'Odd Potion': 0x20,
  'Poachers Saw': 0x21,
  'Broken Sword': 0x22,
  'Prescription': 0x23,
  'Eyeball Frog': 0x24,
  'Eyedrops': 0x25,
  'Claim Check': 0x26,
  'Kokiri Sword': 0x27,
  'Giants Knife': 0x28,
  'Deku Shield': 0x29,
  'Hylian Shield': 0x2A,
  'Mirror Shield': 0x2B,
  'Goron Tunic': 0x2C,
  'Zora Tunic': 0x2D,
  'Iron Boots': 0x2E,
  'Hover Boots': 0x2F,
  'Stone of Agony': 0x39,
  'Gerudo Membership Card': 0x3A,
  'Heart Container': 0x3D,
  'Piece of Heart': 0x3E,
  'Boss Key': 0x3F,
  'Compass': 0x40,
  'Map': 0x41,
  'Small Key': 0x42,
  'Weird Egg': 0x47,
  'Recovery Heart': 0x48,
  'Arrows (5)': 0x49,
  'Arrows (10)': 0x4A,
  'Arrows (30)': 0x4B,
  'Rupee (1)': 0x4C,
  'Rupees (5)': 0x4D,
  'Rupees (20)': 0x4E,
  'Heart Container (Boss)': 0x4F,
  'Milk': 0x50,
  'Goron Mask': 0x51,
  'Zora Mask': 0x52,
  'Gerudo Mask': 0x53,
  'Rupees (50)': 0x55,
  'Rupees (200)': 0x56,
  'Biggoron Sword': 0x57,
  'Fire Arrows': 0x58,
  'Ice Arrows': 0x59,
  'Light Arrows': 0x5A,
  'Gold Skulltula Token': 0x5B,
  'Dins Fire': 0x5C,
  'Nayrus Love': 0x5E,
  'Farores Wind': 0x5D,
  'Deku Nuts (10)': 0x64,
  'Bombs (10)': 0x66,
  'Bombs (20)': 0x67,
  'Deku Seeds (30)': 0x69,
  'Bombchus (5)': 0x6A,
  'Bombchus (20)': 0x6B,
  'Rupee (Treasure Chest Game)': 0x72,
  'Piece of Heart (Treasure Chest Game)': 0x76,
  'Ice Trap': 0x7C,
  'Progressive Hookshot': 0x80,
  'Progressive Strength Upgrade': 0x81,
  'Bomb Bag': 0x82,
  'Bow': 0x83,
  'Slingshot': 0x84,
  'Progressive Wallet': 0x85,
  'Progressive Scale': 0x86,
  'Deku Nut Capacity': 0x87,
  'Deku Stick Capacity': 0x88,
  'Bombchus': 0x89,
  'Magic Meter': 0x8A,
  'Ocarina': 0x8B,
  'Bottle with Red Potion': 0x8C,
  'Bottle with Green Potion': 0x8D,
  'Bottle with Blue Potion': 0x8E,
  'Bottle with Fairy': 0x8F,
  'Bottle with Fish': 0x90,
  'Bottle with Blue Fire': 0x91,
  'Bottle with Bugs': 0x92,
  'Bottle with Big Poe': 0x93,
  'Bottle with Poe': 0x94,
  'Boss Key (Forest Temple)': 0x95,
  'Boss Key (Fire Temple)': 0x96,
  'Boss Key (Water Temple)': 0x97,
  'Boss Key (Spirit Temple)': 0x98,
  'Boss Key (Shadow Temple)': 0x99,
  'Boss Key (Ganons Castle)': 0x9A,
  'Compass (Deku Tree)': 0x9B,
  'Compass (Dodongos Cavern)': 0x9C,
  'Compass (Jabu Jabus Belly)': 0x9D,
  'Compass (Forest Temple)': 0x9E,
  'Compass (Fire Temple)': 0x9F,
  'Compass (Water Temple)': 0xA0,
  'Compass (Spirit Temple)': 0xA1,
  'Compass (Shadow Temple)': 0xA2,
  'Compass (Bottom of the Well)': 0xA3,
  'Compass (Ice Cavern)': 0xA4,
  'Map (Deku Tree)': 0xA5,
  'Map (Dodongos Cavern)': 0xA6,
  'Map (Jabu Jabus Belly)': 0xA7,
  'Map (Forest Temple)': 0xA8,
  'Map (Fire Temple)': 0xA9,
  'Map (Water Temple)': 0xAA,
  'Map (Spirit Temple)': 0xAB,
  'Map (Shadow Temple)': 0xAC,
  'Map (Bottom of the Well)': 0xAD,
  'Map (Ice Cavern)': 0xAE,
  'Small Key (Forest Temple)': 0xAF,
  'Small Key (Fire Temple)': 0xB0,
  'Small Key (Water Temple)': 0xB1,
  'Small Key (Spirit Temple)': 0xB2,
  'Small Key (Shadow Temple)': 0xB3,
  'Small Key (Bottom of the Well)': 0xB4,
  'Small Key (Gerudo Training Grounds)': 0xB5,
  'Small Key (Gerudo Fortress)': 0xB6,
  'Small Key (Ganons Castle)': 0xB7,
  'Double Defense': 0xB8,
  'Magic Bean Pack': 0xC9,
  'Triforce Piece': 0xCA,
  'Zeldas Letter': 0x0B,
  'Minuet of Forest': 0xBB,
  'Bolero of Fire': 0xBC,
  'Serenade of Water': 0xBD,
  'Requiem of Spirit': 0xBE,
  'Nocturne of Shadow': 0xBF,
  'Prelude of Light': 0xC0,
  'Zeldas Lullaby': 0xC1,
  'Eponas Song': 0xC2,
  'Sarias Song': 0xC3,
  'Suns Song': 0xC4,
  'Song of Time': 0xC5,
  'Song of Storms': 0xC6,
};

const locations = {
  'Links Pocket': {
    type: 'Boss',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Light Medallion'
  },
  'Queen Gohma': {
    type: 'Boss',
    scene: null,
    default: '0x6c',
    addresses: [ '0xca315f', '0x2079571' ],
    vanillaItem: 'Kokiri Emerald'
  },
  'King Dodongo': {
    type: 'Boss',
    scene: null,
    default: '0x6d',
    addresses: [ '0xca30df', '0x2223309' ],
    vanillaItem: 'Goron Ruby'
  },
  Barinade: {
    type: 'Boss',
    scene: null,
    default: '0x6e',
    addresses: [ '0xca36eb', '0x2113c19' ],
    vanillaItem: 'Zora Sapphire'
  },
  'Phantom Ganon': {
    type: 'Boss',
    scene: null,
    default: '0x66',
    addresses: [ '0xca3d07', '0xd4ed79' ],
    vanillaItem: 'Forest Medallion'
  },
  Volvagia: {
    type: 'Boss',
    scene: null,
    default: '0x67',
    addresses: [ '0xca3d93', '0xd10135' ],
    vanillaItem: 'Fire Medallion'
  },
  Morpha: {
    type: 'Boss',
    scene: null,
    default: '0x68',
    addresses: [ '0xca3e1f', '0xd5a3a9' ],
    vanillaItem: 'Water Medallion'
  },
  'Bongo Bongo': {
    type: 'Boss',
    scene: null,
    default: '0x6a',
    addresses: [ '0xca3f43', '0xd13e19' ],
    vanillaItem: 'Shadow Medallion'
  },
  Twinrova: {
    type: 'Boss',
    scene: null,
    default: '0x69',
    addresses: [ '0xca3eb3', '0xd39ff1' ],
    vanillaItem: 'Spirit Medallion'
  },
  Ganon: {
    type: 'Event',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Triforce'
  },
  'Song from Impa': {
    type: 'Song',
    scene: '0xff',
    default: '0x26',
    addresses: [ '0x2e8e925', '0x2e8e925' ],
    vanillaItem: 'Zeldas Lullaby'
  },
  'Song from Malon': {
    type: 'Song',
    scene: '0xff',
    default: '0x27',
    addresses: [ '0xd7eb53', '0xd7ebcf' ],
    vanillaItem: 'Eponas Song'
  },
  'Song from Saria': {
    type: 'Song',
    scene: '0xff',
    default: '0x28',
    addresses: [ '0x20b1db1', '0x20b1db1' ],
    vanillaItem: 'Sarias Song'
  },
  'Song from Composers Grave': {
    type: 'Song',
    scene: '0xff',
    default: '0x29',
    addresses: [ '0x332a871', '0x332a871' ],
    vanillaItem: 'Suns Song'
  },
  'Song from Ocarina of Time': {
    type: 'Song',
    scene: '0xff',
    default: '0x2a',
    addresses: [ '0x252fc89', '0x252fc89' ],
    vanillaItem: 'Song of Time'
  },
  'Song from Windmill': {
    type: 'Song',
    scene: '0xff',
    default: '0x2b',
    addresses: [ '0xe42c07', '0xe42b8b' ],
    vanillaItem: 'Song of Storms'
  },
  'Sheik in Forest': {
    type: 'Song',
    scene: '0xff',
    default: '0x20',
    addresses: [ '0x20b0809', '0x20b0809' ],
    vanillaItem: 'Minuet of Forest'
  },
  'Sheik in Crater': {
    type: 'Song',
    scene: '0xff',
    default: '0x21',
    addresses: [ '0x224d7f1', '0x224d7f1' ],
    vanillaItem: 'Bolero of Fire'
  },
  'Sheik in Ice Cavern': {
    type: 'Song',
    scene: '0xff',
    default: '0x22',
    addresses: [ '0x2bec889', '0x2bec889' ],
    vanillaItem: 'Serenade of Water'
  },
  'Sheik at Colossus': {
    type: 'Song',
    scene: '0xff',
    default: '0x23',
    addresses: [ '0x218c57d', '0x218c57d' ],
    vanillaItem: 'Requiem of Spirit'
  },
  'Sheik in Kakariko': {
    type: 'Song',
    scene: '0xff',
    default: '0x24',
    addresses: [ '0x2000fe1', '0x2000fe1' ],
    vanillaItem: 'Nocturne of Shadow'
  },
  'Sheik at Temple': {
    type: 'Song',
    scene: '0xff',
    default: '0x25',
    addresses: [ '0x2531329', '0x2531329' ],
    vanillaItem: 'Prelude of Light'
  },
  'KF Midos Top Left Chest': {
    type: 'Chest',
    scene: '0x28',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'KF Midos Top Right Chest': {
    type: 'Chest',
    scene: '0x28',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'KF Midos Bottom Left Chest': {
    type: 'Chest',
    scene: '0x28',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Rupee (1)'
  },
  'KF Midos Bottom Right Chest': {
    type: 'Chest',
    scene: '0x28',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'KF Kokiri Sword Chest': {
    type: 'Chest',
    scene: '0x55',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Kokiri Sword'
  },
  'KF Storms Grotto Chest': {
    type: 'Chest',
    scene: '0x3e',
    default: '0x0c',
    addresses: null,
    vanillaItem: 'Rupees (20)'
  },
  'KF Links House Cow': {
    type: 'NPC',
    scene: '0x34',
    default: '0x15',
    addresses: null,
    vanillaItem: 'Milk'
  },
  'KF GS Know It All House': {
    type: 'GS Token',
    scene: '0x0c',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'KF GS Bean Patch': {
    type: 'GS Token',
    scene: '0x0c',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'KF GS House of Twins': {
    type: 'GS Token',
    scene: '0x0c',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'KF Shop Item 1': {
    type: 'Shop',
    scene: '0x2d',
    default: '0x30',
    addresses: [ '0xc71ed0', null ],
    vanillaItem: 'Buy Deku Shield'
  },
  'KF Shop Item 2': {
    type: 'Shop',
    scene: '0x2d',
    default: '0x31',
    addresses: [ '0xc71ed8', null ],
    vanillaItem: 'Buy Deku Nut (5)'
  },
  'KF Shop Item 3': {
    type: 'Shop',
    scene: '0x2d',
    default: '0x32',
    addresses: [ '0xc71ee0', null ],
    vanillaItem: 'Buy Deku Nut (10)'
  },
  'KF Shop Item 4': {
    type: 'Shop',
    scene: '0x2d',
    default: '0x33',
    addresses: [ '0xc71ee8', null ],
    vanillaItem: 'Buy Deku Stick (1)'
  },
  'KF Shop Item 5': {
    type: 'Shop',
    scene: '0x2d',
    default: '0x34',
    addresses: [ '0xc71ef0', null ],
    vanillaItem: 'Buy Deku Seeds (30)'
  },
  'KF Shop Item 6': {
    type: 'Shop',
    scene: '0x2d',
    default: '0x35',
    addresses: [ '0xc71ef8', null ],
    vanillaItem: 'Buy Arrows (10)'
  },
  'KF Shop Item 7': {
    type: 'Shop',
    scene: '0x2d',
    default: '0x36',
    addresses: [ '0xc71f00', null ],
    vanillaItem: 'Buy Arrows (30)'
  },
  'KF Shop Item 8': {
    type: 'Shop',
    scene: '0x2d',
    default: '0x37',
    addresses: [ '0xc71f08', null ],
    vanillaItem: 'Buy Heart'
  },
  'LW Gift from Saria': {
    type: 'Cutscene',
    scene: '0xff',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Ocarina'
  },
  'LW Ocarina Memory Game': {
    type: 'NPC',
    scene: '0x5b',
    default: '0x76',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'LW Target in Woods': {
    type: 'NPC',
    scene: '0x5b',
    default: '0x60',
    addresses: null,
    vanillaItem: 'Slingshot'
  },
  'LW Near Shortcuts Grotto Chest': {
    type: 'Chest',
    scene: '0x3e',
    default: '0x14',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Deku Theater Skull Mask': {
    type: 'NPC',
    scene: '0x3e',
    default: '0x77',
    addresses: null,
    vanillaItem: 'Deku Stick Capacity'
  },
  'Deku Theater Mask of Truth': {
    type: 'NPC',
    scene: '0x3e',
    default: '0x7a',
    addresses: null,
    vanillaItem: 'Deku Nut Capacity'
  },
  'LW Skull Kid': {
    type: 'NPC',
    scene: '0x5b',
    default: '0x3e',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'LW Deku Scrub Near Bridge': {
    type: 'NPC',
    scene: '0x5b',
    default: '0x77',
    addresses: null,
    vanillaItem: 'Deku Stick Capacity'
  },
  'LW Deku Scrub Near Deku Theater Left': {
    type: 'NPC',
    scene: '0x5b',
    default: '0x31',
    addresses: null,
    vanillaItem: 'Buy Deku Stick (1)'
  },
  'LW Deku Scrub Near Deku Theater Right': {
    type: 'NPC',
    scene: '0x5b',
    default: '0x30',
    addresses: null,
    vanillaItem: 'Buy Deku Nut (5)'
  },
  'LW Deku Scrub Grotto Front': {
    type: 'GrottoNPC',
    scene: '0xf5',
    default: '0x79',
    addresses: null,
    vanillaItem: 'Deku Nut Capacity'
  },
  'LW Deku Scrub Grotto Rear': {
    type: 'GrottoNPC',
    scene: '0xf5',
    default: '0x33',
    addresses: null,
    vanillaItem: 'Buy Deku Seeds (30)'
  },
  'LW GS Bean Patch Near Bridge': {
    type: 'GS Token',
    scene: '0x0d',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'LW GS Bean Patch Near Theater': {
    type: 'GS Token',
    scene: '0x0d',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'LW GS Above Theater': {
    type: 'GS Token',
    scene: '0x0d',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'SFM Wolfos Grotto Chest': {
    type: 'Chest',
    scene: '0x3e',
    default: '0x11',
    addresses: null,
    vanillaItem: 'Rupees (50)'
  },
  'SFM Deku Scrub Grotto Front': {
    type: 'GrottoNPC',
    scene: '0xee',
    default: '0x3a',
    addresses: null,
    vanillaItem: 'Buy Green Potion'
  },
  'SFM Deku Scrub Grotto Rear': {
    type: 'GrottoNPC',
    scene: '0xee',
    default: '0x39',
    addresses: null,
    vanillaItem: 'Buy Red Potion [30]'
  },
  'SFM GS': {
    type: 'GS Token',
    scene: '0x0d',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'HF Ocarina of Time Item': {
    type: 'NPC',
    scene: '0x51',
    default: '0x0c',
    addresses: null,
    vanillaItem: 'Ocarina'
  },
  'HF Near Market Grotto Chest': {
    type: 'Chest',
    scene: '0x3e',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'HF Tektite Grotto Freestanding PoH': {
    type: 'Collectable',
    scene: '0x3e',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'HF Southeast Grotto Chest': {
    type: 'Chest',
    scene: '0x3e',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Rupees (20)'
  },
  'HF Open Grotto Chest': {
    type: 'Chest',
    scene: '0x3e',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'HF Deku Scrub Grotto': {
    type: 'GrottoNPC',
    scene: '0xe6',
    default: '0x3e',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'HF Cow Grotto Cow': {
    type: 'NPC',
    scene: '0x3e',
    default: '0x16',
    addresses: null,
    vanillaItem: 'Milk'
  },
  'HF GS Cow Grotto': {
    type: 'GS Token',
    scene: '0x0a',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'HF GS Near Kak Grotto': {
    type: 'GS Token',
    scene: '0x0a',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Market Shooting Gallery Reward': {
    type: 'NPC',
    scene: '0x42',
    default: '0x60',
    addresses: null,
    vanillaItem: 'Slingshot'
  },
  'Market Bombchu Bowling First Prize': {
    type: 'NPC',
    scene: '0x4b',
    default: '0x34',
    addresses: null,
    vanillaItem: 'Bomb Bag'
  },
  'Market Bombchu Bowling Second Prize': {
    type: 'NPC',
    scene: '0x4b',
    default: '0x3e',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'Market Bombchu Bowling Bombchus': {
    type: 'NPC',
    scene: '0x4b',
    default: null,
    addresses: null,
    vanillaItem: 'Bombchu Drop'
  },
  'Market Lost Dog': {
    type: 'NPC',
    scene: '0x35',
    default: '0x3e',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'Market Treasure Chest Game Reward': {
    type: 'Chest',
    scene: '0x10',
    default: '0x0a',
    addresses: null,
    vanillaItem: 'Piece of Heart (Treasure Chest Game)'
  },
  'Market 10 Big Poes': {
    type: 'NPC',
    scene: '0x4d',
    default: '0x0f',
    addresses: null,
    vanillaItem: 'Bottle'
  },
  'Market GS Guard House': {
    type: 'GS Token',
    scene: '0x0e',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Market Bazaar Item 1': {
    type: 'Shop',
    scene: '0x2c',
    default: '0x30',
    addresses: [ '0xc71fd0', null ],
    vanillaItem: 'Buy Hylian Shield'
  },
  'Market Bazaar Item 2': {
    type: 'Shop',
    scene: '0x2c',
    default: '0x31',
    addresses: [ '0xc71fd8', null ],
    vanillaItem: 'Buy Bombs (5) [35]'
  },
  'Market Bazaar Item 3': {
    type: 'Shop',
    scene: '0x2c',
    default: '0x32',
    addresses: [ '0xc71fe0', null ],
    vanillaItem: 'Buy Deku Nut (5)'
  },
  'Market Bazaar Item 4': {
    type: 'Shop',
    scene: '0x2c',
    default: '0x33',
    addresses: [ '0xc71fe8', null ],
    vanillaItem: 'Buy Heart'
  },
  'Market Bazaar Item 5': {
    type: 'Shop',
    scene: '0x2c',
    default: '0x34',
    addresses: [ '0xc71ff0', null ],
    vanillaItem: 'Buy Arrows (10)'
  },
  'Market Bazaar Item 6': {
    type: 'Shop',
    scene: '0x2c',
    default: '0x35',
    addresses: [ '0xc71ff8', null ],
    vanillaItem: 'Buy Arrows (50)'
  },
  'Market Bazaar Item 7': {
    type: 'Shop',
    scene: '0x2c',
    default: '0x36',
    addresses: [ '0xc72000', null ],
    vanillaItem: 'Buy Deku Stick (1)'
  },
  'Market Bazaar Item 8': {
    type: 'Shop',
    scene: '0x2c',
    default: '0x37',
    addresses: [ '0xc72008', null ],
    vanillaItem: 'Buy Arrows (30)'
  },
  'Market Potion Shop Item 1': {
    type: 'Shop',
    scene: '0x31',
    default: '0x30',
    addresses: [ '0xc71f90', null ],
    vanillaItem: 'Buy Green Potion'
  },
  'Market Potion Shop Item 2': {
    type: 'Shop',
    scene: '0x31',
    default: '0x31',
    addresses: [ '0xc71f98', null ],
    vanillaItem: 'Buy Blue Fire'
  },
  'Market Potion Shop Item 3': {
    type: 'Shop',
    scene: '0x31',
    default: '0x32',
    addresses: [ '0xc71fa0', null ],
    vanillaItem: 'Buy Red Potion [30]'
  },
  'Market Potion Shop Item 4': {
    type: 'Shop',
    scene: '0x31',
    default: '0x33',
    addresses: [ '0xc71fa8', null ],
    vanillaItem: "Buy Fairy's Spirit"
  },
  'Market Potion Shop Item 5': {
    type: 'Shop',
    scene: '0x31',
    default: '0x34',
    addresses: [ '0xc71fb0', null ],
    vanillaItem: 'Buy Deku Nut (5)'
  },
  'Market Potion Shop Item 6': {
    type: 'Shop',
    scene: '0x31',
    default: '0x35',
    addresses: [ '0xc71fb8', null ],
    vanillaItem: 'Buy Bottle Bug'
  },
  'Market Potion Shop Item 7': {
    type: 'Shop',
    scene: '0x31',
    default: '0x36',
    addresses: [ '0xc71fc0', null ],
    vanillaItem: 'Buy Poe'
  },
  'Market Potion Shop Item 8': {
    type: 'Shop',
    scene: '0x31',
    default: '0x37',
    addresses: [ '0xc71fc8', null ],
    vanillaItem: 'Buy Fish'
  },
  'Market Bombchu Shop Item 1': {
    type: 'Shop',
    scene: '0x32',
    default: '0x30',
    addresses: [ '0xc71f50', null ],
    vanillaItem: 'Buy Bombchu (5)'
  },
  'Market Bombchu Shop Item 2': {
    type: 'Shop',
    scene: '0x32',
    default: '0x31',
    addresses: [ '0xc71f58', null ],
    vanillaItem: 'Buy Bombchu (10)'
  },
  'Market Bombchu Shop Item 3': {
    type: 'Shop',
    scene: '0x32',
    default: '0x32',
    addresses: [ '0xc71f60', null ],
    vanillaItem: 'Buy Bombchu (10)'
  },
  'Market Bombchu Shop Item 4': {
    type: 'Shop',
    scene: '0x32',
    default: '0x33',
    addresses: [ '0xc71f68', null ],
    vanillaItem: 'Buy Bombchu (10)'
  },
  'Market Bombchu Shop Item 5': {
    type: 'Shop',
    scene: '0x32',
    default: '0x34',
    addresses: [ '0xc71f70', null ],
    vanillaItem: 'Buy Bombchu (20)'
  },
  'Market Bombchu Shop Item 6': {
    type: 'Shop',
    scene: '0x32',
    default: '0x35',
    addresses: [ '0xc71f78', null ],
    vanillaItem: 'Buy Bombchu (20)'
  },
  'Market Bombchu Shop Item 7': {
    type: 'Shop',
    scene: '0x32',
    default: '0x36',
    addresses: [ '0xc71f80', null ],
    vanillaItem: 'Buy Bombchu (20)'
  },
  'Market Bombchu Shop Item 8': {
    type: 'Shop',
    scene: '0x32',
    default: '0x37',
    addresses: [ '0xc71f88', null ],
    vanillaItem: 'Buy Bombchu (20)'
  },
  'ToT Light Arrows Cutscene': {
    type: 'Cutscene',
    scene: '0xff',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Light Arrows'
  },
  'HC Malon Egg': {
    type: 'NPC',
    scene: '0x5f',
    default: '0x47',
    addresses: null,
    vanillaItem: 'Weird Egg'
  },
  'HC Zeldas Letter': {
    type: 'NPC',
    scene: '0x4a',
    default: '0x0b',
    addresses: null,
    vanillaItem: 'Zeldas Letter'
  },
  'HC Great Fairy Reward': {
    type: 'Cutscene',
    scene: '0xff',
    default: '0x11',
    addresses: null,
    vanillaItem: 'Dins Fire'
  },
  'HC GS Tree': {
    type: 'GS Token',
    scene: '0x0e',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'HC GS Storms Grotto': {
    type: 'GS Token',
    scene: '0x0e',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'LLR Talons Chickens': {
    type: 'NPC',
    scene: '0x4c',
    default: '0x14',
    addresses: null,
    vanillaItem: 'Bottle with Milk'
  },
  'LLR Freestanding PoH': {
    type: 'Collectable',
    scene: '0x4c',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'LLR Deku Scrub Grotto Left': {
    type: 'GrottoNPC',
    scene: '0xfc',
    default: '0x30',
    addresses: null,
    vanillaItem: 'Buy Deku Nut (5)'
  },
  'LLR Deku Scrub Grotto Center': {
    type: 'GrottoNPC',
    scene: '0xfc',
    default: '0x33',
    addresses: null,
    vanillaItem: 'Buy Deku Seeds (30)'
  },
  'LLR Deku Scrub Grotto Right': {
    type: 'GrottoNPC',
    scene: '0xfc',
    default: '0x37',
    addresses: null,
    vanillaItem: 'Buy Bombs (5) [35]'
  },
  'LLR Stables Left Cow': {
    type: 'NPC',
    scene: '0x36',
    default: '0x15',
    addresses: null,
    vanillaItem: 'Milk'
  },
  'LLR Stables Right Cow': {
    type: 'NPC',
    scene: '0x36',
    default: '0x16',
    addresses: null,
    vanillaItem: 'Milk'
  },
  'LLR Tower Left Cow': {
    type: 'NPC',
    scene: '0x4c',
    default: '0x16',
    addresses: null,
    vanillaItem: 'Milk'
  },
  'LLR Tower Right Cow': {
    type: 'NPC',
    scene: '0x4c',
    default: '0x15',
    addresses: null,
    vanillaItem: 'Milk'
  },
  'LLR GS House Window': {
    type: 'GS Token',
    scene: '0x0b',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'LLR GS Tree': {
    type: 'GS Token',
    scene: '0x0b',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'LLR GS Rain Shed': {
    type: 'GS Token',
    scene: '0x0b',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'LLR GS Back Wall': {
    type: 'GS Token',
    scene: '0x0b',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Kak Anju as Child': {
    type: 'NPC',
    scene: '0x52',
    default: '0x0f',
    addresses: null,
    vanillaItem: 'Bottle'
  },
  'Kak Anju as Adult': {
    type: 'NPC',
    scene: '0x52',
    default: '0x1d',
    addresses: null,
    vanillaItem: 'Pocket Egg'
  },
  'Kak Impas House Freestanding PoH': {
    type: 'Collectable',
    scene: '0x37',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'Kak Windmill Freestanding PoH': {
    type: 'Collectable',
    scene: '0x48',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'Kak Man on Roof': {
    type: 'NPC',
    scene: '0x52',
    default: '0x3e',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'Kak Open Grotto Chest': {
    type: 'Chest',
    scene: '0x3e',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Rupees (20)'
  },
  'Kak Redead Grotto Chest': {
    type: 'Chest',
    scene: '0x3e',
    default: '0x0a',
    addresses: null,
    vanillaItem: 'Rupees (200)'
  },
  'Kak Shooting Gallery Reward': {
    type: 'NPC',
    scene: '0x42',
    default: '0x30',
    addresses: null,
    vanillaItem: 'Bow'
  },
  'Kak 10 Gold Skulltula Reward': {
    type: 'NPC',
    scene: '0x50',
    default: '0x45',
    addresses: null,
    vanillaItem: 'Progressive Wallet'
  },
  'Kak 20 Gold Skulltula Reward': {
    type: 'NPC',
    scene: '0x50',
    default: '0x39',
    addresses: null,
    vanillaItem: 'Stone of Agony'
  },
  'Kak 30 Gold Skulltula Reward': {
    type: 'NPC',
    scene: '0x50',
    default: '0x46',
    addresses: null,
    vanillaItem: 'Progressive Wallet'
  },
  'Kak 40 Gold Skulltula Reward': {
    type: 'NPC',
    scene: '0x50',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Bombchus (10)'
  },
  'Kak 50 Gold Skulltula Reward': {
    type: 'NPC',
    scene: '0x50',
    default: '0x3e',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'Kak Impas House Cow': {
    type: 'NPC',
    scene: '0x37',
    default: '0x15',
    addresses: null,
    vanillaItem: 'Milk'
  },
  'Kak GS Tree': {
    type: 'GS Token',
    scene: '0x10',
    default: '0x20',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Kak GS Guards House': {
    type: 'GS Token',
    scene: '0x10',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Kak GS Watchtower': {
    type: 'GS Token',
    scene: '0x10',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Kak GS Skulltula House': {
    type: 'GS Token',
    scene: '0x10',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Kak GS House Under Construction': {
    type: 'GS Token',
    scene: '0x10',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Kak GS Above Impas House': {
    type: 'GS Token',
    scene: '0x10',
    default: '0x40',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Kak Bazaar Item 1': {
    type: 'Shop',
    scene: '0x2c',
    default: '0x38',
    addresses: [ '0xc72010', null ],
    vanillaItem: 'Buy Hylian Shield'
  },
  'Kak Bazaar Item 2': {
    type: 'Shop',
    scene: '0x2c',
    default: '0x39',
    addresses: [ '0xc72018', null ],
    vanillaItem: 'Buy Bombs (5) [35]'
  },
  'Kak Bazaar Item 3': {
    type: 'Shop',
    scene: '0x2c',
    default: '0x3a',
    addresses: [ '0xc72020', null ],
    vanillaItem: 'Buy Deku Nut (5)'
  },
  'Kak Bazaar Item 4': {
    type: 'Shop',
    scene: '0x2c',
    default: '0x3b',
    addresses: [ '0xc72028', null ],
    vanillaItem: 'Buy Heart'
  },
  'Kak Bazaar Item 5': {
    type: 'Shop',
    scene: '0x2c',
    default: '0x3d',
    addresses: [ '0xc72030', null ],
    vanillaItem: 'Buy Arrows (10)'
  },
  'Kak Bazaar Item 6': {
    type: 'Shop',
    scene: '0x2c',
    default: '0x3e',
    addresses: [ '0xc72038', null ],
    vanillaItem: 'Buy Arrows (50)'
  },
  'Kak Bazaar Item 7': {
    type: 'Shop',
    scene: '0x2c',
    default: '0x3f',
    addresses: [ '0xc72040', null ],
    vanillaItem: 'Buy Deku Stick (1)'
  },
  'Kak Bazaar Item 8': {
    type: 'Shop',
    scene: '0x2c',
    default: '0x40',
    addresses: [ '0xc72048', null ],
    vanillaItem: 'Buy Arrows (30)'
  },
  'Kak Potion Shop Item 1': {
    type: 'Shop',
    scene: '0x30',
    default: '0x30',
    addresses: [ '0xc71f10', null ],
    vanillaItem: 'Buy Deku Nut (5)'
  },
  'Kak Potion Shop Item 2': {
    type: 'Shop',
    scene: '0x30',
    default: '0x31',
    addresses: [ '0xc71f18', null ],
    vanillaItem: 'Buy Fish'
  },
  'Kak Potion Shop Item 3': {
    type: 'Shop',
    scene: '0x30',
    default: '0x32',
    addresses: [ '0xc71f20', null ],
    vanillaItem: 'Buy Red Potion [30]'
  },
  'Kak Potion Shop Item 4': {
    type: 'Shop',
    scene: '0x30',
    default: '0x33',
    addresses: [ '0xc71f28', null ],
    vanillaItem: 'Buy Green Potion'
  },
  'Kak Potion Shop Item 5': {
    type: 'Shop',
    scene: '0x30',
    default: '0x34',
    addresses: [ '0xc71f30', null ],
    vanillaItem: 'Buy Blue Fire'
  },
  'Kak Potion Shop Item 6': {
    type: 'Shop',
    scene: '0x30',
    default: '0x35',
    addresses: [ '0xc71f38', null ],
    vanillaItem: 'Buy Bottle Bug'
  },
  'Kak Potion Shop Item 7': {
    type: 'Shop',
    scene: '0x30',
    default: '0x36',
    addresses: [ '0xc71f40', null ],
    vanillaItem: 'Buy Poe'
  },
  'Kak Potion Shop Item 8': {
    type: 'Shop',
    scene: '0x30',
    default: '0x37',
    addresses: [ '0xc71f48', null ],
    vanillaItem: "Buy Fairy's Spirit"
  },
  'Graveyard Shield Grave Chest': {
    type: 'Chest',
    scene: '0x40',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Hylian Shield'
  },
  'Graveyard Heart Piece Grave Chest': {
    type: 'Chest',
    scene: '0x3f',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'Graveyard Composers Grave Chest': {
    type: 'Chest',
    scene: '0x41',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Bombs (5)'
  },
  'Graveyard Freestanding PoH': {
    type: 'Collectable',
    scene: '0x53',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'Graveyard Dampe Gravedigging Tour': {
    type: 'Collectable',
    scene: '0x53',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'Graveyard Hookshot Chest': {
    type: 'Chest',
    scene: '0x48',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Progressive Hookshot'
  },
  'Graveyard Dampe Race Freestanding PoH': {
    type: 'Collectable',
    scene: '0x48',
    default: '0x07',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'Graveyard GS Bean Patch': {
    type: 'GS Token',
    scene: '0x10',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Graveyard GS Wall': {
    type: 'GS Token',
    scene: '0x10',
    default: '0x80',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'DMT Freestanding PoH': {
    type: 'Collectable',
    scene: '0x60',
    default: '0x1e',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'DMT Chest': {
    type: 'Chest',
    scene: '0x60',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Rupees (50)'
  },
  'DMT Storms Grotto Chest': {
    type: 'Chest',
    scene: '0x3e',
    default: '0x17',
    addresses: null,
    vanillaItem: 'Rupees (200)'
  },
  'DMT Great Fairy Reward': {
    type: 'Cutscene',
    scene: '0xff',
    default: '0x13',
    addresses: null,
    vanillaItem: 'Magic Meter'
  },
  'DMT Biggoron': {
    type: 'NPC',
    scene: '0x60',
    default: '0x57',
    addresses: null,
    vanillaItem: 'Biggoron Sword'
  },
  'DMT Cow Grotto Cow': {
    type: 'NPC',
    scene: '0x3e',
    default: '0x15',
    addresses: null,
    vanillaItem: 'Milk'
  },
  'DMT GS Near Kak': {
    type: 'GS Token',
    scene: '0x0f',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'DMT GS Bean Patch': {
    type: 'GS Token',
    scene: '0x0f',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'DMT GS Above Dodongos Cavern': {
    type: 'GS Token',
    scene: '0x0f',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'DMT GS Falling Rocks Path': {
    type: 'GS Token',
    scene: '0x0f',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'GC Darunias Joy': {
    type: 'NPC',
    scene: '0x62',
    default: '0x54',
    addresses: null,
    vanillaItem: 'Progressive Strength Upgrade'
  },
  'GC Pot Freestanding PoH': {
    type: 'Collectable',
    scene: '0x62',
    default: '0x1f',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'GC Rolling Goron as Child': {
    type: 'NPC',
    scene: '0x62',
    default: '0x34',
    addresses: null,
    vanillaItem: 'Bomb Bag'
  },
  'GC Rolling Goron as Adult': {
    type: 'NPC',
    scene: '0x62',
    default: '0x2c',
    addresses: null,
    vanillaItem: 'Goron Tunic'
  },
  'GC Medigoron': {
    type: 'NPC',
    scene: '0x62',
    default: '0x28',
    addresses: null,
    vanillaItem: 'Giants Knife'
  },
  'GC Maze Left Chest': {
    type: 'Chest',
    scene: '0x62',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Rupees (200)'
  },
  'GC Maze Right Chest': {
    type: 'Chest',
    scene: '0x62',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Rupees (50)'
  },
  'GC Maze Center Chest': {
    type: 'Chest',
    scene: '0x62',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Rupees (50)'
  },
  'GC Deku Scrub Grotto Left': {
    type: 'GrottoNPC',
    scene: '0xfb',
    default: '0x30',
    addresses: null,
    vanillaItem: 'Buy Deku Nut (5)'
  },
  'GC Deku Scrub Grotto Center': {
    type: 'GrottoNPC',
    scene: '0xfb',
    default: '0x33',
    addresses: null,
    vanillaItem: 'Buy Arrows (30)'
  },
  'GC Deku Scrub Grotto Right': {
    type: 'GrottoNPC',
    scene: '0xfb',
    default: '0x37',
    addresses: null,
    vanillaItem: 'Buy Bombs (5) [35]'
  },
  'GC GS Center Platform': {
    type: 'GS Token',
    scene: '0x0f',
    default: '0x20',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'GC GS Boulder Maze': {
    type: 'GS Token',
    scene: '0x0f',
    default: '0x40',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'GC Shop Item 1': {
    type: 'Shop',
    scene: '0x2e',
    default: '0x30',
    addresses: [ '0xc720d0', null ],
    vanillaItem: 'Buy Bombs (5) [25]'
  },
  'GC Shop Item 2': {
    type: 'Shop',
    scene: '0x2e',
    default: '0x31',
    addresses: [ '0xc720d8', null ],
    vanillaItem: 'Buy Bombs (10)'
  },
  'GC Shop Item 3': {
    type: 'Shop',
    scene: '0x2e',
    default: '0x32',
    addresses: [ '0xc720e0', null ],
    vanillaItem: 'Buy Bombs (20)'
  },
  'GC Shop Item 4': {
    type: 'Shop',
    scene: '0x2e',
    default: '0x33',
    addresses: [ '0xc720e8', null ],
    vanillaItem: 'Buy Bombs (30)'
  },
  'GC Shop Item 5': {
    type: 'Shop',
    scene: '0x2e',
    default: '0x34',
    addresses: [ '0xc720f0', null ],
    vanillaItem: 'Buy Goron Tunic'
  },
  'GC Shop Item 6': {
    type: 'Shop',
    scene: '0x2e',
    default: '0x35',
    addresses: [ '0xc720f8', null ],
    vanillaItem: 'Buy Heart'
  },
  'GC Shop Item 7': {
    type: 'Shop',
    scene: '0x2e',
    default: '0x36',
    addresses: [ '0xc72100', null ],
    vanillaItem: 'Buy Red Potion [40]'
  },
  'GC Shop Item 8': {
    type: 'Shop',
    scene: '0x2e',
    default: '0x37',
    addresses: [ '0xc72108', null ],
    vanillaItem: 'Buy Heart'
  },
  'DMC Volcano Freestanding PoH': {
    type: 'Collectable',
    scene: '0x61',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'DMC Wall Freestanding PoH': {
    type: 'Collectable',
    scene: '0x61',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'DMC Upper Grotto Chest': {
    type: 'Chest',
    scene: '0x3e',
    default: '0x1a',
    addresses: null,
    vanillaItem: 'Bombs (20)'
  },
  'DMC Great Fairy Reward': {
    type: 'Cutscene',
    scene: '0xff',
    default: '0x14',
    addresses: null,
    vanillaItem: 'Magic Meter'
  },
  'DMC Deku Scrub': {
    type: 'NPC',
    scene: '0x61',
    default: '0x37',
    addresses: null,
    vanillaItem: 'Buy Bombs (5) [35]'
  },
  'DMC Deku Scrub Grotto Left': {
    type: 'GrottoNPC',
    scene: '0xf9',
    default: '0x30',
    addresses: null,
    vanillaItem: 'Buy Deku Nut (5)'
  },
  'DMC Deku Scrub Grotto Center': {
    type: 'GrottoNPC',
    scene: '0xf9',
    default: '0x33',
    addresses: null,
    vanillaItem: 'Buy Arrows (30)'
  },
  'DMC Deku Scrub Grotto Right': {
    type: 'GrottoNPC',
    scene: '0xf9',
    default: '0x37',
    addresses: null,
    vanillaItem: 'Buy Bombs (5) [35]'
  },
  'DMC GS Crate': {
    type: 'GS Token',
    scene: '0x0f',
    default: '0x80',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'DMC GS Bean Patch': {
    type: 'GS Token',
    scene: '0x0f',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'ZR Magic Bean Salesman': {
    type: 'NPC',
    scene: '0x54',
    default: '0x16',
    addresses: null,
    vanillaItem: 'Magic Bean'
  },
  'ZR Open Grotto Chest': {
    type: 'Chest',
    scene: '0x3e',
    default: '0x09',
    addresses: null,
    vanillaItem: 'Rupees (20)'
  },
  'ZR Frogs in the Rain': {
    type: 'NPC',
    scene: '0x54',
    default: '0x3e',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'ZR Frogs Ocarina Game': {
    type: 'NPC',
    scene: '0x54',
    default: '0x76',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'ZR Near Open Grotto Freestanding PoH': {
    type: 'Collectable',
    scene: '0x54',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'ZR Near Domain Freestanding PoH': {
    type: 'Collectable',
    scene: '0x54',
    default: '0x0b',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'ZR Deku Scrub Grotto Front': {
    type: 'GrottoNPC',
    scene: '0xeb',
    default: '0x3a',
    addresses: null,
    vanillaItem: 'Buy Green Potion'
  },
  'ZR Deku Scrub Grotto Rear': {
    type: 'GrottoNPC',
    scene: '0xeb',
    default: '0x39',
    addresses: null,
    vanillaItem: 'Buy Red Potion [30]'
  },
  'ZR GS Tree': {
    type: 'GS Token',
    scene: '0x11',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'ZR GS Ladder': {
    type: 'GS Token',
    scene: '0x11',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'ZR GS Near Raised Grottos': {
    type: 'GS Token',
    scene: '0x11',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'ZR GS Above Bridge': {
    type: 'GS Token',
    scene: '0x11',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'ZD Diving Minigame': {
    type: 'NPC',
    scene: '0x58',
    default: '0x37',
    addresses: null,
    vanillaItem: 'Progressive Scale'
  },
  'ZD Chest': {
    type: 'Chest',
    scene: '0x58',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'ZD King Zora Thawed': {
    type: 'NPC',
    scene: '0x58',
    default: '0x2d',
    addresses: null,
    vanillaItem: 'Zora Tunic'
  },
  'ZD GS Frozen Waterfall': {
    type: 'GS Token',
    scene: '0x11',
    default: '0x40',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'ZD Shop Item 1': {
    type: 'Shop',
    scene: '0x2f',
    default: '0x30',
    addresses: [ '0xc72090', null ],
    vanillaItem: 'Buy Zora Tunic'
  },
  'ZD Shop Item 2': {
    type: 'Shop',
    scene: '0x2f',
    default: '0x31',
    addresses: [ '0xc72098', null ],
    vanillaItem: 'Buy Arrows (10)'
  },
  'ZD Shop Item 3': {
    type: 'Shop',
    scene: '0x2f',
    default: '0x32',
    addresses: [ '0xc720a0', null ],
    vanillaItem: 'Buy Heart'
  },
  'ZD Shop Item 4': {
    type: 'Shop',
    scene: '0x2f',
    default: '0x33',
    addresses: [ '0xc720a8', null ],
    vanillaItem: 'Buy Arrows (30)'
  },
  'ZD Shop Item 5': {
    type: 'Shop',
    scene: '0x2f',
    default: '0x34',
    addresses: [ '0xc720b0', null ],
    vanillaItem: 'Buy Deku Nut (5)'
  },
  'ZD Shop Item 6': {
    type: 'Shop',
    scene: '0x2f',
    default: '0x35',
    addresses: [ '0xc720b8', null ],
    vanillaItem: 'Buy Arrows (50)'
  },
  'ZD Shop Item 7': {
    type: 'Shop',
    scene: '0x2f',
    default: '0x36',
    addresses: [ '0xc720c0', null ],
    vanillaItem: 'Buy Fish'
  },
  'ZD Shop Item 8': {
    type: 'Shop',
    scene: '0x2f',
    default: '0x37',
    addresses: [ '0xc720c8', null ],
    vanillaItem: 'Buy Red Potion [50]'
  },
  'ZF Great Fairy Reward': {
    type: 'Cutscene',
    scene: '0xff',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Farores Wind'
  },
  'ZF Iceberg Freestanding PoH': {
    type: 'Collectable',
    scene: '0x59',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'ZF Bottom Freestanding PoH': {
    type: 'Collectable',
    scene: '0x59',
    default: '0x14',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'ZF GS Above the Log': {
    type: 'GS Token',
    scene: '0x11',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'ZF GS Tree': {
    type: 'GS Token',
    scene: '0x11',
    default: '0x80',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'ZF GS Hidden Cave': {
    type: 'GS Token',
    scene: '0x11',
    default: '0x20',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'LH Underwater Item': {
    type: 'NPC',
    scene: '0x57',
    default: '0x15',
    addresses: null,
    vanillaItem: 'Rutos Letter'
  },
  'LH Child Fishing': {
    type: 'NPC',
    scene: '0x49',
    default: '0x3e',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'LH Adult Fishing': {
    type: 'NPC',
    scene: '0x49',
    default: '0x38',
    addresses: null,
    vanillaItem: 'Progressive Scale'
  },
  'LH Lab Dive': {
    type: 'NPC',
    scene: '0x38',
    default: '0x3e',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'LH Freestanding PoH': {
    type: 'Collectable',
    scene: '0x57',
    default: '0x1e',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'LH Sun': {
    type: 'NPC',
    scene: '0x57',
    default: '0x58',
    addresses: null,
    vanillaItem: 'Fire Arrows'
  },
  'LH Deku Scrub Grotto Left': {
    type: 'GrottoNPC',
    scene: '0xef',
    default: '0x30',
    addresses: null,
    vanillaItem: 'Buy Deku Nut (5)'
  },
  'LH Deku Scrub Grotto Center': {
    type: 'GrottoNPC',
    scene: '0xef',
    default: '0x33',
    addresses: null,
    vanillaItem: 'Buy Deku Seeds (30)'
  },
  'LH Deku Scrub Grotto Right': {
    type: 'GrottoNPC',
    scene: '0xef',
    default: '0x37',
    addresses: null,
    vanillaItem: 'Buy Bombs (5) [35]'
  },
  'LH GS Bean Patch': {
    type: 'GS Token',
    scene: '0x12',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'LH GS Lab Wall': {
    type: 'GS Token',
    scene: '0x12',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'LH GS Small Island': {
    type: 'GS Token',
    scene: '0x12',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'LH GS Lab Crate': {
    type: 'GS Token',
    scene: '0x12',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'LH GS Tree': {
    type: 'GS Token',
    scene: '0x12',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'GV Crate Freestanding PoH': {
    type: 'Collectable',
    scene: '0x5a',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'GV Waterfall Freestanding PoH': {
    type: 'Collectable',
    scene: '0x5a',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'GV Chest': {
    type: 'Chest',
    scene: '0x5a',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Rupees (50)'
  },
  'GV Deku Scrub Grotto Front': {
    type: 'GrottoNPC',
    scene: '0xf0',
    default: '0x3a',
    addresses: null,
    vanillaItem: 'Buy Green Potion'
  },
  'GV Deku Scrub Grotto Rear': {
    type: 'GrottoNPC',
    scene: '0xf0',
    default: '0x39',
    addresses: null,
    vanillaItem: 'Buy Red Potion [30]'
  },
  'GV Cow': {
    type: 'NPC',
    scene: '0x5a',
    default: '0x15',
    addresses: null,
    vanillaItem: 'Milk'
  },
  'GV GS Small Bridge': {
    type: 'GS Token',
    scene: '0x13',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'GV GS Bean Patch': {
    type: 'GS Token',
    scene: '0x13',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'GV GS Behind Tent': {
    type: 'GS Token',
    scene: '0x13',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'GV GS Pillar': {
    type: 'GS Token',
    scene: '0x13',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'GF North F1 Carpenter': {
    type: 'Collectable',
    scene: '0x0c',
    default: '0x0c',
    addresses: null,
    vanillaItem: 'Small Key (Gerudo Fortress)'
  },
  'GF North F2 Carpenter': {
    type: 'Collectable',
    scene: '0x0c',
    default: '0x0a',
    addresses: null,
    vanillaItem: 'Small Key (Gerudo Fortress)'
  },
  'GF South F1 Carpenter': {
    type: 'Collectable',
    scene: '0x0c',
    default: '0x0e',
    addresses: null,
    vanillaItem: 'Small Key (Gerudo Fortress)'
  },
  'GF South F2 Carpenter': {
    type: 'Collectable',
    scene: '0x0c',
    default: '0x0f',
    addresses: null,
    vanillaItem: 'Small Key (Gerudo Fortress)'
  },
  'GF Gerudo Membership Card': {
    type: 'NPC',
    scene: '0x0c',
    default: '0x3a',
    addresses: null,
    vanillaItem: 'Gerudo Membership Card'
  },
  'GF Chest': {
    type: 'Chest',
    scene: '0x5d',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'GF HBA 1000 Points': {
    type: 'NPC',
    scene: '0x5d',
    default: '0x3e',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'GF HBA 1500 Points': {
    type: 'NPC',
    scene: '0x5d',
    default: '0x30',
    addresses: null,
    vanillaItem: 'Bow'
  },
  'GF GS Top Floor': {
    type: 'GS Token',
    scene: '0x14',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'GF GS Archery Range': {
    type: 'GS Token',
    scene: '0x14',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Wasteland Bombchu Salesman': {
    type: 'NPC',
    scene: '0x5e',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Bombchus (10)'
  },
  'Wasteland Chest': {
    type: 'Chest',
    scene: '0x5e',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Rupees (50)'
  },
  'Wasteland GS': {
    type: 'GS Token',
    scene: '0x15',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Colossus Great Fairy Reward': {
    type: 'Cutscene',
    scene: '0xff',
    default: '0x12',
    addresses: null,
    vanillaItem: 'Nayrus Love'
  },
  'Colossus Freestanding PoH': {
    type: 'Collectable',
    scene: '0x5c',
    default: '0x0d',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'Colossus Deku Scrub Grotto Front': {
    type: 'GrottoNPC',
    scene: '0xfd',
    default: '0x3a',
    addresses: null,
    vanillaItem: 'Buy Green Potion'
  },
  'Colossus Deku Scrub Grotto Rear': {
    type: 'GrottoNPC',
    scene: '0xfd',
    default: '0x39',
    addresses: null,
    vanillaItem: 'Buy Red Potion [30]'
  },
  'Colossus GS Bean Patch': {
    type: 'GS Token',
    scene: '0x15',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Colossus GS Tree': {
    type: 'GS Token',
    scene: '0x15',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Colossus GS Hill': {
    type: 'GS Token',
    scene: '0x15',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'OGC Great Fairy Reward': {
    type: 'Cutscene',
    scene: '0xff',
    default: '0x15',
    addresses: null,
    vanillaItem: 'Double Defense'
  },
  'OGC GS': {
    type: 'GS Token',
    scene: '0x0e',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Deku Tree Map Chest': {
    type: 'Chest',
    scene: '0x00',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Map (Deku Tree)'
  },
  'Deku Tree Slingshot Room Side Chest': {
    type: 'Chest',
    scene: '0x00',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Deku Tree Slingshot Chest': {
    type: 'Chest',
    scene: '0x00',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Slingshot'
  },
  'Deku Tree Compass Chest': {
    type: 'Chest',
    scene: '0x00',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Compass (Deku Tree)'
  },
  'Deku Tree Compass Room Side Chest': {
    type: 'Chest',
    scene: '0x00',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Deku Tree Basement Chest': {
    type: 'Chest',
    scene: '0x00',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Deku Tree GS Compass Room': {
    type: 'GS Token',
    scene: '0x00',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Deku Tree GS Basement Vines': {
    type: 'GS Token',
    scene: '0x00',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Deku Tree GS Basement Gate': {
    type: 'GS Token',
    scene: '0x00',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Deku Tree GS Basement Back Room': {
    type: 'GS Token',
    scene: '0x00',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Deku Tree MQ Map Chest': {
    type: 'Chest',
    scene: '0x00',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Map (Deku Tree)'
  },
  'Deku Tree MQ Slingshot Chest': {
    type: 'Chest',
    scene: '0x00',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Slingshot'
  },
  'Deku Tree MQ Slingshot Room Back Chest': {
    type: 'Chest',
    scene: '0x00',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Deku Shield'
  },
  'Deku Tree MQ Compass Chest': {
    type: 'Chest',
    scene: '0x00',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Compass (Deku Tree)'
  },
  'Deku Tree MQ Basement Chest': {
    type: 'Chest',
    scene: '0x00',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Deku Shield'
  },
  'Deku Tree MQ Before Spinning Log Chest': {
    type: 'Chest',
    scene: '0x00',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Deku Tree MQ After Spinning Log Chest': {
    type: 'Chest',
    scene: '0x00',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Rupees (50)'
  },
  'Deku Tree MQ Deku Scrub': {
    type: 'NPC',
    scene: '0x00',
    default: '0x34',
    addresses: null,
    vanillaItem: 'Buy Deku Shield'
  },
  'Deku Tree MQ GS Lobby': {
    type: 'GS Token',
    scene: '0x00',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Deku Tree MQ GS Compass Room': {
    type: 'GS Token',
    scene: '0x00',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Deku Tree MQ GS Basement Graves Room': {
    type: 'GS Token',
    scene: '0x00',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Deku Tree MQ GS Basement Back Room': {
    type: 'GS Token',
    scene: '0x00',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Deku Tree Queen Gohma Heart': {
    type: 'BossHeart',
    scene: '0x11',
    default: '0x4f',
    addresses: null,
    vanillaItem: 'Heart Container'
  },
  'Dodongos Cavern Map Chest': {
    type: 'Chest',
    scene: '0x01',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Map (Dodongos Cavern)'
  },
  'Dodongos Cavern Compass Chest': {
    type: 'Chest',
    scene: '0x01',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Compass (Dodongos Cavern)'
  },
  'Dodongos Cavern Bomb Flower Platform Chest': {
    type: 'Chest',
    scene: '0x01',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Rupees (20)'
  },
  'Dodongos Cavern Bomb Bag Chest': {
    type: 'Chest',
    scene: '0x01',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Bomb Bag'
  },
  'Dodongos Cavern End of Bridge Chest': {
    type: 'Chest',
    scene: '0x01',
    default: '0x0a',
    addresses: null,
    vanillaItem: 'Deku Shield'
  },
  'Dodongos Cavern Deku Scrub Side Room Near Dodongos': {
    type: 'NPC',
    scene: '0x01',
    default: '0x31',
    addresses: null,
    vanillaItem: 'Buy Deku Stick (1)'
  },
  'Dodongos Cavern Deku Scrub Lobby': {
    type: 'NPC',
    scene: '0x01',
    default: '0x34',
    addresses: null,
    vanillaItem: 'Buy Deku Shield'
  },
  'Dodongos Cavern Deku Scrub Near Bomb Bag Left': {
    type: 'NPC',
    scene: '0x01',
    default: '0x30',
    addresses: null,
    vanillaItem: 'Buy Deku Nut (5)'
  },
  'Dodongos Cavern Deku Scrub Near Bomb Bag Right': {
    type: 'NPC',
    scene: '0x01',
    default: '0x33',
    addresses: null,
    vanillaItem: 'Buy Deku Seeds (30)'
  },
  'Dodongos Cavern GS Side Room Near Lower Lizalfos': {
    type: 'GS Token',
    scene: '0x01',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Dodongos Cavern GS Scarecrow': {
    type: 'GS Token',
    scene: '0x01',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Dodongos Cavern GS Alcove Above Stairs': {
    type: 'GS Token',
    scene: '0x01',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Dodongos Cavern GS Vines Above Stairs': {
    type: 'GS Token',
    scene: '0x01',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Dodongos Cavern GS Back Room': {
    type: 'GS Token',
    scene: '0x01',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Dodongos Cavern MQ Map Chest': {
    type: 'Chest',
    scene: '0x01',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Map (Dodongos Cavern)'
  },
  'Dodongos Cavern MQ Bomb Bag Chest': {
    type: 'Chest',
    scene: '0x01',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Bomb Bag'
  },
  'Dodongos Cavern MQ Torch Puzzle Room Chest': {
    type: 'Chest',
    scene: '0x01',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Dodongos Cavern MQ Larvae Room Chest': {
    type: 'Chest',
    scene: '0x01',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Deku Shield'
  },
  'Dodongos Cavern MQ Compass Chest': {
    type: 'Chest',
    scene: '0x01',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Compass (Dodongos Cavern)'
  },
  'Dodongos Cavern MQ Under Grave Chest': {
    type: 'Chest',
    scene: '0x01',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Hylian Shield'
  },
  'Dodongos Cavern MQ Deku Scrub Lobby Front': {
    type: 'NPC',
    scene: '0x01',
    default: '0x33',
    addresses: null,
    vanillaItem: 'Buy Deku Seeds (30)'
  },
  'Dodongos Cavern MQ Deku Scrub Lobby Rear': {
    type: 'NPC',
    scene: '0x01',
    default: '0x31',
    addresses: null,
    vanillaItem: 'Buy Deku Stick (1)'
  },
  'Dodongos Cavern MQ Deku Scrub Side Room Near Lower Lizalfos': {
    type: 'NPC',
    scene: '0x01',
    default: '0x39',
    addresses: null,
    vanillaItem: 'Buy Red Potion [30]'
  },
  'Dodongos Cavern MQ Deku Scrub Staircase': {
    type: 'NPC',
    scene: '0x01',
    default: '0x34',
    addresses: null,
    vanillaItem: 'Buy Deku Shield'
  },
  'Dodongos Cavern MQ GS Scrub Room': {
    type: 'GS Token',
    scene: '0x01',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Dodongos Cavern MQ GS Larvae Room': {
    type: 'GS Token',
    scene: '0x01',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Dodongos Cavern MQ GS Lizalfos Room': {
    type: 'GS Token',
    scene: '0x01',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Dodongos Cavern MQ GS Song of Time Block Room': {
    type: 'GS Token',
    scene: '0x01',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Dodongos Cavern MQ GS Back Area': {
    type: 'GS Token',
    scene: '0x01',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Dodongos Cavern Boss Room Chest': {
    type: 'Chest',
    scene: '0x12',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Bombs (5)'
  },
  'Dodongos Cavern King Dodongo Heart': {
    type: 'BossHeart',
    scene: '0x12',
    default: '0x4f',
    addresses: null,
    vanillaItem: 'Heart Container'
  },
  'Jabu Jabus Belly Boomerang Chest': {
    type: 'Chest',
    scene: '0x02',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Boomerang'
  },
  'Jabu Jabus Belly Map Chest': {
    type: 'Chest',
    scene: '0x02',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Map (Jabu Jabus Belly)'
  },
  'Jabu Jabus Belly Compass Chest': {
    type: 'Chest',
    scene: '0x02',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Compass (Jabu Jabus Belly)'
  },
  'Jabu Jabus Belly Deku Scrub': {
    type: 'NPC',
    scene: '0x02',
    default: '0x30',
    addresses: null,
    vanillaItem: 'Buy Deku Nut (5)'
  },
  'Jabu Jabus Belly GS Water Switch Room': {
    type: 'GS Token',
    scene: '0x02',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Jabu Jabus Belly GS Lobby Basement Lower': {
    type: 'GS Token',
    scene: '0x02',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Jabu Jabus Belly GS Lobby Basement Upper': {
    type: 'GS Token',
    scene: '0x02',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Jabu Jabus Belly GS Near Boss': {
    type: 'GS Token',
    scene: '0x02',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Jabu Jabus Belly MQ Map Chest': {
    type: 'Chest',
    scene: '0x02',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Map (Jabu Jabus Belly)'
  },
  'Jabu Jabus Belly MQ First Room Side Chest': {
    type: 'Chest',
    scene: '0x02',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Deku Nuts (5)'
  },
  'Jabu Jabus Belly MQ Second Room Lower Chest': {
    type: 'Chest',
    scene: '0x02',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Deku Nuts (5)'
  },
  'Jabu Jabus Belly MQ Compass Chest': {
    type: 'Chest',
    scene: '0x02',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Compass (Jabu Jabus Belly)'
  },
  'Jabu Jabus Belly MQ Basement Near Switches Chest': {
    type: 'Chest',
    scene: '0x02',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Deku Nuts (5)'
  },
  'Jabu Jabus Belly MQ Basement Near Vines Chest': {
    type: 'Chest',
    scene: '0x02',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Bombchus (10)'
  },
  'Jabu Jabus Belly MQ Boomerang Room Small Chest': {
    type: 'Chest',
    scene: '0x02',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Deku Nuts (5)'
  },
  'Jabu Jabus Belly MQ Boomerang Chest': {
    type: 'Chest',
    scene: '0x02',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Boomerang'
  },
  'Jabu Jabus Belly MQ Falling Like Like Room Chest': {
    type: 'Chest',
    scene: '0x02',
    default: '0x09',
    addresses: null,
    vanillaItem: 'Deku Stick (1)'
  },
  'Jabu Jabus Belly MQ Second Room Upper Chest': {
    type: 'Chest',
    scene: '0x02',
    default: '0x07',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Jabu Jabus Belly MQ Near Boss Chest': {
    type: 'Chest',
    scene: '0x02',
    default: '0x0a',
    addresses: null,
    vanillaItem: 'Deku Shield'
  },
  'Jabu Jabus Belly MQ Cow': {
    type: 'NPC',
    scene: '0x02',
    default: '0x15',
    addresses: null,
    vanillaItem: 'Milk'
  },
  'Jabu Jabus Belly MQ GS Boomerang Chest Room': {
    type: 'GS Token',
    scene: '0x02',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Jabu Jabus Belly MQ GS Tailpasaran Room': {
    type: 'GS Token',
    scene: '0x02',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Jabu Jabus Belly MQ GS Invisible Enemies Room': {
    type: 'GS Token',
    scene: '0x02',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Jabu Jabus Belly MQ GS Near Boss': {
    type: 'GS Token',
    scene: '0x02',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Jabu Jabus Belly Barinade Heart': {
    type: 'BossHeart',
    scene: '0x13',
    default: '0x4f',
    addresses: null,
    vanillaItem: 'Heart Container'
  },
  'Bottom of the Well Front Left Fake Wall Chest': {
    type: 'Chest',
    scene: '0x08',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Small Key (Bottom of the Well)'
  },
  'Bottom of the Well Front Center Bombable Chest': {
    type: 'Chest',
    scene: '0x08',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Bombchus (10)'
  },
  'Bottom of the Well Back Left Bombable Chest': {
    type: 'Chest',
    scene: '0x08',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Deku Nuts (10)'
  },
  'Bottom of the Well Underwater Left Chest': {
    type: 'Chest',
    scene: '0x08',
    default: '0x09',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Bottom of the Well Freestanding Key': {
    type: 'Collectable',
    scene: '0x08',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Small Key (Bottom of the Well)'
  },
  'Bottom of the Well Compass Chest': {
    type: 'Chest',
    scene: '0x08',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Compass (Bottom of the Well)'
  },
  'Bottom of the Well Center Skulltula Chest': {
    type: 'Chest',
    scene: '0x08',
    default: '0x0e',
    addresses: null,
    vanillaItem: 'Deku Nuts (5)'
  },
  'Bottom of the Well Right Bottom Fake Wall Chest': {
    type: 'Chest',
    scene: '0x08',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Small Key (Bottom of the Well)'
  },
  'Bottom of the Well Fire Keese Chest': {
    type: 'Chest',
    scene: '0x08',
    default: '0x0a',
    addresses: null,
    vanillaItem: 'Deku Shield'
  },
  'Bottom of the Well Like Like Chest': {
    type: 'Chest',
    scene: '0x08',
    default: '0x0c',
    addresses: null,
    vanillaItem: 'Hylian Shield'
  },
  'Bottom of the Well Map Chest': {
    type: 'Chest',
    scene: '0x08',
    default: '0x07',
    addresses: null,
    vanillaItem: 'Map (Bottom of the Well)'
  },
  'Bottom of the Well Underwater Front Chest': {
    type: 'Chest',
    scene: '0x08',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Bombs (10)'
  },
  'Bottom of the Well Invisible Chest': {
    type: 'Chest',
    scene: '0x08',
    default: '0x14',
    addresses: null,
    vanillaItem: 'Rupees (200)'
  },
  'Bottom of the Well Lens of Truth Chest': {
    type: 'Chest',
    scene: '0x08',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Lens of Truth'
  },
  'Bottom of the Well GS West Inner Room': {
    type: 'GS Token',
    scene: '0x08',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Bottom of the Well GS East Inner Room': {
    type: 'GS Token',
    scene: '0x08',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Bottom of the Well GS Like Like Cage': {
    type: 'GS Token',
    scene: '0x08',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Bottom of the Well MQ Map Chest': {
    type: 'Chest',
    scene: '0x08',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Map (Bottom of the Well)'
  },
  'Bottom of the Well MQ East Inner Room Freestanding Key': {
    type: 'Collectable',
    scene: '0x08',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Small Key (Bottom of the Well)'
  },
  'Bottom of the Well MQ Compass Chest': {
    type: 'Chest',
    scene: '0x08',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Compass (Bottom of the Well)'
  },
  'Bottom of the Well MQ Dead Hand Freestanding Key': {
    type: 'Collectable',
    scene: '0x08',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Small Key (Bottom of the Well)'
  },
  'Bottom of the Well MQ Lens of Truth Chest': {
    type: 'Chest',
    scene: '0x08',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Lens of Truth'
  },
  'Bottom of the Well MQ GS Coffin Room': {
    type: 'GS Token',
    scene: '0x08',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Bottom of the Well MQ GS West Inner Room': {
    type: 'GS Token',
    scene: '0x08',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Bottom of the Well MQ GS Basement': {
    type: 'GS Token',
    scene: '0x08',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Forest Temple First Room Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Small Key (Forest Temple)'
  },
  'Forest Temple First Stalfos Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Small Key (Forest Temple)'
  },
  'Forest Temple Raised Island Courtyard Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Forest Temple Map Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Map (Forest Temple)'
  },
  'Forest Temple Well Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x09',
    addresses: null,
    vanillaItem: 'Small Key (Forest Temple)'
  },
  'Forest Temple Eye Switch Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Arrows (30)'
  },
  'Forest Temple Boss Key Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x0e',
    addresses: null,
    vanillaItem: 'Boss Key (Forest Temple)'
  },
  'Forest Temple Floormaster Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Small Key (Forest Temple)'
  },
  'Forest Temple Red Poe Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x0d',
    addresses: null,
    vanillaItem: 'Small Key (Forest Temple)'
  },
  'Forest Temple Bow Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x0c',
    addresses: null,
    vanillaItem: 'Bow'
  },
  'Forest Temple Blue Poe Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x0f',
    addresses: null,
    vanillaItem: 'Compass (Forest Temple)'
  },
  'Forest Temple Falling Ceiling Room Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x07',
    addresses: null,
    vanillaItem: 'Arrows (10)'
  },
  'Forest Temple Basement Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x0b',
    addresses: null,
    vanillaItem: 'Arrows (5)'
  },
  'Forest Temple GS First Room': {
    type: 'GS Token',
    scene: '0x03',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Forest Temple GS Lobby': {
    type: 'GS Token',
    scene: '0x03',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Forest Temple GS Raised Island Courtyard': {
    type: 'GS Token',
    scene: '0x03',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Forest Temple GS Level Island Courtyard': {
    type: 'GS Token',
    scene: '0x03',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Forest Temple GS Basement': {
    type: 'GS Token',
    scene: '0x03',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Forest Temple MQ First Room Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Small Key (Forest Temple)'
  },
  'Forest Temple MQ Wolfos Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Small Key (Forest Temple)'
  },
  'Forest Temple MQ Well Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x09',
    addresses: null,
    vanillaItem: 'Small Key (Forest Temple)'
  },
  'Forest Temple MQ Raised Island Courtyard Lower Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Small Key (Forest Temple)'
  },
  'Forest Temple MQ Raised Island Courtyard Upper Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Small Key (Forest Temple)'
  },
  'Forest Temple MQ Boss Key Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x0e',
    addresses: null,
    vanillaItem: 'Boss Key (Forest Temple)'
  },
  'Forest Temple MQ Redead Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Small Key (Forest Temple)'
  },
  'Forest Temple MQ Map Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x0d',
    addresses: null,
    vanillaItem: 'Map (Forest Temple)'
  },
  'Forest Temple MQ Bow Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x0c',
    addresses: null,
    vanillaItem: 'Bow'
  },
  'Forest Temple MQ Compass Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x0f',
    addresses: null,
    vanillaItem: 'Compass (Forest Temple)'
  },
  'Forest Temple MQ Falling Ceiling Room Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Arrows (5)'
  },
  'Forest Temple MQ Basement Chest': {
    type: 'Chest',
    scene: '0x03',
    default: '0x0b',
    addresses: null,
    vanillaItem: 'Arrows (5)'
  },
  'Forest Temple MQ GS First Hallway': {
    type: 'GS Token',
    scene: '0x03',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Forest Temple MQ GS Raised Island Courtyard': {
    type: 'GS Token',
    scene: '0x03',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Forest Temple MQ GS Level Island Courtyard': {
    type: 'GS Token',
    scene: '0x03',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Forest Temple MQ GS Well': {
    type: 'GS Token',
    scene: '0x03',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Forest Temple MQ GS Block Push Room': {
    type: 'GS Token',
    scene: '0x03',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Forest Temple Phantom Ganon Heart': {
    type: 'BossHeart',
    scene: '0x14',
    default: '0x4f',
    addresses: null,
    vanillaItem: 'Heart Container'
  },
  'Fire Temple Near Boss Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Small Key (Fire Temple)'
  },
  'Fire Temple Flare Dancer Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Bombs (10)'
  },
  'Fire Temple Boss Key Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x0c',
    addresses: null,
    vanillaItem: 'Boss Key (Fire Temple)'
  },
  'Fire Temple Big Lava Room Lower Open Door Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Small Key (Fire Temple)'
  },
  'Fire Temple Big Lava Room Blocked Door Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Small Key (Fire Temple)'
  },
  'Fire Temple Boulder Maze Lower Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Small Key (Fire Temple)'
  },
  'Fire Temple Boulder Maze Side Room Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Small Key (Fire Temple)'
  },
  'Fire Temple Map Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x0a',
    addresses: null,
    vanillaItem: 'Map (Fire Temple)'
  },
  'Fire Temple Boulder Maze Shortcut Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x0b',
    addresses: null,
    vanillaItem: 'Small Key (Fire Temple)'
  },
  'Fire Temple Boulder Maze Upper Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Small Key (Fire Temple)'
  },
  'Fire Temple Scarecrow Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x0d',
    addresses: null,
    vanillaItem: 'Rupees (200)'
  },
  'Fire Temple Compass Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x07',
    addresses: null,
    vanillaItem: 'Compass (Fire Temple)'
  },
  'Fire Temple Megaton Hammer Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Megaton Hammer'
  },
  'Fire Temple Highest Goron Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x09',
    addresses: null,
    vanillaItem: 'Small Key (Fire Temple)'
  },
  'Fire Temple GS Boss Key Loop': {
    type: 'GS Token',
    scene: '0x04',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Fire Temple GS Song of Time Room': {
    type: 'GS Token',
    scene: '0x04',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Fire Temple GS Boulder Maze': {
    type: 'GS Token',
    scene: '0x04',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Fire Temple GS Scarecrow Climb': {
    type: 'GS Token',
    scene: '0x04',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Fire Temple GS Scarecrow Top': {
    type: 'GS Token',
    scene: '0x04',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Fire Temple MQ Map Room Side Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Hylian Shield'
  },
  'Fire Temple MQ Megaton Hammer Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Megaton Hammer'
  },
  'Fire Temple MQ Map Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x0c',
    addresses: null,
    vanillaItem: 'Map (Fire Temple)'
  },
  'Fire Temple MQ Near Boss Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x07',
    addresses: null,
    vanillaItem: 'Small Key (Fire Temple)'
  },
  'Fire Temple MQ Big Lava Room Blocked Door Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Small Key (Fire Temple)'
  },
  'Fire Temple MQ Boss Key Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Boss Key (Fire Temple)'
  },
  'Fire Temple MQ Lizalfos Maze Side Room Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Small Key (Fire Temple)'
  },
  'Fire Temple MQ Compass Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x0b',
    addresses: null,
    vanillaItem: 'Compass (Fire Temple)'
  },
  'Fire Temple MQ Lizalfos Maze Upper Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Bombs (10)'
  },
  'Fire Temple MQ Lizalfos Maze Lower Chest': {
    type: 'Chest',
    scene: '0x04',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Bombs (10)'
  },
  'Fire Temple MQ Freestanding Key': {
    type: 'Collectable',
    scene: '0x04',
    default: '0x1c',
    addresses: null,
    vanillaItem: 'Small Key (Fire Temple)'
  },
  'Fire Temple MQ Chest On Fire': {
    type: 'Chest',
    scene: '0x04',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Small Key (Fire Temple)'
  },
  'Fire Temple MQ GS Big Lava Room Open Door': {
    type: 'GS Token',
    scene: '0x04',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Fire Temple MQ GS Skull On Fire': {
    type: 'GS Token',
    scene: '0x04',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Fire Temple MQ GS Fire Wall Maze Center': {
    type: 'GS Token',
    scene: '0x04',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Fire Temple MQ GS Fire Wall Maze Side Room': {
    type: 'GS Token',
    scene: '0x04',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Fire Temple MQ GS Above Fire Wall Maze': {
    type: 'GS Token',
    scene: '0x04',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Fire Temple Volvagia Heart': {
    type: 'BossHeart',
    scene: '0x15',
    default: '0x4f',
    addresses: null,
    vanillaItem: 'Heart Container'
  },
  'Water Temple Compass Chest': {
    type: 'Chest',
    scene: '0x05',
    default: '0x09',
    addresses: null,
    vanillaItem: 'Compass (Water Temple)'
  },
  'Water Temple Map Chest': {
    type: 'Chest',
    scene: '0x05',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Map (Water Temple)'
  },
  'Water Temple Cracked Wall Chest': {
    type: 'Chest',
    scene: '0x05',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Small Key (Water Temple)'
  },
  'Water Temple Torches Chest': {
    type: 'Chest',
    scene: '0x05',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Small Key (Water Temple)'
  },
  'Water Temple Boss Key Chest': {
    type: 'Chest',
    scene: '0x05',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Boss Key (Water Temple)'
  },
  'Water Temple Central Pillar Chest': {
    type: 'Chest',
    scene: '0x05',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Small Key (Water Temple)'
  },
  'Water Temple Central Bow Target Chest': {
    type: 'Chest',
    scene: '0x05',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Small Key (Water Temple)'
  },
  'Water Temple Longshot Chest': {
    type: 'Chest',
    scene: '0x05',
    default: '0x07',
    addresses: null,
    vanillaItem: 'Progressive Hookshot'
  },
  'Water Temple River Chest': {
    type: 'Chest',
    scene: '0x05',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Small Key (Water Temple)'
  },
  'Water Temple Dragon Chest': {
    type: 'Chest',
    scene: '0x05',
    default: '0x0a',
    addresses: null,
    vanillaItem: 'Small Key (Water Temple)'
  },
  'Water Temple GS Behind Gate': {
    type: 'GS Token',
    scene: '0x05',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Water Temple GS Near Boss Key Chest': {
    type: 'GS Token',
    scene: '0x05',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Water Temple GS Central Pillar': {
    type: 'GS Token',
    scene: '0x05',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Water Temple GS Falling Platform Room': {
    type: 'GS Token',
    scene: '0x05',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Water Temple GS River': {
    type: 'GS Token',
    scene: '0x05',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Water Temple MQ Longshot Chest': {
    type: 'Chest',
    scene: '0x05',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Progressive Hookshot'
  },
  'Water Temple MQ Map Chest': {
    type: 'Chest',
    scene: '0x05',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Map (Water Temple)'
  },
  'Water Temple MQ Compass Chest': {
    type: 'Chest',
    scene: '0x05',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Compass (Water Temple)'
  },
  'Water Temple MQ Central Pillar Chest': {
    type: 'Chest',
    scene: '0x05',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Small Key (Water Temple)'
  },
  'Water Temple MQ Boss Key Chest': {
    type: 'Chest',
    scene: '0x05',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Boss Key (Water Temple)'
  },
  'Water Temple MQ Freestanding Key': {
    type: 'Collectable',
    scene: '0x05',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Small Key (Water Temple)'
  },
  'Water Temple MQ GS Lizalfos Hallway': {
    type: 'GS Token',
    scene: '0x05',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Water Temple MQ GS Before Upper Water Switch': {
    type: 'GS Token',
    scene: '0x05',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Water Temple MQ GS River': {
    type: 'GS Token',
    scene: '0x05',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Water Temple MQ GS Freestanding Key Area': {
    type: 'GS Token',
    scene: '0x05',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Water Temple MQ GS Triple Wall Torch': {
    type: 'GS Token',
    scene: '0x05',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Water Temple Morpha Heart': {
    type: 'BossHeart',
    scene: '0x16',
    default: '0x4f',
    addresses: null,
    vanillaItem: 'Heart Container'
  },
  'Shadow Temple Map Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Map (Shadow Temple)'
  },
  'Shadow Temple Hover Boots Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x07',
    addresses: null,
    vanillaItem: 'Hover Boots'
  },
  'Shadow Temple Compass Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Compass (Shadow Temple)'
  },
  'Shadow Temple Early Silver Rupee Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Small Key (Shadow Temple)'
  },
  'Shadow Temple Invisible Blades Visible Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x0c',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Shadow Temple Invisible Blades Invisible Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x16',
    addresses: null,
    vanillaItem: 'Arrows (30)'
  },
  'Shadow Temple Falling Spikes Lower Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Arrows (10)'
  },
  'Shadow Temple Falling Spikes Upper Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Shadow Temple Falling Spikes Switch Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Small Key (Shadow Temple)'
  },
  'Shadow Temple Invisible Spikes Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x09',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Shadow Temple Freestanding Key': {
    type: 'Collectable',
    scene: '0x07',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Small Key (Shadow Temple)'
  },
  'Shadow Temple Wind Hint Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x15',
    addresses: null,
    vanillaItem: 'Arrows (10)'
  },
  'Shadow Temple After Wind Enemy Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Shadow Temple After Wind Hidden Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x14',
    addresses: null,
    vanillaItem: 'Small Key (Shadow Temple)'
  },
  'Shadow Temple Spike Walls Left Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x0a',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Shadow Temple Boss Key Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x0b',
    addresses: null,
    vanillaItem: 'Boss Key (Shadow Temple)'
  },
  'Shadow Temple Invisible Floormaster Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x0d',
    addresses: null,
    vanillaItem: 'Small Key (Shadow Temple)'
  },
  'Shadow Temple GS Like Like Room': {
    type: 'GS Token',
    scene: '0x07',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Shadow Temple GS Falling Spikes Room': {
    type: 'GS Token',
    scene: '0x07',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Shadow Temple GS Single Giant Pot': {
    type: 'GS Token',
    scene: '0x07',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Shadow Temple GS Near Ship': {
    type: 'GS Token',
    scene: '0x07',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Shadow Temple GS Triple Giant Pot': {
    type: 'GS Token',
    scene: '0x07',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Shadow Temple MQ Early Gibdos Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Small Key (Shadow Temple)'
  },
  'Shadow Temple MQ Map Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Map (Shadow Temple)'
  },
  'Shadow Temple MQ Near Ship Invisible Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x0e',
    addresses: null,
    vanillaItem: 'Small Key (Shadow Temple)'
  },
  'Shadow Temple MQ Compass Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Compass (Shadow Temple)'
  },
  'Shadow Temple MQ Hover Boots Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x07',
    addresses: null,
    vanillaItem: 'Hover Boots'
  },
  'Shadow Temple MQ Invisible Blades Invisible Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x16',
    addresses: null,
    vanillaItem: 'Small Key (Shadow Temple)'
  },
  'Shadow Temple MQ Invisible Blades Visible Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x0c',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Shadow Temple MQ Beamos Silver Rupees Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x0f',
    addresses: null,
    vanillaItem: 'Arrows (5)'
  },
  'Shadow Temple MQ Falling Spikes Lower Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Arrows (10)'
  },
  'Shadow Temple MQ Falling Spikes Upper Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Shadow Temple MQ Falling Spikes Switch Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Small Key (Shadow Temple)'
  },
  'Shadow Temple MQ Invisible Spikes Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x09',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Shadow Temple MQ Stalfos Room Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Rupees (20)'
  },
  'Shadow Temple MQ Wind Hint Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x15',
    addresses: null,
    vanillaItem: 'Small Key (Shadow Temple)'
  },
  'Shadow Temple MQ After Wind Hidden Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x14',
    addresses: null,
    vanillaItem: 'Arrows (5)'
  },
  'Shadow Temple MQ After Wind Enemy Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Shadow Temple MQ Boss Key Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x0b',
    addresses: null,
    vanillaItem: 'Boss Key (Shadow Temple)'
  },
  'Shadow Temple MQ Spike Walls Left Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x0a',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Shadow Temple MQ Freestanding Key': {
    type: 'Collectable',
    scene: '0x07',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Small Key (Shadow Temple)'
  },
  'Shadow Temple MQ Bomb Flower Chest': {
    type: 'Chest',
    scene: '0x07',
    default: '0x0d',
    addresses: null,
    vanillaItem: 'Arrows (10)'
  },
  'Shadow Temple MQ GS Falling Spikes Room': {
    type: 'GS Token',
    scene: '0x07',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Shadow Temple MQ GS Wind Hint Room': {
    type: 'GS Token',
    scene: '0x07',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Shadow Temple MQ GS After Wind': {
    type: 'GS Token',
    scene: '0x07',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Shadow Temple MQ GS After Ship': {
    type: 'GS Token',
    scene: '0x07',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Shadow Temple MQ GS Near Boss': {
    type: 'GS Token',
    scene: '0x07',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Shadow Temple Bongo Bongo Heart': {
    type: 'BossHeart',
    scene: '0x18',
    default: '0x4f',
    addresses: null,
    vanillaItem: 'Heart Container'
  },
  'Spirit Temple Child Bridge Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Deku Shield'
  },
  'Spirit Temple Child Early Torches Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Small Key (Spirit Temple)'
  },
  'Spirit Temple Child Climb North Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Bombchus (10)'
  },
  'Spirit Temple Child Climb East Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x0c',
    addresses: null,
    vanillaItem: 'Deku Shield'
  },
  'Spirit Temple Map Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Map (Spirit Temple)'
  },
  'Spirit Temple Sun Block Room Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Small Key (Spirit Temple)'
  },
  'Spirit Temple MQ Entrance Front Left Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x1a',
    addresses: null,
    vanillaItem: 'Bombchus (10)'
  },
  'Spirit Temple MQ Entrance Back Right Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x1f',
    addresses: null,
    vanillaItem: 'Bombchus (10)'
  },
  'Spirit Temple MQ Entrance Front Right Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x1b',
    addresses: null,
    vanillaItem: 'Small Key (Spirit Temple)'
  },
  'Spirit Temple MQ Entrance Back Left Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x1e',
    addresses: null,
    vanillaItem: 'Small Key (Spirit Temple)'
  },
  'Spirit Temple MQ Map Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Map (Spirit Temple)'
  },
  'Spirit Temple MQ Map Room Enemy Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Small Key (Spirit Temple)'
  },
  'Spirit Temple MQ Child Climb North Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Bombchus (10)'
  },
  'Spirit Temple MQ Child Climb South Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x0c',
    addresses: null,
    vanillaItem: 'Small Key (Spirit Temple)'
  },
  'Spirit Temple MQ Compass Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Compass (Spirit Temple)'
  },
  'Spirit Temple MQ Silver Block Hallway Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x1c',
    addresses: null,
    vanillaItem: 'Small Key (Spirit Temple)'
  },
  'Spirit Temple MQ Sun Block Room Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Spirit Temple Silver Gauntlets Chest': {
    type: 'Chest',
    scene: '0x5c',
    default: '0x0b',
    addresses: null,
    vanillaItem: 'Progressive Strength Upgrade'
  },
  'Spirit Temple Compass Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Compass (Spirit Temple)'
  },
  'Spirit Temple Early Adult Right Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x07',
    addresses: null,
    vanillaItem: 'Small Key (Spirit Temple)'
  },
  'Spirit Temple First Mirror Left Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x0d',
    addresses: null,
    vanillaItem: 'Ice Trap'
  },
  'Spirit Temple First Mirror Right Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x0e',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Spirit Temple Statue Room Northeast Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x0f',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Spirit Temple Statue Room Hand Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Small Key (Spirit Temple)'
  },
  'Spirit Temple Near Four Armos Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Small Key (Spirit Temple)'
  },
  'Spirit Temple Hallway Right Invisible Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x14',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Spirit Temple Hallway Left Invisible Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x15',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Spirit Temple MQ Child Hammer Switch Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x1d',
    addresses: null,
    vanillaItem: 'Small Key (Spirit Temple)'
  },
  'Spirit Temple MQ Statue Room Lullaby Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x0f',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Spirit Temple MQ Statue Room Invisible Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Spirit Temple MQ Leever Room Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Rupees (50)'
  },
  'Spirit Temple MQ Symphony Room Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x07',
    addresses: null,
    vanillaItem: 'Rupees (50)'
  },
  'Spirit Temple MQ Beamos Room Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x19',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Spirit Temple MQ Chest Switch Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x18',
    addresses: null,
    vanillaItem: 'Ice Trap'
  },
  'Spirit Temple MQ Boss Key Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Boss Key (Spirit Temple)'
  },
  'Spirit Temple Mirror Shield Chest': {
    type: 'Chest',
    scene: '0x5c',
    default: '0x09',
    addresses: null,
    vanillaItem: 'Mirror Shield'
  },
  'Spirit Temple Boss Key Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x0a',
    addresses: null,
    vanillaItem: 'Boss Key (Spirit Temple)'
  },
  'Spirit Temple Topmost Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x12',
    addresses: null,
    vanillaItem: 'Bombs (20)'
  },
  'Spirit Temple MQ Mirror Puzzle Invisible Chest': {
    type: 'Chest',
    scene: '0x06',
    default: '0x12',
    addresses: null,
    vanillaItem: 'Small Key (Spirit Temple)'
  },
  'Spirit Temple GS Metal Fence': {
    type: 'GS Token',
    scene: '0x06',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Spirit Temple GS Sun on Floor Room': {
    type: 'GS Token',
    scene: '0x06',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Spirit Temple GS Hall After Sun Block Room': {
    type: 'GS Token',
    scene: '0x06',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Spirit Temple GS Lobby': {
    type: 'GS Token',
    scene: '0x06',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Spirit Temple GS Boulder Room': {
    type: 'GS Token',
    scene: '0x06',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Spirit Temple MQ GS Sun Block Room': {
    type: 'GS Token',
    scene: '0x06',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Spirit Temple MQ GS Leever Room': {
    type: 'GS Token',
    scene: '0x06',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Spirit Temple MQ GS Symphony Room': {
    type: 'GS Token',
    scene: '0x06',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Spirit Temple MQ GS Nine Thrones Room West': {
    type: 'GS Token',
    scene: '0x06',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Spirit Temple MQ GS Nine Thrones Room North': {
    type: 'GS Token',
    scene: '0x06',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Spirit Temple Twinrova Heart': {
    type: 'BossHeart',
    scene: '0x17',
    default: '0x4f',
    addresses: null,
    vanillaItem: 'Heart Container'
  },
  'Ice Cavern Map Chest': {
    type: 'Chest',
    scene: '0x09',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Map (Ice Cavern)'
  },
  'Ice Cavern Compass Chest': {
    type: 'Chest',
    scene: '0x09',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Compass (Ice Cavern)'
  },
  'Ice Cavern Freestanding PoH': {
    type: 'Collectable',
    scene: '0x09',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'Ice Cavern Iron Boots Chest': {
    type: 'Chest',
    scene: '0x09',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Iron Boots'
  },
  'Ice Cavern GS Spinning Scythe Room': {
    type: 'GS Token',
    scene: '0x09',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Ice Cavern GS Heart Piece Room': {
    type: 'GS Token',
    scene: '0x09',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Ice Cavern GS Push Block Room': {
    type: 'GS Token',
    scene: '0x09',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Ice Cavern MQ Map Chest': {
    type: 'Chest',
    scene: '0x09',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Map (Ice Cavern)'
  },
  'Ice Cavern MQ Compass Chest': {
    type: 'Chest',
    scene: '0x09',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Compass (Ice Cavern)'
  },
  'Ice Cavern MQ Freestanding PoH': {
    type: 'Collectable',
    scene: '0x09',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Piece of Heart'
  },
  'Ice Cavern MQ Iron Boots Chest': {
    type: 'Chest',
    scene: '0x09',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Iron Boots'
  },
  'Ice Cavern MQ GS Red Ice': {
    type: 'GS Token',
    scene: '0x09',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Ice Cavern MQ GS Ice Block': {
    type: 'GS Token',
    scene: '0x09',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Ice Cavern MQ GS Scarecrow': {
    type: 'GS Token',
    scene: '0x09',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Gold Skulltula Token'
  },
  'Gerudo Training Grounds Lobby Left Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x13',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Gerudo Training Grounds Lobby Right Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x07',
    addresses: null,
    vanillaItem: 'Arrows (10)'
  },
  'Gerudo Training Grounds Stalfos Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Small Key (Gerudo Training Grounds)'
  },
  'Gerudo Training Grounds Before Heavy Block Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x11',
    addresses: null,
    vanillaItem: 'Arrows (30)'
  },
  'Gerudo Training Grounds Heavy Block First Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x0f',
    addresses: null,
    vanillaItem: 'Rupees (200)'
  },
  'Gerudo Training Grounds Heavy Block Second Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x0e',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Gerudo Training Grounds Heavy Block Third Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x14',
    addresses: null,
    vanillaItem: 'Small Key (Gerudo Training Grounds)'
  },
  'Gerudo Training Grounds Heavy Block Fourth Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Ice Trap'
  },
  'Gerudo Training Grounds Eye Statue Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Small Key (Gerudo Training Grounds)'
  },
  'Gerudo Training Grounds Near Scarecrow Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Small Key (Gerudo Training Grounds)'
  },
  'Gerudo Training Grounds Hammer Room Clear Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x12',
    addresses: null,
    vanillaItem: 'Arrows (10)'
  },
  'Gerudo Training Grounds Hammer Room Switch Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Small Key (Gerudo Training Grounds)'
  },
  'Gerudo Training Grounds Freestanding Key': {
    type: 'Collectable',
    scene: '0x0b',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Small Key (Gerudo Training Grounds)'
  },
  'Gerudo Training Grounds Maze Right Central Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Bombchus (5)'
  },
  'Gerudo Training Grounds Maze Right Side Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Arrows (30)'
  },
  'Gerudo Training Grounds Underwater Silver Rupee Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x0d',
    addresses: null,
    vanillaItem: 'Small Key (Gerudo Training Grounds)'
  },
  'Gerudo Training Grounds Beamos Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Small Key (Gerudo Training Grounds)'
  },
  'Gerudo Training Grounds Hidden Ceiling Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x0b',
    addresses: null,
    vanillaItem: 'Small Key (Gerudo Training Grounds)'
  },
  'Gerudo Training Grounds Maze Path First Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Rupees (50)'
  },
  'Gerudo Training Grounds Maze Path Second Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x0a',
    addresses: null,
    vanillaItem: 'Rupees (20)'
  },
  'Gerudo Training Grounds Maze Path Third Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x09',
    addresses: null,
    vanillaItem: 'Arrows (30)'
  },
  'Gerudo Training Grounds Maze Path Final Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x0c',
    addresses: null,
    vanillaItem: 'Ice Arrows'
  },
  'Gerudo Training Grounds MQ Lobby Left Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x13',
    addresses: null,
    vanillaItem: 'Arrows (10)'
  },
  'Gerudo Training Grounds MQ Lobby Right Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x07',
    addresses: null,
    vanillaItem: 'Bombchus (5)'
  },
  'Gerudo Training Grounds MQ First Iron Knuckle Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Gerudo Training Grounds MQ Before Heavy Block Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x11',
    addresses: null,
    vanillaItem: 'Arrows (10)'
  },
  'Gerudo Training Grounds MQ Heavy Block Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Rupees (50)'
  },
  'Gerudo Training Grounds MQ Eye Statue Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Bombchus (10)'
  },
  'Gerudo Training Grounds MQ Ice Arrows Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Ice Arrows'
  },
  'Gerudo Training Grounds MQ Second Iron Knuckle Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x12',
    addresses: null,
    vanillaItem: 'Arrows (10)'
  },
  'Gerudo Training Grounds MQ Flame Circle Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x0e',
    addresses: null,
    vanillaItem: 'Small Key (Gerudo Training Grounds)'
  },
  'Gerudo Training Grounds MQ Maze Right Central Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Gerudo Training Grounds MQ Maze Right Side Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Rupee (Treasure Chest Game)'
  },
  'Gerudo Training Grounds MQ Underwater Silver Rupee Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x0d',
    addresses: null,
    vanillaItem: 'Small Key (Gerudo Training Grounds)'
  },
  'Gerudo Training Grounds MQ Dinolfos Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Small Key (Gerudo Training Grounds)'
  },
  'Gerudo Training Grounds MQ Hidden Ceiling Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x0b',
    addresses: null,
    vanillaItem: 'Rupees (50)'
  },
  'Gerudo Training Grounds MQ Maze Path First Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Rupee (1)'
  },
  'Gerudo Training Grounds MQ Maze Path Third Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x09',
    addresses: null,
    vanillaItem: 'Rupee (Treasure Chest Game)'
  },
  'Gerudo Training Grounds MQ Maze Path Second Chest': {
    type: 'Chest',
    scene: '0x0b',
    default: '0x0a',
    addresses: null,
    vanillaItem: 'Rupees (20)'
  },
  'Ganons Castle Forest Trial Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x09',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Ganons Castle Water Trial Left Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x07',
    addresses: null,
    vanillaItem: 'Ice Trap'
  },
  'Ganons Castle Water Trial Right Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Ganons Castle Shadow Trial Front Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Ganons Castle Shadow Trial Golden Gauntlets Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Progressive Strength Upgrade'
  },
  'Ganons Castle Light Trial First Left Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x0c',
    addresses: null,
    vanillaItem: 'Rupees (5)'
  },
  'Ganons Castle Light Trial Second Left Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x0b',
    addresses: null,
    vanillaItem: 'Ice Trap'
  },
  'Ganons Castle Light Trial Third Left Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x0d',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Ganons Castle Light Trial First Right Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x0e',
    addresses: null,
    vanillaItem: 'Ice Trap'
  },
  'Ganons Castle Light Trial Second Right Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x0a',
    addresses: null,
    vanillaItem: 'Arrows (30)'
  },
  'Ganons Castle Light Trial Third Right Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x0f',
    addresses: null,
    vanillaItem: 'Ice Trap'
  },
  'Ganons Castle Light Trial Invisible Enemies Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x10',
    addresses: null,
    vanillaItem: 'Small Key (Ganons Castle)'
  },
  'Ganons Castle Light Trial Lullaby Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x11',
    addresses: null,
    vanillaItem: 'Small Key (Ganons Castle)'
  },
  'Ganons Castle Spirit Trial Crystal Switch Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x12',
    addresses: null,
    vanillaItem: 'Bombchus (20)'
  },
  'Ganons Castle Spirit Trial Invisible Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x14',
    addresses: null,
    vanillaItem: 'Arrows (10)'
  },
  'Ganons Castle Deku Scrub Left': {
    type: 'NPC',
    scene: '0x0d',
    default: '0x3a',
    addresses: null,
    vanillaItem: 'Buy Green Potion'
  },
  'Ganons Castle Deku Scrub Center-Left': {
    type: 'NPC',
    scene: '0x0d',
    default: '0x37',
    addresses: null,
    vanillaItem: 'Buy Bombs (5) [35]'
  },
  'Ganons Castle Deku Scrub Center-Right': {
    type: 'NPC',
    scene: '0x0d',
    default: '0x33',
    addresses: null,
    vanillaItem: 'Buy Arrows (30)'
  },
  'Ganons Castle Deku Scrub Right': {
    type: 'NPC',
    scene: '0x0d',
    default: '0x39',
    addresses: null,
    vanillaItem: 'Buy Red Potion [30]'
  },
  'Ganons Castle MQ Forest Trial Freestanding Key': {
    type: 'Collectable',
    scene: '0x0d',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Small Key (Ganons Castle)'
  },
  'Ganons Castle MQ Forest Trial Eye Switch Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x02',
    addresses: null,
    vanillaItem: 'Arrows (10)'
  },
  'Ganons Castle MQ Forest Trial Frozen Eye Switch Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x03',
    addresses: null,
    vanillaItem: 'Bombs (5)'
  },
  'Ganons Castle MQ Water Trial Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x01',
    addresses: null,
    vanillaItem: 'Rupees (20)'
  },
  'Ganons Castle MQ Shadow Trial Bomb Flower Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x00',
    addresses: null,
    vanillaItem: 'Arrows (10)'
  },
  'Ganons Castle MQ Shadow Trial Eye Switch Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x05',
    addresses: null,
    vanillaItem: 'Small Key (Ganons Castle)'
  },
  'Ganons Castle MQ Light Trial Lullaby Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x04',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Ganons Castle MQ Spirit Trial First Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x0a',
    addresses: null,
    vanillaItem: 'Bombchus (10)'
  },
  'Ganons Castle MQ Spirit Trial Invisible Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x14',
    addresses: null,
    vanillaItem: 'Arrows (10)'
  },
  'Ganons Castle MQ Spirit Trial Sun Front Left Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x09',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Ganons Castle MQ Spirit Trial Sun Back Left Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x08',
    addresses: null,
    vanillaItem: 'Small Key (Ganons Castle)'
  },
  'Ganons Castle MQ Spirit Trial Sun Back Right Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x07',
    addresses: null,
    vanillaItem: 'Recovery Heart'
  },
  'Ganons Castle MQ Spirit Trial Golden Gauntlets Chest': {
    type: 'Chest',
    scene: '0x0d',
    default: '0x06',
    addresses: null,
    vanillaItem: 'Progressive Strength Upgrade'
  },
  'Ganons Castle MQ Deku Scrub Left': {
    type: 'NPC',
    scene: '0x0d',
    default: '0x3a',
    addresses: null,
    vanillaItem: 'Buy Green Potion'
  },
  'Ganons Castle MQ Deku Scrub Center-Left': {
    type: 'NPC',
    scene: '0x0d',
    default: '0x37',
    addresses: null,
    vanillaItem: 'Buy Bombs (5) [35]'
  },
  'Ganons Castle MQ Deku Scrub Center': {
    type: 'NPC',
    scene: '0x0d',
    default: '0x33',
    addresses: null,
    vanillaItem: 'Buy Arrows (30)'
  },
  'Ganons Castle MQ Deku Scrub Center-Right': {
    type: 'NPC',
    scene: '0x0d',
    default: '0x39',
    addresses: null,
    vanillaItem: 'Buy Red Potion [30]'
  },
  'Ganons Castle MQ Deku Scrub Right': {
    type: 'NPC',
    scene: '0x0d',
    default: '0x30',
    addresses: null,
    vanillaItem: 'Buy Deku Nut (5)'
  },
  'Ganons Tower Boss Key Chest': {
    type: 'Chest',
    scene: '0x0a',
    default: '0x0b',
    addresses: null,
    vanillaItem: 'Boss Key (Ganons Castle)'
  },
  Pierre: {
    type: 'Event',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Scarecrow Song'
  },
  'Deliver Rutos Letter': {
    type: 'Event',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Deliver Letter'
  },
  'Master Sword Pedestal': {
    type: 'Event',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Time Travel'
  },
  'Deku Baba Sticks': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Deku Stick Drop'
  },
  'Deku Baba Nuts': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Deku Nut Drop'
  },
  'Stick Pot': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Deku Stick Drop'
  },
  'Nut Pot': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Deku Nut Drop'
  },
  'Nut Crate': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Deku Nut Drop'
  },
  'Blue Fire': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Blue Fire'
  },
  'Lone Fish': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Fish'
  },
  'Fish Group': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Fish'
  },
  'Bug Rock': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Bugs'
  },
  'Bug Shrub': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Bugs'
  },
  'Wandering Bugs': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Bugs'
  },
  'Fairy Pot': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Fairy'
  },
  'Free Fairies': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Fairy'
  },
  'Wall Fairy': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Fairy'
  },
  'Butterfly Fairy': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Fairy'
  },
  'Gossip Stone Fairy': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Fairy'
  },
  'Bean Plant Fairy': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Fairy'
  },
  'Fairy Pond': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Fairy'
  },
  'Big Poe Kill': {
    type: 'Drop',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: 'Big Poe'
  },
  'DMC Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'DMT Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'Colossus Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'Dodongos Cavern Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'GV Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'GC Maze Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'GC Medigoron Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'Graveyard Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'HC Malon Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'HC Rock Wall Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'HC Storms Grotto Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'HF Cow Grotto Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'KF Deku Tree Gossip Stone (Left)': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'KF Deku Tree Gossip Stone (Right)': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'KF Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'LH Lab Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'LH Gossip Stone (Southeast)': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'LH Gossip Stone (Southwest)': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'LW Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'SFM Maze Gossip Stone (Lower)': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'SFM Maze Gossip Stone (Upper)': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'SFM Saria Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'ToT Gossip Stone (Left)': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'ToT Gossip Stone (Left-Center)': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'ToT Gossip Stone (Right)': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'ToT Gossip Stone (Right-Center)': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'ZD Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'ZF Fairy Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'ZF Jabu Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'ZR Near Grottos Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'ZR Near Domain Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'HF Near Market Grotto Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'HF Southeast Grotto Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'HF Open Grotto Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'Kak Open Grotto Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'ZR Open Grotto Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'KF Storms Grotto Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'LW Near Shortcuts Grotto Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'DMT Storms Grotto Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'DMC Upper Grotto Gossip Stone': {
    type: 'HintStone',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  },
  'Ganondorf Hint': {
    type: 'Hint',
    scene: null,
    default: null,
    addresses: null,
    vanillaItem: null
  }
};