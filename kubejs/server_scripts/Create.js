onEvent('recipes', event => {
    event.remove({id:'tconstruct:compat/create/andesite_alloy_zinc'})
    event.remove({id:'tconstruct:compat/create/andesite_alloy_iron'})
    event.remove({id:'create:crafting/materials/andesite_alloy'})
    event.remove({id:'create:crafting/materials/andesite_alloy_from_zinc'})
    event.remove({output:'create:large_water_wheel'})
    event.remove({output:'create:empty_blaze_burner'})
    event.remove({output:'create:steam_engine'})
    event.remove({output:'create:brass_hand'})
    event.remove({output:'create:rose_quartz'})
        event.custom({
            "type": "pneumaticcraft:pressure_chamber",
            "inputs": [
              {
                "item": "valine_s1ex:andesite_with_iron"
              }
            ],
            "pressure": 4.8,
            "results": [
              {
                "item": "create:andesite_alloy"
              }
            ]
          })
    event.shaped('create:empty_blaze_burner', [
            'A A',
            'ASA',
            'BBB'
          ], {
            S: 'create:blaze_cake',
            A: 'createaddition:barbed_wire',
            B:'minecraft:netherrack'})
    event.shaped('create:steam_engine', [
                ' A ',
                'CSC',
                'BBB'
              ], {
                S: 'create:cogwheel',
                A: 'create:rotation_speed_controller',
                B:'immersiveengineering:sheetmetal_copper',
                C:'create:mechanical_piston'
    })
    event.shaped('create:brass_hand', [
        ' A ',
        'SSS',
        ' S '
      ], {
        S: 'create:brass_sheet',
        A: 'industrialforegoing:plastic'
        
})
event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "item": "minecraft:quartz"
      },
      {
        "type": "pneumaticcraft:stacked_item",
        "tag": "forge:dusts/cinnabar",
        "count": 4
      }
    ],
    "pressure": 4.0,
    "results": [
      {
        "item": "create:rose_quartz"
      }
    ]
  })
})