onEvent('recipes', event => {
    function fusion_crafting(output, mainInput, sideInput, tier, energy) {
    if (typeof tier!="string") tier = "DRACONIUM"
    if (typeof energy!="number") energy = 100000
    let catalyst = Ingredient.of(mainInput)
    if (catalyst.getCount() > 1) {
        catalyst = {
            type: "draconicevolution:ingredient_stack",
            items: [catalyst],
            count: catalyst.getCount()
        }
    }
    
    let items = Array.isArray(sideInput) ? sideInput : [sideInput]
    let ingredients = []
    items.forEach(item => {ingredients.push(Ingredient.of(item))})
            
    event.custom({
        type: "draconicevolution:fusion_crafting",

        catalyst: catalyst,
        ingredients: ingredients,
        result: Ingredient.of(output),

        total_energy: energy,
        tier: tier
    })
}
    //assembler
    //redalloy
    event.recipes.multiblocked.multiblock("assembler")
        .inputItems('64x valine_s1ex:stacker_redstone','32x valine_s1ex:stacker_copper')
        .inputFE(10000)
        .outputItem('32x valine_s1ex:compact_redalloy')
        .duration(5)
    //unassembled_pcb
    event.recipes.multiblocked.multiblock("assembler")
        .inputItems('2x valine_s1ex:stacker_redtorch','3x valine_s1ex:stacker_gold','valine_s1ex:stacker_plastic')
        .inputFE(10000)
        .outputItem('3x valine_s1ex:compact_unassembled_pcb')
        .duration(1)
    //transistor
    event.recipes.multiblocked.multiblock("assembler")
        .inputItems('27x valine_s1ex:stacker_gold','valine_s1ex:stacker_redstone','9x valine_s1ex:stacker_plastic')
        .inputFE(10000)
        .outputItem('9x valine_s1ex:compact_transistor')
        .duration(1)
    //capasitor
    event.recipes.multiblocked.multiblock("assembler")
        .inputItems('2x valine_s1ex:stacker_gold','valine_s1ex:stacker_slime','valine_s1ex:stacker_plastic')
        .inputFE(10000)
        .outputItem('valine_s1ex:compact_capacitor')
        .duration(1)
    //rosequartz
    event.recipes.multiblocked.multiblock("assembler")
        .inputItems('valine_s1ex:stacker_quartz','4x valine_s1ex:stacker_cinnabar')
        .inputFE(10000)
        .outputItem('valine_s1ex:compact_rose_quartz')
        .duration(1)
    //solar cell
    event.recipes.multiblocked.multiblock("assembler")
        .inputItems('avaritia:lapis_singularity','avaritia:amethyst_singularity')
        .inputFE(10000)
        .outputItem('800x pneumaticcraft:solar_cell')
        .duration(1)
    //wiz proc
    event.recipes.multiblocked.multiblock("assembler")
        .inputItems('valine_s1ex:stacker_raw_withering_processor')
        .inputFE(10000)
        .outputItem('valine_s1ex:compact_withering_processor')
        .duration(1)
    //b proc
    event.recipes.multiblocked.multiblock("assembler")
        .inputItems('valine_s1ex:stacker_raw_basic_processor')
        .inputFE(10000)
        .outputItem('valine_s1ex:compact_basic_processor')
        .duration(1)
    //imp proc
    event.recipes.multiblocked.multiblock("assembler")
        .inputItems('valine_s1ex:stacker_raw_improved_processor')
        .inputFE(10000)
        .outputItem('valine_s1ex:compact_improved_processor')
        .duration(1)
    //adv proc
    event.recipes.multiblocked.multiblock("assembler")
        .inputItems('valine_s1ex:stacker_raw_advanced_processor')
        .inputFE(10000)
        .outputItem('valine_s1ex:compact_advanced_processor')
        .duration(1)
    //adv press
    event.recipes.multiblocked.multiblock("assembler")
        .inputItems('valine_s1ex:stacker_compressed_iron_block')
        .inputFE(10000)
        .outputItem('20x valine_s1ex:compact_advanced_pressure_tube')
        .duration(1)
    //rcc
    event.recipes.multiblocked.multiblock("assembler")
        .inputItems('64x thermal:cinnabar_dust','16x #forge:ingots/electrum')
        .inputFE(10000)
        .outputItem('16x valine_s1ex:inactive_redstone_conductance_coil')
        .duration(1)
    //rtc
    event.recipes.multiblocked.multiblock("assembler")
        .inputItems('64x thermal:cinnabar_dust','16x #forge:ingots/silver')
        .inputFE(10000)
        .outputItem('16x valine_s1ex:inactive_redstone_transmission_coil')
        .duration(1)
    //rfc
    event.recipes.multiblocked.multiblock("assembler")
        .inputItems('64x thermal:cinnabar_dust','16x #forge:ingots/gold')
        .inputFE(10000)
        .outputItem('16x valine_s1ex:inactive_redstone_flux_coil')
        .duration(1)
    //turbinblade
    event.recipes.multiblocked.multiblock("assembler")
        .inputItems('valine_s1ex:stacker_redstone','40x valine_s1ex:stacker_gold','32x minecraft:gold_nugget')
        .inputFE(10000)
        .outputItem('8x valine_s1ex:compact_turbine_blade')
        .duration(5)
    //mixer
    //fbio
    
    event.recipes.multiblocked.multiblock("mixer")
        .setChance(0)
        .inputItem('valine_s1ex:mysterious_mixture')
        .setChance(1)
        .inputFluid(Fluid.of('industrialforegoing:biofuel',1000))
        .inputFluid(Fluid.of('industrialforegoing:meat',1000))
        .inputFE(10000)
        .outputFluid(Fluid.of('valine_s1ex:fermented_biodiesel',1000))
        .duration(1)
    //u_darkmatter_bee
    event.recipes.multiblocked.multiblock("mixer")
        .inputItem(Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:oily"}}'))
        .inputFluid(Fluid.of('valine_s1ex:unknown_darkmatter',1000))
        .inputFE(10000000)
        .outputItem(Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:unknown_darkmatter"}}'))
        .duration(1)
    //ether_bee
    event.recipes.multiblocked.multiblock("mixer")
        .inputItem(Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:oily"}}'))
        .inputFluid(Fluid.of('industrialforegoing:ether_gas',1000))
        .inputFE(10000000)
        .outputItem(Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:ether"}}'))
        .duration(1)
    //ultimate_bee
    event.recipes.multiblocked.multiblock("mixer")
        .inputItem(Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:chaos"}}'))
        .inputItem('valine_s1ex:enriched_antimatter_eternal_ingot')
        .inputFluid(Fluid.of('mekanismmatter:liquid_universal_matter',1000))
        .setPerTick(true)
        .inputFE(10000000)
        .setPerTick(false)
        .outputItem(Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:ultimate"}}'))
        .duration(100)
    //ie
    //cell_1m
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"cell"}'))
        .setChance(1)
        .inputItems('32x valine_s1ex:redalloy_ingot','ae2:calculation_processor','32x lazierae2:resonating_crystal','3x ae2:cell_component_256k')
        .inputFE(1000000)
        .outputItem('megacells:cell_component_1m')
        .duration(1)
    //cell_4m
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"cell"}'))
        .setChance(1)
        .inputItems('32x valine_s1ex:redalloy_ingot','ae2:calculation_processor','32x lazierae2:resonating_crystal','3x megacells:cell_component_1m')
        .inputFE(1000000)
        .outputItem('megacells:cell_component_4m')
        .duration(1)
    //cell_16m
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"cell"}'))
        .setChance(1)
        .inputItems('32x valine_s1ex:redalloy_ingot','ae2:calculation_processor','32x lazierae2:resonating_crystal','3x megacells:cell_component_4m')
        .inputFE(1000000)
        .outputItem('megacells:cell_component_16m')
        .duration(1)
    //cell_64m
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"cell"}'))
        .setChance(1)
        .inputItems('32x valine_s1ex:redalloy_ingot','ae2:calculation_processor','32x lazierae2:resonating_crystal','3x megacells:cell_component_16m')
        .inputFE(1000000)
        .outputItem('megacells:cell_component_64m')
        .duration(1)
    //cell_256m
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"cell"}'))
        .setChance(1)
        .inputItems('32x valine_s1ex:redalloy_ingot','ae2:calculation_processor','32x lazierae2:resonating_crystal','3x megacells:cell_component_64m')
        .inputFE(1000000)
        .outputItem('megacells:cell_component_256m')
        .duration(1)
    //cell_1k
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"miscs"}'))
        .setChance(1)
        .inputItems('32x valine_s1ex:redalloy_ingot','ae2:logic_processor','32x ae2:charged_certus_quartz_crystal','pneumaticcraft:printed_circuit_board')
        .inputFE(1000000)
        .outputItem('ae2:cell_component_1k')
        .duration(1)
    //cell_4k
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"miscs"}'))
        .setChance(1)
        .inputItems('32x valine_s1ex:redalloy_ingot','ae2:calculation_processor','32x ae2:charged_certus_quartz_crystal','3x ae2:cell_component_1k')
        .inputFE(1000000)
        .outputItem('ae2:cell_component_4k')
        .duration(1)
    //cell_16k
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"miscs"}'))
        .setChance(1)
        .inputItems('32x valine_s1ex:redalloy_ingot','ae2:calculation_processor','32x ae2:charged_certus_quartz_crystal','3x ae2:cell_component_4k')
        .inputFE(1000000)
        .outputItem('ae2:cell_component_16k')
        .duration(1)
    //cell_64k
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"miscs"}'))
        .setChance(1)
        .inputItems('32x valine_s1ex:redalloy_ingot','ae2:calculation_processor','32x ae2:charged_certus_quartz_crystal','3x ae2:cell_component_16k')
        .inputFE(1000000)
        .outputItem('ae2:cell_component_64k')
        .duration(1)
    //cell_256k
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"miscs"}'))
        .setChance(1)
        .inputItems('32x valine_s1ex:redalloy_ingot','ae2:calculation_processor','32x ae2:charged_certus_quartz_crystal','3x ae2:cell_component_64k')
        .inputFE(1000000)
        .outputItem('ae2:cell_component_256k')
        .duration(1)
    //circuit_hand
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"circuit"}'))
        .setChance(1)
        .inputItems('32x industrialforegoing:plastic','valine_s1ex:basic_circuit_base','2x immersiveengineering:component_electronic_adv','industrialforegoing:pink_slime','32x immersiveengineering:wirecoil_steel','16x valine_s1ex:redalloy_ingot')
        .inputFE(10000000)
        .outputItem('valine_s1ex:handmade_circuit')
        .duration(1)
    //circuit_high
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"circuit"}'))
        .setChance(1)
        .inputItems('64x powah:capacitor_nitro','valine_s1ex:basic_circuit_base','64x immersiveengineering:component_electronic_adv','64x valine_s1ex:resister','32x mekanism:ultimate_control_circuit','64x laserio:logic_chip')
        .inputFE(10000000)
        .outputItem('valine_s1ex:highend_circuit')
        .duration(1)
    //circuit_bc
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"circuit"}'))
        .setChance(1)
        .inputItems('32x mekanism:alloy_infused','valine_s1ex:basic_circuit_base','32x mekanism:alloy_reinforced','32x mekanism:alloy_atomic','16x valine_s1ex:handmade_circuit','64x laserio:logic_chip')
        .inputFE(10000000)
        .outputItem('mekanism:basic_control_circuit')
        .duration(1)
    //circuit_hni
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"circuit"}'))
        .setChance(1)
        .inputItems('powah:lens_of_ender','64x powah:capacitor_hardened','64x powah:capacitor_blazing','64x powah:capacitor_niotic','32x fluxnetworks:flux_core','16x powah:ender_gate_nitro')
        .inputFE(10000000)
        .outputItem('valine_s1ex:high_node_item_circuit')
        .duration(1)
    //circuit_hnf
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"circuit"}'))
        .setChance(1)
        .inputItems('valine_s1ex:basic_circuit_base','64x powah:capacitor_spirited','64x powah:capacitor_nitro','64x valine_s1ex:degenerate_symbols','32x industrialforegoing:pink_slime_ingot','16x powah:ender_gate_nitro')
        .inputFE(10000000)
        .outputItem('valine_s1ex:high_node_fluid_circuit')
        .duration(1)
    //bitter tears
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'))
        .setChance(1)
        .inputItems('#c:glass_blocks','#forge:wires/copper','#forge:plates/nickel','#forge:dusts/redstone')
        .inputFE(10000000)
        .outputItem('3x immersiveengineering:electron_tube')
        .duration(1)
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'))
        .setChance(1)
        .inputItems('immersiveengineering:circuit_board','immersiveengineering:plate_duroplast','8x createaddition:capacitor','32x immersiveengineering:wirecoil_electrum','2x immersiveengineering:electron_tube','2x immersiveengineering:component_electronic')
        .inputFE(10000000)
        .outputItem('immersiveengineering:component_electronic_adv')
        .duration(1)
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'))
        .setChance(1)
        .inputItems('#forge:treated_wood_slab','minecraft:quartz','#forge:dusts/redstone','#forge:wires/electrum')
        .inputFE(10000000)
        .outputItem('immersiveengineering:component_electronic')
        .duration(1)
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'))
        .setChance(1)
        .inputItems('2x #forge:plates/steel','#forge:ingots/copper')
        .inputFE(10000000)
        .outputItem('immersiveengineering:component_steel')
        .duration(1)
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'))
        .setChance(1)
        .inputItems('2x #forge:plates/iron','#forge:ingots/copper')
        .inputFE(10000000)
        .outputItem('immersiveengineering:component_iron')
        .duration(1)
    event.recipes.multiblocked.multiblock("ie")
        .setChance(0)
        .inputItems(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'))
        .setChance(1)
        .inputItems('immersiveengineering:plate_duroplast','create:copper_sheet')
        .inputFE(10000000)
        .outputItem('immersiveengineering:circuit_board')
        .duration(1)
    //cr_change
    let cr_change = (compact,out)=>(
    event.recipes.multiblocked.multiblock("cr_change").inputItems(compact).inputFE(10000).outputItem(out).duration(1),
    event.recipes.multiblocked.multiblock("cr_change").inputItems(out).inputFE(10000).outputItem(compact).duration(1)
    )
    cr_change('64x minecraft:redstone_block','valine_s1ex:stacker_redstone')
    cr_change('64x minecraft:slime_ball','valine_s1ex:stacker_slime')
    cr_change('64x pneumaticcraft:plastic','valine_s1ex:stacker_plastic')
    cr_change('64x valine_s1ex:redalloy_ingot','valine_s1ex:compact_redalloy')
    cr_change('64x pneumaticcraft:unassembled_pcb','valine_s1ex:compact_unassembled_pcb')
    cr_change('64x pneumaticcraft:transistor','valine_s1ex:compact_transistor')
    cr_change('64x pneumaticcraft:capacitor','valine_s1ex:compact_capacitor')
    cr_change('64x minecraft:copper_ingot','valine_s1ex:stacker_copper')
    cr_change('64x minecraft:gold_nugget','valine_s1ex:stacker_gold')
    cr_change('64x minecraft:redstone_torch','valine_s1ex:stacker_redtorch')
    cr_change('64x thermal:cinnabar_dust','valine_s1ex:stacker_cinnabar')
    cr_change('64x minecraft:quartz','valine_s1ex:stacker_quartz')
    cr_change('64x create:rose_quartz','valine_s1ex:compact_rose_quartz')
    cr_change('64x extradisks:raw_withering_processor','valine_s1ex:stacker_raw_withering_processor')
    cr_change('64x refinedstorage:raw_basic_processor','valine_s1ex:stacker_raw_basic_processor')
    cr_change('64x refinedstorage:raw_improved_processor','valine_s1ex:stacker_raw_improved_processor')
    cr_change('64x refinedstorage:raw_advanced_processor','valine_s1ex:stacker_raw_advanced_processor')
    cr_change('64x extradisks:withering_processor','valine_s1ex:compact_withering_processor')
    cr_change('64x refinedstorage:basic_processor','valine_s1ex:compact_basic_processor')
    cr_change('64x refinedstorage:improved_processor','valine_s1ex:compact_improved_processor')
    cr_change('64x refinedstorage:advanced_processor','valine_s1ex:compact_advanced_processor')
    cr_change('64x pneumaticcraft:compressed_iron_block','valine_s1ex:stacker_compressed_iron_block')
    cr_change('64x pneumaticcraft:advanced_pressure_tube','valine_s1ex:compact_advanced_pressure_tube')
    cr_change('36x pneumaticcraft:turbine_blade','valine_s1ex:compact_turbine_blade')

    fusion_crafting('v1ex_extended:load_reduction_assembler','mekanism:steel_casing',['rftoolsdim:part_energy_3','rftoolsdim:part_energy_3','rftoolsdim:part_energy_3','rftoolsdim:part_memory_3','rftoolsdim:part_memory_3','rftoolsdim:part_memory_3','valine_s1ex:high_voltage_module','valine_s1ex:high_voltage_module','valine_s1ex:compacted_valine3g_pellet'],"WYVERN",10000000)
    fusion_crafting('v1ex_extended:stack-release-changer','immersiveengineering:sheetmetal_colored_green',['valine_s1ex:compacted_valine3g_pellet','valine_s1ex:compacted_valine3g_pellet','valine_s1ex:compacted_valine3g_pellet','valine_s1ex:compacted_valine3g_pellet','valine_s1ex:compacted_valine3g_pellet','valine_s1ex:compacted_valine3g_pellet','valine_s1ex:compacted_valine3g_pellet','valine_s1ex:compacted_valine3g_pellet','valine_s1ex:compacted_valine3g_pellet','valine_s1ex:compacted_valine3g_pellet','valine_s1ex:compacted_valine3g_pellet','avaritia:neutronium_block'],"DRACONIC",500000000)
    fusion_crafting('v1ex_extended:fluid_crafter','valine_s1ex:empowered_lapis',['cyclic:battery','cyclic:battery','cyclic:battery','cyclic:battery','cyclic:battery','draconicevolution:awakened_core','draconicevolution:awakened_core','draconicevolution:awakened_core','exponentialpower:ender_cell','exponentialpower:ender_cell'],"DRACONIC",500000000)
    fusion_crafting('v1ex_extended:why_you_use_ie','mekanism:formulaic_assemblicator',['mekaevolution:cosmic_control_circuit','mekaevolution:cosmic_control_circuit','mekaevolution:cosmic_control_circuit','mekaevolution:cosmic_control_circuit','draconicevolution:awakened_core','draconicevolution:awakened_core','draconicevolution:awakened_core','draconicevolution:awakened_core'],"DRACONIC",500000000000)
    fusion_crafting('extraordinary_energy:gt_generator','v1ex_extended:high_voltage_machine_casingg',['industrialforegoing:mycelial_reactor','extrautilitiesrebirth:rainbow_generator'],"CHAOTIC",500000000)
    fusion_crafting('v1ex_extended:imitate_assembly_line','valine_s1ex:machine_casing',['draconicevolution:chaotic_energy_core','draconicevolution:chaotic_energy_core','draconicevolution:chaos_shard','draconicevolution:chaos_shard','draconicadditions:chaos_heart','draconicadditions:chaos_heart'],"CHAOTIC",500000000)


event.custom({
    "type": "productivebees:centrifuge",
    "ingredient": {
        "type": "forge:nbt",
        "item": "productivebees:configurable_honeycomb",
        "nbt": {
            "EntityTag": {
                "type": "productivebees:unknown_darkmatter"
            }
        }
    },
    "outputs": [
        {
            "item": {
                "tag": "forge:wax"
            }
        },
        {
            "fluid": {
                "tag": "valine_s1ex:unknown_darkmatter"
            },
            "amount": 100
        }
    ]
})
event.custom({
    "type": "productivebees:advanced_beehive",
    "ingredient": "productivebees:unknown_darkmatter",
    "results": [
        {
            "item": {
                "type": "forge:nbt",
                "item": "productivebees:configurable_honeycomb",
                "nbt": {
                    "EntityTag": {
                        "type": "productivebees:unknown_darkmatter"
                    }
                }
            }
        },
        {
            "item": {
                "tag": "forge:pollen"
            },
            "chance": 5
        }
    ]
})
event.custom({
    "type": "productivebees:advanced_beehive",
    "ingredient": "productivebees:ultimate",
    "results": [
        {
            "item": {
                "type": "forge:nbt",
                "item": "productivebees:configurable_honeycomb",
                "nbt": {
                    "EntityTag": {
                        "type": "productivebees:ultimate"
                    }
                }
            }
        },
        {
            "item": {
                "tag": "forge:pollen"
            },
            "chance": 5
        }
    ]
})
event.custom({
    "type": "productivebees:centrifuge",
    "ingredient": {
        "type": "forge:nbt",
        "item": "productivebees:configurable_honeycomb",
        "nbt": {
            "EntityTag": {
                "type": "productivebees:ultimate"
            }
        }
    },
    "outputs": [
        {
            "item": {
                "tag": "forge:wax"
            }
        },{
            "item": {
				"item":"extendedcrafting:ultimate_singularity"
            }
        },
        {
            "fluid": {
                "fluid": "productivebees:honey"
            },
            "amount": 50
        }
    ]
})
event.custom({
    "type": "productivebees:centrifuge",
    "ingredient": {
        "type": "forge:nbt",
        "item": "productivebees:configurable_honeycomb",
        "nbt": {
            "EntityTag": {
                "type": "productivebees:ether"
            }
        }
    },
    "outputs": [
        {
            "item": {
                "tag": "forge:wax"
            }
        },
        {
            "fluid": {
                "tag": "industrialforegoing:ether_gas"
            },
            "amount": 100
        }
    ]
})
event.custom({
    "type": "productivebees:advanced_beehive",
    "ingredient": "productivebees:ether",
    "results": [
        {
            "item": {
                "type": "forge:nbt",
                "item": "productivebees:configurable_honeycomb",
                "nbt": {
                    "EntityTag": {
                        "type": "productivebees:ether"
                    }
                }
            }
        },
        {
            "item": {
                "tag": "forge:pollen"
            },
            "chance": 5
        }
    ]
})
event.recipes.multiblocked.multiblock("line")
        .inputItems('immersiveengineering:toolupgrade_powerpack_antenna','10x createaddition:large_connector','20x chemlib:polyvinyl_chloride_plate','10x valine_s1ex:terrasteel_wire','10x valine_s1ex:nichrome_wire','10x immersiveengineering:connector_hv','10x thermal:cured_rubber')
        .inputFE(1000000000)
        .outputItem('valine_s1ex:connector')
        .duration(1)
event.recipes.multiblocked.multiblock("line")
        .inputItems('draconicevolution:energy_core','4x draconicevolution:draconium_core','4x mekanism:teleportation_core','4x mekanism:electrolytic_core','4x pneumaticcraft:logistics_core','4x powah:ender_core','4x alchemistry:fusion_core','4x alchemistry:fission_core','4x pneumaticcraft:spawner_core','4x valine_s1ex:eliminated_core','4x valine_s1ex:stabilized_core')
        .inputFE(1000000000)
        .outputItem('draconicevolution:module_core')
        .duration(1)
event.recipes.multiblocked.multiblock("line")
        .inputItems('mekanismgenerators:fission_reactor_casing','4x valine_s1ex:high_voltage_module','4x valine_s1ex:connector','4x valine_s1ex:high_voltage_module','4x valine_s1ex:connector','4x valine_s1ex:resister','4x immersiveengineering:transformer_hv','4x rftoolspower:blazing_generator','4x valine_s1ex:highend_circuit','4x pneumaticcraft:display_table')
        .inputFE(1000000000)
        .outputItem('draconicevolution:basic_crafting_injector')
        .duration(1)
event.recipes.multiblocked.multiblock("line")
        .inputItems('valine_s1ex:highend_circuit','4x valine_s1ex:nichrome_coil_block','8x valine_s1ex:tungstain_carbite_plate','4x pneumaticcraft:redstone_module','4x pneumaticcraft:logistics_module','4x pneumaticcraft:flow_detector_module','4x immersiveengineering:component_electronic_adv')
        .inputFE(1000000000)
        .outputItem('valine_s1ex:high_voltage_module')
        .duration(1)
event.recipes.multiblocked.multiblock("line")
        .inputItems('draconicevolution:draconium_core','4x ae2:energy_card','4x valine_s1ex:redalloy_ingot','4x draconicevolution:draconium_block','4x valine_s1ex:high_voltage_module')
        .inputFE(1000000000)
        .outputItem('draconicevolution:wyvern_energy_core')
        .duration(1)
event.recipes.multiblocked.multiblock("line")
        .inputItems('draconicevolution:chaotic_core','16x draconicevolution:draconic_energy_core','64x draconicevolution:medium_chaos_frag','64x powah:reactor_nitro','32x mekaevolution:infinite_control_circuit','draconicevolution:draconic_capacitor')
        .inputFE(1000000000)
        .outputItem('draconicevolution:chaotic_energy_core')
        .duration(1)
event.recipes.multiblocked.multiblock("line")
        .inputItems('draconicevolution:awakened_core','16x draconicevolution:wyvern_energy_core','64x draconicevolution:awakened_draconium_ingot','16x fluxnetworks:gargantuan_flux_storage','32x mekanism:ultimate_control_circuit','draconicevolution:wyvern_capacitor')
        .inputFE(1000000000)
        .outputItem('draconicevolution:draconic_energy_core')
        .duration(1)
})