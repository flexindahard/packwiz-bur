JEIEvents.hideItems(event => {
   const itemsToHide = [
   // remove ores that do not spawn due to IG
  'immersiveengineering:deepslate_ore_aluminum',
  'immersiveengineering:deepslate_ore_lead',
  'immersiveengineering:deepslate_ore_nickel',
  'immersiveengineering:deepslate_ore_silver',
  'immersiveengineering:deepslate_ore_uranium',
  'immersiveengineering:ore_aluminum',
  'immersiveengineering:ore_lead',
  'immersiveengineering:ore_nickel',
  'immersiveengineering:ore_silver',
  'immersiveengineering:ore_uranium',
  'immersiveengineering:raw_aluminum',
  'immersiveengineering:raw_block_aluminum',
  'immersiveengineering:raw_block_lead',
  'immersiveengineering:raw_block_nickel',
  'immersiveengineering:raw_block_silver',
  'immersiveengineering:raw_block_uranium',
  'immersiveengineering:raw_lead',
  'immersiveengineering:raw_nickel',
  'immersiveengineering:raw_silver',
  'immersiveengineering:raw_uranium',
  'minecraft:copper_ore',
  'minecraft:deepslate_copper_ore',
  'minecraft:deepslate_gold_ore',
  'minecraft:gold_ore',
  'minecraft:iron_ore',
  'minecraft:raw_copper',
  'minecraft:raw_copper_block',
  'minecraft:raw_gold',
  'minecraft:raw_gold_block',
  'minecraft:raw_iron',
  'minecraft:raw_iron_block',
  'minecraft:deepslate_iron_ore',
  'minecraft:nether_gold_ore',

  // grits that currently have no craft and no use from IG
  'immersivegeology:grit_aluminum', 
  'immersivegeology:grit_copper', 
  'immersivegeology:grit_gold', 
  'immersivegeology:grit_iron', 
  'immersivegeology:grit_lead', 
  'immersivegeology:grit_molten_mantle', 
  'immersivegeology:grit_molybdenum', 
  'immersivegeology:grit_nickel', 
  'immersivegeology:grit_rocksalt', 
  'immersivegeology:grit_saltpeter', 
  'immersivegeology:grit_silver', 
  'immersivegeology:grit_steel', 
  'immersivegeology:grit_uranium', 
  'immersivegeology:grit_vanadium'

  ]

  itemsToHide.forEach(item => event.hide(item))
})

