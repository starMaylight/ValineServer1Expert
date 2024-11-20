const BlueprintCraftingRecipe = java("blusunrize.immersiveengineering.api.crafting.BlueprintCraftingRecipe")
onEvent("recipes", (event) => {
let removebyname = [
    'botania:runic_altar',
    'botania:apothecary_default',
    'botania:livingrock',
    'botania:mana_pool',
    'botania:endoflame',
    'botania:livingwood_log',
    'botania:redstone_root',
    'botania:rune_water',
    'botania:rune_fire',
    'botania:rune_earth',
    'botania:rune_air',
    'botania:third_eye',
    'botania:terra_plate',
    'botania:terrasteel_ingot',
    'botanicalmachinery:mechanical_daisy',
    'botanicalmachinery:mechanical_runic_altar',
    'botanicalmachinery:mana_battery',
    'botanicalmachinery:mechanical_mana_pool',
    'botanicalmachinery:mechanical_brewery',
    'botanicalmachinery:mechanical_apothecary',
    'botanicalmachinery:industrial_agglomeration_factory',
    'botanicalmachinery:alfheim_market'
]
removebyname.forEach((name) => {
    event.remove({output: name})
    })
let removebyids = [
    'botania:pure_daisy/livingwood',
    'botania:mana_infusion/manasteel',
    'botania:mana_infusion/manasteel_block'
]
removebyids.forEach((name) => {
    event.remove({id: name})
    })
    if (!BlueprintCraftingRecipe.recipeCategories.contains("miscs")) {
      BlueprintCraftingRecipe.recipeCategories.add("miscs")}
event.shaped('botania:apothecary_default', [
      'ABA',
      ' A ',
      'AAA'
    ], {
      A:'#forge:storage_blocks/andesite_alloy',
      B:'valine_s1ex:stabilized_core'
      })
event.recipes.botania.pure_daisy('botania:livingwood_log','integrateddynamics:menril_log_filled')
event.recipes.botania.pure_daisy('botania:livingrock','create:andesite_alloy_block')
event.shaped('botania:mana_pool', [
    '   ',
    'ABA',
    'AAA'
  ], {
    A:'botania:livingrock',
    B:'create_enchantment_industry:experience_rotor'
    })
    event.custom({
        "type": "immersiveengineering:bottling_machine",
        "fluid": {
          "amount": 1000,
          "tag": "forge:redstone_acid"
        },
        "input": {
          "item": "botania:livingwood_twig"
        },
        "results": [
          {
            "item": "botania:redstone_root"
          }
        ]
      })
event.shaped('botania:runic_altar', [
        '   ',
        'AAA',
        'ASA'
      ], {
        S: 'valine_s1ex:mysterious_mixture',
        A: 'botania:livingrock'})
    event.recipes.botania.runic_altar('botania:rune_water', ['thermal:ice_charge','valine_s1ex:cryotheum_dust','minecraft:blue_ice', 'botania:mana_powder','botania:manasteel_ingot'], 20000)
    event.recipes.botania.runic_altar('botania:rune_fire', ['minecraft:fire_charge','valine_s1ex:pyrotheum_dust','tconstruct:blazewood', 'botania:mana_powder','botania:manasteel_ingot'], 20000)
    event.recipes.botania.runic_altar('botania:rune_earth', ['thermal:earth_charge','valine_s1ex:petrotheum_dust','tconstruct:mud_bricks', 'botania:mana_powder','botania:manasteel_ingot'], 20000)
    event.recipes.botania.runic_altar('botania:rune_air', ['thermal:lightning_charge','valine_s1ex:aerotheum_dust','minecraft:shroomlight', 'botania:mana_powder','botania:manasteel_ingot'], 20000)
    event.custom({
      "type": "immersiveengineering:blueprint",
      "inputs": [
        {
          "item": "botania:rune_fire"
        },
        {
          "item": "botania:rune_water"
        },
        {
          "item": "botania:rune_earth"
        },
        {
          "item": "botania:rune_air"
        },
        {
          "count": 3,
          "base_ingredient": [
        {
          "item": "botania:mana_diamond"
        },
        {
          "item": "botanicalmachinery:mana_emerald"
        }
      ]
        },
        {
          "item": "cyclic:ender_eye_reuse"
        }
      ],
      "category": "miscs",
      "result": {
        "item": "botania:third_eye"
      }
        
    })
  event.custom({
      "type": "extendedcrafting:shaped_ender_crafter",
      "pattern": [
        "ABA",
        "CDE",
        "FGH"
      ],
      "key": {
        "A": {
          "item": "valine_s1ex:empowered_lapis"
        },
        "B": {
          "item": "botania:third_eye"
        },
        "C": {
          "item": "botania:rune_water"
        },
        "D": {
          "item": "valine_s1ex:degenerate_symbols"
        },
        "E": {
          "item": "botania:rune_fire"
        },
        "F": {
          "item": "botania:rune_earth"
        },
        "G": {
          "item": "botania:rune_mana"
        },
        "H": {
          "item": "botania:rune_air"
        }
      },
      "result": {
        "item": "botania:terra_plate"
      }
    })
  event.recipes.botania.terra_plate("botania:terrasteel_ingot", ['valine_s1ex:degenerate_symbols','botania:manasteel_block', 'valine_s1ex:empowered_lapis'], 5000000)
  event.recipes.botania.mana_infusion('botania:manasteel_ingot','#forge:ingots/steel', 10000)
  event.recipes.botania.mana_infusion('#forge:storage_blocks/manasteel','#forge:storage_blocks/steel', 90000)
  event.shaped('botanicalmachinery:mechanical_apothecary', [
    'ABA',
    'BSB',
    'ACA'
  ], {
    A:'lazierae2:fluix_steel_ingot',
    S:'botania:apothecary_forest',
    C:'botanicalmachinery:mana_battery',
    B:'tconstruct:queens_slime_ingot'
    })
  event.shaped('botanicalmachinery:mechanical_brewery', [
      'ADA',
      'BSB',
      'ACA'
    ], {
      A:'lazierae2:fluix_steel_ingot',
      S:'botania:brewery',
      C:'botanicalmachinery:mana_battery',
      B:'botania:flask',
      D:'rftoolspower:blazing_rod'
      })
  event.shaped('botanicalmachinery:industrial_agglomeration_factory', [
      'ADA',
      'BSB',
      'ACA'
    ], {
      A:'lazierae2:fluix_steel_ingot',
      S:'botania:terra_plate',
      C:'botanicalmachinery:mana_battery',
      B:'valine_s1ex:botania_element_crystal',
      D:'botania:terrasteel_ingot'
      })
  event.shaped('botanicalmachinery:alfheim_market', [
      'ADA',
      'BSB',
      'ACA'
    ], {
      A:'lazierae2:fluix_steel_ingot',
      S:'botania:alfheim_portal',
      C:'botanicalmachinery:mana_battery',
      B:'botania:natura_pylon',
      D:'valine_s1ex:stabilized_core'
      })
  event.shaped('botanicalmachinery:mechanical_mana_pool', [
      'ABA',
      'BSB',
      'ACA'
    ], {
      A:'lazierae2:fluix_steel_ingot',
      S:'botania:fabulous_pool',
      C:'botanicalmachinery:mana_battery',
      B:'valine_s1ex:mysterious_mixture'
      })
  event.shaped('botanicalmachinery:mechanical_runic_altar', [
      'ADA',
      'BSB',
      'ACA'
    ], {
      A:'lazierae2:fluix_steel_ingot',
      S:'botania:runic_altar',
      C:'botanicalmachinery:mana_battery',
      B:'botania:gaia_spreader',
      D:'botania:turntable'
      })
  event.shaped('botanicalmachinery:mechanical_daisy', [
      'ABA',
      'BSB',
      'ACA'
    ], {
      A:'lazierae2:fluix_steel_ingot',
      S:'botania:floating_pure_daisy',
      C:'botanicalmachinery:mana_battery',
      B:'pneumaticcraft:plastic'
      })
  event.shaped('botanicalmachinery:mana_battery', [
      'ABA',
      'BSB',
      'ACA'
    ], {
      A:'industrialforegoing:pink_slime_ingot',
      S:'botania:mana_tablet',
      C:'industrialforegoing:machine_frame_advanced',
      B:'botania:gaia_ingot'
      })
})