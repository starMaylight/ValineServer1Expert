craftingTable.remove(<item:exponentialpower:ender_cell>);
craftingTable.remove(<item:exponentialpower:ender_generator>);
craftingTable.remove(<item:exponentialpower:advanced_ender_generator>);
craftingTable.remove(<item:exponentialpower:ender_storage>);
craftingTable.remove(<item:exponentialpower:advanced_ender_storage>);   
mods.extendedcrafting.CompressionCrafting.addRecipe("dragonheart", <item:hostilenetworks:prediction>.withTag({data_model: {id: "hostilenetworks:ender_dragon" as string}}), <item:draconicevolution:dragon_heart>,100, <item:draconicevolution:dragon_heart>, 10000000, 10000);
mods.extendedcrafting.TableCrafting.addShapeless("valine_s1ex/ender_generator", 0, <item:exponentialpower:ender_generator>, [
	<item:cyclic:generator_fuel>, <item:cyclic:generator_food>, <item:cyclic:generator_fluid>, <item:cyclic:generator_item>, <item:cyclic:generator_solar>, <item:extrautilitiesrebirth:culinary_generator>, <item:extrautilitiesrebirth:death_generator>, <item:extrautilitiesrebirth:disenchantment_generator>, <item:extrautilitiesrebirth:ender_generator>, 
	<item:extrautilitiesrebirth:tnt_generator>, <item:extrautilitiesrebirth:frosty_generator_1>, <item:extrautilitiesrebirth:furnace_generator>, <item:extrautilitiesrebirth:halitosis_generator>, <item:extrautilitiesrebirth:netherstar_generator>, <item:extrautilitiesrebirth:overclocked_generator>, <item:extrautilitiesrebirth:pink_generator>, <item:extrautilitiesrebirth:potion_generator_1>, <item:extrautilitiesrebirth:survival_generator>, 
	<item:extrautilitiesrebirth:redstone_generator>, <item:extrautilitiesrebirth:magma_generator>, <item:extrautilitiesrebirth:slimey_generator>, <item:extrautilitiesrebirth:rainbow_generator>, <item:immersiveengineering:thermoelectric_generator>, <item:immersiveengineering:generator>, <item:industrialforegoing:pitiful_generator>, <item:industrialforegoing:biofuel_generator>, <item:industrialforegoing:mycelial_furnace>, 
	<item:industrialforegoing:mycelial_slimey>, <item:industrialforegoing:mycelial_culinary>, <item:industrialforegoing:mycelial_potion>, <item:industrialforegoing:mycelial_disenchantment>, <item:draconicevolution:generator>, <item:industrialforegoing:mycelial_ender>, <item:industrialforegoing:mycelial_explosive>, <item:industrialforegoing:mycelial_frosty>, <item:industrialforegoing:mycelial_halitosis>, 
	<item:industrialforegoing:mycelial_magma>, <item:industrialforegoing:mycelial_pink>, <item:industrialforegoing:mycelial_netherstar>, <item:draconicevolution:generator>, <item:exponentialpower:ender_storage>, <item:draconicevolution:generator>, <item:industrialforegoing:mycelial_death>, <item:industrialforegoing:mycelial_rocket>, <item:industrialforegoing:mycelial_crimed>, 
	<item:industrialforegoing:mycelial_meatallurgic>, <item:integrateddynamics:coal_generator>, <item:mekanismgenerators:heat_generator>, <item:mekanismgenerators:solar_generator>, <item:draconicevolution:generator>, <item:mekanismgenerators:gas_burning_generator>, <item:mekanismgenerators:bio_generator>, <item:mekanismgenerators:advanced_solar_generator>, <item:mekanismgenerators:wind_generator>, 
	<item:thermal:dynamo_stirling>, <item:thermal:dynamo_compression>, <item:thermal:dynamo_magmatic>, <item:thermal:dynamo_numismatic>, <item:thermal:dynamo_lapidary>, <item:thermal:dynamo_disenchantment>, <item:thermal:dynamo_gourmand>, <item:rftoolspower:coalgenerator>, <item:rftoolspower:blazing_generator>, 
	<item:productivebees:honey_generator>, <item:powah:reactor_nitro>, <item:powah:solar_panel_nitro>, <item:powah:thermo_generator_nitro>, <item:powah:magmator_nitro>, <item:powah:furnator_nitro>, <item:draconicevolution:reactor_core>, <item:industrialforegoing:mycelial_reactor>, <item:mekanismgenerators:fusion_reactor_controller>, 
	<item:createaddition:electric_motor>, <item:rftoolspower:endergenic>, <item:rftoolspower:pearl_injector>, <item:immersiveengineering:dynamo>, <item:pneumaticcraft:pneumatic_dynamo>, <item:extrautilitiesrebirth:solar_panel>, <item:extrautilitiesrebirth:lunar_panel>, <item:ironfurnaces:augment_generator>, <item:solarpanels:photonic_solar_panel>
]);
craftingTable.addShaped("exponentialpower/advanced_ender_generator", <item:exponentialpower:advanced_ender_generator>, [[<item:exponentialpower:ender_generator>, <item:draconicevolution:reactor_core>, <item:exponentialpower:ender_generator>], [<item:draconicevolution:reactor_stabilizer>, <item:avaritia:infinity_block>, <item:draconicevolution:reactor_stabilizer>], [<item:exponentialpower:ender_generator>, <item:draconicevolution:reactor_core>, <item:exponentialpower:ender_generator>]]);
craftingTable.addShaped("exponentialpower/advanced_ender_storage", <item:exponentialpower:advanced_ender_storage>, [[<item:avaritia:endest_pearl>, <item:exponentialpower:ender_storage>, <item:avaritia:endest_pearl>], [<item:exponentialpower:ender_storage>, <item:avaritia:infinity_block>, <item:exponentialpower:ender_storage>], [<item:avaritia:endest_pearl>, <item:exponentialpower:ender_storage>, <item:avaritia:endest_pearl>]]);