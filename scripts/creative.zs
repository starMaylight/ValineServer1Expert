import mods.jei.JEI;
mods.extendedcrafting.TableCrafting.addShaped("l-achievement", 0, <item:overdrive:unparalleled_achievement_l>, [
	[<item:refinedstorage:construction_core>, <item:refinedstorage:destruction_core>, <item:refinedstorage:advanced_processor>, <item:refinedstorage:improved_processor>, <item:extradisks:withering_processor>, <item:rebornstorage:super_advanced_processor>, <item:pneumaticcraft:logistics_core>, <item:pneumaticcraft:printed_circuit_board>, <item:pneumaticcraft:module_expansion_card>], 
	[<item:mekanism:teleportation_core>, <item:mekanism:basic_control_circuit>, <item:mekanism:advanced_control_circuit>, <item:mekanism:elite_control_circuit>, <item:mekanism:ultimate_control_circuit>, <item:mekaevolution:absolute_control_circuit>, <item:mekaevolution:supreme_control_circuit>, <item:mekaevolution:cosmic_control_circuit>, <item:mekaevolution:infinite_control_circuit>], 
	[<item:valine_s1ex:basic_circuit_base>, <item:valine_s1ex:handmade_circuit>, <item:valine_s1ex:high_node_fluid_circuit>, <item:valine_s1ex:high_node_item_circuit>, <item:valine_s1ex:highend_circuit>, <item:thermal:upgrade_augment_1>, <item:thermal:upgrade_augment_2>, <item:thermal:upgrade_augment_3>, <item:thermal_extra:upgrade_augment>], 
	[<item:draconicevolution:draconium_core>, <item:draconicevolution:wyvern_core>, <item:draconicevolution:awakened_core>, <item:draconicevolution:chaotic_core>, <item:productivebees:upgrade_base>, <item:laserio:card_redstone>, <item:laserio:card_energy>, <item:laserio:card_fluid>, <item:laserio:card_item>], 
	[<item:integratedterminals:part_terminal_storage>, <item:integrateddynamics:cable>, <item:valine_s1ex:high_voltage_module>, <item:cyclic:unbreakable_block>, <item:extendedcrafting:ultimate_singularity>, <item:cyclic:unbreakable_block>, <item:valine_s1ex:high_voltage_module>, <item:integrateddynamics:cable>, <item:integratedterminals:part_terminal_storage>], 
	[<item:extendedcrafting:basic_catalyst>, <item:extendedcrafting:advanced_catalyst>, <item:extendedcrafting:elite_catalyst>, <item:extendedcrafting:ultimate_catalyst>, <item:extendedcrafting:crystaltine_catalyst>, <item:extendedcrafting:redstone_catalyst>, <item:extendedcrafting:ender_catalyst>, <item:extendedcrafting:enhanced_ender_catalyst>, <item:extendedcrafting:the_ultimate_catalyst>], 
	[<item:immersiveengineering:circuit_board>, <item:immersiveengineering:electron_tube>, <item:immersiveengineering:component_electronic>, <item:immersiveengineering:component_electronic_adv>, <item:integrateddynamics:logic_director>, <item:integrateddynamics:variable>, <item:integrateddynamics:variable_transformer_output>, <item:integrateddynamics:variable_transformer_input>, <item:integrateddynamics:portable_logic_programmer>], 
	[<item:ae2:logic_processor>, <item:ae2:engineering_processor>, <item:ae2:calculation_processor>, <item:lazierae2:parallel_processor>, <item:ae2:annihilation_core>, <item:ae2:formation_core>, <item:packagedauto:package_component>, <item:packagedauto:me_package_component>, <item:exponentialpower:ender_cell>], 
	[<item:dimstorage:dim_core>, <item:dimstorage:solid_dim_core>, <item:powah:ender_core>, <item:powah:player_aerial_pearl>, <item:fluxnetworks:flux_core>, <item:pneumaticcraft:spawner_core>, <item:valine_s1ex:eliminated_core>, <item:valine_s1ex:stabilized_core>, <item:create:precision_mechanism>]
]);
mods.extendedcrafting.CompressionCrafting.addRecipe("hermal", <item:minecraft:poisonous_potato>, <item:draconicadditions:hermal>, 100, <item:minecraft:poisonous_potato>, 1000000,10000); 
mods.extendedcrafting.CompressionCrafting.addRecipe("matter", <item:mekanism:pellet_polonium>, <item:mekanism:pellet_antimatter>, 10000, <item:mekanism:pellet_antimatter>, 10000000,10000); 
JEI.hideRecipe("create:sequenced_assembly", "overdrive:thank_you_for_playing");
JEI.hideRegex("overdrive:administrator_authority");
mods.extendedcrafting.CompressionCrafting.addRecipe("inferium_essence", <item:mysticalagriculture:inferium_essence>, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:inferium_essence" as string}), 10000, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:inferium_essence" as string}), 10000000,10000); 
mods.extendedcrafting.CompressionCrafting.addRecipe("prudentium_essence",<item:mysticalagriculture:prudentium_essence>,  <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:prudentium_essence" as string}), 10000, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:prudentium_essence" as string}), 10000000,10000); 
mods.extendedcrafting.CompressionCrafting.addRecipe("tertium_essence",  <item:mysticalagriculture:tertium_essence>,<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:tertium_essence" as string}), 10000, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:tertium_essence" as string}), 10000000,10000); 
mods.extendedcrafting.CompressionCrafting.addRecipe("imperium_essence",  <item:mysticalagriculture:imperium_essence>, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:imperium_essence" as string}),10000, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:imperium_essence" as string}), 10000000,10000); 
mods.extendedcrafting.CompressionCrafting.addRecipe("supremium_essence", <item:mysticalagriculture:supremium_essence>, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:supremium_essence" as string}),10000, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:supremium_essence" as string}), 10000000,10000); 
mods.extendedcrafting.CompressionCrafting.addRecipe("insanium_essence",  <item:mysticalagradditions:insanium_essence>,<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:insanium_essence" as string}), 10000, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:insanium_essence" as string}), 10000000,10000); 