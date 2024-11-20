//const BlueprintCraftingRecipe = java("blusunrize.immersiveengineering.api.crafting.BlueprintCraftingRecipe")
onEvent("recipes", (event) => {
  if (!BlueprintCraftingRecipe.recipeCategories.contains("circuit")) {
    BlueprintCraftingRecipe.recipeCategories.add("circuit")}
    event.shaped('valine_s1ex:andesite_with_iron', [
        'SA ',
        'AS ',
        '   '
      ], {
        S: 'minecraft:iron_nugget',
        A: '#forge:andesite'})
    event.shaped('valine_s1ex:sturdy_sheet_block', [
        'AAA',
        'A A',
        'AAA'
      ], {
        A: 'create:sturdy_sheet'
      })
    event.custom({
      "type": "create:filling",
      "ingredients": [{"item": "extrautilitiesrebirth:diamond_edged_computational_matrix"},
        {"fluid": "create_enchantment_industry:hyper_experience","amount": 250}],
      "results": [{"item": "valine_s1ex:eliminated_core"}]})  
    event.custom({"type":"createaddition:charging",
      "input": {"item": "valine_s1ex:eliminated_core","count": 1},
      "result": {"item": "valine_s1ex:stabilized_core","count": 1},
      "energy": 100000})
    event.custom({"type":"createaddition:charging",
      "input": {"item": "valine_s1ex:inactive_redstone_transmission_coil","count": 1},
      "result": {"item": "valine_s1ex:redstone_transmission_coil","count": 1},
      "energy": 100000})
    event.custom({"type":"createaddition:charging",
      "input": {"item": "valine_s1ex:inactive_redstone_conductance_coil","count": 1},
      "result": {"item": "valine_s1ex:redstone_conductance_coil","count": 1},
      "energy": 100000})
    event.custom({"type": "pneumaticcraft:pressure_chamber",
      "inputs": [{"type": "pneumaticcraft:stacked_item","count": 4,"tag": "forge:dusts/cinnabar"},
        {"tag": "forge:ingots/gold"}],"pressure": 2.5,
      "results": [{"item": "valine_s1ex:inactive_redstone_flux_coil"}]})
    event.custom({"type": "pneumaticcraft:pressure_chamber",
      "inputs": [{"type": "pneumaticcraft:stacked_item","count": 4,"tag": "forge:dusts/cinnabar"},
        {"tag": "forge:ingots/silver"}],"pressure": 2.5,
      "results": [{"item": "valine_s1ex:inactive_redstone_transmission_coil"}]})
    event.custom({"type": "pneumaticcraft:pressure_chamber",
      "inputs": [{"type": "pneumaticcraft:stacked_item","count": 4,"tag": "forge:dusts/cinnabar"},
        {"tag": "forge:ingots/electrum"}],"pressure": 2.5,
      "results": [{"item": "valine_s1ex:inactive_redstone_conductance_coil"}]})
    event.custom({"type": "create:filling",
    "ingredients": [
      {"tag": "forge:plates/iron"},
      {"fluidTag": "forge:redstone","amount": 250}],
    "results": [{"item": "valine_s1ex:inactive_redstone_servo"}]})
    event.custom({"type": "pneumaticcraft:pressure_chamber",
      "inputs": [{"type": "pneumaticcraft:stacked_item","count": 2,"tag": "forge:storage_blocks/redstone"},
        {"item": "minecraft:copper_ingot"}],"pressure": 2.5,
      "results": [{"item": "valine_s1ex:redalloy_ingot"}]})
      event.recipes.create.emptying([Fluid.of('valine_s1ex:liquefied_compressed_air',30000), 'pneumaticcraft:air_canister'], Item.of('pneumaticcraft:air_canister', '{"pneumaticcraft:air":30000}'))
      event.custom({
        "type": "pneumaticcraft:refinery",
        "input": {
          "type": "pneumaticcraft:fluid",
          "tag": "forge:gasoline",
          "amount": 10
        },
        "temperature": {
          "min_temp": 15
        },
        "results": [
          {
            "fluid": "valine_s1ex:toluene",
            "amount": 2
          },{
            "fluid": "valine_s1ex:heptane",
            "amount": 3
          },
          {
            "fluid": "valine_s1ex:propylene",
            "amount": 3
          },
          {
            "fluid": "mekanism:ethene",
            "amount": 2
          }]
      })
      event.custom({
        "type": "immersiveengineering:mixer",
        "inputs": [
          {
            "item": "chemlib:chlorine",
            "amount":"8"
          }
        ],
        "result": {
          "fluid": "valine_s1ex:vinyl_chloride",
          "amount": 1000
        },
        "fluid": {
          "tag": "forge:ethene",
          "amount":1000
        },
        "energy": 160000
      })
      event.shaped('valine_s1ex:mysterious_mixture', [
        ' A ',
        'BSD',
        ' C '
      ], {
        S: 'botania:mana_powder',
        A: 'valine_s1ex:pyrotheum_dust',
        B: 'valine_s1ex:cryotheum_dust',
        C: 'valine_s1ex:petrotheum_dust',
        D: 'valine_s1ex:aerotheum_dust'
      })
    event.shapeless('valine_s1ex:petrotheum_dust',['thermal:basalz_powder','#forge:dusts/obsidian','minecraft:clay_ball','#forge:dusts/netherite'])
    event.shapeless('valine_s1ex:aerotheum_dust',['thermal:blitz_powder','#forge:dusts/sulfur','#forge:sand','#forge:dusts/niter'])
    event.shapeless('valine_s1ex:cryotheum_dust',['thermal:blizz_powder','#forge:dusts/apatite','#forge:dusts/niter','minecraft:snowball'])
    event.shapeless('valine_s1ex:pyrotheum_dust',['minecraft:blaze_powder','minecraft:gunpowder','#forge:dusts/sulfur','#forge:dusts/cinnabar'])
    event.custom({
      "type": "immersiveengineering:refinery",
      "result": {
        "fluid": "valine_s1ex:fermented_biodiesel",
        "amount": 16
      },
      "catalyst": {
        "item": "valine_s1ex:mysterious_mixture"
      },
      "input0": {
        "tag": "forge:biofuel",
        "amount": 8
      },
      "input1": {
        "tag": "forge:meat",
        "amount": 8
      },
      "energy": 1024
    })
    event.custom({"type": "thermal:bottler","ingredients": [
      {"item": "immersiveengineering:circuit_board"},
      {"fluid": "valine_s1ex:fermented_biodiesel","amount": 1000}],
    "result": [{"item": "valine_s1ex:basic_circuit_base"}]})
    event.custom({
      "type": "immersiveengineering:blueprint",
      "inputs": [
        {
          "count": 32,
          "base_ingredient": [
          {"item": "industrialforegoing:plastic"}
          ]
        },
        {
          "item": "valine_s1ex:basic_circuit_base"
        },
        {"count": 2,
          "base_ingredient": [
          {"item": "immersiveengineering:component_electronic_adv"
        }]
        },
        {
          "item": "industrialforegoing:pink_slime"
        },
        {
          "count": 32,
          "base_ingredient": [
        {
          "item": "immersiveengineering:wirecoil_steel"
        }
      ]
        },
        {"count": 16,
          "base_ingredient": [{
          "item": "valine_s1ex:redalloy_ingot"}]
        }
      ],
      "category": "circuit",
      "result": {
        "item": "valine_s1ex:handmade_circuit"
      }
        
    })
    event.custom({
      "type": "thermal:crystallizer",
      "ingredients": [
        {
          "fluid": "valine_s1ex:unknown_darkmatter",
          "amount": 4000
        },
        {
          "item": "valine_s1ex:mysterious_mixture"
        }
      ],
      "result": [
        {
          "item": "valine_s1ex:empty_crystal"
        }
      ]
    })
    event.custom({"type":"createaddition:charging",
      "input": {"item": "valine_s1ex:empty_crystal","count": 1},
      "result": {"item": "valine_s1ex:arc_element_crystal","count": 1},
      "energy": 1000000
    })
    event.recipes.botania.mana_infusion('valine_s1ex:botania_element_crystal','valine_s1ex:empty_crystal', 2000)
    event.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "input": {
        "item": "minecraft:lapis_block"
      },
      "ingredients": [
        {
          "item": "chemlib:polyvinyl_chloride_plate"
        },
        {
          "item": "valine_s1ex:arc_element_crystal"
        },
        {
          "item": "botania:rune_earth"
        },
        {
          "item": "valine_s1ex:arc_element_crystal"
        },
        {
          "item": "botania:rune_air"
        },
        {
          "item": "botania:rune_fire"
        },
        {
          "item": "valine_s1ex:botania_element_crystal"
        },
        {
          "item": "botania:rune_water"
        },
        {
          "item": "valine_s1ex:botania_element_crystal"
        },
        {
          "item": "chemlib:polyvinyl_chloride_plate"
        },
        {
          "item": "valine_s1ex:botania_element_crystal"
        },
        {
          "item": "valine_s1ex:arc_element_crystal"
        }
      ],
      "result": {
        "item": "valine_s1ex:empowered_lapis"
      }
    })
    event.recipes.botania.mana_infusion('valine_s1ex:degenerate_symbols','minecraft:redstone_block', 100000,'valine_s1ex:empowered_lapis')
    event.custom({
      "type": "thermal:crystallizer",
      "ingredients": [
        {
          "fluid": "industrialforegoing:ether_gas",
          "amount": 4000
        },
        {
          "item": "valine_s1ex:empty_crystal"
        }
      ],
      "result": [
        {
          "item": "valine_s1ex:ether_crystal"
        }
      ]
    })
    event.custom({
      "type": "immersiveengineering:blueprint",
      "inputs": [
        {
          "item": "powah:lens_of_ender"
        },
        {"count": 4,
          "base_ingredient": [
        {
          "item": "powah:capacitor_hardened"}]
        },
        {"count": 4,
          "base_ingredient": [
        {
          "item": "powah:capacitor_blazing"}]
        },
        {"count": 4,
          "base_ingredient": [
        {
          "item": "powah:capacitor_niotic"}]
        },
        {
          "count": 32,
          "base_ingredient": [
        {
          "item": "fluxnetworks:flux_core"}]      
        },
        {"count": 16,
          "base_ingredient": [{
          "item": "powah:ender_gate_nitro"}]
        }
      ],
      "category": "circuit",
      "result": {
        "item": "valine_s1ex:high_node_item_circuit"
      }
        
    })
    event.custom({
      "type": "immersiveengineering:blueprint",
      "inputs": [
        {
          "item": "valine_s1ex:basic_circuit_base"
        },
        {"count": 4,
          "base_ingredient": [
        {
          "item": "powah:capacitor_spirited"}]
        },
        {"count": 4,
          "base_ingredient": [
        {
          "item": "powah:capacitor_nitro"}]
        },
        {"count": 64,
          "base_ingredient": [
        {
          "item": "valine_s1ex:degenerate_symbols"}]
        },
        {
          "count": 32,
          "base_ingredient": [
        {
          "item": "industrialforegoing:pink_slime_ingot"}]      
        },
        {"count": 16,
          "base_ingredient": [{
          "item": "powah:ender_gate_nitro"}]
        }
      ],
      "category": "circuit",
      "result": {
        "item": "valine_s1ex:high_node_fluid_circuit"
      }
        
    })
    event.custom({
      "type":"createaddition:rolling",
      "input": {
            "tag": "forge:ingots/terrasteel"
      },
      "result": {
        "item": "valine_s1ex:terrasteel_wire",
        "count": 2
      }
    })
    event.recipes.immersiveengineering.metal_press('2x valine_s1ex:terrasteel_wire', 'botania:terrasteel_ingot','immersiveengineering:mold_wire')
    event.custom({
      "type": "extendedcrafting:shaped_ender_crafter",
      "pattern": [
        "AB ",
        "B  ",
        "   "
      ],
      "key": {
        "A": {
          "item": "valine_s1ex:terrasteel_wire"
        },
        "B": {
          "item": "chemlib:polyvinyl_chloride_plate"
        }
      },
      "result": {
        "item": "valine_s1ex:resister"
      }
    })
    event.custom({
      "type": "immersiveengineering:blueprint",
      "inputs": [
        {
          "item": "valine_s1ex:basic_circuit_base"
        },
        {"count": 64,
          "base_ingredient": [
        {
          "item": "valine_s1ex:resister"}]
        },
        {"count": 64,
          "base_ingredient": [
        {
          "item": "powah:capacitor_nitro"}]
        },
        {"count": 64,
          "base_ingredient": [
        {
          "item": "immersiveengineering:component_electronic_adv"}]
        },
        {
          "count": 32,
          "base_ingredient": [
        {
          "item": "mekanism:ultimate_control_circuit"}]      
        },
        {"count": 64,
          "base_ingredient": [{
          "item": "laserio:logic_chip"}]
        }
      ],
      "category": "circuit",
      "result": {
        "item": "valine_s1ex:highend_circuit"
      }
        
    })
    
    event.smelting('chemlib:titanium_ingot', '#forge:ores/titanium')
    event.smelting('chemlib:tungsten_ingot', '#forge:ores/tungsten')
    event.smelting('chemlib:iridium_ingot', '#forge:ores/iridium')
    event.smelting('chemlib:platinum_ingot', '#forge:ores/platinum')
event.custom({
  "type": "mekanism:infusion_conversion",
  "input": {
    "ingredient": {
      "tag": "forge:ingots/chrome"
    }
  },
  "output": {
    "infuse_type": "valine_s1ex:chrome",
    "amount": 10
  }
})
event.recipes.mekanism.metallurgic_infusing('valine_s1ex:nichrome_ingot','#forge:ingots/nickel', '80x valine_s1ex:chrome')
event.recipes.mekanism.metallurgic_infusing('valine_s1ex:tungstain_carbite_ingot','#forge:ingots/tungsten', '80x mekanism:carbon')
event.recipes.mekanism.enriching('valine_s1ex:nichrome_plate', 'valine_s1ex:nichrome_ingot')
event.recipes.mekanism.enriching('valine_s1ex:osmiridium_plate', 'valine_s1ex:osmiridium_ingot')
event.recipes.mekanism.enriching('valine_s1ex:tungstain_carbite_plate', 'valine_s1ex:tungstain_carbite_ingot')
event.recipes.mekanism.compressing('valine_s1ex:osmiridium_ingot','chemlib:iridium_ingot', '1x mekanism:osmium')
event.shaped('valine_s1ex:mekanism_upgrade_base',[
  ' E ',
  'TXT',
  ' E '
],{
  E:'#forge:glass',
  T:'mekanism:alloy_infused',
  X:'pneumaticcraft:plastic'
})
event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "extendedcrafting:luminessence"
  },
  "ingredients": [
    {
      "item": "chemlib:europium_dust"
    },
    {
      "item": "chemlib:europium_dust"
    },
    {
      "item": "mekaddelement:dust_calcium_oxide"
    },
    {
      "item": "mekaddelement:dust_calcium_oxide"
    },
    {
      "item": "chemlib:europium_dust"
    },
    {
      "item": "chemlib:europium_dust"
    },
    {
      "item": "mekaddelement:dust_calcium_oxide"
    },
    {
      "item": "mekaddelement:dust_calcium_oxide"
    }
  ],
  "result": {
    "item": "valine_s1ex:fractual_mix"
  }
})
event.recipes.thermal.crucible(Fluid.of('valine_s1ex:molten_tungsten_carbite', 90), 'valine_s1ex:tungstain_carbite_ingot') 
event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "tag": "valine_s1ex:molten_tungsten_carbite",
      "amount": 90
    },
    {
      "tag": "valine_s1ex:fermented_biodiesel",
      "amount": 250
    },
    {
      "tag": "valine_s1ex:unknown_darkmatter",
      "amount": 250
    },
    {
      "tag": "forge:sludge",
      "amount": 250
    }
  ],
  "result": {
    "fluid": "valine_s1ex:molten_midnight",
    "amount": 250
  },
  "temperature": 1500
})
event.custom({
  "type": "mekanism:rotary",
  "fluidInput": {
    "amount": 1,
    "tag": "forge:molten_lumium"
  },
  "gasOutput": {
    "gas": "valine_s1ex:lumium",
    "amount": 1
  },
  "gasInput": {
    "amount": 1,
    "gas": "valine_s1ex:lumium"
  },
  "fluidOutput": {
    "fluid": "tconstruct:molten_lumium",
    "amount": 1
  }
})
event.custom({
  "type": "mekanism:activating",
  "input": {
    "amount": 9,
    "gas": "valine_s1ex:lumium"
  },
  "output": {
    "gas": "valine_s1ex:sunnarium",
    "amount": 1
  }
})
event.custom({
  "type": "mekanism:reaction",
  "itemInput": {
    "ingredient": {
      "item": "mekaddelement:dust_calcium_oxide"
    }
  },
  "fluidInput": {
    "amount": 250,
    "tag": "forge:fusion_fuel"
  },
  "gasInput": {
    "amount": 250,
    "gas": "valine_s1ex:sunnarium"
  },
  "duration": 2200,
  "itemOutput": {
    "item": "valine_s1ex:sunnarium",
    "count": 1
  },
  "gasOutput": {
    "gas": "mekanism:hydrogen",
    "amount": 15
  }
})
event.custom({
  "type": "extendedcrafting:shaped_ender_crafter",
  "pattern": [
    "AAA",
    "ABA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "valine_s1ex:sunnarium"
    },
    "B": {
      "tag": "forge:ingots/uranium"
    }
  },
  "result": {
    "item": "valine_s1ex:enritched_sunnarium"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_ender_crafter",
  "pattern": [
    "AAA",
    "ABA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "valine_s1ex:sunnarium"
    },
    "B": {
      "item": "valine_s1ex:osmiridium_plate"
    }
  },
  "result": {
    "item": "valine_s1ex:sunnarium_alloy"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_ender_crafter",
  "pattern": [
    "AAA",
    "ABA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "valine_s1ex:enritched_sunnarium"
    },
    "B": {
      "item": "valine_s1ex:sunnarium_alloy"
    }
  },
  "result": {
    "item": "valine_s1ex:enritched_sunnarium_alloy"
  }
})
event.custom({
  "type":"createaddition:rolling",
  "input": {
        "item": "valine_s1ex:nichrome_ingot"
  },
  "result": {
    "item": "valine_s1ex:nichrome_wire",
    "count": 2
  }
})
event.recipes.immersiveengineering.metal_press('2x valine_s1ex:nichrome_wire', 'valine_s1ex:nichrome_ingot','immersiveengineering:mold_wire')
event.shaped('valine_s1ex:nichrome_coil', [
  ' A ',
  'ASA',
  ' A '
], {
  S: 'immersiveengineering:stick_treated',
  A: 'valine_s1ex:nichrome_wire'})
event.shaped('valine_s1ex:nichrome_coil_block', [
  'AAA',
  'ASA',
  'AAA'
], {
  S: 'valine_s1ex:osmiridium_ingot',
  A: 'valine_s1ex:nichrome_coil'})
  let AIO1 = 'valine_s1ex:valine_hvm';
  event.recipes.createSequencedAssembly(['valine_s1ex:high_voltage_module'],'valine_s1ex:highend_circuit',[
    event.recipes.createDeploying(AIO1,[AIO1,'valine_s1ex:nichrome_coil_block']),
    event.recipes.createDeploying(AIO1,[AIO1,'valine_s1ex:tungstain_carbite_plate']),
    event.recipes.createDeploying(AIO1,[AIO1,'valine_s1ex:tungstain_carbite_plate']),
    event.recipes.createDeploying(AIO1,[AIO1,'pneumaticcraft:redstone_module']),
    event.recipes.createDeploying(AIO1,[AIO1,'pneumaticcraft:logistics_module']),
    event.recipes.createDeploying(AIO1,[AIO1,'pneumaticcraft:flow_detector_module']),
    event.recipes.createDeploying(AIO1,[AIO1,'immersiveengineering:component_electronic_adv']),
  ]).transitionalItem(AIO1).loops(4)
  let AIO2 = 'valine_s1ex:valine_connector';
  event.recipes.createSequencedAssembly(['valine_s1ex:connector'],'immersiveengineering:toolupgrade_powerpack_antenna',[
    event.recipes.createDeploying(AIO2,[AIO2,'createaddition:large_connector']),
    event.recipes.createDeploying(AIO2,[AIO2,'chemlib:polyvinyl_chloride_plate']),
    event.recipes.createDeploying(AIO2,[AIO2,'valine_s1ex:terrasteel_wire']),
    event.recipes.createDeploying(AIO2,[AIO2,'valine_s1ex:nichrome_wire']),
    event.recipes.createDeploying(AIO2,[AIO2,'chemlib:polyvinyl_chloride_plate']),
    event.recipes.createDeploying(AIO2,[AIO2,'immersiveengineering:connector_hv']),
    event.recipes.createDeploying(AIO2,[AIO2,'thermal:cured_rubber']),
  ]).transitionalItem(AIO2).loops(10)
  event.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 10000000000,
    "input": {
      "item": "draconicevolution:dragon_heart"
    },
    "ingredients": [
      {
        "item": "draconicevolution:draconium_block"
      },
      {
        "item": "valine_s1ex:high_voltage_module"
      },
      {
        "item": "draconicevolution:draconium_block"
      },
      {
        "item": "valine_s1ex:highend_circuit"
      },
      {
        "item": "draconicevolution:draconium_block"
      },
      {
        "item": "solarpanels:photonic_solar_panel"
      },
      {
        "item": "draconicevolution:draconium_block"
      },
      {
        "item": "solarpanels:photonic_solar_panel"
      }
    ],
    "result": {
      "item": "valine_s1ex:souls_of_different_orders_of_magnitude"
    }
  })
  event.recipes.mekanism.injecting(
    'valine_s1ex:enriched_antimatter_pellet',
    '64x mekanism:pellet_antimatter',
    'mekaddelement:helium'
  );
  event.custom({
    type: 'thermal:crucible',
    ingredients: {
      item: 'avaritia:infinity_ingot',
    },
    result: [
      {
        fluid: 'valine_s1ex:molten_infinity',
        amount: 90,
      },
    ],
    energy: 1350000,
  })
  let AIOttt = 'valine_s1ex:valine_tnt';
  event.recipes.createSequencedAssembly(['valine_s1ex:industrial_tnt'],'minecraft:tnt',[
    event.recipes.createDeploying(AIOttt,[AIOttt,'mekanism:reprocessed_fissile_fragment']),
    event.recipes.create.filling(AIOttt, [Fluid.of('valine_s1ex:toluene',100), AIOttt]),
    event.recipes.create.filling(AIOttt, [Fluid.of('valine_s1ex:heptane',100), AIOttt]),
    event.recipes.create.filling(AIOttt, [Fluid.of('valine_s1ex:polypropylene',100), AIOttt])
  ]).transitionalItem(AIOttt).loops(2)
  event.custom({
    "type": "pneumaticcraft:fluid_mixer",
    "input1": {
      "type": "pneumaticcraft:fluid",
      "fluid": "valine_s1ex:propylene",
      "amount": 1000
    },
    "input2": {
      "type": "pneumaticcraft:fluid",
      "fluid": "valine_s1ex:liquefied_compressed_air",
      "amount": 1000
    },
    "fluid_output": {
      "type": "pneumaticcraft:fluid",
      "fluid": "valine_s1ex:polypropylene",
      "amount": 1000
    },
    "pressure":4.0,
    "time": 4000
  })
  event.recipes.botania.terra_plate('overdrive:seeking_fragment', ['botania:starfield', 'valine_s1ex:ether_crystal','valine_s1ex:ether_crystal','overdrive:apex_seeker','overdrive:apex_seeker','botania:corporea_spark'], 5000000)
  event.recipes.thermal.chiller('avaritia:infinity_ingot',[Fluid.of('valine_s1ex:molten_infinity', 90), 'thermal:chiller_ingot_cast'])
  let FINISH = 'overdrive:fake_flower';
  event.recipes.createSequencedAssembly(['overdrive:administrator_authority'],'overdrive:seeking_fragment',[
    event.recipes.createDeploying(FINISH,[FINISH,'overdrive:perfect_maximize']),
    event.recipes.createDeploying(FINISH,[FINISH,'overdrive:distant_horizons']),
    event.recipes.createDeploying(FINISH,[FINISH,'overdrive:chaotic_breath']),
    event.recipes.createDeploying(FINISH,[FINISH,'overdrive:mercury_lamp']),
    event.recipes.createDeploying(FINISH,[FINISH,'overdrive:server_eater'])
  ]).transitionalItem(FINISH).loops(1).id('overdrive:thank_you_for_playing')
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "  AABAA  ",
    " CDEFEDC ",
    "ADGHIHGDA",
    "AEHJKJHEA",
    "BFIKLKIFB",
    "AEHJKJHEA",
    "ADGHIHGDA",
    " CDEFEDC ",
    "  AABAA  "
  ],
  "key": {
    "A": {
      "item": "minecraft:target"
    },
    "B": {
      "item": "tconstruct:venom_bottle"
    },
    "C": {
      "item": "torcherino:double_compressed_torcherino"
    },
    "D": {
      "item": "valine_s1ex:fractual_mix"
    },
    "E": {
      "item": "framedblocks:framed_target"
    },
    "F": {
      "item": "draconicadditions:chaotic_tick_accel_module"
    },
    "G": {
      "item": "mysticalagriculture:experience_capsule"
    },
    "H": {
      "item": "avaritia:infinity_catalyst"
    },
    "I": {
      "item": "extendedcrafting:ender_star"
    },
    "J": {
      "item": "cyclic:charm_starvation"
    },
    "K": {
      "item": "draconicadditions:chaotic_harness"
    },
    "L": {
      "item": "botania:manastar"
    }
  },
  "result": {
    "item": 'overdrive:perfect_maximize'
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCDEDCBA",
    "BFGHAHGFB",
    "IGFJKLFGI",
    "DMLFNFJMD",
    "EAKNFNKAE",
    "DMJFNFLMD",
    "IGFLKJFGI",
    "BFGHAHGFB",
    "ABCDEDCBA"
  ],
  "key": {
    "A": {
      "item": "cyclic:magic_net"
    },
    "B": {
      "item": "valine_s1ex:connector"
    },
    "C": {
      "type": "forge:nbt",
      "item": "minecraft:enchanted_book",
      "count": 1,
      "nbt": "{StoredEnchantments:[{id:\"cyclic:excavate\",lvl:5s}]}"
    },
    "D": {
      "item": "immersiveengineering:connector_structural"
    },
    "E": {
      "item": "botania:spawner_mover"
    },
    "F": {
      "item": "avaritia:infinity_catalyst"
    },
    "G": {
      "type": "forge:nbt",
      "item": "tconstruct:bowstring",
      "count": 1,
      "nbt": "{Material:\"tconstruct:chain\"}"
    },
    "H": {
      "item": "integrateddynamics:part_connector_mono_directional"
    },
    "I": {
      "type": "forge:nbt",
      "item": "tconstruct:tool_binding",
      "count": 1,
      "nbt": "{Material:\"tconstruct:chain\"}"
    },
    "J": {
      "item": "thermal:device_collector"
    },
    "K": {
      "item": "createaddition:festive_spool"
    },
    "L": {
      "item": "cyclic:experience_pylon"
    },
    "M": {
      "item": "integrateddynamics:part_connector_omni_directional"
    },
    "N": {
      "item": "minecraft:chorus_flower"
    }
  },
  "result": {
    "item": 'overdrive:unparalleled_achievement_h'
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAAAAAA",
    "AAAAAAAAA",
    "BBCDEDCBB",
    "BCDEFEDCB",
    "GGEFHFEGG",
    "GCDEFEDCG",
    "IIIDEDIII",
    "IIJJJJJII",
    "IJJJKJJJI"
  ],
  "key": {
    "A": {
      "item": "chemlib:vanadium_metal_block"
    },
    "B": {
      "item": "rftoolsdim:legendary_essence"
    },
    "C": {
      "item": "mysticalagriculture:master_infusion_crystal"
    },
    "D": {
      "item": "avaritia:infinity_ingot"
    },
    "E": {
      "item": "overdrive:apex_seeker"
    },
    "F": {
      "item": "exponentialpower:advanced_ender_storage"
    },
    "G": {
      "item": "mysticalagriculture:supremium_growth_accelerator"
    },
    "H": {
      "item": "avaritia:infinity_catalyst"
    },
    "I": {
      "item": "valine_s1ex:eternal_ingot"
    },
    "J": {
      "item": "draconicevolution:infused_obsidian"
    },
    "K": {
      "item": "draconicadditions:chaotic_harness"
    }
  },
  "result": {
    "item": 'overdrive:distant_horizons'
  }
})
event.shaped('valine_s1ex:polonium_pellet_block',[
  'EEE',
  'EEE',
  'EEE'
],{
  E:'mekanism:pellet_polonium'
})
event.shapeless('9x mekanism:pellet_polonium','valine_s1ex:polonium_pellet_block')
event.shaped('valine_s1ex:eternal_block',[
  'EEE',
  'EEE',
  'EEE'
],{
  E:'valine_s1ex:eternal_ingot'
})
event.shaped('9x valine_s1ex:eternal_ingot',[
  'E'
],{
  E:'valine_s1ex:eternal_block'
})
event.custom({
  "type": "powah:energizing",
  "ingredients": [
    {
      "item": 'valine_s1ex:compacted_valine3g_pellet'
    }
  ],
  "energy": 1000000000,
  "result": {
    "item": 'valine_s1ex:valine3g_pellet',
    "count":71
  }
})
event.custom({
  "type": "alchemistry:compactor",
  "group": "alchemistry:compactor",
  "input": {
    "ingredient": {
      "item": 'valine_s1ex:valine'
    },
    "count": 20
  },
  "result": {
    "item": 'valine_s1ex:compacted_valine3g_pellet',
    "count":11
  }
})
event.custom({
  "type":'alchemistry:dissolver',
  "group": "alchemistry:dissolver",
  "input": {
    "ingredient": {
      "item": 'valine_s1ex:tuna'
    },
    "count": 3
  },
  "output":{
    "rolls": 1,
    "weighted": false,
    "groups": [{
    "probability": 100.0,
      "results": [
        {
          "item": 'valine_s1ex:valine',
          "count": 40
        }]
      }]
  }
})
event.recipes.botania.runic_altar('9x valine_s1ex:eternal_ingot',[
  'avaritia:neutronium_block',
  'avaritia:crystal_matrix_block',
  'create:experience_block',
  'chemlib:europium_metal_block',
  'chemlib:sodium_metal_block',
  'minecraft:music_disc_cat',
  Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:valine3g"}'),
  'extendedcrafting:ultimate_singularity'
],100000)
event.recipes.create.mechanical_crafting('valine_s1ex:tuna',[
  '    H    ',
  '   WWW   ',
  '  WFFFW  ',
  ' WFFFFFW ',
  'EWFFSFFWE',
  ' WFFFFFW ',
  '  WFFFW  ',
  '   WWW   ',
  '    H    '
],{
  H:'thermal:deep_aquachow',
  W:'mysticalagriculture:water_essence',
  F:'mysticalagriculture:fish_essence',
  S:'minecraft:heart_of_the_sea',
  E: Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:ender"}}')
})
event.recipes.mekanismCombining(
  'valine_s1ex:enriched_antimatter_eternal_ingot',
  'valine_s1ex:eternal_ingot',
  '32x valine_s1ex:enriched_antimatter_pellet'
);
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCDEDCBA",
    "FGHHHHHGF",
    "IGJKKKJGI",
    "LGJMMMJGL",
    "KKJMNMJKK",
    "LGJMMMJGL",
    "IGJKKKJGI",
    "FGHHHHHGF",
    "ABCDEDCBA"
  ],
  "key": {
    "A": {
      "item": "integrateddynamics:menril_torch_stone"
    },
    "B": {
      "item": "cyclic:ender_torch"
    },
    "C": {
      "item": "cyclic:spark"
    },
    "D": {
      "item": "botania:corporea_spark"
    },
    "E": {
      "item": "botania:corporea_spark_master"
    },
    "F": {
      "item": "torcherino:double_compressed_torcherino"
    },
    "G": {
      "item": "pneumaticcraft:kerosene_lamp"
    },
    "H": {
      "item": "pneumaticcraft:wall_lamp_black"
    },
    "I": {
      "item": "torchmaster:megatorch"
    },
    "J": {
      "item": "chemlib:helium_lamp_block"
    },
    "K": {
      "item": "create:rose_quartz_lamp"
    },
    "L": {
      "item": "torchmaster:dreadlamp"
    },
    "M": {
      "item": "cyclic:lamp"
    },
    "N": {
      "item": "minecraft:redstone_lamp"
    }
  },
  "result": {
    "item": 'overdrive:mercury_lamp'
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCDADCBA",
    "BAEEAEEAB",
    "CEAFAFAEC",
    "DEFGHGFED",
    "AAAHIHAAA",
    "DEFGHGFED",
    "CEAFAFAEC",
    "BAEEAEEAB",
    "ABCDADCBA"
  ],
  "key": {
    "A": {
      "item": "overdrive:apex_seeker"
    },
    "B": {
      "item": "botanicalmachinery:mana_battery_creative"
    },
    "C": {
      "item": "overdrive:perfect_maximize"
    },
    "D": {
      "item": "overdrive:chaotic_breath"
    },
    "E": {
      "item": "botania:corporea_spark"
    },
    "F": {
      "item": "overdrive:distant_horizons"
    },
    "G": {
      "item": "avaritia:infinity_catalyst"
    },
    "H": {
      "item": "overdrive:mercury_lamp"
    },
    "I": {
      "item": "botania:corporea_spark_master"
    }
  },
  "result": {
    "item": 'botania:corporea_spark_creative'
  }
})
event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "pipez:ultimate_upgrade"
  },
  "ingredients": [
    {
      "item": "avaritia:infinity_catalyst"
    },
    {
      "item": "avaritia:infinity_catalyst"
    },
    {
      "item": "avaritia:infinity_catalyst"
    },
    {
      "item": "avaritia:infinity_catalyst"
    },
    {
      "item": "avaritia:infinity_catalyst"
    },
    {
      "item": "avaritia:infinity_catalyst"
    },
    {
      "item": "avaritia:infinity_catalyst"
    },
    {
      "item": "avaritia:infinity_catalyst"
    }
  ],
  "result": {
    "item": 'pipez:infinity_upgrade'
  }
})
draconicFusion(event,'overdrive:server_eater',null,4,2147483647,'botania:corporea_spark_creative',
  [Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker'),Item.of('overdrive:apex_seeker')])
  event.recipes.immersiveengineering.arc_furnace('2x valine_s1ex:chrome_ingot','#forge:ores/chrome','fluxnetworks:flux_dust','thermal:rich_slag', 200, 100000)
  event.shaped('valine_s1ex:ash_chip', [
    'ABC',
    'DSD',
    'CBA'
  ], {
    S: 'valine_s1ex:empty_crystal',
    A: 'valine_s1ex:redstone_transmission_coil',
    B: 'valine_s1ex:chrome_ingot',
    C: 'valine_s1ex:redstone_conductance_coil',
    D: 'valine_s1ex:azure_menril_ingot'
  })
  event.shaped('valine_s1ex:yellow_node', [
    'ABC',
    'DSD',
    'CBA'
  ], {
    S: 'valine_s1ex:empty_crystal',
    A: 'valine_s1ex:stabilized_core',
    B: 'valine_s1ex:redalloy_ingot',
    C: 'valine_s1ex:handmade_circuit',
    D: 'valine_s1ex:empowered_lapis'
  })
  event.recipes.create.compacting([Fluid.of('valine_s1ex:liquefied_compressed_air',1000),'pneumaticcraft:air_canister'],Item.of('pneumaticcraft:air_canister', '{"pneumaticcraft:air":30000}'))
})