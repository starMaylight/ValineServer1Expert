console.info('歩みを進める。')
console.info('そこがたとえ荒野だろうと。白銀の大地だろうと。')
console.info('私たちは歩みを進める。')
console.info('どんな壁にぶつかろうと、どんな困難に出会おうと。')
console.info('私たちには仲間がいる。')
console.info('だからどんな悪逆非道なレシピにも立ち向かえる。')
console.info('見知らぬアイテムでも、なじみのあるアイテムでも')
console.info('仲間といれば立ち向かえる。')
console.info('そこにサーバーが存在する限り。')
/*onEvent("recipes", (event) => {
	event.custom({
		"input": [
		  {
			"tag": "forge:plastic"
		  },
		  {
			"item": "thermal:machine_frame"
		  },
		  {
			"tag": "forge:plastic"
		  },
		  {
			"item": "immersiveengineering:fiberboard"
		  },
		  {
			"item": "immersiveengineering:fiberboard"
		  },
		  {
			"item": "immersiveengineering:fiberboard"
		  },
		  {
			"item": "immersiveengineering:fiberboard"
		  },
		  {
			"item": "immersiveengineering:fiberboard"
		  }
		],
		"inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:500}",
		"processingTime": 1000,
		"output": {
		  "item": "immersiveengineering:light_engineering",
		  "count": 2
		},
		"type": "industrialforegoing:dissolution_chamber"
	  })
	  event.custom({
		"input": [
		  {
			"tag": "forge:plastic"
		  },
		  {
			"item": "immersiveengineering:light_engineering"
		  },
		  {
			"tag": "forge:plastic"
		  },
		  {
			"item": "powah:crystal_blazing"
		  },
		  {
			"item": "powah:crystal_blazing"
		  },
		  {
			"item": "powah:dielectric_paste"
		  },
		  {
			"item": "powah:dielectric_paste"
		  },
		  {
			"item": "powah:dielectric_paste"
		  }
		],
		"inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:500}",
		"processingTime": 1000,
		"output": {
		  "item": "immersiveengineering:heavy_engineering",
		  "count": 2
		},
		"type": "industrialforegoing:dissolution_chamber"
	  })
	event.custom({"type": "thermal:bottler","ingredients": [
      {"item": "extrautilitiesrebirth:diamond_edged_computational_matrix"},
      {"fluid": "thermal_extra:refined_sunflower_oil","amount": 250}],
    "result": [{"item": "thermal:machine_frame"}]})
	event.custom({
        "type": "immersiveengineering:bottling_machine",
        "fluid": {
          "amount": 1000,
          "tag": "forge:redstone_acid"
        },
        "input": {
          "item": "extrautilitiesrebirth:diamond_edged_computational_matrix"
        },
        "results": [
          {
            "item": "valine_s1ex:eliminated_core"
          }
        ]
      })
	event.recipes.thermal.smelter('valine_s1ex:redalloy_ingot',['#forge:ingots/copper','2x minecraft:redstone']).energy(2000)
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "ABA",
		  "BCB",
		  "ABA"
		],
		"key": {
		  "A": {
			"item": "extrautilitiesrebirth:magical_wood"
		  },
		  "B": {
			"item": "minecraft:cobblestone"
		  },
		  "C": {
			"item": "immersiveengineering:heavy_engineering"
		  }
		},
		"result": {
		  "item": 'industrialforegoing:machine_frame_pity'
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
			"item": "industrialforegoing:plastic"
		  },
		  "B": {
			"item": "industrialforegoing:machine_frame_pity"
		  },
		  "C": {
			"item": "minecraft:nether_brick"
		  },
		  "D": {
			"item": "mekanism:alloy_infused"
		  },
		  "E": {
			"item": "thermal:lumium_gear"
		  },
		  "F": {
			"item": "thermal:rosin"
		  }
		},
		"result": {
		  "item": 'industrialforegoing:machine_frame_simple'
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
			"item": "industrialforegoing:plastic"
		  },
		  "B": {
			"item": "industrialforegoing:machine_frame_simple"
		  },
		  "C": {
			"item": "minecraft:netherite_block"
		  },
		  "D": {
			"item": "mekanism:block_salt"
		  },
		  "E": {
			"item": "extrautilitiesrebirth:evil_infused_iron_ingot"
		  },
		  "F": {
			"item": "extrautilitiesrebirth:redstone_crystal"
		  }
		},
		"result": {
		  "item": 'industrialforegoing:machine_frame_advanced'
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
			"item": "industrialforegoing:plastic"
		  },
		  "B": {
			"item": "industrialforegoing:machine_frame_advanced"
		  },
		  "C": {
			"item": "valine_s1ex:redalloy_ingot"
		  },
		  "D": {
			"item": "valine_s1ex:tuna"
		  },
		  "E": {
			"item": "valine_s1ex:tungstain_carbite_plate"
		  },
		  "F": {
			"item": "extendedcrafting:ender_ingot"
		  }
		},
		"result": {
		  "item": 'industrialforegoing:machine_frame_supreme'
		}
	  })
	  event.recipes.botania.terra_plate('mekanism:steel_casing', ['industrialforegoing:machine_frame_supreme','mekanism:alloy_atomic','mekanismadditions:white_plastic_fence','mekanism:ultimate_control_circuit','mekanismadditions:white_plastic_fence','powah:energized_steel_block','powah:energized_steel_block'], 5000000)
	  event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "ABCDA",
		  "DEFEB",
		  "CGHGC",
		  "BEFED",
		  "ADCBA"
		],
		"key": {
		  "A": {
			"item": "draconicevolution:basic_relay_crystal"
		  },
		  "B": {
			"item": "thermal_extra:dragonsteel_gear"
		  },
		  "C": {
			"item": "pipez:ultimate_upgrade"
		  },
		  "D": {
			"item": "thermal_extra:twinite_gear"
		  },
		  "E": {
			"item": "draconicevolution:draconium_ingot"
		  },
		  "F": {
			"item": "draconicevolution:awakened_draconium_ingot"
		  },
		  "G": {
			"item": "mekanismadditions:white_plastic_fence"
		  },
		  "H": {
			"item": "mekanism:steel_casing"
		  }
		},
		"result": {
		  "item": 'rftoolsbase:machine_frame',
		  "count": 8
		}
	  })
	})*/
	
console.info('だからってアナザーレシピ無しは無理があるよ！？')