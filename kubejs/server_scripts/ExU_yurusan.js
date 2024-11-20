onEvent('recipes', event => {
    event.remove({output:'extrautilitiesrebirth:resonator'})
    event.remove({output:'extrautilitiesrebirth:machine_block'})
    event.remove({output:'extrautilitiesrebirth:glass_cutter'})
    event.remove({output:'extrautilitiesrebirth:ender_marker'})
    event.remove({output:'extrautilitiesrebirth:ender_quarry_upgrade_base'})
    event.remove({output:'extrautilitiesrebirth:ender_thermic_pump'})
    event.remove({output:'extrautilitiesrebirth:ender_quarry'})
    event.shaped('extrautilitiesrebirth:resonator', [
        'AEA',
        'BCB',
        'BBB'
      ], {
        A: '#forge:dusts/cinnabar',
        B:'#forge:ingots/rose_gold',
        C:'extrautilitiesrebirth:redstone_crystal',
        E:'valine_s1ex:sturdy_sheet_block'
      })
    event.shaped('extrautilitiesrebirth:machine_block', [
        'AAA',
        'BSB',
        'BBB'
      ], {
        A: 'minecraft:iron_ingot',
        B:'extrautilitiesrebirth:quartzburnt',
        S:'thermal:machine_frame'
      })
    event.custom({
      "type": "extendedcrafting:shaped_ender_crafter",
      "pattern": [
        " A ",
        " B ",
        " B "
      ],
      "key": {
        "A": {
          "item": "minecraft:ender_pearl"
        },
        "B": {
          "item": "extrautilitiesrebirth:ender_infused_obsidian"
        }
      },
      "result": {
        "item": "extrautilitiesrebirth:ender_marker"
      }
    })
    event.custom({
      "type": "extendedcrafting:shaped_ender_crafter",
      "pattern": [
        " A ",
        "ABA",
        " A "
      ],
      "key": {
        "A": {
          "item": "extrautilitiesrebirth:ender_infused_obsidian"
        },
        "B": {
          "item": "extrautilitiesrebirth:octuple_compressed_cobblestone"
        }
      },
      "result": {
        "item": "extrautilitiesrebirth:ender_quarry_upgrade_base"
      }
    })
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter",
    "pattern": [
      "ABA",
      "CDC",
      "CEC"
    ],
    "key": {
      "A": {
        "item": "extrautilitiesrebirth:octuple_compressed_cobblestone"
      },
      "B": {
        "item": "extrautilitiesrebirth:ender_core"
      },
      "C": {
        "item": "extrautilitiesrebirth:ender_infused_obsidian"
      },
      "D": {
        "item": "industrialforegoing:machine_frame_pity"
      },
      "E": {
        "item": "immersiveengineering:fluid_pump"
      }
    },
    "result": {
      "item": "extrautilitiesrebirth:ender_thermic_pump"
    }
  })
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter",
    "pattern": [
      "ABA",
      "CDC",
      "EFE"
    ],
    "key": {
      "A": {
        "item": "simplemagnets:advancedmagnet"
      },
      "B": {
        "item": "extrautilitiesrebirth:ender_quarry_upgrade_base"
      },
      "C": {
        "item": "extrautilitiesrebirth:ender_thermic_pump"
      },
      "D": {
        "item": "industrialforegoing:machine_frame_simple"
      },
      "E": {
        "item": "createoreexcavation:netherite_drill"
      },
      "F": {
        "item": "createoreexcavation:drilling_machine"
      }
    },
    "result": {
      "item": "extrautilitiesrebirth:ender_quarry"
    }
  })
  event.shaped('extrautilitiesrebirth:dropof_evil', [
    ' A ',
    'ASA',
    ' A '
  ], {
    A: 'tconstruct:necrotic_bone',
    S:'minecraft:wither_rose'
  }).id("extrautilitiesrebirth:dropof_evil")
  event.shaped(Item.of('extrautilitiesrebirth:devision_sigil', '{Damage:0}'), [
    ' A ',
    'ASA',
    ' A '
  ], {
    A: 'minecraft:nether_star',
    S:'minecraft:dragon_egg'
  }).id("extrautilitiesrebirth:you_lie_a_lot")
})