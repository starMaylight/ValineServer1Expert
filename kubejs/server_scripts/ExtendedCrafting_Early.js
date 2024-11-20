onEvent("recipes", (event) => {
  event.remove({ output:'extendedcrafting:crafting_core' })
  event.remove({ output:'extendedcrafting:pedestal' })
  event.remove({ output:'extendedcrafting:compressor'})
  event.remove({ output:'extendedcrafting:ender_crafter'})
  event.remove({ output:'extendedcrafting:ender_alternator' })
  event.remove({ id:'extendedcrafting:black_iron_ingot' })
  event.remove({ id:'extendedcrafting:redstone_ingot' })
  event.remove({ output:'extendedcrafting:black_iron_slate'})
  event.remove({ output:'extendedcrafting:elite_component'})
  event.remove({ output:'extendedcrafting:advanced_component'})
  event.remove({ output:'extendedcrafting:basic_component'})
  event.remove({ output:'extendedcrafting:ultimate_component'})
  event.remove({ output:'extendedcrafting:luminessence'})
  event.remove({ output:'avaritia:crystal_matrix_ingot'})
  event.remove({ output:'avaritia:diamond_lattice'})
  event.remove({ output:'extendedcrafting:ender_ingot'})
  event.remove({ output:'extendedcrafting:ender_star'})
  event.remove({ output:'packagedexcrafting:basic_crafter'})
  event.remove({ output:'packagedexcrafting:advanced_crafter'})
  event.remove({ output:'packagedexcrafting:elite_crafter'})
  event.remove({ output:'packagedexcrafting:ultimate_crafter'})
  event.remove({ output:'extendedcrafting:crystaltine_ingot'})
  
  event.shaped('extendedcrafting:crafting_core' ,
    [
      'ABA',
      'CDC',
      'AEA'
    ], {
      'A':'rftoolsbase:infused_diamond',
      'B':'thermal_extra:upgrade_augment',
      'C':'extrautilitiesrebirth:octuple_compressed_cobblestone',
      'D':'extrautilitiesrebirth:diamond_edged_computational_matrix',
      'E':'extrautilitiesrebirth:bedrock_drum'
      }
    )
    event.shaped('extendedcrafting:pedestal', [
      ' A ',
      ' A ',
      'BSB'
    ], {
      A:'extrautilitiesrebirth:bedrockium_ingot',
      B:'extrautilitiesrebirth:quartzburnt',
      S:'thermal_extra:dragonsteel_glass'})
  event.shaped('extendedcrafting:ender_crafter' ,
        [
          'ABA',
          'CDC',
          'AEA'
        ], {
          'A':'extrautilitiesrebirth:ender_infused_obsidian',
          'B':'cyclic:ender_eye_reuse',
          'C':'thermal:flux_capacitor',
          'D':'extrautilitiesrebirth:diamond_edged_computational_matrix',
          'E':'thermal_extra:sticky_ball'
        })
  event.shaped('extendedcrafting:ender_alternator', [
      ' S ',
      'ABA',
      'BBB'
    ], {
      A:'thermal_extra:fluid_tank_augment_6',
      B:'extrautilitiesrebirth:ender_infused_obsidian',
      S:'extrautilitiesrebirth:diamond_edged_computational_matrix'})
  event.shaped('extendedcrafting:compressor',
        [
          'ABA',
          'CDC',
          'ACA'
        ], {
          'A':'valine_s1ex:sturdy_sheet_block',
          'B':'thermal:item_buffer',
          'C':'valine_s1ex:azure_menril_ingot',
          'D':'thermal:machine_frame'
        })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCDEFGHI",
      "JKLMNOPQR",
      "STUVWXYZa",
      "bcdefghij",
      "klmnopqrs",
      "tuvwxyz01",
      "23456789+",
      "         ",
      "         "
    ],
    "key": {
      "A": {
        "item": "minecraft:iron_ingot"
      },
      "B": {
        "item": "minecraft:copper_ingot"
      },
      "C": {
        "item": "minecraft:gold_ingot"
      },
      "D": {
        "item": "minecraft:netherite_ingot"
      },
      "E": {
        "item": "botania:manasteel_ingot"
      },
      "F": {
        "item": "botania:terrasteel_ingot"
      },
      "G": {
        "item": "botania:elementium_ingot"
      },
      "H": {
        "item": "botania:gaia_ingot"
      },
      "I": {
        "item": "create:zinc_ingot"
      },
      "J": {
        "item": "create:brass_ingot"
      },
      "K": {
        "item": "draconicevolution:draconium_ingot"
      },
      "L": {
        "item": "draconicevolution:awakened_draconium_ingot"
      },
      "M": {
        "item": "extrautilitiesrebirth:enchanted_ingot"
      },
      "N": {
        "item": "extrautilitiesrebirth:bedrockium_ingot"
      },
      "O": {
        "item": "extrautilitiesrebirth:evil_infused_iron_ingot"
      },
      "P": {
        "item": "extrautilitiesrebirth:unstable_ingot"
      },
      "Q": {
        "item": "immersiveengineering:ingot_hop_graphite"
      },
      "R": {
        "item": "immersiveengineering:ingot_aluminum"
      },
      "S": {
        "item": "immersiveengineering:ingot_lead"
      },
      "T": {
        "item": "immersiveengineering:ingot_silver"
      },
      "U": {
        "item": "immersiveengineering:ingot_nickel"
      },
      "V": {
        "item": "immersiveengineering:ingot_uranium"
      },
      "W": {
        "item": "immersiveengineering:ingot_constantan"
      },
      "X": {
        "item": "immersiveengineering:ingot_electrum"
      },
      "Y": {
        "item": "immersiveengineering:ingot_steel"
      },
      "Z": {
        "item": "industrialforegoing:pink_slime_ingot"
      },
      "a": {
        "item": "lazierae2:fluix_steel_ingot"
      },
      "b": {
        "item": "mekanism:ingot_bronze"
      },
      "c": {
        "item": "mekanism:ingot_refined_obsidian"
      },
      "d": {
        "item": "mekanism:ingot_refined_glowstone"
      },
      "e": {
        "item": "mekanism:ingot_osmium"
      },
      "f": {
        "item": "mekanism:ingot_tin"
      },
      "g": {
        "item": "mysticalagradditions:insanium_ingot"
      },
      "h": {
        "item": "mysticalagriculture:prosperity_ingot"
      },
      "i": {
        "item": "mysticalagriculture:inferium_ingot"
      },
      "j": {
        "item": "mysticalagriculture:prudentium_ingot"
      },
      "k": {
        "item": "mysticalagriculture:tertium_ingot"
      },
      "l": {
        "item": "mysticalagriculture:imperium_ingot"
      },
      "m": {
        "item": "mysticalagriculture:soulium_ingot"
      },
      "n": {
        "item": "mysticalagriculture:supremium_ingot"
      },
      "o": {
        "item": "pneumaticcraft:ingot_iron_compressed"
      },
      "p": {
        "item": "thermal:rose_gold_ingot"
      },
      "q": {
        "item": "thermal:invar_ingot"
      },
      "r": {
        "item": "thermal:signalum_ingot"
      },
      "s": {
        "item": "thermal:lumium_ingot"
      },
      "t": {
        "item": "thermal:enderium_ingot"
      },
      "u": {
        "item": "thermal_extra:soul_infused_ingot"
      },
      "v": {
        "item": "thermal_extra:shellite_ingot"
      },
      "w": {
        "item": "thermal_extra:twinite_ingot"
      },
      "x": {
        "item": "thermal_extra:dragonsteel_ingot"
      },
      "y": {
        "item": "tconstruct:cobalt_ingot"
      },
      "z": {
        "item": "tconstruct:slimesteel_ingot"
      },
      "0": {
        "item": "tconstruct:amethyst_bronze_ingot"
      },
      "1": {
        "item": "tconstruct:pig_iron_ingot"
      },
      "2": {
        "item": "tconstruct:queens_slime_ingot"
      },
      "3": {
        "item": "tconstruct:manyullyn_ingot"
      },
      "4": {
        "item": "tconstruct:hepatizon_ingot"
      },
      "5": {
        "item": "valine_s1ex:osmiridium_ingot"
      },
      "6": {
        "item": "valine_s1ex:nichrome_ingot"
      },
      "7": {
        "item": "valine_s1ex:tungstain_carbite_ingot"
      },
      "8": {
        "item": "valine_s1ex:azure_menril_ingot"
      },
      "9": {
        "item": "valine_s1ex:redalloy_ingot"
      },
      "+": {
        "item": "valine_s1ex:chrome_ingot"
      }
    },
    "result": {
      "item": "extendedcrafting:the_ultimate_ingot"
    }
  })
  event.custom({
    "type": "pneumaticcraft:heat_frame_cooling",
    "input": {
      "type": "pneumaticcraft:fluid",
      "fluid": "valine_s1ex:molten_midnight",
      "amount": 1000
    },
    "max_temp": 273,
    "result": {
      "item": "extendedcrafting:black_iron_ingot"
    }
  })
  event.custom({
    "type": "mekanism:reaction",
    "itemInput": {
     "item":"extendedcrafting:black_iron_ingot"
    },
    "fluidInput": {
      "amount": 1000,
      "tag": "forge:deuterium"
    },
    "gasInput": {
      "amount": 1000,
      "gas": "mekaradio:americium"
    },
    "duration": 900,
    "itemOutput": {
      "item": "extendedcrafting:redstone_ingot",
      "count": 1
    },
    "gasOutput": {
      "gas": "mekanism:hydrogen",
      "amount": 1000
    }
  })
  
    event.recipes.thermal.press('extendedcrafting:black_iron_slate', ['extendedcrafting:black_iron_block'])
    event.recipes.immersiveengineering.metal_press('extendedcrafting:black_iron_slate', 'extendedcrafting:black_iron_block', 'immersiveengineering:mold_plate')
    event.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "input": {
        "item": "valine_s1ex:enritched_sunnarium_alloy"
      },
      "ingredients": [
        {
          "item": "lazierae2:carbonic_fluix_dust"
        },
        {
          "item": "lazierae2:carbonic_fluix_dust"
        },
        {
          "item": "tconstruct:glow_ball"
        },
        {
          "item": "tconstruct:glow_ball"
        },
        {
          "item": "lazierae2:carbonic_fluix_dust"
        },
        {
          "item": "lazierae2:carbonic_fluix_dust"
        },
        {
          "item": "tconstruct:glow_ball"
        },
        {
          "item": "tconstruct:glow_ball"
        }
      ],
      "result": {
        "item": "extendedcrafting:luminessence",
        "count":8
      }
    })
    event.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000000,
      "input": {
        "item": "extendedcrafting:elite_component"
      },
      "ingredients": [
        {
          "item": "botania:rune_earth"
        },
        {
          "item": "valine_s1ex:highend_circuit"
        },
        {
          "item": "valine_s1ex:enritched_sunnarium_alloy"
        },
        {
          "item": "extendedcrafting:luminessence"
        }
      ],
      "result": {
        "item": "extendedcrafting:ultimate_component"
      }
    })
    event.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000000,
      "input": {
        "item": "extendedcrafting:black_iron_slate"
      },
      "ingredients": [
        {
          "item": "botania:rune_fire"
        },
        {
          "item": "valine_s1ex:highend_circuit"
        },
        {
          "item": "valine_s1ex:enritched_sunnarium_alloy"
        },
        {
          "item": "extendedcrafting:luminessence"
        }
      ],
      "result": {
        "item": "extendedcrafting:basic_component"
      }
    })
    event.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000000,
      "input": {
        "item": "extendedcrafting:basic_component"
      },
      "ingredients": [
        {
          "item": "botania:rune_air"
        },
        {
          "item": "valine_s1ex:highend_circuit"
        },
        {
          "item": "valine_s1ex:enritched_sunnarium_alloy"
        },
        {
          "item": "extendedcrafting:luminessence"
        }
      ],
      "result": {
        "item": "extendedcrafting:advanced_component"
      }
    })
    event.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000000,
      "input": {
        "item": "extendedcrafting:advanced_component"
      },
      "ingredients": [
        {
          "item": "botania:rune_water"
        },
        {
          "item": "valine_s1ex:highend_circuit"
        },
        {
          "item": "valine_s1ex:enritched_sunnarium_alloy"
        },
        {
          "item": "extendedcrafting:luminessence"
        }
      ],
      "result": {
        "item": "extendedcrafting:elite_component"
      }
    })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      "      AAA",
      "   AAABCA",
      "AAACBCCBA",
      "ACBBCBBCA",
      "ABCCBCAAA",
      "ACBAAA   ",
      "AAA      ",
      "         "
    ],
    "key": {
      "A": {
        "item": "botania:mana_diamond"
      },
      "B": {
        "item": "valine_s1ex:fractual_mix"
      },
      "C": {
        "item": "avaritia:diamond_lattice"
      }
    },
    "result": {
      "item": "avaritia:crystal_matrix_ingot"
    }
  })
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter",
    "pattern": [
      "ABA",
      "BCB",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "botania:mana_diamond_block"
      },
      "B": {
        "item": "chemlib:polyvinyl_chloride_plate"
      },
      "C": {
        "item": "rftoolsbase:infused_diamond"
      }
    },
    "result": {
      "item": "avaritia:diamond_lattice"
    }
  })
  event.custom({
    "type": "extendedcrafting:shapeless_ender_crafter",
    "ingredients": [
      {
        "item": "ae2:singularity"
      },
      {
        "item": "thermal:enderium_ingot"
      },
      {
        "item": "cyclic:chorus_spectral"
      }
    ],
    "result": {
      "item": "extendedcrafting:ender_ingot"
    }
  })
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter",
    "pattern": [
      "ABA",
      "BCB",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "powah:ender_core"
      },
      "B": {
        "item": "valine_s1ex:ether_crystal"
      },
      "C": {
        "item": "minecraft:nether_star"
      }
    },
    "result": {
      "item": "extendedcrafting:ender_star"
    }
  })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABA",
      "CDE",
      "AFA"
    ],
    "key": {
      "A": {
        "item": "extendedcrafting:black_iron_ingot"
      },
      "B": {
        "item": "extendedcrafting:basic_auto_table"
      },
      "C": {
        "item": "extendedcrafting:crystaltine_catalyst"
      },
      "D": {
        "item": "extendedcrafting:frame"
      },
      "E": {
        "item": "extendedcrafting:redstone_catalyst"
      },
      "F": {
        "item": "packagedauto:me_package_component"
      }
    },
    "result": {
      "item": 'packagedexcrafting:basic_crafter'
    }
  })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCBA",
      "DEFED",
      "CGHGC",
      "DEFED",
      "ABCBA"
    ],
    "key": {
      "A": {
        "item": "extendedcrafting:black_iron_ingot"
      },
      "B": {
        "item": "extendedcrafting:crystaltine_catalyst"
      },
      "C": {
        "item": "extendedcrafting:redstone_catalyst"
      },
      "D": {
        "item": "extendedcrafting:luminessence"
      },
      "E": {
        "item": "extendedcrafting:advanced_catalyst"
      },
      "F": {
        "item": "extendedcrafting:frame"
      },
      "G": {
        "item": "packagedexcrafting:basic_crafter"
      },
      "H": {
        "item": "extendedcrafting:advanced_auto_table"
      }
    },
    "result": {
      "item": 'packagedexcrafting:advanced_crafter'
    }
  })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABCBAA",
      "ADEFEDA",
      "BGHIHGB",
      "CFIJIFC",
      "BGHIHGB",
      "ADEFEDA",
      "AABCBAA"
    ],
    "key": {
      "A": {
        "item": "extendedcrafting:black_iron_ingot"
      },
      "B": {
        "item": "extendedcrafting:ender_star"
      },
      "C": {
        "item": "extendedcrafting:luminessence_block"
      },
      "D": {
        "item": "extendedcrafting:elite_catalyst"
      },
      "E": {
        "item": "extendedcrafting:crystaltine_catalyst"
      },
      "F": {
        "item": "extendedcrafting:frame"
      },
      "G": {
        "item": "extendedcrafting:redstone_catalyst"
      },
      "H": {
        "item": "packagedexcrafting:advanced_crafter"
      },
      "I": {
        "item": "mysticalagradditions:creative_essence"
      },
      "J": {
        "item": "extendedcrafting:elite_auto_table"
      }
    },
    "result": {
      "item": 'packagedexcrafting:elite_crafter'
    }
  })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCDEDCBA",
      "BFGDHDGFB",
      "CGIJBJIGC",
      "DDJDIDJDD",
      "EHBIKIBHE",
      "DDJDIDJDD",
      "CGIJBJIGC",
      "BFGDHDGFB",
      "ABCDEDCBA"
    ],
    "key": {
      "A": {
        "item": "extendedcrafting:black_iron_block"
      },
      "B": {
        "item": "extendedcrafting:black_iron_ingot"
      },
      "C": {
        "item": "extendedcrafting:ultimate_catalyst"
      },
      "D": {
        "item": "mysticalagradditions:creative_essence"
      },
      "E": {
        "item": "extendedcrafting:redstone_catalyst"
      },
      "F": {
        "item": "extendedcrafting:luminessence_block"
      },
      "G": {
        "item": "extendedcrafting:luminessence"
      },
      "H": {
        "item": "extendedcrafting:crystaltine_catalyst"
      },
      "I": {
        "item": "packagedexcrafting:elite_crafter"
      },
      "J": {
        "item": "extendedcrafting:frame"
      },
      "K": {
        "item": "extendedcrafting:ultimate_auto_table"
      }
    },
    "result": {
      "item":'packagedexcrafting:ultimate_crafter'
    }
  })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      "      AAB",
      "   AAACDB",
      "BAAEFECDG",
      "BDCFHFCDB",
      "GDCEFEAAB",
      "BDCAAA   ",
      "BAA      ",
      "         "
    ],
    "key": {
      "A": {
        "item": "create_enchantment_industry:hyper_experience_bottle"
      },
      "B": {
        "item": "rftoolsbase:infused_diamond"
      },
      "C": {
        "item": "valine_s1ex:empowered_lapis"
      },
      "D": {
        "item": "extrautilitiesrebirth:lunar_reactive_dust"
      },
      "E": {
        "item": "valine_s1ex:enritched_sunnarium_alloy"
      },
      "F": {
        "item": "botania:corporea_crystal_cube"
      },
      "G": {
        "item": "botania:mana_diamond"
      },
      "H": {
        "item": "extendedcrafting:enhanced_ender_ingot_block"
      }
    },
    "result": {
      "item": 'extendedcrafting:crystaltine_ingot'
    }
  })
});
