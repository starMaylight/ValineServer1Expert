onEvent("recipes", (event) => {
  event.remove({output:'#forge:ingots/aluminum', type: 'minecraft:blasting'})
  event.remove({output:'#forge:ingots/aluminum', type: 'minecraft:smelting'})
  event.remove({output:'#forge:ingots/aluminum', type: 'minecraft:smelting'})
  let removebyids = [
    'immersiveengineering:metalpress/electrode',
    'tconstruct:smeltery/melting/metal/aluminum/dust',
    'tconstruct:smeltery/melting/metal/aluminum/ore_singular',
    'tconstruct:smeltery/melting/metal/aluminum/raw',
    'tconstruct:smeltery/melting/metal/aluminum/raw_block',
    'productivebees:tconstruct/honeycomb/aluminum',
    'thermal:compat/create_ie/smelter_create_ie_crushed_raw_aluminum',
    'thermal:compat/immersiveengineering/smelter_ie_raw_aluminum',
    'thermal:compat/immersiveengineering/smelter_ie_aluminum_ore',
    'thermal:compat/immersiveengineering/smelter_ie_aluminum_dust'
  ]
removebyids.forEach((name) => {
    event.remove({id: name})
    })
    let removebyname = [
      'create:crushed_raw_platinum',
      'immersiveengineering:graphite_electrode',
      Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'),
        'immersiveengineering:heavy_engineering',
        'immersiveengineering:workbench',
        'create:crushed_raw_aluminum',
        'immersiveengineering:light_engineering',
        'immersiveengineering:blastbrick',
        'immersiveengineering:blastbrick_reinforced',
        'immersiveengineering:rs_engineering',
        'immersiveengineering:alloybrick',
        Item.of('immersiveengineering:blueprint', '{blueprint:"molds"}'),
        'immersiveengineering:component_electronic_adv'
    ]
    removebyname.forEach((name) => {
        event.remove({output: name})
        })
    event.remove({id:'immersiveengineering:crafting/stick_steel'})
    event.shaped('immersiveengineering:light_engineering', [
      'ABA',
      'CDC',
      'ABA'
    ], {
      D:'immersiveengineering:coil_lv',
      A:'immersiveengineering:concrete',
      B:'thermal:machine_frame',
      C:'immersiveengineering:component_iron'
      })
  event.custom({"type": "pneumaticcraft:pressure_chamber",
      "inputs": [{"type": "pneumaticcraft:stacked_item","count": 2,"tag": "forge:coal_coke"},
        {"tag": "forge:ingots/compressed_iron"}],"pressure": 2.5,
      "results": [{"item": "immersiveengineering:ingot_steel"}]})
  event.shaped('immersiveengineering:blastbrick_reinforced',[
    ['#forge:plates/steel','#forge:plates/steel','#forge:plates/steel'],
    ['botania:metamorphic_swamp_stone','minecraft:nether_bricks','botania:metamorphic_swamp_stone'],
    ['botania:metamorphic_swamp_stone','minecraft:magma_block','botania:metamorphic_swamp_stone']
  ])
  event.shaped('immersiveengineering:rs_engineering', [
    'ABA',
    'BDB',
    'ABA'
  ], {
    D:'valine_s1ex:eliminated_core',
    A:'immersiveengineering:sheetmetal_steel',
    B:'valine_s1ex:redalloy_ingot'
    })
  event.recipes.create.compacting(['immersiveengineering:mold_packing_4','thermal:press_packing_2x2_die'],['#forge:plates/steel','thermal:press_packing_2x2_die'])
  event.recipes.create.compacting(['immersiveengineering:mold_packing_9','thermal:press_packing_3x3_die'],['#forge:plates/steel','thermal:press_packing_3x3_die'])
  event.recipes.create.compacting('immersiveengineering:mold_wire',['#forge:plates/steel','tconstruct:wire_cast'])
  event.recipes.create.compacting('immersiveengineering:mold_rod',['#forge:plates/steel','tconstruct:rod_cast'])
  event.recipes.create.compacting('immersiveengineering:mold_plate',['#forge:plates/steel','tconstruct:plate_cast'])
  event.recipes.create.compacting('immersiveengineering:mold_bullet_casing',['#forge:plates/steel','immersiveengineering:empty_shell'])
  event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"molds"}'), [
    ' D ',
    'BBB',
    'AAA'
  ], {
    D:'#forge:plates/steel',
    A:'#forge:plates/polyvinyl_chloride',
    B:'minecraft:glow_ink_sac'
    })
  event.shaped('immersiveengineering:heavy_engineering', [
    'ABA',
    'BDB',
    'ABA'
  ], {
    D:'immersiveengineering:light_engineering',
    A:'immersiveengineering:blastbrick_reinforced',
    B:'#forge:plates/polyvinyl_chloride'
    })
  event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'), [
    'CDE',
    'BBB',
    'AAA'
  ], {
    D:'#forge:ingots/aluminum',
    A:'#forge:plates/polyvinyl_chloride',
    B:'minecraft:glow_ink_sac',
    C:'#forge:ingots/copper',
    E:'#forge:ingots/iron'
    })
  event.recipes.botania.runic_altar(Item.of('immersiveengineering:graphite_electrode', '{Unbreakable:1b,graphDmg:0}'), ['immersiveengineering:ingot_hop_graphite','immersiveengineering:gunpart_barrel','immersiveengineering:ingot_hop_graphite','valine_s1ex:mysterious_mixture','immersiveengineering:ingot_hop_graphite','cyclic:gem_obsidian','immersiveengineering:ingot_hop_graphite','thermal_extra:sticky_ball'], 100000)
  event.custom({
    "type": "immersiveengineering:blueprint",
    "inputs": [
      {
        "item": "immersiveengineering:circuit_board"
      },
      {
        "item": "immersiveengineering:plate_duroplast"
      },
      {
        "count":8,
        "base_ingredient": [{
        "item": "createaddition:capacitor"
      }]
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": "immersiveengineering:wirecoil_electrum"
      }]
      },
      {
        "count":2,
        "base_ingredient": [{
        "item": "immersiveengineering:electron_tube"
      }]
      },
      {
        "count":2,
        "base_ingredient": [{
        "item": "immersiveengineering:component_electronic"
      }]
      }
    ],
    "category": "components",
    "result": {
      "item": "immersiveengineering:component_electronic_adv"
    }
      
  })
  event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"miscs"}'), [
    ' C ',
    'BBB',
    'AAA'
  ], {
    A:'#forge:plates/polyvinyl_chloride',
    B:'minecraft:glow_ink_sac',
    C:'botania:rune_mana'
    })
  event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"circuit"}'), [
    ' C ',
    'BBB',
    'AAA'
  ], {
    A:'#forge:plates/polyvinyl_chloride',
    B:'minecraft:glow_ink_sac',
    C:'industrialforegoing:machine_frame_pity'
      })
  event.shapeless('immersiveengineering:graphite_electrode',Item.of('immersiveengineering:graphite_electrode', '{Unbreakable:1b,graphDmg:0}'))
  event.custom({
  "type": "extendedcrafting:shaped_ender_crafter",
  "pattern": [
    "A B",
    "CCC",
    "D E"
  ],
  "key": {
    "A": {
      "type": "forge:nbt",
      "item": "immersiveengineering:grindingdisk",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "B": {
      "item": "chemlib:polyvinyl_chloride_plate"
    },
    "C": {
      "item": "immersiveengineering:slab_treated_wood_horizontal"
    },
    "D": {
      "item": "immersiveengineering:craftingtable"
    },
    "E": {
      "item": "immersiveengineering:treated_fence"
    }
  },
  "result": {
    "item": 'immersiveengineering:workbench'
  }
})
event.recipes.mekanism.sawing('4x immersiveengineering:plate_duroplast','immersiveengineering:duroplast', 'immersiveengineering:plate_duroplast')
event.recipes.mekanism.combining('immersiveengineering:circuit_board', 'immersiveengineering:plate_duroplast', '#forge:plates/copper')
  event.recipes.mekanism.sawing('2x immersiveengineering:wire_electrum', '#forge:ingots/electrum')
  event.recipes.mekanism.sawing('2x immersiveengineering:wire_copper', '#forge:ingots/copper')
  event.recipes.mekanism.sawing('2x immersiveengineering:wire_lead', '#forge:ingots/lead')
  event.recipes.mekanism.sawing('2x immersiveengineering:wire_aluminum', '#forge:ingots/aluminum')
  event.recipes.mekanism.sawing('2x immersiveengineering:wire_steel', '#forge:ingots/steel')
})