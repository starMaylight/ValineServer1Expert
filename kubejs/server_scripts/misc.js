onEvent("recipes", (event) => {
  event.remove({ mod: "cobblefordays" })
  event.remove({output:'naturescompass:naturescompass'})
  event.remove({output:'explorerscompass:explorerscompass'})
  event.remove({output:'constructionwand:stone_wand'})  
  event.remove({output:'constructionwand:iron_wand'})
  event.remove({output:'constructionwand:diamond_wand'})
  event.remove({output:'tiab:time_in_a_bottle'})
  event.remove({output:'torchmaster:megatorch'})
  event.remove({output:'fluxnetworks:flux_core'})
  event.remove({output:'hostilenetworks:empty_prediction'})
  event.remove({output:'hostilenetworks:loot_fabricator'})
  event.remove({output:'hostilenetworks:sim_chamber'})
  event.remove({output:'laserio:logic_chip_raw'})
  event.remove({output:'pipez:item_pipe'})
  event.remove({output:'pipez:fluid_pipe'})
  event.remove({output:'pipez:energy_pipe'})
  event.custom({
    "type": "tconstruct:retextured_casting_basin",
    "cast": {
      "item": "cobblefordays:tier_1"
    },
    "cast_consumed": true,
    "fluid": {
      "tag": "tconstruct:seared_stone",
      "amount": 1000
    },
    "result": "cobblefordays:tier_2",
    "cooling_time": 100
  })
  event.custom({
    "type": "tconstruct:retextured_casting_basin",
    "cast": {
      "item": "cobblefordays:tier_2"
    },
    "cast_consumed": true,
    "fluid": {
      "tag": "forge:molten_iron",
      "amount": 990
    },
    "result": "cobblefordays:tier_3",
    "cooling_time": 100
  })
  event.custom({
    "type": "tconstruct:retextured_casting_basin",
    "cast": {
      "item": "cobblefordays:tier_3"
    },
    "cast_consumed": true,
    "fluid": {
      "tag": "tconstruct:molten_gold",
      "amount": 990
    },
    "result": "cobblefordays:tier_4",
    "cooling_time": 100
  })
  event.custom({
    "type": "tconstruct:retextured_casting_basin",
    "cast": {
      "item": "cobblefordays:tier_4"
    },
    "cast_consumed": true,
    "fluid": {
      "tag": "tconstruct:molten_diamond",
      "amount": 1000
    },
    "result": "cobblefordays:tier_5",
    "cooling_time": 100
  })
  event.shaped('cobblefordays:tier_1', [
    'AAA',
    'BSC',
    'AAA'
  ], {
    S: '#forge:glass',
    A: '#minecraft:logs',
    B:'minecraft:lava_bucket',
    C:'minecraft:water_bucket'
  })
  event.shaped('naturescompass:naturescompass', [
    'ABA',
    'BSB',
    'ABA'
  ], {
    S:'minecraft:redstone',
    A:'#forge:sapling',
    B:'#minecraft:logs'
  })
  event.shaped('explorerscompass:explorerscompass', [
    'ABA',
    'BSB',
    'ABA'
  ], {
    S:'naturescompass:naturescompass',
    A:'minecraft:string',
    B:'#forge:cobblestone'
  })
  event.shaped('constructionwand:infinity_wand', [
    '  A',
    ' S ',
    'S  '
  ], {
    S:'minecraft:bamboo',
    A:'minecraft:ender_pearl'
  })
  event.shaped('tiab:time_in_a_bottle', [
    'AAA',
    'BSB',
    'BCB'
  ], {
    S:'valine_s1ex:stabilized_core',
    A:'minecraft:gold_ingot',
    B:'minecraft:netherite_ingot',
    C:Item.of('minecraft:lingering_potion', '{Potion:"cyclic:wither"}')
  })
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter",
    "pattern": [
      "ABC",
      "BDB",
      "BDB"
    ],
    "key": {
      "A": {
        "type": "forge:nbt",
        "item": "minecraft:potion",
        "count": 1,
        "nbt": "{Potion:\"minecraft:strong_regeneration\"}"
      },
      "B": {
        "item": "extrautilitiesrebirth:chandelier"
      },
      "C": {
        "type": "forge:nbt",
        "item": "minecraft:potion",
        "count": 1,
        "nbt": "{Potion:\"minecraft:strong_healing\"}"
      },
      "D": {
        "item": "extrautilitiesrebirth:bedrockium_ingot"
      }
    },
    "result": {
      "item": "torchmaster:megatorch"
    }
  })
  event.custom({
    "input": [
      {
        "item": "fluxnetworks:flux_dust"
      },
      {
        "item": "thermal:black_rockwool"
      },
      {
        "item": "fluxnetworks:flux_dust"
      },
      {
        "item": "thermal:black_rockwool"
      },
      {
        "item": "fluxnetworks:flux_dust"
      },
      {
        "item": "thermal:black_rockwool"
      },
      {
        "item": "fluxnetworks:flux_dust"
      },
      {
        "item": "thermal:black_rockwool"
      }
    ],
    "inputFluid": "{FluidName:\"valine_s1ex:unknown_darkmatter\",Amount:250}",
    "processingTime": 100,
    "output": {
      "item": "fluxnetworks:flux_core",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })
  event.custom(
    {
      "type": "lazierae2:infuser",
      "output": {
        "item": 'hostilenetworks:empty_prediction',
        "count": 12
      },
      "input": [
        {
          "item": 'thermal:iron_coin',
          "count": 1
        },
        {
          "item": "thermal:silver_coin",
          "count": 1
        },
        {
          "item": 'thermal:tin_coin',
          "count": 1
        }
      ],
      "process_time": 300,
      "energy_cost": 80000
    }
  )
  event.shaped('hostilenetworks:sim_chamber', [
    'AAA',
    'BSB',
    'CDC'
  ], {
    S:'industrialforegoing:machine_frame_supreme',
    A:Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:platinum"}'),
    B:'#forge:gears/diamond',
    C:'botania:piston_relay',
    D:'powah:energy_cell_nitro'
  })
  event.shaped('hostilenetworks:loot_fabricator', [
    'AAA',
    'BSB',
    'CDC'
  ], {
    S:'industrialforegoing:machine_frame_supreme',
    A:'extrautilitiesrebirth:dropof_evil',
    B:'industrialforegoing:mob_crusher',
    C:'valine_s1ex:handmade_circuit',
    D:Item.of('thermal:flux_capacitor', '{Active:0b,Augments:[{Count:1b,id:"thermal_extra:upgrade_augment"},{Count:1b,id:"thermal_extra:rf_coil_storage_augment_5"},{Count:0b,id:"minecraft:air"}],Energy:58500000,Properties:{BaseMod:4.5f,RFMax:26.0f,RFXfer:12.0f}}')
  })
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "valine_s1ex:redalloy_ingot"
      },
      "B": {
        "item": "thermal:rose_gold_plate"
      },
      "C": {
        "item": "create:rose_quartz_tiles"
      },
      "D": {
        "item": "lazierae2:logic_unit"
      }
    },
    "result": {
      "item": "laserio:logic_chip_raw",
      "count":4
    }
  })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCDEDCBA",
      "BFGHIHGFB",
      "CGJKLKJGC",
      "DHKMNMKHD",
      "EILNJNLIE",
      "DHKMNMKHD",
      "CGJKLKJGC",
      "BFGHIHGFB",
      "ABCDODCBA"
    ],
    "key": {
      "A": {
        "item": "draconicevolution:chaotic_crafting_injector"
      },
      "B": {
        "item": "mekaevolution:infinite_energy_cube"
      },
      "C": {
        "item": "mekanism:ultimate_induction_provider"
      },
      "D": {
        "item": "mekanism:ultimate_induction_cell"
      },
      "E": {
        "item": "draconicevolution:reactor_stabilizer"
      },
      "F": {
        "item": "solarpanels:photonic_solar_panel"
      },
      "G": {
        "item": "ironfurnaces:million_furnace"
      },
      "H": {
        "item": "megacells:mega_energy_cell"
      },
      "I": {
        "item": "mekanismgenerators:fusion_reactor_frame"
      },
      "J": {
        "item": "draconicevolution:chaotic_core"
      },
      "K": {
        "item": "mekanismgenerators:fission_fuel_assembly"
      },
      "L": {
        "item": "industrialforegoing:mycelial_reactor"
      },
      "M": {
        "item": "mekaevolution:infinite_control_circuit"
      },
      "N": {
        "item": "draconicevolution:reactor_core"
      },
      "O": {
        "item": "draconicevolution:reactor_injector"
      }
    },
    "result": {
      "item": 'exponentialpower:ender_storage'
    }
  })
  event.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": "valine_s1ex:souls_of_different_orders_of_magnitude"
    },
    "ingredients": [
      {
        "item": "valine_s1ex:enriched_antimatter_pellet"
      },
      {
        "item": "valine_s1ex:enriched_antimatter_pellet"
      }
    ],
    "result": {
      "item": 'exponentialpower:ender_cell'
    }
  })
  event.shaped('16x pipez:item_pipe', [
    'AAA',
    'BSB',
    'AAA'
  ], {
    S: 'integrateddynamics:cable',
    A: 'minecraft:iron_ingot',
    B:Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:item"}}')
  })
  event.shaped('16x pipez:energy_pipe', [
    'AAA',
    'BSB',
    'AAA'
  ], {
    S: 'integrateddynamics:cable',
    A: 'minecraft:iron_ingot',
    B:Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:energy"}}')
  })
  event.shaped('16x pipez:fluid_pipe', [
    'AAA',
    'BSB',
    'AAA'
  ], {
    S: 'integrateddynamics:cable',
    A: 'minecraft:iron_ingot',
    B:Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:fluid"}}')
  })
})
