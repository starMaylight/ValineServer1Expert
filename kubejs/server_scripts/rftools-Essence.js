onEvent("recipes", event => {
    let removebyids = [
        'rftoolsbase:machine_frame',
        'rftoolsdim:dimlet_workbench',
        'rftoolsdim:dimension_builder',
        'rftoolsdim:enscriber',
        'rftoolsdim:dimension_editor',
        'rftoolsdim:dimension_builder'
      ]
      removebyids.forEach((name) => {
        event.remove({id: name})
        })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABA",
          "BCB",
          "DED"
        ],
        "key": {
          "A": {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          "B": {
            "item": "mekaevolution:cosmic_control_circuit"
          },
          "C": {
            "item": "rftoolsbase:machine_frame"
          },
          "D": {
            "item": "mekanism:alloy_atomic"
          },
          "E": {
            "item": "rftoolsdim:empty_dimlet"
          }
        },
        "result": {
          "item": "rftoolsdim:dimlet_workbench"
        }
      })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABA",
          "BCB",
          "DED"
        ],
        "key": {
          "A": {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          "B": {
            "item": "mekaevolution:cosmic_control_circuit"
          },
          "C": {
            "item": "rftoolsbase:machine_frame"
          },
          "D": {
            "item": "mekanism:alloy_atomic"
          },
          "E": {
            "item": "megacells:cell_component_256m"
          }
        },
        "result": {
          "item": "rftoolsdim:enscriber"
        }
      })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABA",
          "CDC",
          "EFE"
        ],
        "key": {
          "A": {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          "B": {
            "item": "powah:battery_nitro"
          },
          "C": {
            "item": "draconicevolution:wyvern_capacitor"
          },
          "D": {
            "item": "rftoolsbase:machine_frame"
          },
          "E": {
            "item": "ae2:singularity"
          },
          "F": {
            "item": "extrautilitiesrebirth:ender_quarry"
          }
        },
        "result": {
          "item": "rftoolsdim:dimension_editor"
        }
      })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCDCBA",
          "BEFGFEB",
          "CHIJIHC",
          "DGJKJGD",
          "CHIJIHC",
          "BEFGFEB",
          "ABCDCBA"
        ],
        "key": {
          "A": {
            "item": "aeinfinitybooster:dimension_card"
          },
          "B": {
            "item": "tconstruct:hepatizon_ingot"
          },
          "C": {
            "item": "extrautilitiesrebirth:bedrockium_ingot"
          },
          "D": {
            "item": "draconicevolution:draconic_energy_link_module"
          },
          "E": {
            "item": "cyclic:charm_ultimate"
          },
          "F": {
            "item": "mysticalagriculture:supremium_growth_accelerator"
          },
          "G": {
            "item": "rftoolspower:powercell_card"
          },
          "H": {
            "item": "mysticalagradditions:gaia_spirit_crux"
          },
          "I": {
            "item": "mekanismmatter:matter_fabricator"
          },
          "J": {
            "item": "draconicadditions:chaos_heart"
          },
          "K": {
            "item": "mekanism:steel_casing"
          }
        },
        "result": {
          "item": "rftoolsdim:dimension_builder"
        }
      })
    event.recipes.create.mechanical_crafting('rftoolsbase:machine_frame', [
        'ABBCCDDEA',
        'EEFGHIJEB',
        'DJKLMNKFB',
        'DINOPOLGC',
        'CHMPQPMHC',
        'CGLOPONID',
        'BFKNMLKJD',
        'BEJIHGFEE',
        'AEDDCCBBA'
      ], {
        A: 'rftoolsbase:infused_diamond',
        B: 'thermal_extra:shellite_ingot',
        C: 'thermal_extra:dragonsteel_ingot',
        D: 'thermal_extra:soul_infused_ingot',
        E: 'thermal_extra:twinite_ingot',
        F: 'valine_s1ex:high_node_item_circuit',
        G: 'create:precision_mechanism',
        H: 'mekanism:block_osmium',
        I: 'lazierae2:logic_unit',
        J: 'valine_s1ex:high_node_fluid_circuit',
        K: 'valine_s1ex:handmade_circuit',
        L: 'mysticalagradditions:nitro_crystal_crux',
        M: 'valine_s1ex:empowered_lapis',
        N: 'pneumaticcraft:smooth_plastic_brick_red',
        O: Item.of('cyclic:soulstone', '{Damage:0}'),
        P: 'thermal_extra:upgrade_augment',
        Q: 'industrialforegoing:machine_frame_supreme',
      })
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            '         ',// 1
            '    A    ',// 2
            '   AAA   ',// 3
            '  AAAAA  ',// 4
            ' AAABAAA ',// 5
            '  AAAAA  ',// 6
            '   AAA   ',// 7
            '    A    ',// 8
            '         '//  9
        ],
        key: {
            A: { item: 'rftoolsdim:rare_essence' },
            B: { item: 'rftoolsbase:dimensionalshard' }
        },
        result: {
            item: 'rftoolsdim:legendary_essence'
        },
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            '         ',// 1
            '    A    ',// 2
            '   AAA   ',// 3
            '  AAAAA  ',// 4
            ' AAABAAA ',// 5
            '  AAAAA  ',// 6
            '   AAA   ',// 7
            '    A    ',// 8
            '         '//  9
        ],
        key: {
            A: { item: 'rftoolsdim:common_essence' },
            B: { item: 'rftoolsbase:dimensionalshard' }
        },
        result: {
            item: 'rftoolsdim:rare_essence'
        },
    })
})