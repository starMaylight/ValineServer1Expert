onEvent("recipes", (event) => {
    let removebyname = [
        'mekanism:steel_casing',
        'mekanism:seismic_vibrator',
        'mekanism:seismic_reader',
        'mekanism:metallurgic_infuser',
        'mekanism:resistive_heater',
        'mekanism:electrolytic_core',
        'mekanism:electrolytic_separator',
        'mekanism:oredictionificator',
        'mekanism:formulaic_assemblicator',
        'mekanism:enrichment_chamber',
        'mekanism:energized_smelter',
        'mekanism:precision_sawmill',
        'mekanism:crusher',
        'mekanism:rotary_condensentrator',
        'mekanism:chemical_infuser',
        'mekanism:chemical_oxidizer',
        'mekanism:osmium_compressor',
        'mekanism:painting_machine',
        'mekanism:pigment_extractor',
        'mekanism:digital_miner',
        'mekanism:nutritional_liquifier',
        'mekanism:pressurized_reaction_chamber',
        'mekanism:purification_chamber',
        'mekanism:chemical_injection_chamber',
        'mekanism:combiner',
        'mekanism:isotopic_centrifuge',
        'mekanism:solar_neutron_activator',
        'mekanism:chemical_washer',
        'mekanism:alloy_atomic',
        'mekanism:alloy_reinforced',
        'mekanism:alloy_infused',
        'mekanism:qio_drive_array',
        'mekanism:qio_dashboard',
        'mekanism:qio_drive_base',
    'mekanism:qio_drive_hyper_dense',
    'mekanism:qio_drive_time_dilating',
    'mekanism:qio_drive_supermassive',
    'mekaevolution:qio_drive_absolute',
    'mekaevolution:qio_drive_supreme',
    'mekaevolution:qio_drive_cosmic',
    'mekaevolution:qio_drive_infinite',
    'mekaevolution:absolute_energy_cube',
    'mekaevolution:supreme_energy_cube',
    'mekaevolution:cosmic_energy_cube',
    'mekaevolution:infinite_energy_cube',
    'mekanism:advanced_control_circuit',
    'mekanism:elite_control_circuit',
    'mekanism:ultimate_control_circuit',
    'mekanism:basic_control_circuit',
    'mekaevolution:absolute_control_circuit',
    'mekaevolution:supreme_control_circuit',
    'mekaevolution:cosmic_control_circuit',
    'mekaevolution:infinite_control_circuit',
    'mekanism:basic_tier_installer',
    'mekanism:advanced_tier_installer',
    'mekanism:elite_tier_installer',
    'mekanism:ultimate_tier_installer',
    'mekanism:basic_induction_provider',
    'mekanism:basic_induction_cell',
    'mekanism:advanced_induction_cell',
    'mekanism:elite_induction_cell',
    'mekanism:ultimate_induction_cell',
    'mekanism:advanced_induction_provider',
    'mekanism:elite_induction_provider',
    'mekanism:ultimate_induction_provider',
    'mekanismgenerators:fission_reactor_casing',
    'mekanismgenerators:control_rod_assembly',
    'mekanismgenerators:fission_fuel_assembly',
    'mekanism:induction_port',
    'mekanism:upgrade_gas',
    'mekanism:upgrade_anchor',
    'mekanism:upgrade_muffling',
    'mekanism:upgrade_filter',
    'mekanism:upgrade_energy',
    'mekanism:upgrade_speed',
    'mekanism:teleportation_core',
    'create:crushed_raw_osmium',
    'chemlib:osmium_ingot'
    ]
    removebyname.forEach((name) => {
        event.remove({output: name})
        })
    let removebyids = [
    'tconstruct:smeltery/melting/metal/osmium/dust',
    'tconstruct:smeltery/melting/metal/osmium/ore_singular',
    'tconstruct:smeltery/melting/metal/osmium/raw',
    'tconstruct:smeltery/melting/metal/osmium/raw_block',
    'mekanism:processing/osmium/ingot/from_raw_blasting',
    'mekanism:processing/osmium/ingot/from_ore_blasting',
    'mekanism:processing/osmium/ingot/from_dust_blasting',
    'create:blasting/ingot_osmium_compat_mekanism',
    'mekanism:processing/osmium/ingot/from_raw_smelting',
    'mekanism:processing/osmium/ingot/from_ore_smelting',
    'mekanism:processing/osmium/ingot/from_dust_smelting',
    'create:smelting/ingot_osmium_compat_mekanism',
    'thermal:compat/mekanism/smelter_mek_osmium_ore'
    
  ]
removebyids.forEach((name) => {
    event.remove({id: name})
    })
    event.shaped('mekanism:steel_casing', [
      'ABC',
      'DSD',
      'CBA'
    ], {
      S: 'rftoolsbase:machine_frame',
      B: 'valine_s1ex:ash_chip',
      A: 'valine_s1ex:high_node_item_circuit',
      C: 'valine_s1ex:high_node_fluid_circuit',
      D:'valine_s1ex:yellow_node'
    })
    event.shaped('mekanism:seismic_reader', [
        'BAB',
        'BSB',
        'BBB'
      ], {
        S: 'thermal:flux_capacitor',
        A: 'valine_s1ex:redalloy_ingot',
        B: '#forge:ingots/steel'
      })
    event.shaped('mekanism:seismic_vibrator', [
        'BAB',
        'CSC',
        'BBB'
      ], {
        S: 'thermal:machine_frame',
        A: 'extrautilitiesrebirth:lunar_reactive_dust',
        B: '#forge:ingots/bronze',
        C: 'pneumaticcraft:printed_circuit_board'
      })
    event.shaped('mekanism:metallurgic_infuser', [
        'BAB',
        'CSC',
        'BAB'
      ], {
        S: 'mekanism:steel_casing',
        A: 'ironfurnaces:million_furnace',
        B: Item.of('tconstruct:large_plate', '{Material:"tconstruct:tungsten"}'),
        C: 'valine_s1ex:redalloy_ingot'
      })
    event.shaped('mekanism:resistive_heater', [
        'AAA',
        'CSC',
        'BDB'
      ], {
        S: 'mekanism:steel_casing',
        A: 'cookingforblockheads:heating_unit',
        B: 'rebornstorage:multiblock_heat',
        C: 'pneumaticcraft:heat_pipe',
        D: 'mekanism:energy_tablet'
      })
    event.shaped('mekanism:electrolytic_core', [
        'DAB',
        'ASA',
        'CAC'
      ], {
        S: 'mekanism:basic_control_circuit',
        A: 'mekanism:alloy_infused',
        B: 'pneumaticcraft:plastic',
        C: 'immersiveengineering:graphite_electrode',
        D: 'industrialforegoing:plastic'
      })
    event.shaped('mekanism:electrolytic_separator', [
        'ABA',
        'CSC',
        'ABA'
      ], {
        S: 'mekanism:electrolytic_core',
        A: '#forge:plates/tungsten',
        B: 'valine_s1ex:redalloy_ingot',
        C: 'mekanism:alloy_infused'
      })
  event.shaped('mekanism:oredictionificator', [
        'ADA',
        'BSB',
        'ACA'
      ], {
        S: 'mekanism:steel_casing',
        A: '#forge:ingots/steel',
        B: 'mekanism:basic_control_circuit',
        C: 'ae2:smooth_sky_stone_chest',
        D: 'botania:elf_glass'
      })
  event.shaped('mekanism:formulaic_assemblicator', [
        'ADA',
        'BSB',
        'ACA'
      ], {
        S: 'mekanism:steel_casing',
        A: '#forge:ingots/steel',
        B: 'mekanism:basic_control_circuit',
        C: 'ae2:smooth_sky_stone_chest',
        D: 'botania:crafty_crate'
      })
  event.shaped('mekanism:enrichment_chamber', [
        'ABA',
        'CSC',
        'ABA'
      ], {
        S: 'mekanism:steel_casing',
        A: '#forge:plates/tungsten',
        B: 'pneumaticcraft:electrostatic_compressor',
        C: 'mekanism:basic_control_circuit'
      })
  event.shaped('mekanism:energized_smelter', [
        'ABA',
        'CSC',
        'ABA'
      ], {
        S: 'mekanism:steel_casing',
        A: '#forge:plates/tungsten',
        B: 'thermal:machine_furnace',
        C: 'mekanism:basic_control_circuit'
      })
  event.shaped('mekanism:precision_sawmill', [
        'ABA',
        'CSC',
        'ABA'
      ], {
        S: 'mekanism:steel_casing',
        A: '#forge:plates/tungsten',
        B: 'immersiveengineering:rockcutter',
        C: 'mekanism:basic_control_circuit'
      })
  event.shaped('mekanism:crusher', [
        'ABA',
        'CSC',
        'ABA'
      ], {
        S: 'mekanism:steel_casing',
        A: '#forge:plates/tungsten',
        B: 'create:mechanical_roller',
        C: 'mekanism:basic_control_circuit'
      })
  event.shaped('mekanism:rotary_condensentrator', [
        'ABA',
        'CSD',
        'ABA'
      ], {
        S: 'mekanism:steel_casing',
        A: '#forge:plates/tungsten',
        B: 'mekanism:basic_control_circuit',
        C: 'mekanism:advanced_chemical_tank',
        D: 'mekanism:advanced_fluid_tank'
      })
  event.shaped('mekanism:chemical_infuser', [
        'ABA',
        'CSC',
        'ABA'
      ], {
        S: 'mekanism:steel_casing',
        A: '#forge:plates/tungsten',
        B: 'mekanism:advanced_control_circuit',
        C: 'mekanism:advanced_chemical_tank'
      })
  event.shaped('mekanism:chemical_oxidizer', [
        'ABA',
        'DSC',
        'ABA'
      ], {
        S: 'mekanism:steel_casing',
        A: '#forge:plates/tungsten',
        B: 'mekanism:advanced_control_circuit',
        C: 'mekanism:advanced_chemical_tank',
        D: '#mekanism:personal_storage'
      })
  event.shaped('mekanism:osmium_compressor', [
        'ABA',
        'CSC',
        'ABA'
      ], {
        S: 'mekanism:steel_casing',
        A: '#forge:plates/tungsten',
        B: 'lazierae2:parallel_processor',
        C: 'extendedcrafting:compressor'
      })
  event.shaped('mekanism:painting_machine', [
        'ABA',
        'CSC',
        'ABA'
      ], {
        S: 'mekanism:steel_casing',
        A: '#forge:plates/tungsten',
        B: 'mekanism:advanced_control_circuit',
        C: 'mysticalagriculture:mystical_flower_agglomeratio'
      })
  event.shaped('mekanism:pigment_extractor', [
        'ABA',
        'CSC',
        'ABA'
      ], {
        S: 'mekanism:steel_casing',
        A: 'valine_s1ex:redalloy_ingot',
        B: 'mekanism:advanced_control_circuit',
        C: 'cyclic:flint_block'
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
        "item": "mekanism:ultimate_control_circuit"
      },
      "B": {
        "item": "mekanism:advanced_control_circuit"
      },
      "C": {
        "item": "mekanism:logistical_sorter"
      },
      "D": {
        "item": "mekanism:robit"
      },
      "E": {
        "item": "mekanism:teleportation_core"
      },
      "F": {
        "item": "mekanism:steel_casing"
      }
    },
    "result": {
      "item": "mekanism:digital_miner"
    }
  })
  event.shaped('mekanism:nutritional_liquifier', [
    'ABA',
    'CSC',
    'ABA'
  ], {
    S: 'mekanism:steel_casing',
    A: 'valine_s1ex:nichrome_plate',
    B: 'thermal:potion_cake',
    C: 'mekanism:elite_control_circuit'
  })
  event.shaped('mekanism:pressurized_reaction_chamber', [
    'ACA',
    'DSD',
    'BEB'
  ], {
    S: 'mekanism:steel_casing',
    A: 'valine_s1ex:tungstain_carbite_ingot',
    B: 'mekanism:elite_chemical_tank',
    C: 'mekanism:alloy_reinforced',
    D: 'mekanism:elite_control_circuit',
    E: 'mekanism:dynamic_tank'
  })
  event.shaped('mekanism:purification_chamber', [
    'ABA',
    'CSC',
    'ABA'
  ], {
    S: 'mekanism:enrichment_chamber',
    A: 'valine_s1ex:nichrome_plate',
    B: 'mekanism:elite_control_circuit',
    C: 'valine_s1ex:tungstain_carbite_ingot'
  })
  event.shaped('mekanism:chemical_injection_chamber', [
    'ABA',
    'CSC',
    'ABA'
  ], {
    S: 'mekanism:purification_chamber',
    A: 'valine_s1ex:tungstain_carbite_plate',
    B: 'mekanism:elite_control_circuit',
    C: 'valine_s1ex:nichrome_ingot'
  })
event.shaped('mekanism:combiner', [
    'ABA',
    'CSC',
    'ABA'
  ], {
    S: 'mekanism:steel_casing',
    A: 'valine_s1ex:nichrome_plate',
    B: 'mekanism:elite_control_circuit',
    C: 'mekanism:upgrade_stone_generator'
  })
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter",
    "pattern": [
      "ABA",
      "CDC",
      "EEE"
    ],
    "key": {
      "A": {
        "item": "mekanism:alloy_reinforced"
      },
      "B": {
        "item": "solarpanels:improved_hybrid_solar_element"
      },
      "C": {
        "item": "mekanism:elite_control_circuit"
      },
      "D": {
        "item": "mekanism:steel_casing"
      },
      "E": {
        "item": "valine_s1ex:osmiridium_plate"
      }
    },
    "result": {
      "item": "mekanism:solar_neutron_activator"
    }
  })
  event.shaped('mekanism:isotopic_centrifuge', [
    'AAA',
    'CSC',
    'AAA'
  ], {
    S: 'mekanism:steel_casing',
    A: 'valine_s1ex:osmiridium_plate',
    C: 'mekanism:ultimate_control_circuit'
  })
  event.shaped('mekanism:chemical_washer', [
    'ACA',
    'DSD',
    'ABA'
  ], {
    S: 'mekanism:steel_casing',
    A: 'valine_s1ex:osmiridium_ingot',
    B: 'mekanism:ultimate_chemical_tank',
    C: 'mekanism:ultimate_fluid_tank',
    D: 'mekanism:ultimate_control_circuit'
  })
  event.recipes.mekanism.metallurgic_infusing('mekanism:alloy_infused','valine_s1ex:nichrome_ingot', '80x mekanism:redstone')
  event.recipes.mekanism.metallurgic_infusing('mekanism:alloy_reinforced','valine_s1ex:tungstain_carbite_ingot', '80x mekanism:diamond')
  event.recipes.mekanism.metallurgic_infusing('mekanism:alloy_atomic','valine_s1ex:osmiridium_ingot', '80x mekanism:refined_obsidian')
  event.shaped('mekanism:qio_dashboard', [
    [Item.of('tconstruct:large_plate', '{Material:"tconstruct:hepatizon"}'), 'pneumaticcraft:advanced_pressure_tube', Item.of('tconstruct:large_plate', '{Material:"tconstruct:hepatizon"}')], 
    [Item.of('tconstruct:large_plate', '{Material:"tconstruct:hepatizon"}'), 'integratedterminals:part_terminal_crafting_job', Item.of('tconstruct:large_plate', '{Material:"tconstruct:hepatizon"}')], 
    [Item.of('tconstruct:large_plate', '{Material:"tconstruct:hepatizon"}'), 'dimstorage:dimensional_tablet', Item.of('tconstruct:large_plate', '{Material:"tconstruct:hepatizon"}')]
  ]);
  event.shaped('mekanism:qio_drive_array', [
    ['pneumaticcraft:plastic', 'functionalstorage:compacting_drawer', 'pneumaticcraft:plastic'], 
    ['pneumaticcraft:plastic', 'dimstorage:dimensional_chest', 'pneumaticcraft:plastic'], 
    ['pneumaticcraft:plastic', 'functionalstorage:storage_controller', 'pneumaticcraft:plastic']
  ])
  let qio = (output,E,T,N) => {
    event.shaped(output,[
      'ete',
      'tnt',
      'ete'
  ],{
    e:E,
    t:T,
    n:N
})
    }
    qio('mekanism:qio_drive_base','#forge:plates/invar','lazierae2:parallel_processor','chemlib:polyvinyl_chloride_plate')
    qio('mekanism:qio_drive_hyper_dense','laserio:logic_chip','mekanism:qio_drive_base','productivebees:inactive_dragon_egg')
    qio('mekanism:qio_drive_time_dilating','mekanism:pellet_polonium','mekanism:qio_drive_hyper_dense','pneumaticcraft:solar_compressor')
    qio('mekanism:qio_drive_supermassive','valine_s1ex:sturdy_sheet_block','mekanism:qio_drive_time_dilating','mekanism:pellet_antimatter')
    qio('mekaevolution:qio_drive_absolute','draconicevolution:draconium_core','mekanism:qio_drive_supermassive','mekanism:pellet_antimatter')
    qio('mekaevolution:qio_drive_supreme','draconicevolution:wyvern_core','mekaevolution:qio_drive_absolute','mekanism:pellet_antimatter')
    qio('mekaevolution:qio_drive_cosmic','draconicevolution:awakened_core','mekaevolution:qio_drive_supreme','mekanism:pellet_antimatter')      
    qio('mekaevolution:qio_drive_infinite','draconicevolution:chaotic_core','mekaevolution:qio_drive_cosmic','mekanism:pellet_antimatter')
    qio('mekaevolution:absolute_energy_cube','mekaevolution:absolute_control_circuit','solarpanels:spectral_energy_tablet','mekanism:ultimate_energy_cube')
    qio('mekaevolution:supreme_energy_cube','mekaevolution:supreme_control_circuit','solarpanels:singular_energy_tablet','mekaevolution:absolute_energy_cube')
    qio('mekaevolution:cosmic_energy_cube','mekaevolution:cosmic_control_circuit','solarpanels:light_absorbing_energy_tablet','mekaevolution:supreme_energy_cube')
    qio('mekaevolution:infinite_energy_cube','mekaevolution:infinite_control_circuit','solarpanels:photonic_energy_tablet','mekaevolution:cosmic_energy_cube')
  let Mekcircuit = (output,E,T,S,N) => {
      event.shaped(output,[
          'et ',
          'sns',
          ' te'
      ],{
        e:E,
        t:T,
        s:S,
        n:N
      })
    }
  event.custom({
      "type": "immersiveengineering:blueprint",
      "inputs": [
        {
          "item": "valine_s1ex:basic_circuit_base"
        },
        {"count": 32,
          "base_ingredient": [
        {
          "item": "mekanism:alloy_infused"}]
        },
        {"count": 32,
          "base_ingredient": [
        {
          "item": "mekanism:alloy_reinforced"}]
        },
        {"count": 32,
          "base_ingredient": [
        {
          "item": "mekanism:alloy_atomic"}]
        },
        {
          "count": 16,
          "base_ingredient": [
        {
          "item": "valine_s1ex:handmade_circuit"}]      
        },
        {"count": 64,
          "base_ingredient": [{
          "item": "laserio:logic_chip"}]
        }
      ],
      "category": "circuit",
      "result": {
        "item": "mekanism:basic_control_circuit"
      }
        
    })
    Mekcircuit('mekanism:advanced_control_circuit','mekanism:basic_control_circuit','extrautilitiesrebirth:redstone_crystal','refinedstorage:destruction_core','mekanism:alloy_infused')
    Mekcircuit('mekanism:elite_control_circuit','mekanism:advanced_control_circuit','thermal_extra:dragonsteel_gear','valine_s1ex:resister','mekanism:alloy_reinforced')
    Mekcircuit('mekanism:ultimate_control_circuit','mekanism:elite_control_circuit','valine_s1ex:osmiridium_plate','botania:gaia_ingot','mekanism:alloy_atomic')
    Mekcircuit('mekaevolution:absolute_control_circuit','mekanism:ultimate_control_circuit','compressedcreativity:brass_gilded_lapis_lazuli','#forge:ingots/soul_infused','#forge:pellets/antimatter')
    Mekcircuit('mekaevolution:supreme_control_circuit','mekaevolution:absolute_control_circuit','createoreexcavation:raw_redstone','#forge:pellets/antimatter','powah:battery_nitro')
    Mekcircuit('mekaevolution:cosmic_control_circuit','mekaevolution:supreme_control_circuit','valine_s1ex:nichrome_plate','mekanism:pellet_antimatter','mekanismmatter:universal_mass')
    event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 100000000,
  "input": {
    "item": "draconicevolution:module_core"
  },
  "ingredients": [
    {
      "item": "mekanism:elite_control_circuit"
    },
    {
      "item": "pneumaticcraft:logistics_core"
    },
    {
      "item": "mekanism:ultimate_control_circuit"
    },
    {
      "item": "integrateddynamics:variable"
    },
    {
      "item": "mekaevolution:absolute_control_circuit"
    },
    {
      "item": "compressedcreativity:mechanical_visor_upgrade"
    },
    {
      "item": "mekaevolution:supreme_control_circuit"
    },
    {
      "item": "valine_s1ex:highend_circuit"
    },
    {
      "item": "mekaevolution:cosmic_control_circuit"
    },
    {
      "item": "valine_s1ex:high_node_fluid_circuit"
    },
    {
      "item": "valine_s1ex:handmade_circuit"
    },
    {
      "item": "valine_s1ex:high_node_item_circuit"
    },
    {
      "item": "draconicevolution:wyvern_energy_core"
    },
    {
      "item": "immersiveengineering:component_electronic_adv"
    },
    {
      "item": "draconicevolution:draconic_energy_core"
    },
    {
      "item": "fluxnetworks:flux_core"
    },
    {
      "item": "mekanism:basic_control_circuit"
    },
    {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    {
      "item": "mekanism:advanced_control_circuit"
    },
    {
      "item": "pneumaticcraft:module_expansion_card"
    }
  ],
  "result": {
    "item": "mekaevolution:infinite_control_circuit"
  }
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
      "item": "mekanism:basic_control_circuit"
    },
    "C": {
      "item": "valine_s1ex:nichrome_plate"
    },
    "D": {
      "item": "extradisks:advanced_machine_casing"
    }
  },
  "result": {
    "item": "mekanism:basic_tier_installer"
  }
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
      "item": "laserio:logic_chip"
    },
    "B": {
      "item": "mekanism:advanced_control_circuit"
    },
    "C": {
      "item": "valine_s1ex:tungstain_carbite_plate"
    },
    "D": {
      "item": "mekanism:basic_tier_installer"
    }
  },
  "result": {
    "item": "mekanism:advanced_tier_installer"
  }
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
      "item": "laserio:overclocker_node"
    },
    "B": {
      "item": "mekanism:elite_control_circuit"
    },
    "C": {
      "item": "valine_s1ex:tungstain_carbite_plate"
    },
    "D": {
      "item": "mekanism:advanced_tier_installer"
    }
  },
  "result": {
    "item": "mekanism:elite_tier_installer"
  }
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
      "item": "valine_s1ex:osmiridium_plate"
    },
    "B": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "C": {
      "item": "valine_s1ex:mysterious_mixture"
    },
    "D": {
      "item": "mekanism:elite_tier_installer"
    }
  },
  "result": {
    "item": "mekanism:ultimate_tier_installer"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBCBBA",
    "BDEFGDB",
    "BGHIHEB",
    "CFIJIFC",
    "BEHIHGB",
    "BDGFEDB",
    "ABBCBBA"
  ],
  "key": {
    "A": {
      "item": "powah:energy_cell_nitro"
    },
    "B": {
      "item": "chemlib:polyvinyl_chloride_plate"
    },
    "C": {
      "item": "mekanism:basic_energy_cube"
    },
    "D": {
      "item": "solarpanels:quantum_solar_element"
    },
    "E": {
      "item": "mekaddelement:dust_calcium_oxide"
    },
    "F": {
      "item": "solarpanels:hybrid_solar_element"
    },
    "G": {
      "item": "mekanism:dust_lithium"
    },
    "H": {
      "item": "solarpanels:improved_hybrid_solar_element"
    },
    "I": {
      "item": "solarpanels:carbone_solar_element"
    },
    "J": {
      "item": "mekanism:steel_casing"
    }
  },
  "result": {
    "item": "mekanism:basic_induction_cell"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBCBBA",
    "BDEFGDB",
    "BGHIHEB",
    "CFIJIFC",
    "BEHIHGB",
    "BDGFEDB",
    "ABBCBBA"
  ],
  "key": {
    "A": {
      "item": "mekanism:basic_control_circuit"
    },
    "B": {
      "item": "chemlib:polyvinyl_chloride_plate"
    },
    "C": {
      "item": "mekanism:basic_energy_cube"
    },
    "D": {
      "item": "solarpanels:quantum_solar_element"
    },
    "E": {
      "item": "mekaddelement:dust_calcium_oxide"
    },
    "F": {
      "item": "solarpanels:hybrid_solar_element"
    },
    "G": {
      "item": "mekanism:dust_lithium"
    },
    "H": {
      "item": "solarpanels:improved_hybrid_solar_element"
    },
    "I": {
      "item": "solarpanels:carbone_solar_element"
    },
    "J": {
      "item": "mekanism:steel_casing"
    }
  },
  "result": {
    "item": "mekanism:basic_induction_provider"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBCBBA",
    "BDEFEDB",
    "BGHIHGB",
    "CFIJIFC",
    "BGHIHGB",
    "BDEFEDB",
    "ABBCBBA"
  ],
  "key": {
    "A": {
      "item": "mekanism:basic_induction_cell"
    },
    "B": {
      "item": "chemlib:polyvinyl_chloride_plate"
    },
    "C": {
      "item": "mekanism:advanced_energy_cube"
    },
    "D": {
      "item": "solarpanels:spectral_energy_tablet"
    },
    "E": {
      "item": "solarpanels:quantum_energy_tablet"
    },
    "F": {
      "item": "mekanism:dust_lithium"
    },
    "G": {
      "item": "solarpanels:improved_energy_tablet"
    },
    "H": {
      "item": "mekanism:energy_tablet"
    },
    "I": {
      "item": "mekaddelement:dust_calcium_oxide"
    },
    "J": {
      "item": "mekanism:steel_casing"
    }
  },
  "result": {
    "item": "mekanism:advanced_induction_cell"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBCBBA",
    "BDEFEDB",
    "BEDGDEB",
    "CFGHGFC",
    "BEDGDEB",
    "BDEFEDB",
    "ABBCBBA"
  ],
  "key": {
    "A": {
      "item": "mekanism:advanced_induction_cell"
    },
    "B": {
      "item": "chemlib:polyvinyl_chloride_plate"
    },
    "C": {
      "item": "mekanism:elite_energy_cube"
    },
    "D": {
      "item": "rftoolspower:dimensionalcell"
    },
    "E": {
      "item": "thermal:energy_cell"
    },
    "F": {
      "item": "mekanism:dust_lithium"
    },
    "G": {
      "item": "mekaddelement:dust_calcium_oxide"
    },
    "H": {
      "item": "mekanism:steel_casing"
    }
  },
  "result": {
    "item": "mekanism:elite_induction_cell"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBCBBA",
    "BDEFGDB",
    "BGHIHEB",
    "CFIJIFC",
    "BEHIHGB",
    "BDGFEDB",
    "ABBCBBA"
  ],
  "key": {
    "A": {
      "item": "mekanism:elite_induction_cell"
    },
    "B": {
      "item": "chemlib:polyvinyl_chloride_plate"
    },
    "C": {
      "item": "mekanism:ultimate_energy_cube"
    },
    "D": {
      "item": "draconicevolution:chaotic_core"
    },
    "E": {
      "item": "draconicevolution:awakened_core"
    },
    "F": {
      "item": "mekanism:dust_lithium"
    },
    "G": {
      "item": "draconicevolution:wyvern_core"
    },
    "H": {
      "item": "draconicevolution:draconium_core"
    },
    "I": {
      "item": "mekaddelement:dust_calcium_oxide"
    },
    "J": {
      "item": "mekanism:steel_casing"
    }
  },
  "result": {
    "item": "mekanism:ultimate_induction_cell"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBCBBA",
    "BDEFEDB",
    "BGHIHGB",
    "CFIJIFC",
    "BGHIHGB",
    "BDEFEDB",
    "ABBCBBA"
  ],
  "key": {
    "A": {
      "item": "mekanism:basic_induction_provider"
    },
    "B": {
      "item": "chemlib:polyvinyl_chloride_plate"
    },
    "C": {
      "item": "mekanism:advanced_control_circuit"
    },
    "D": {
      "item": "solarpanels:spectral_energy_tablet"
    },
    "E": {
      "item": "solarpanels:quantum_energy_tablet"
    },
    "F": {
      "item": "mekanism:dust_lithium"
    },
    "G": {
      "item": "solarpanels:improved_energy_tablet"
    },
    "H": {
      "item": "mekanism:energy_tablet"
    },
    "I": {
      "item": "mekaddelement:dust_calcium_oxide"
    },
    "J": {
      "item": "mekanism:steel_casing"
    }
  },
  "result": {
    "item": "mekanism:advanced_induction_provider"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBCBBA",
    "BDEFEDB",
    "BEDGDEB",
    "CFGHGFC",
    "BEDGDEB",
    "BDEFEDB",
    "ABBCBBA"
  ],
  "key": {
    "A": {
      "item": "mekanism:advanced_induction_provider"
    },
    "B": {
      "item": "chemlib:polyvinyl_chloride_plate"
    },
    "C": {
      "item": "mekanism:elite_control_circuit"
    },
    "D": {
      "item": "rftoolspower:dimensionalcell"
    },
    "E": {
      "item": "thermal:energy_cell"
    },
    "F": {
      "item": "mekanism:dust_lithium"
    },
    "G": {
      "item": "mekaddelement:dust_calcium_oxide"
    },
    "H": {
      "item": "mekanism:steel_casing"
    }
  },
  "result": {
    "item": "mekanism:elite_induction_provider"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBCBBA",
    "BDEFGDB",
    "BGHIHEB",
    "CFIJIFC",
    "BEHIHGB",
    "BDGFEDB",
    "ABBCBBA"
  ],
  "key": {
    "A": {
      "item": "mekanism:elite_induction_provider"
    },
    "B": {
      "item": "chemlib:polyvinyl_chloride_plate"
    },
    "C": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "D": {
      "item": "draconicevolution:chaotic_core"
    },
    "E": {
      "item": "draconicevolution:awakened_core"
    },
    "F": {
      "item": "mekanism:dust_lithium"
    },
    "G": {
      "item": "draconicevolution:wyvern_core"
    },
    "H": {
      "item": "draconicevolution:draconium_core"
    },
    "I": {
      "item": "mekaddelement:dust_calcium_oxide"
    },
    "J": {
      "item": "mekanism:steel_casing"
    }
  },
  "result": {
    "item": "mekanism:ultimate_induction_provider"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBBA",
    "BCDCB",
    "BDEDB",
    "BCDCB",
    "ABBBA"
  ],
  "key": {
    "A": {
      "item": "valine_s1ex:fractual_mix"
    },
    "B": {
      "item": "valine_s1ex:tungstain_carbite_plate"
    },
    "C": {
      "item": "valine_s1ex:enritched_sunnarium_alloy"
    },
    "D": {
      "item": "valine_s1ex:highend_circuit"
    },
    "E": {
      "item": "mekanism:steel_casing"
    }
  },
  "result": {
    "item": "mekanismgenerators:fission_reactor_casing",
    "count":4
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBBA",
    "CDBDC",
    "CDEDC",
    "CDEDC",
    "CDEDC"
  ],
  "key": {
    "A": {
      "item": "megacells:radioactive_cell_component"
    },
    "B": {
      "item": "valine_s1ex:highend_circuit"
    },
    "C": {
      "item": "valine_s1ex:tungstain_carbite_plate"
    },
    "D": {
      "item": "immersiveengineering:sheetmetal_uranium"
    },
    "E": {
      "item": "valine_s1ex:ether_crystal"
    }
  },
  "result": {
    "item": "mekanismgenerators:control_rod_assembly"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "ADEDA",
    "ADEDA",
    "ADEDA",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "valine_s1ex:tungstain_carbite_plate"
    },
    "B": {
      "item": "valine_s1ex:highend_circuit"
    },
    "C": {
      "item": "immersiveengineering:connector_redstone"
    },
    "D": {
      "item": "megacells:radioactive_cell_component"
    },
    "E": {
      "item": "mekanism:radioactive_waste_barrel"
    }
  },
  "result": {
    "item": "mekanismgenerators:fission_fuel_assembly"
  }
})
event.shaped('mekanism:induction_port', [
  'ACA',
  'CSC',
  'ACA'
], {
  S: 'valine_s1ex:highend_circuit',
  A: 'mekanismgenerators:fission_reactor_casing',
  C: Item.of('tconstruct:large_plate', '{Material:"mysticalagradditions:supremium"}')
})
  event.shapeless('mekanism:upgrade_speed',['valine_s1ex:mekanism_upgrade_base','thermal:machine_speed_augment'])
  event.shapeless('mekanism:upgrade_energy',['valine_s1ex:mekanism_upgrade_base','thermal:machine_efficiency_augment'])
  event.shapeless('mekanism:upgrade_filter',['valine_s1ex:mekanism_upgrade_base','itemfilters:always_true'])
  event.shapeless('mekanism:upgrade_muffling',['valine_s1ex:mekanism_upgrade_base','cyclic:soundproofing'])
  event.shapeless('mekanism:upgrade_gas',['valine_s1ex:mekanism_upgrade_base','industrialforegoing:ether_gas_bucket'])
  event.shapeless('mekanism:upgrade_anchor',['valine_s1ex:mekanism_upgrade_base','chickenchunks:chunk_loader'])
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "valine_s1ex:enritched_sunnarium_alloy"
      },
      "B": {
        "item": "mekanism:alloy_atomic"
      },
      "C": {
        "item": "thermal_extra:refined_sunflower_oil_bucket"
      },
      "D": {
        "item": "rftoolsbase:infused_diamond"
      }
    },
    "result": {
      "item": "mekanism:teleportation_core"
    }
  })
})