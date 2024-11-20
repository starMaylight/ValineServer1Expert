/*
onEvent("recipes", event => {
		event.custom({
				type: 'extendedcrafting:shaped_table',
				pattern: ['GCBDDDBCG','CBFFFFFBC','BFFEEEFFB','DFEHHHEFD','DFEHAHEFD','DFEHHHEFD','BFFEEEFFB','CBFFFFFBC','GCBDDDBCG'],
				key: {
						A: {item: '前提素材'},
						B: {item: 'mekanism:pellet_antimatter'},
						C: {item: 'botania:gaia_ingot'},
						D: {item: 'mekaevolution:infinite_control_circuit'},
						E: {item: 'avaritia:infinity_catalyst'},
						F: {item: 'mysticalagradditions:creative_essence'},
						G: {item: 'extendedcrafting:ender_star_block'},
						H: {item: 'rftoolsdim:legendary_essence'}
				},
				result:{
						item: '完成品'
				},
		});
});
*/
onEvent("recipes", event => {
	/*event.custom({
		type: 'extendedcrafting:shaped_table',
		pattern: ['GCBDDDBCG', 'CBFFFFFBC', 'BFFEEEFFB', 'DFEHHHEFD', 'DFEHAHEFD', 'DFEHHHEFD', 'BFFEEEFFB', 'CBFFFFFBC', 'GCBDDDBCG'],
		key: {
			A: { item: 'mekanism:ultimate_chemical_tank' },
			B: { item: 'mekanism:pellet_antimatter' },
			C: { item: 'botania:gaia_ingot' },
			D: { item: 'mekaevolution:infinite_control_circuit' },
			E: { item: 'avaritia:infinity_catalyst' },
			F: { item: 'mysticalagradditions:creative_essence' },
			G: { item: 'extendedcrafting:ender_star_block' },
			H: { item: 'rftoolsdim:legendary_essence' }
		},
		result: {
			item: 'mekanism:creative_chemical_tank'
		},
	})

	event.custom({
		type: 'extendedcrafting:shaped_table',
		pattern: ['GCBDDDBCG', 'CBFFFFFBC', 'BFFEEEFFB', 'DFEHHHEFD', 'DFEHAHEFD', 'DFEHHHEFD', 'BFFEEEFFB', 'CBFFFFFBC', 'GCBDDDBCG'],
		key: {
			A: { item: 'draconicevolution:chaotic_capacitor' },
			B: { item: 'mekanism:pellet_antimatter' },
			C: { item: 'botania:gaia_ingot' },
			D: { item: 'mekaevolution:infinite_control_circuit' },
			E: { item: 'avaritia:infinity_catalyst' },
			F: { item: 'mysticalagradditions:creative_essence' },
			G: { item: 'extendedcrafting:ender_star_block' },
			H: { item: 'rftoolsdim:legendary_essence' }
		},
		result: {
			item: 'draconicevolution:creative_capacitor'
		},
	})

	event.custom({
		type: 'extendedcrafting:shaped_table',
		pattern: ['GCBDDDBCG', 'CBFFFFFBC', 'BFFEEEFFB', 'DFEHHHEFD', 'DFEHAHEFD', 'DFEHHHEFD', 'BFFEEEFFB', 'CBFFFFFBC', 'GCBDDDBCG'],
		key: {
			A: { item: 'mekanism:ultimate_fluid_tank' },
			B: { item: 'mekanism:pellet_antimatter' },
			C: { item: 'botania:gaia_ingot' },
			D: { item: 'mekaevolution:infinite_control_circuit' },
			E: { item: 'avaritia:infinity_catalyst' },
			F: { item: 'mysticalagradditions:creative_essence' },
			G: { item: 'extendedcrafting:ender_star_block' },
			H: { item: 'rftoolsdim:legendary_essence' }
		},
		result: {
			item: 'mekanism:creative_fluid_tank'
		},
	})

	event.custom({
		type: 'extendedcrafting:shaped_table',
		pattern: ['GCBDDDBCG', 'CBFFFFFBC', 'BFFEEEFFB', 'DFEHHHEFD', 'DFEHAHEFD', 'DFEHHHEFD', 'BFFEEEFFB', 'CBFFFFFBC', 'GCBDDDBCG'],
		key: {
			A: { item: 'modularrouters:blank_module' },
			B: { item: 'mekanism:pellet_antimatter' },
			C: { item: 'botania:gaia_ingot' },
			D: { item: 'mekaevolution:infinite_control_circuit' },
			E: { item: 'avaritia:infinity_catalyst' },
			F: { item: 'mysticalagradditions:creative_essence' },
			G: { item: 'extendedcrafting:ender_star_block' },
			H: { item: 'rftoolsdim:legendary_essence' }
		},
		result: {
			item: 'modularrouters:creative_module'
		},
	})

	event.custom({
		type: 'extendedcrafting:shaped_table',
		pattern: ['GCBDDDBCG', 'CBFFFFFBC', 'BFFEEEFFB', 'DFEHHHEFD', 'DFEHAHEFD', 'DFEHHHEFD', 'BFFEEEFFB', 'CBFFFFFBC', 'GCBDDDBCG'],
		key: {
			A: { item: 'createaddition:electric_motor' },
			B: { item: 'mekanism:pellet_antimatter' },
			C: { item: 'botania:gaia_ingot' },
			D: { item: 'mekaevolution:infinite_control_circuit' },
			E: { item: 'avaritia:infinity_catalyst' },
			F: { item: 'mysticalagradditions:creative_essence' },
			G: { item: 'extendedcrafting:ender_star_block' },
			H: { item: 'rftoolsdim:legendary_essence' }
		},
		result: {
			item: 'create:creative_motor'
		},
	})

	event.custom({
		type: 'extendedcrafting:shaped_table',
		pattern: ['GCBDDDBCG', 'CBFFFFFBC', 'BFFEEEFFB', 'DFEHHHEFD', 'DFEHAHEFD', 'DFEHHHEFD', 'BFFEEEFFB', 'CBFFFFFBC', 'GCBDDDBCG'],
		key: {
			A: { item: 'ae2:dense_energy_cell' },
			B: { item: 'mekanism:pellet_antimatter' },
			C: { item: 'botania:gaia_ingot' },
			D: { item: 'mekaevolution:infinite_control_circuit' },
			E: { item: 'avaritia:infinity_catalyst' },
			F: { item: 'mysticalagradditions:creative_essence' },
			G: { item: 'extendedcrafting:ender_star_block' },
			H: { item: 'rftoolsdim:legendary_essence' }
		},
		result: {
			item: 'ae2:creative_energy_cell'
		},
	})

	event.custom({
		type: 'extendedcrafting:shaped_table',
		pattern: ['GCBDDDBCG', 'CBFFFFFBC', 'BFFEEEFFB', 'DFEHHHEFD', 'DFEHAHEFD', 'DFEHHHEFD', 'BFFEEEFFB', 'CBFFFFFBC', 'GCBDDDBCG'],
		key: {
			A: { item: 'botania:fabulous_pool' },
			B: { item: 'mekanism:pellet_antimatter' },
			C: { item: 'botania:gaia_ingot' },
			D: { item: 'mekaevolution:infinite_control_circuit' },
			E: { item: 'avaritia:infinity_catalyst' },
			F: { item: 'mysticalagradditions:creative_essence' },
			G: { item: 'extendedcrafting:ender_star_block' },
			H: { item: 'rftoolsdim:legendary_essence' }
		},
		result: {
			item: 'botania:creative_pool'
		},
	})

	event.custom({
		type: 'extendedcrafting:shaped_table',
		pattern: ['GCBDDDBCG', 'CBFFFFFBC', 'BFFEEEFFB', 'DFEHHHEFD', 'DFEHAHEFD', 'DFEHHHEFD', 'BFFEEEFFB', 'CBFFFFFBC', 'GCBDDDBCG'],
		key: {
			A: { item: 'extradisks:infinite_storage_disk' },
			B: { item: 'mekanism:pellet_antimatter' },
			C: { item: 'botania:gaia_ingot' },
			D: { item: 'mekaevolution:infinite_control_circuit' },
			E: { item: 'avaritia:infinity_catalyst' },
			F: { item: 'mysticalagradditions:creative_essence' },
			G: { item: 'extendedcrafting:ender_star_block' },
			H: { item: 'rftoolsdim:legendary_essence' }
		},
		result: {
			item: 'refinedstorage:creative_controller'
		},
	})

	event.custom({
		type: 'extendedcrafting:shaped_table',
		pattern: ['GCBDDDBCG', 'CBFFFFFBC', 'BFFEEEFFB', 'DFEHHHEFD', 'DFEHAHEFD', 'DFEHHHEFD', 'BFFEEEFFB', 'CBFFFFFBC', 'GCBDDDBCG'],
		key: {
			A: { item: 'create:blaze_cake' },
			B: { item: 'mekanism:pellet_antimatter' },
			C: { item: 'botania:gaia_ingot' },
			D: { item: 'mekaevolution:infinite_control_circuit' },
			E: { item: 'avaritia:infinity_catalyst' },
			F: { item: 'mysticalagradditions:creative_essence' },
			G: { item: 'extendedcrafting:ender_star_block' },
			H: { item: 'rftoolsdim:legendary_essence' }
		},
		result: {
			item: 'create:creative_blaze_cake'
		},
	})*/
	event.remove({output:'avaritia:infinity_catalyst'})
	event.remove({output:'avaritia:ultimate_stew'})

	event.custom({
		type: 'extendedcrafting:shaped_table',
		pattern: ['    I    ', '   ISI   ', '  ISSSI  ', ' ISSSSSI ', 'ISSSMSSSI', ' ISSSSSI ', '  ISSSI  ', '   ISI   ', '    I    '],
		key: {
			I: { item: 'mysticalagradditions:insanium_essence' },
			S: { item: 'mysticalagriculture:supremium_essence' },
			M: { item: 'mysticalagriculture:master_infusion_crystal' }
		},
		result: {
			item: 'mysticalagradditions:creative_essence'
		},
	})
	event.custom({
		type: 'extendedcrafting:shaped_table',
		pattern: [
		  'BCDEFEDCB',
		  'CDGHIHGDC',
		  'DGJIFIJGD',
		  'EHIEKEIHE',
		  'FIFKAKFIF', //中心
		  'EHIEKEIHE',
		  'DGJIFIJGD',
		  'CDGHIHGDC',
		  'BCDEFEDCB',
		],
		key: {
		  A: Item.of('mekaevolution:infinite_energy_cube').withNBT(
			'{mekData:{EnergyContainers:[{stored:"65536000000"}]}}'
		  ),
		  B: { item: 'draconicevolution:chaotic_core' },
		  C: { item: 'powah:crystal_nitro' },
		  D: { item: 'exponentialpower:advanced_ender_generator' },
		  E: { item: 'mekaevolution:infinite_control_circuit' },
		  F: { item: 'avaritia:infinity_ingot' },
		  G: { item: 'avaritia:infinity_catalyst' },
		  H: { item: 'valine_s1ex:souls_of_different_orders_of_magnitude' },
		  I: { item: 'mysticalagradditions:creative_essence' },
		  J: { item: 'valine_s1ex:enriched_antimatter_pellet' },
		  K: { item: 'valine_s1ex:enriched_antimatter_eternal_ingot' },
		},
		result: Item.of('mekanism:creative_energy_cube').withNBT(
		  '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'
		),
	  });
	event.custom({
		"type": "extendedcrafting:shapeless_table",
		"ingredients": [
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:the_ultimate_ingot\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:machine_frame_supreme\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:salmon_tempura\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:gaia_spirit_ingot\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:raw_emerald\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:nitro_crystal_block\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:netherite_upgrade\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:mechanical_visor_upgrade\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:jeweled_apple\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:qio_drive_infinite\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:infinite_fluid_storage_block\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:high_voltage_module\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:polyvinyl_chloride_plate\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:rainbow_plating\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:flux_block\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:ender_cell\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:emerald_storage_upgrade\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:emerald_capasitor\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:upgrade_augment\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:construction_block_dense\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:gem_obsidian\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:logic_chip\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:legendary_essence\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:crystal_matrix_ingot\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:machine_maximum\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:chaos_heart\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:bedrockium\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:256m_crafting_storage\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:ultimate_upgrade\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:universal_mass\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:upgrade_productivity\"}"
		  },
		  {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:variablestore\"}"
		  }
		],
		"result": {
		  "item": "extendedcrafting:ultimate_singularity"
		}
	  })
	  event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "ABCDEDCBA",
		  "BCDEFEDCB",
		  "CDEFGFEDC",
		  "DEFGHGFED",
		  "EFGHIHGFE",
		  "DEFGHGFED",
		  "CDEFGFEDC",
		  "BCDEFEDCB",
		  "ABCDEDCBA"
		],
		"key": {
		  "A": {
			"item": "pneumaticcraft:nuke_virus"
		  },
		  "B": {
			"item": "thermal:ender_tnt"
		  },
		  "C": {
			"item": "thermal:ice_tnt"
		  },
		  "D": {
			"item": "extrautilitiesrebirth:tnt_generator"
		  },
		  "E": {
			"item": "thermal:fire_tnt"
		  },
		  "F": {
			"item": "thermal:redstone_tnt"
		  },
		  "G": {
			"item": "mekanismadditions:obsidian_tnt"
		  },
		  "H": {
			"item": "valine_s1ex:industrial_tnt"
		  },
		  "I": {
			"type": "forge:nbt",
			"item": "industrialforegoing:infinity_nuke",
			"count": 1,
			"nbt": "{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:\"biofuel\"},Selected:\"ARTIFACT\",Special:0b}"
		  }
		},
		"result": {
		  "item": 'overdrive:unparalleled_achievement_y'
		}
	  })
	event.custom({
		"type": "extendedcrafting:combination",
		"powerCost": 100000,
		"input": {
		  "item": "cyclic:ender_torch"
		},
		"ingredients": [
		  {
			"item": "extendedcrafting:ultimate_singularity"
		  },
		  {
			"item": "extendedcrafting:ultimate_singularity"
		  },
		  {
			"item": "extendedcrafting:ultimate_singularity"
		  },
		  {
			"item": "extendedcrafting:ultimate_singularity"
		  },
		  {
			"item": "extendedcrafting:ultimate_singularity"
		  },
		  {
			"item": "extendedcrafting:ultimate_singularity"
		  },
		  {
			"item": "extendedcrafting:ultimate_singularity"
		  },
		  {
			"item": "extendedcrafting:ultimate_singularity"
		  }
		],
		"result": {
		  "item": 'torcherino:torcherino'
		}
	  })
	event.custom({
		"type": "extendedcrafting:combination",
		"powerCost": 10000000000,
		"input": {
		  "item": "torcherino:torcherino"
		},
		"ingredients": [
		  {
			"item": "torcherino:torcherino"
		  },
		  {
			"item": "torcherino:torcherino"
		  },
		  {
			"item": "torcherino:torcherino"
		  },
		  {
			"item": "torcherino:torcherino"
		  },
		  {
			"item": "torcherino:torcherino"
		  },
		  {
			"item": "torcherino:torcherino"
		  },
		  {
			"item": "torcherino:torcherino"
		  },
		  {
			"item": "torcherino:torcherino"
		  }
		],
		"result": {
		  "item": 'torcherino:compressed_torcherino'
		}
	  })
	event.custom({
		"type": "extendedcrafting:combination",
		"powerCost": 10000000000,
		"input": {
		  "item": "torcherino:compressed_torcherino"
		},
		"ingredients": [
		  {
			"item": "torcherino:compressed_torcherino"
		  },
		  {
			"item": "torcherino:compressed_torcherino"
		  },
		  {
			"item": "torcherino:compressed_torcherino"
		  },
		  {
			"item": "torcherino:compressed_torcherino"
		  },
		  {
			"item": "torcherino:compressed_torcherino"
		  },
		  {
			"item": "torcherino:compressed_torcherino"
		  },
		  {
			"item": "torcherino:compressed_torcherino"
		  },
		  {
			"item": "torcherino:compressed_torcherino"
		  }
		],
		"result": {
		  "item": 'torcherino:double_compressed_torcherino'
		}
	  })
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  " A     B ",
		  "AAA   CBB",
		  "DED   FEF",
		  "DEDGHGFEF",
		  "IJIHKHLJL",
		  "IJIGMGLJN",
		  "OOO   PPP",
		  " O     P ",
		  "QQQ   RRR"
		],
		"key": {
		  "A": {
			"type": "forge:nbt",
			"item": "ironjetpacks:jetpack",
			"count": 1,
			"nbt": "{Id:\"ironjetpacks:wood\",Throttle:1.0d}"
		  },
		  "B": {
			"type": "forge:nbt",
			"item": "ironjetpacks:jetpack",
			"count": 1,
			"nbt": "{Energy:0,Id:\"ironjetpacks:copper\",Throttle:1.0d}"
		  },
		  "C": {
			"type": "forge:nbt",
			"item": "ironjetpacks:jetpack",
			"count": 1,
			"nbt": "{Id:\"ironjetpacks:copper\",Throttle:1.0d}"
		  },
		  "D": {
			"type": "forge:nbt",
			"item": "ironjetpacks:jetpack",
			"count": 1,
			"nbt": "{Id:\"ironjetpacks:stone\",Throttle:1.0d}"
		  },
		  "E": {
			"type": "forge:nbt",
			"item": "ironjetpacks:jetpack",
			"count": 1,
			"nbt": "{Id:\"ironjetpacks:electrum\",Throttle:1.0d}"
		  },
		  "F": {
			"type": "forge:nbt",
			"item": "ironjetpacks:jetpack",
			"count": 1,
			"nbt": "{Id:\"ironjetpacks:bronze\",Throttle:1.0d}"
		  },
		  "G": {
			"item": "avaritia:infinity_ingot"
		  },
		  "H": {
			"type": "forge:nbt",
			"item": "ironjetpacks:jetpack",
			"count": 1,
			"nbt": "{Id:\"ironjetpacks:emerald\",Throttle:1.0d}"
		  },
		  "I": {
			"type": "forge:nbt",
			"item": "ironjetpacks:jetpack",
			"count": 1,
			"nbt": "{Id:\"ironjetpacks:silver\",Throttle:1.0d}"
		  },
		  "J": {
			"type": "forge:nbt",
			"item": "ironjetpacks:jetpack",
			"count": 1,
			"nbt": "{Id:\"ironjetpacks:gold\",Throttle:1.0d}"
		  },
		  "K": {
			"item": "avaritia:infinity_catalyst"
		  },
		  "L": {
			"type": "forge:nbt",
			"item": "ironjetpacks:jetpack",
			"count": 1,
			"nbt": "{Id:\"ironjetpacks:iron\",Throttle:1.0d}"
		  },
		  "M": {
			"type": "forge:nbt",
			"item": "ironjetpacks:jetpack",
			"count": 1,
			"nbt": "{Energy:0,Id:\"ironjetpacks:emerald\",Throttle:1.0d}"
		  },
		  "N": {
			"type": "forge:nbt",
			"item": "ironjetpacks:jetpack",
			"count": 1,
			"nbt": "{Energy:0,Id:\"ironjetpacks:iron\",Throttle:1.0d}"
		  },
		  "O": {
			"type": "forge:nbt",
			"item": "ironjetpacks:jetpack",
			"count": 1,
			"nbt": "{Id:\"ironjetpacks:invar\",Throttle:1.0d}"
		  },
		  "P": {
			"type": "forge:nbt",
			"item": "ironjetpacks:jetpack",
			"count": 1,
			"nbt": "{Id:\"ironjetpacks:steel\",Throttle:1.0d}"
		  },
		  "Q": {
			"type": "forge:nbt",
			"item": "ironjetpacks:jetpack",
			"count": 1,
			"nbt": "{Id:\"ironjetpacks:diamond\",Throttle:1.0d}"
		  },
		  "R": {
			"type": "forge:nbt",
			"item": "ironjetpacks:jetpack",
			"count": 1,
			"nbt": "{Id:\"ironjetpacks:platinum\",Throttle:1.0d}"
		  }
		},
		"result": {
		  "type": "forge:nbt",
		"item": "ironjetpacks:jetpack",
		"count": 1,
		"nbt": "{Id:\"ironjetpacks:creative\",Throttle:1.0d}"
		}
	  })
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "ABCDEDCBA",
		  "BCDEFEDCB",
		  "CDEFGFEDC",
		  "DEFGHGFED",
		  "EFGHIHGFE",
		  "DEFGHGFED",
		  "CDEFGFEDC",
		  "BCDEFEDCB",
		  "ABCDEDCBA"
		],
		"key": {
		  "A": {
			"item": "avaritia:infinity_ingot"
		  },
		  "B": {
			"item": "avaritia:infinity_catalyst"
		  },
		  "C": {
			"item": "thermal:carrot_cake"
		  },
		  "D": {
			"item": "thermal:chocolate_cake"
		  },
		  "E": {
			"item": "thermal:potion_cake"
		  },
		  "F": {
			"item": "tconstruct:blood_cake"
		  },
		  "G": {
			"item": "tconstruct:sky_cake"
		  },
		  "H": {
			"item": "tconstruct:ender_cake"
		  },
		  "I": {
			"item": "create:blaze_cake"
		  }
		},
		"result": {
		  "item": 'create:creative_blaze_cake'
		}
	  })
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "ABCDEDCBA",
		  "BFDEGEDFB",
		  "CDEGHGEDC",
		  "DEGHIHGED",
		  "EGHIJIHGE",
		  "DEGHIHGED",
		  "CDEGHGEDC",
		  "BFDEGEDFB",
		  "ABCDEDCBA"
		],
		"key": {
		  "A": {
			"item": "avaritia:infinity_ingot"
		  },
		  "B": {
			"item": "avaritia:infinity_catalyst"
		  },
		  "C": {
			"item": "valine_s1ex:mekanism_upgrade_base"
		  },
		  "D": {
			"item": "pneumaticcraft:standby_upgrade"
		  },
		  "E": {
			"item": "productivebees:upgrade_simulator"
		  },
		  "F": {
			"item": "refinedstorage:fortune_3_upgrade"
		  },
		  "G": {
			"item": "thermal:machine_cycle_augment"
		  },
		  "H": {
			"item": "thermal:machine_output_augment"
		  },
		  "I": {
			"item": "thermal_extra:machine_efficiency_augment_4"
		  },
		  "J": {
			"item": "thermal:machine_catalyst_augment"
		  }
		},
		"result": {
		  "item": 'thermal:machine_catalyst_creative_augment'
		}
	  })
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "AAABBBAAA",
		  "ACCCDCCCA",
		  "ACEFFFECA",
		  "BCGGHGGCB",
		  "BDEHIHEDB",
		  "BCGGHGGCB",
		  "ACEFFFECA",
		  "ACCCDCCCA",
		  "AAABBBAAA"
		],
		"key": {
		  "A": {
			"item": "avaritia:infinity_ingot"
		  },
		  "B": {
			"item": "avaritia:infinity_catalyst"
		  },
		  "C": {
			"item": "mekanism:dynamic_tank"
		  },
		  "D": {
			"item": "pneumaticcraft:huge_tank"
		  },
		  "E": {
			"item": "mekanism:upgrade_gas"
		  },
		  "F": {
			"item": "industrialforegoing:supreme_black_hole_tank"
		  },
		  "G": {
			"item": "megacells:chemical_storage_cell_256m"
		  },
		  "H": {
			"item": "mekanism:ultimate_chemical_tank"
		  },
		  "I": {
			"item": "packagedmekemicals:chemical_package_filler"
		  }
		},
		"result": {
		  "item": 'mekanism:creative_chemical_tank'
		}
	  })
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "         ",
		  "         ",
		  "         ",
		  "AAA   AAA",
		  "ABACDCABA",
		  "ABEFGFEBA",
		  "ABEFHFEBA",
		  "ABEEEEEBA",
		  "AAAAAAAAA"
		],
		"key": {
		  "A": {
			"item": "avaritia:infinity_ingot"
		  },
		  "B": {
			"item": "avaritia:infinity_catalyst"
		  },
		  "C": {
			"item": "botania:terrasteel_ingot"
		  },
		  "D": {
			"item": "botania:mana_ring_greater"
		  },
		  "E": {
			"item": "botania:fabulous_pool"
		  },
		  "F": {
			"item": "botania:diluted_pool"
		  },
		  "G": {
			"type": "forge:nbt",
			"item": "botania:mana_tablet",
			"count": 1,
			"nbt": "{mana:500000}"
		  },
		  "H": {
			"item": "botania:mana_pool"
		  }
		},
		"result": {
		  "item": 'botania:creative_pool'
		}
	  })
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "AAAAAAAAA",
		  "ABCDEDCBA",
		  "ABFGHGFBA",
		  "ABIJKJIBA",
		  "ABIJLJIBA",
		  "ABIJKJIBA",
		  "ABFGHGFBA",
		  "ABCDEDCBA",
		  "AAAAAAAAA"
		],
		"key": {
		  "A": {
			"item": "avaritia:infinity_ingot"
		  },
		  "B": {
			"item": "botanicalmachinery:mana_battery"
		  },
		  "C": {
			"item": "botanicalmachinery:mana_emerald_block"
		  },
		  "D": {
			"item": "botania:terrasteel_block"
		  },
		  "E": {
			"item": "botania:mana_mirror"
		  },
		  "F": {
			"item": "botania:elementium_block"
		  },
		  "G": {
			"item": "mysticalagradditions:gaia_spirit_crux"
		  },
		  "H": {
			"item": "appbot:mana_storage_cell_256k"
		  },
		  "I": {
			"item": "avaritia:infinity_catalyst"
		  },
		  "J": {
			"item": "botania:fabulous_pool"
		  },
		  "K": {
			"item": "overdrive:perfect_maximize"
		  },
		  "L": {
			"item": "botania:creative_pool"
		  }
		},
		"result": {
		  "item": 'botanicalmachinery:mana_battery_creative'
		}
	  })
	event.custom({
		"type": "extendedcrafting:shapeless_table",
		"ingredients": [
		  {
			"item": "minecraft:wheat"
		  },
		  {
			"item": "minecraft:carrot"
		  },
		  {
			"item": "minecraft:beetroot_soup"
		  },
		  {
			"item": "thermal:stuffed_pumpkin"
		  },
		  {
			"item": "thermal:carrot_cake"
		  },
		  {
			"item": "thermal:chocolate_cake"
		  },
		  {
			"item": "thermal:spice_cake"
		  },
		  {
			"item": "thermal:syrup_bottle"
		  },
		  {
			"item": "thermal:frost_melon"
		  },
		  {
			"item": "thermal:potion_cake"
		  },
		  {
			"item": "minecraft:baked_potato"
		  },
		  {
			"item": "extrautilitiesrebirth:magical_apple"
		  },
		  {
			"item": "minecraft:golden_apple"
		  },
		  {
			"item": "minecraft:enchanted_golden_apple"
		  },
		  {
			"item": "minecraft:bread"
		  },
		  {
			"item": "minecraft:mushroom_stew"
		  },
		  {
			"item": "minecraft:cake"
		  },
		  {
			"item": "minecraft:cookie"
		  },
		  {
			"item": "minecraft:dried_kelp"
		  },
		  {
			"item": "minecraft:rabbit_stew"
		  },
		  {
			"item": "minecraft:honey_bottle"
		  },
		  {
			"item": "minecraft:pumpkin_pie"
		  },
		  {
			"item": "mysticalagradditions:inferium_apple"
		  },
		  {
			"item": "mysticalagradditions:prudentium_apple"
		  },
		  {
			"item": "mysticalagradditions:tertium_apple"
		  },
		  {
			"item": "mysticalagradditions:imperium_apple"
		  },
		  {
			"item": "mysticalagradditions:supremium_apple"
		  },
		  {
			"item": "mysticalagradditions:insanium_apple"
		  },
		  {
			"item": "tconstruct:bacon"
		  },
		  {
			"item": "tconstruct:jeweled_apple"
		  },
		  {
			"item": "tconstruct:earth_cake"
		  },
		  {
			"item": "tconstruct:sky_cake"
		  },
		  {
			"item": "tconstruct:blood_cake"
		  },
		  {
			"item": "tconstruct:ender_cake"
		  },
		  {
			"item": "tconstruct:magma_cake"
		  },
		  {
			"item": "createaddition:chocolate_cake"
		  },
		  {
			"item": "createaddition:honey_cake"
		  },
		  {
			"item": "botania:mana_cookie"
		  },
		  {
			"item": "pneumaticcraft:sourdough_bread"
		  },
		  {
			"item": "pneumaticcraft:cod_n_chips"
		  },
		  {
			"item": "draconicadditions:hermal"
		  },
		  {
			"item": "pneumaticcraft:salmon_tempura"
		  },
		  {
			"item": "create:builders_tea"
		  },
		  {
			"item": "create:honeyed_apple"
		  },
		  {
			"item": "create:chocolate_glazed_berries"
		  },
		  {
			"item": "create:sweet_roll"
		  },
		  {
			"item": "create:bar_of_chocolate"
		  },
		  {
			"item": "create:blaze_cake"
		  },
		  {
			"item": "create:dough"
		  },
		  {
			"item": "cyclic:apple_ender"
		  },
		  {
			"item": "cyclic:apple_lofty_stature"
		  },
		  {
			"item": "cyclic:apple_honey"
		  },
		  {
			"item": "cyclic:apple_chorus"
		  },
		  {
			"item": "cyclic:apple_bone"
		  },
		  {
			"item": "cyclic:apple_prismarine"
		  },
		  {
			"item": "cyclic:apple_lapis"
		  },
		  {
			"item": "cyclic:apple_iron"
		  },
		  {
			"item": "cyclic:apple_diamond"
		  },
		  {
			"item": "cyclic:apple_emerald"
		  },
		  {
			"item": "cyclic:apple_chocolate"
		  },
		  {
			"item": "cyclic:chorus_flight"
		  },
		  {
			"item": "cyclic:chorus_spectral"
		  },
		  {
			"item": "cyclic:carrot_ender"
		  },
		  {
			"item": "cyclic:diamond_carrot_health"
		  },
		  {
			"item": "cyclic:redstone_carrot_speed"
		  },
		  {
			"item": "cyclic:emerald_carrot_jump"
		  },
		  {
			"item": "cyclic:lapis_carrot_variant"
		  },
		  {
			"item": "productivebees:milk_bottle"
		  },
		  {
			"item": "cyclic:toxic_carrot"
		  },
		  {
			"item": "thermal:cooked_mushroom"
		  },
		  {
			"item": "thermal:cooked_corn"
		  },
		  {
			"item": "thermal:cooked_eggplant"
		  },
		  {
			"item": "thermal:cheese_wedge"
		  },
		  {
			"item": "thermal:green_bean_pie"
		  },
		  {
			"item": "thermal:pbj_sandwich"
		  },
		  {
			"item": "thermal:stuffed_pepper"
		  },
		  {
			"item": "thermal:sushi_maki"
		  },
		  {
			"item": "thermal:spring_salad"
		  },
		  {
			"item": "thermal:hearty_stew"
		  },
		  {
			"item": "thermal:xp_stew"
		  },
		  {
			"item": "thermal:cheese_wheel"
		  }
		],
		"result": {
		  "item": 'avaritia:ultimate_stew'
		}
	  })
	event.custom({
		"type": "extendedcrafting:combination",
		"powerCost": 10000000000,
		"input": {
		  "item": "modularrouters:blank_module"
		},
		"ingredients": [
		  {
			"item": "overdrive:administrator_authority"
		  },
		  {
			"item": "modularrouters:augment_core"
		  },
		  {
			"item": "modularrouters:blank_upgrade"
		  }
		],
		"result": {
		  "item": 'modularrouters:creative_module'
		}
	  }).id('overdrive:last_song')
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "  AAAAA  ",
		  " ABBCBBA ",
		  "ABDEFEDBA",
		  "ABEGHGEBA",
		  "ACFIJKFCA",
		  "ABEGHGEBA",
		  "ABDEFEDBA",
		  " ABBLBBA ",
		  "M AAAAA  "
		],
		"key": {
		  "A": {
			"item": "avaritia:infinity_ingot"
		  },
		  "B": {
			"item": "draconicevolution:chaotic_crafting_injector"
		  },
		  "C": {
			"item": "draconicevolution:reactor_stabilizer"
		  },
		  "D": {
			"item": "pneumaticcraft:pressurized_spawner"
		  },
		  "E": {
			"item": "rftoolsutility:spawner"
		  },
		  "F": {
			"item": "pneumaticcraft:entity_tracker_upgrade"
		  },
		  "G": {
			"item": "draconicevolution:stabilized_spawner"
		  },
		  "H": {
			"item": "tconstruct:piggy_backpack"
		  },
		  "I": {
			"item": "cyclic:stirrups"
		  },
		  "J": {
			"item": "industrialforegoing:mob_imprisonment_tool"
		  },
		  "K": {
			"item": "cyclic:stirrups_reverse"
		  },
		  "L": {
			"item": "draconicevolution:reactor_injector"
		  },
		  "M": {
			"item": "cyclic:spawn_inspector"
		  }
		},
		"result": {
		  "item": 'cyclic:magic_net'
		}
	  })
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "AAAAAAAAA",
		  "ABBBBBBBA",
		  "ABCDDDCBA",
		  "ABDEFEDBA",
		  "ABDGHGDBA",
		  "ABDEFEDBA",
		  "ABCDDDCBA",
		  "ABBBBBBBA",
		  "AAAAAAAAA"
		],
		"key": {
		  "A": {
			"item": "avaritia:infinity_ingot"
		  },
		  "B": {
			"item": "pneumaticcraft:compressed_iron_block"
		  },
		  "C": {
			"item": "mekanismgenerators:heat_generator"
		  },
		  "D": {
			"item": "pneumaticcraft:thermal_compressor"
		  },
		  "E": {
			"item": "mekanism:superheating_element"
		  },
		  "F": {
			"item": "mekanism:resistive_heater"
		  },
		  "G": {
			"item": "mekanism:fuelwood_heater"
		  },
		  "H": {
			"item": "avaritia:infinity_catalyst"
		  }
		},
		"result": {
		  "item": 'pneumaticcraft:creative_compressed_iron_block'
		}
	  })
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "AAAAAAAAA",
		  "ABBCCCBBA",
		  "ABDEFEDBA",
		  "AGEHIHEGA",
		  "AGFIJIFGA",
		  "AGEHIHEGA",
		  "AKDEFEDKA",
		  "AKKCCCKKA",
		  "AAAAAAAAA"
		],
		"key": {
		  "A": {
			"item": "avaritia:infinity_ingot"
		  },
		  "B": {
			"item": "pneumaticcraft:solar_compressor"
		  },
		  "C": {
			"item": "pneumaticcraft:electrostatic_compressor"
		  },
		  "D": {
			"item": "pneumaticcraft:air_compressor"
		  },
		  "E": {
			"item": "pneumaticcraft:advanced_air_compressor"
		  },
		  "F": {
			"item": "pneumaticcraft:advanced_liquid_compressor"
		  },
		  "G": {
			"item": "pneumaticcraft:manual_compressor"
		  },
		  "H": {
			"item": "compressedcreativity:rotational_compressor"
		  },
		  "I": {
			"item": "pneumaticcraft:liquid_compressor"
		  },
		  "J": {
			"item": "avaritia:infinity_catalyst"
		  },
		  "K": {
			"item": "pneumaticcraft:flux_compressor"
		  }
		},
		"result": {
		  "item": 'pneumaticcraft:creative_compressor'
		}
	  })
	event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "A   B   C",
    " D  E  F ",
    "  G H I  ",
    "   JKL   ",
    "MNOPQRSTU",
    "   VWX   ",
    "  Y Z a  ",
    " b  c  d ",
    "e   f   g"
  ],
  "key": {
    "A": {
      "item": "rftoolsdim:dimension_builder"
    },
    "B": {
      "item": "mysticalagriculture:tilling_aoe_iv_augment"
    },
    "C": {
      "item": "draconicevolution:draconic_staff"
    },
    "D": {
      "item": "packagedexcrafting:ultimate_crafter"
    },
    "E": {
      "item": "mekanismmatter:scrapbox"
    },
    "F": {
      "item": "industrialforegoing:infinity_trident"
    },
    "G": {
      "item": "hostilenetworks:sim_chamber"
    },
    "H": {
      "item": "ironjetpacks:ultimate_coil"
    },
    "I": {
      "item": "botania:thunder_sword"
    },
    "J": {
      "item": "draconicevolution:chaotic_crafting_injector"
    },
    "K": {
      "item": "avaritia:record_fragment"
    },
    "L": {
      "item": "draconicadditions:chaotic_necklace"
    },
    "M": {
      "item": "mekaevolution:qio_drive_infinite"
    },
    "N": {
      "item": "extradisks:infinite_fluid_storage_part"
    },
    "O": {
      "item": "draconicadditions:chaotic_harness"
    },
    "P": {
      "item": "avaritia:ultimate_stew"
    },
    "Q": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:eternal\"}"
    },
    "R": {
      "item": "avaritia:endest_pearl"
    },
    "S": {
      "item": "pneumaticcraft:sentry_turret"
    },
    "T": {
      "item": "botania:missile_rod"
    },
    "U": {
      "item": "immersiveengineering:railgun"
    },
    "V": {
      "item": "exponentialpower:ender_storage"
    },
    "W": {
      "item": "avaritia:cosmic_meatballs"
    },
    "X": {
      "item": "powah:solar_panel_nitro"
    },
    "Y": {
      "item": "draconicevolution:energy_core"
    },
    "Z": {
      "item": "thermal_extra:fluid_tank_augment_6"
    },
    "a": {
      "item": "exponentialpower:ender_generator"
    },
    "b": {
      "item": "megacells:mega_energy_cell"
    },
    "c": {
      "item": "pneumaticcraft:huge_tank"
    },
    "d": {
      "item": "industrialforegoing:mycelial_reactor"
    },
    "e": {
      "item": "mekaevolution:infinite_energy_cube"
    },
    "f": {
      "item": "industrialforegoing:supreme_black_hole_tank"
    },
    "g": {
      "item": "ironfurnaces:million_furnace"}
  },
  "result": {
    "item": 'avaritia:infinity_catalyst'
  }
})
draconicFusion(event,'overdrive:chaotic_breath',null,4,2147483647,'minecraft:dragon_breath',
	[Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core'),Item.of('draconicevolution:chaotic_core')],

)
event.custom({
	"type": "extendedcrafting:combination",
	"powerCost": 100000,
	"input": {
	  "item": "thermal:machine_catalyst_creative_augment"
	},
	"ingredients": [
	  {
		"item": "avaritia:infinity_catalyst"
	  },
	  {
		"item": "avaritia:infinity_catalyst"
	  },
	  {
		"item": "overdrive:chaotic_breath"
	  },
	  {
		"item": "mekaevolution:infinite_energy_cube"
	  }
	],
	"result": {
	  "item": 'thermal:machine_efficiency_creative_augment'
	}
  })
  event.custom({
	"type": "extendedcrafting:shaped_table",
	"pattern": [
	  "A   B   A",
	  " C  D  C ",
	  "  E F E  ",
	  "   CEC   ",
	  "BDFEGEFDB",
	  "   CEC   ",
	  "  E F E  ",
	  " C  D  C ",
	  "A   B   A"
	],
	"key": {
	  "A": {
		"item": "valine_s1ex:eternal_ingot"
	  },
	  "B": {
		"item": "overdrive:unparalleled_achievement_h"
	  },
	  "C": {
		"item": "valine_s1ex:enriched_antimatter_eternal_ingot"
	  },
	  "D": {
		"item": "overdrive:unparalleled_achievement_y"
	  },
	  "E": {
		"item": "overdrive:perfect_maximize"
	  },
	  "F": {
		"item": "overdrive:unparalleled_achievement_l"
	  },
	  "G": {
		"item": "avaritia:infinity_catalyst"
	  }
	},
	"result": {
	  "item": 'overdrive:unparalleled_achievement_v'
	}
  })
  //event.shapeless(Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"ARTIFACT",Special:0b}'),['industrialforegoing:infinity_nuke','avaritia:infinity_catalyst']).id('valine_siex:shortcut')
  event.recipes.botania.runic_altar(Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"ARTIFACT",Special:0b}')
	,['industrialforegoing:infinity_nuke','exponentialpower:advanced_ender_generator'],10000000).id('valine_s1ex:shortcut')
event.custom({
	"type": "extendedcrafting:shaped_table",
	"pattern": [
	  "AAAABAAAA",
	  "ACCCCCCCA",
	  "ACDEFEDCA",
	  "ACEFGFECA",
	  "BCFGHGFCB",
	  "ACEFGFECA",
	  "ACDEFEDCA",
	  "ACCCCCCCA",
	  "AAAABAAAA"
	],
	"key": {
	  "A": {
		"item": "avaritia:infinity_ingot"
	  },
	  "B": {
		"item": "draconicevolution:wyvern_capacitor"
	  },
	  "C": {
		"item": "fluxnetworks:gargantuan_flux_storage"
	  },
	  "D": {
		"item": "powah:capacitor_nitro"
	  },
	  "E": {
		"type": "forge:nbt",
		"item": "ironjetpacks:capacitor",
		"count": 1,
		"nbt": "{Id:\"ironjetpacks:emerald\"}"
	  },
	  "F": {
		"item": "draconicevolution:draconic_capacitor"
	  },
	  "G": {
		"item": "draconicevolution:chaotic_capacitor"
	  },
	  "H": {
		"item": "avaritia:infinity_catalyst"
	  }
	},
	"result": {
	  "item": 'draconicevolution:creative_capacitor'
	}
  })
  event.custom({
	"type": "extendedcrafting:shaped_table",
	"pattern": [
	  "ABCDEDCFA",
	  "FCDEGEDCB",
	  "CDEGHGEDC",
	  "DEGHIHGED",
	  "EGHIJIHGE",
	  "DEGHIHGED",
	  "CDEGHGEDC",
	  "BCDEGEDCF",
	  "AFCDEDCBA"
	],
	"key": {
	  "A": {
		"item": "exponentialpower:advanced_ender_storage"
	  },
	  "B": {
		"item": "avaritia:infinity_block"
	  },
	  "C": {
		"item": "industrialforegoing:black_hole_controller"
	  },
	  "D": {
		"item": "refinedstorage:advanced_processor"
	  },
	  "E": {
		"item": "extradisks:withering_processor"
	  },
	  "F": {
		"item": "avaritia:infinity_catalyst"
	  },
	  "G": {
		"item": "refinedstorage:improved_processor"
	  },
	  "H": {
		"item": "refinedstorage:basic_processor"
	  },
	  "I": {
		"item": "rebornstorage:super_advanced_processor"
	  },
	  "J": {
		"item": "refinedstorage:controller"
	  }
	},
	"result": {
	  "item": 'refinedstorage:creative_controller'
	}
  })
  event.custom({
	"type": "extendedcrafting:shaped_table",
	"pattern": [
	  "ABBBBBBBA",
	  "BCDDCDDCB",
	  "BDEFFFEDB",
	  "BDFGFGFDB",
	  "BCFGHGFCB",
	  "BDFGFGFDB",
	  "BDEFFFEDB",
	  "BCDDCDDCB",
	  "ABBBBBBBA"
	],
	"key": {
	  "A": {
		"item": "avaritia:infinity_block"
	  },
	  "B": {
		"item": "megacells:mega_energy_cell"
	  },
	  "C": {
		"item": "mekanism:ultimate_induction_cell"
	  },
	  "D": {
		"item": "ae2:dense_energy_cell"
	  },
	  "E": {
		"item": "ae2:energy_cell"
	  },
	  "F": {
		"item": "rftoolspower:dimensionalcell_advanced"
	  },
	  "G": {
		"item": "rftoolspower:cell3"
	  },
	  "H": {
		"item": "avaritia:infinity_catalyst"
	  }
	},
	"result": {
	  "item": 'ae2:creative_energy_cell'
	}
  })
  event.custom({
	"type": "extendedcrafting:shaped_table",
	"pattern": [
	  "AABCDCBAA",
	  "AEBCCCBEA",
	  "BBBFFFBBB",
	  "CCFFGFFCC",
	  "DCFGAGFCD",
	  "CCFFGFFCC",
	  "BBBFFFBBB",
	  "AEBCCCBEA",
	  "AABCDCBAA"
	],
	"key": {
	  "A": {
		"item": "avaritia:infinity_catalyst"
	  },
	  "B": {
		"item": "rftoolsutility:tank"
	  },
	  "C": {
		"item": "industrialforegoing:supreme_black_hole_tank"
	  },
	  "D": {
		"item": "avaritia:infinity_ingot"
	  },
	  "E": {
		"item": "pneumaticcraft:huge_tank"
	  },
	  "F": {
		"item": "dimstorage:dimensional_tank"
	  },
	  "G": {
		"item": "mekanism:ultimate_fluid_tank"
	  }
	},
	"result": {
	  "item": 'mekanism:creative_fluid_tank'
	}
  })
  event.custom({
	"type": "extendedcrafting:shaped_table",
	"pattern": [
	  "ABBBABBBA",
	  "BBBBCBBBB",
	  "BBDEFGHBB",
	  "BBIJKLMBB",
	  "ANOKPKQNA",
	  "BBRSKTUBB",
	  "BBVWXYZBB",
	  "BBBBaBBBB",
	  "ABBBABBBA"
	],
	"key": {
	  "A": {
		"item": "mysticalagriculture:master_infusion_crystal"
	  },
	  "B": {
		"item": "mysticalagradditions:creative_essence"
	  },
	  "C": {
		"item": "botania:corporea_spark_master"
	  },
	  "D": {
		"item": "cookingforblockheads:cow_jar"
	  },
	  "E": {
		"type": "forge:nbt",
		"item": "industrialforegoing:infinity_nuke",
		"count": 1,
		"nbt": "{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:\"biofuel\"},Selected:\"ARTIFACT\",Special:0b}"
	  },
	  "F": {
		"item": "industrialforegoing:fertilizer"
	  },
	  "G": {
		"type": "forge:nbt",
		"item": "immersiveengineering:potion_bucket",
		"count": 1,
		"nbt": "{Potion:\"minecraft:strong_turtle_master\"}"
	  },
	  "H": {
		"item": "botania:loonium"
	  },
	  "I": {
		"item": "extradisks:infinite_storage_part"
	  },
	  "J": {
		"item": "extrautilitiesrebirth:cursed_earth"
	  },
	  "K": {
		"item": "overdrive:unparalleled_achievement_v"
	  },
	  "L": {
		"item": "overdrive:perfect_maximize"
	  },
	  "M": {
		"item": "mekanism:module_elytra_unit"
	  },
	  "N": {
		"item": "cyclic:magic_net"
	  },
	  "O": {
		"item": "simplemagnets:advancedmagnet"
	  },
	  "P": {
		"item": "avaritia:infinity_catalyst"
	  },
	  "Q": {
		"item": "laserio:laser_connector"
	  },
	  "R": {
		"item": "overdrive:chaotic_breath"
	  },
	  "S": {
		"item": "ironfurnaces:item_linker"
	  },
	  "T": {
		"item": "tconstruct:efln_ball"
	  },
	  "U": {
		"item": "valine_s1ex:empowered_lapis"
	  },
	  "V": {
		"item": "exponentialpower:advanced_ender_storage"
	  },
	  "W": {
		"item": "pneumaticcraft:creative_compressed_iron_block"
	  },
	  "X": {
		"item": "cobblefordays:tier_5"
	  },
	  "Y": {
		"item": "ae2:creative_energy_cell"
	  },
	  "Z": {
		"item": "exponentialpower:advanced_ender_generator"
	  },
	  "a": {
		"item": "shrink:shrinking_device"
	  }
	},
	"result": {
	  "item": 'overdrive:apex_seeker'
	}
  })
})