onEvent("recipes", (event) => {
  let gear = [
    'industrialforegoing:diamond_gear',
    'industrialforegoing:gold_gear',
    'industrialforegoing:iron_gear',
    'pneumaticcraft:compressed_iron_gear',
    'thermal:bronze_gear',
    'thermal:constantan_gear',
		'thermal:copper_gear',
    'thermal:diamond_gear',
    'thermal:electrum_gear',
    'thermal:emerald_gear',
    'thermal:gold_gear',
    'thermal:invar_gear',
    'thermal:iron_gear',
    'thermal:lapis_gear',
    'thermal:lead_gear',
    'thermal:lumium_gear',
    'thermal:netherite_gear',
    'thermal:nickel_gear',
    'thermal:quartz_gear',
    'thermal:rose_gold_gear',
    'thermal:signalum_gear',
    'thermal:silver_gear',
    'thermal:steel_gear',
    'thermal:tin_gear',
    'thermal_extra:dragonsteel_gear',
    'thermal_extra:twinite_gear',
    'thermal:enderium_gear',
    'thermal_extra:shellite_gear',
    'thermal_extra:soul_infused_gear'
	]
    gear.forEach((name) => {
	event.remove({output: name})
	})
    
  event.remove({id:'thermal:rubber_from_vine'})
  event.remove({id:'thermal:rubber_from_dandelion'})
    event.remove({id:'thermal:bronze_dust_4'})
    event.remove({id:'thermal:electrum_dust_2'})
    event.remove({id:'thermal:invar_dust_3'})
    event.remove({id:'thermal:constantan_dust_2'})
    event.remove({id:'thermal:signalum_dust_4'})
    event.remove({id:'thermal:lumium_dust_4'})
    event.remove({id:'thermal:enderium_dust_2'})
    event.remove({id:'thermal_extra:soul_infused_dust'})
    event.remove({id:'thermal_extra:shellite_dust'})
    event.remove({id:'thermal_extra:twinite_dust'})
    event.remove({id:'thermal_extra:dragonsteel_dust'})
    event.remove({id:'thermal:fire_charge/bronze_ingot_4'})
    event.remove({id:'thermal:fire_charge/electrum_ingot_2'})
    event.remove({id:'thermal:fire_charge/invar_ingot_3'})
    event.remove({id:'thermal:fire_charge/constantan_ingot_2'})
    event.remove({id:'thermal:fire_charge/signalum_ingot_4'})
    event.remove({id:'thermal:fire_charge/lumium_ingot_4'})
    event.remove({id:'thermal:fire_charge/enderium_ingot_2'})
    event.remove({id:'thermal:machine_frame'})
    event.remove({id:'thermal:fire_charge/obsidian_glass_2'})
    event.remove({id:'thermal:fire_charge/signalum_glass_2'})
    event.remove({id:'thermal:fire_charge/lumium_glass_2'})
    event.remove({id:'thermal:fire_charge/enderium_glass_2'})
    event.remove({id:'thermal:rf_coil'})
    event.remove({id:'thermal:redstone_servo'})
    event.remove({id:'thermal:fluid_cell'})    
    event.remove({id:'thermal:energy_cell'})
    event.remove({id:'thermal:dynamo_stirling'})
    event.remove({id:'thermal:dynamo_compression'})
    event.remove({id:'thermal:dynamo_magmatic'})
    event.remove({id:'thermal:dynamo_numismatic'})
    event.remove({id:'thermal:dynamo_lapidary'})
    event.remove({id:'thermal:dynamo_disenchantment'})
    event.remove({id:'thermal:dynamo_gourmand'})
    event.remove({id:'thermal:energy_duct_4'})
    event.remove({id:'thermal:augments/rf_coil_augment'})
    event.remove({id:'thermal:augments/rf_coil_storage_augment'})
    event.remove({id:'thermal:augments/rf_coil_xfer_augment'})
    event.remove({id:'thermal:augments/machine_speed_augment'})
    event.remove({id:'thermal:augments/machine_efficiency_augment'})
    event.remove({id:'thermal_extra:soul_infused_glass'})
    event.remove({id:'thermal_extra:shellite_glass'})
    event.remove({id:'thermal_extra:twinite_glass'})
    event.remove({id:'thermal_extra:dragonsteel_glass'})
    event.shaped('thermal:machine_frame', [
      'AAA',
      'ASA',
      'BBB'
    ], {
      S: 'valine_s1ex:stabilized_core',
      A: 'pneumaticcraft:plastic',
      B:'#forge:storage_blocks/compressed_iron'
    })
  
  event.recipes.thermal.smelter('thermal_extra:soul_infused_glass',['#forge:ingots/soul_infused', '2x thermal:obsidian_glass']).energy(200000)
  event.recipes.thermal.smelter('thermal_extra:shellite_glass',['thermal_extra:shellite_ingot', '2x thermal:obsidian_glass']).energy(200000)
  event.recipes.thermal.smelter('thermal_extra:twinite_glass',['#forge:ingots/twinite', '2x thermal:obsidian_glass']).energy(200000)
  event.recipes.thermal.smelter('thermal_extra:dragonsteel_glass',['#forge:ingots/dragonsteel', '2x thermal:obsidian_glass']).energy(200000)

  //coil&servo
  event.custom({"type": "cyclic:melter",
    "ingredients": [
      {"tag": "forge:dusts/redstone"}],
    "energy": {"rfpertick": 20,"ticks": 40},
    "result": {"fluid": "thermal:redstone","count": 100}})
    event.custom({"type":"createaddition:charging",
      "input": {"item": "valine_s1ex:inactive_redstone_servo","count": 1},
      "result": {"item": "thermal:redstone_servo","count": 1},
      "energy": 100000})
    event.custom({"type":"createaddition:charging",
      "input": {"item": "valine_s1ex:inactive_redstone_flux_coil","count": 1},
      "result": {"item": "thermal:rf_coil","count": 1},
      "energy": 100000})
    event.custom({"type": "create:filling",
      "ingredients": [{"item": "thermal:fluid_cell_frame"},
        {"fluid": "thermal:glowstone","amount": 1000}],
      "results": [{"item": "thermal:fluid_cell"}]})
    event.custom({"type": "create:filling",
      "ingredients": [{"item": "thermal:energy_cell_frame"},
        {"fluid": "thermal:redstone","amount": 1000}],
      "results": [{"item": "thermal:energy_cell"}]})

  //Generator
    event.shaped('thermal:dynamo_stirling', [
      ' A ',
      'BSB',
      'CDC'
    ], {
      D:'extrautilitiesrebirth:upgrade_base',
      A: 'valine_s1ex:redstone_transmission_coil',
      B:'#forge:ingots/compressed_iron',
      S: '#forge:gears/iron',
      C:'#pneumaticcraft:reinforced_stone'})
    event.shaped('thermal:dynamo_compression', [
        ' A ',
        'BSB',
        'CDC'
      ], {
        D:'extrautilitiesrebirth:upgrade_base',
        A: 'valine_s1ex:redstone_transmission_coil',
        B:'#forge:ingots/compressed_iron',
        S: '#forge:gears/bronze',
        C:'#forge:ingots/bronze'})
    event.shaped('thermal:dynamo_magmatic', [
      ' A ',
      'BSB',
      'CDC'
    ], {
      D:'extrautilitiesrebirth:upgrade_base',
      A: 'valine_s1ex:redstone_transmission_coil',
      B:'#forge:ingots/compressed_iron',
      S:'thermal:invar_gear',
      C:'#forge:ingots/invar'})
    event.shaped('thermal:dynamo_numismatic', [
      ' A ',
      'BSB',
      'CDC'
    ], {
      D:'extrautilitiesrebirth:upgrade_base',
      A: 'valine_s1ex:redstone_transmission_coil',
      B:'#forge:ingots/compressed_iron',
      S: '#forge:gears/constantan',
      C:'#forge:ingots/constantan'})
    event.shaped('thermal:dynamo_lapidary', [
      ' A ',
      'BSB',
      'CDC'
    ], {
      D:'extrautilitiesrebirth:upgrade_base',
      A: 'valine_s1ex:redstone_transmission_coil',
      B:'#forge:ingots/compressed_iron',
      S:'#forge:gears/lapis',
      C:'compressedcreativity:brass_gilded_lapis_lazuli'})
    event.shaped('thermal:dynamo_disenchantment', [
      ' A ',
      'BSB',
      'CDC'
    ], {
      D:'extrautilitiesrebirth:upgrade_base',
      A: 'valine_s1ex:redstone_transmission_coil',
      B:'#forge:ingots/compressed_iron',
      S: '#forge:gears/electrum',
      C:'minecraft:experience_bottle'})
    event.shaped('thermal:dynamo_gourmand', [
      ' A ',
      'BSB',
      'CDC'
    ], {
      D:'extrautilitiesrebirth:upgrade_base',
      A: 'valine_s1ex:redstone_transmission_coil',
      B:'#forge:ingots/compressed_iron',
      S:'#forge:gears/compressed_iron',
      C:'#forge:ingots/brass'})
  //augment
  let aug = (output,a,b,s) => {
    event.shaped(output, [
      ' A ',
      'BSB',
      ' A '
    ], {A:a,B:b,S:s})
    }
  aug('thermal:rf_coil_augment','#forge:ingots/electrum','#forge:ingots/invar','valine_s1ex:redstone_conductance_coil')
  aug('thermal:rf_coil_storage_augment','#forge:dusts/cinnabar','#forge:dusts/apatite','thermal:rf_coil_augment')
  aug('thermal:rf_coil_xfer_augment','#forge:dusts/niter','#forge:dusts/sulfur','thermal:rf_coil_augment')
  aug('thermal:machine_speed_augment','#forge:gears/lead','#forge:plates/electrum','valine_s1ex:redstone_conductance_coil')
  aug('thermal:machine_efficiency_augment','#forge:gears/constantan','#forge:plates/lumium','valine_s1ex:redstone_conductance_coil')
  //compat
  event.custom({
    "type": "mekanism:crushing",
    "input": {
      "ingredient": {
        "item": "thermal:apatite"}},
    "output": {"item": "thermal:apatite_dust"}})
  event.custom({
    "type": "mekanism:crushing",
    "input": {
      "ingredient": {
        "item": "thermal:cinnabar"}},
    "output": {"item": "thermal:cinnabar_dust"}})
  event.custom({
    "type": "mekanism:crushing",
    "input": {
      "ingredient": {
        "item": "thermal:niter"}},
    "output": {"item": "thermal:niter_dust"}})
  event.custom({
    "type": "mekanism:crushing",
    "input": {
      "ingredient": {
        "item": "thermal:sulfur"}},
    "output": {"item": "thermal:sulfur_dust"}})
  event.custom({
    "type": "mekanism:crushing",
    "input": {
      "ingredient": {
        "item": "minecraft:ender_pearl"}},
    "output": {"item": "thermal:ender_pearl_dust"}})
  let gearprocessing = (id) =>{
    event.recipes.thermal.press(`#forge:gears/${id}`, [`4x #forge:ingots/${id}`, 'thermal:press_gear_die'])
    event.recipes.immersiveengineering.metal_press(`#forge:gears/${id}`, `4x #forge:ingots/${id}`, 'immersiveengineering:mold_gear')
  }
  let gearprocessinggem = (id) =>{
    event.recipes.thermal.press(`#forge:gears/${id}`, [`4x #forge:gems/${id}`, 'thermal:press_gear_die'])
    event.recipes.immersiveengineering.metal_press(`#forge:gears/${id}`, `4x #forge:gems/${id}`, 'immersiveengineering:mold_gear')
  }
  gearprocessing('iron')
  gearprocessing('gold')
  gearprocessinggem('diamond')
  gearprocessing('compressed_iron')
  gearprocessing('steel')
  gearprocessing('rose_gold')
  gearprocessing('copper')
  gearprocessing('netherite')
  gearprocessinggem('lapis')
  gearprocessinggem('emerald')
  gearprocessinggem('quartz')
  gearprocessing('tin')
  gearprocessing('lead')
  gearprocessing('silver')
  gearprocessing('nickel')
  gearprocessing('bronze')
  gearprocessing('electrum')
  gearprocessing('invar')
  gearprocessing('constantan')
  gearprocessing('signalum')
  gearprocessing('lumium')
  gearprocessing('enderium')
  gearprocessing('soul_infused')
  gearprocessing('shellite')
  gearprocessing('twinite')
  gearprocessing('dragonsteel')
})
