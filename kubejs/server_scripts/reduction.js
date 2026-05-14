// packmode: loser
console.info('歩みを進める。')
console.info('そこがたとえ荒野だろうと。白銀の大地だろうと。')
console.info('私たちは歩みを進める。')
console.info('どんな壁にぶつかろうと、どんな困難に出会おうと。')
console.info('私たちには仲間がいる。')
console.info('だからどんな悪逆非道なレシピにも立ち向かえる。')
console.info('見知らぬアイテムでも、なじみのあるアイテムでも')
console.info('仲間といれば立ち向かえる。')
console.info('そこにサーバーが存在する限り。')
onEvent("recipes", (event) => {
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
	  
  event.recipes.mekanism.metallurgic_infusing('immersiveengineering:component_electronic_adv','immersiveengineering:circuit_board', '80x mekanism:diamond')
  event.recipes.mekanism.metallurgic_infusing('fluxnetworks:flux_dust','minecraft:redstone', '10x mekanism:refined_obsidian')
  event.recipes.mekanismCombining(
	'valine_s1ex:handmade_circuit',
	'16x immersiveengineering:component_electronic_adv',
	'valine_s1ex:basic_circuit_base'
  )
   event.custom({
	"type": "extendedcrafting:shaped_table",
	"pattern": [
	  "ABA",
	  "CDC",
	  "AEA"
	],
	"key": {
	  "A": {
		"item": "extendedcrafting:enhanced_ender_ingot"
	  },
	  "B": {
		"item": "packagedauto:package_component"
	  },
	  "C": {
		"item": 'mekanism:basic_control_circuit'
	  },
	  "D": {
		"item": "extendedcrafting:ender_crafter"
	  },
	  "E": {
		"item": "mysticalagriculture:master_infusion_crystal"
	  }
	},
	"result": {
	  "item": 'packagedexcrafting:ender_crafter'
	}
  })
  event.recipes.thermal.chiller('extendedcrafting:black_iron_ingot', [Fluid.of('valine_s1ex:molten_midnight', 90), 'extendedcrafting:black_iron_slate'])
  event.recipes.botania.mana_infusion('thermal:basalz_rod','minecraft:blaze_rod', 100000,'botania:alchemy_catalyst')
  event.recipes.botania.mana_infusion('thermal:blitz_rod','thermal:basalz_rod', 100000,'botania:alchemy_catalyst')
  event.recipes.botania.mana_infusion('thermal:blizz_rod','thermal:blitz_rod', 100000,'botania:alchemy_catalyst')
  event.recipes.botania.mana_infusion('minecraft:blaze_rod','thermal:blizz_rod', 100000,'botania:alchemy_catalyst')
  event.custom({
  "type": "pneumaticcraft:amadron",
  "static": true,
  "input": {
    "type": "ITEM",
    "id": "botanicalmachinery:mana_emerald_block",
    "amount": 8
  },
  "output": {
    "type": "ITEM",
    "id": "chemlib:polyvinyl_chloride_plate",
    "amount": 1
  }
})
event.custom({
  "type": "pneumaticcraft:amadron",
  "static": true,
  "input": {
    "type": "ITEM",
    "id": "botanicalmachinery:mana_emerald_block",
    "amount": 8
  },
  "output": {
    "type": "ITEM",
    "id": "productivebees:gene",
    "amount": 1,
	"nbt":"{productivebees_gene_attribute:\"productivity\",productivebees_gene_purity:100,productivebees_gene_value:3}"
  },
  "level": 5
})
event.custom({
  "type": "pneumaticcraft:amadron",
  "static": true,
  "input": {
    "type": "ITEM",
    "id": "botanicalmachinery:mana_emerald_block",
    "amount": 8
  },
  "output": {
    "type": "ITEM",
    "id": "productivebees:gene",
    "amount": 1,
	"nbt":"{productivebees_gene_attribute:\"endurance\",productivebees_gene_purity:100,productivebees_gene_value:3}"
  },
  "level": 5
})
event.custom({
  "type": "pneumaticcraft:amadron",
  "static": true,
  "input": {
    "type": "ITEM",
    "id": "botanicalmachinery:mana_emerald_block",
    "amount": 8
  },
  "output": {
    "type": "ITEM",
    "id": "productivebees:gene",
    "amount": 1,
	"nbt":"{productivebees_gene_attribute:\"temper\",productivebees_gene_purity:100,productivebees_gene_value:3}"
  },
  "level": 5
})
event.custom({
  "type": "pneumaticcraft:amadron",
  "static": true,
  "input": {
    "type": "ITEM",
    "id": "botanicalmachinery:mana_emerald_block",
    "amount": 8
  },
  "output": {
    "type": "ITEM",
    "id": "productivebees:gene",
    "amount": 1,
	"nbt":"{productivebees_gene_attribute:\"behavior\",productivebees_gene_purity:100,productivebees_gene_value:2}"
  },
  "level": 5
})
event.custom({
  "type": "pneumaticcraft:amadron",
  "static": true,
  "input": {
    "type": "ITEM",
    "id": "botanicalmachinery:mana_emerald_block",
    "amount": 8
  },
  "output": {
    "type": "ITEM",
    "id": "productivebees:gene",
    "amount": 1,
	"nbt":"{productivebees_gene_attribute:\"weather_tolerance\",productivebees_gene_purity:100,productivebees_gene_value:2}"
  },
  "level": 5
})

event.custom({
  "type": "pneumaticcraft:amadron",
  "static": true,
  "input": {
    "type": "ITEM",
    "id": "botanicalmachinery:mana_emerald_block",
    "amount": 8
  },
  "output": {
    "type": "ITEM",
    "id": "productivebees:gene",
    "amount": 1,
	"nbt":"{productivebees_gene_attribute:\"temper\",productivebees_gene_purity:100,productivebees_gene_value:2}"
  },
  "level": 5
})
event.custom({
      "type": "immersiveengineering:refinery",
      "result": {
        "fluid": "valine_s1ex:unknown_darkmatter",
        "amount": 1000
      },
      "catalyst": {
        "item": "mekanism:reprocessed_fissile_fragment"
      },
      "input0": {
        "tag": "valine_s1ex:unknown_darkmatter",
        "amount": 100
      },
      "energy": 1024
    })
	let myc = (output,input) => {
    event.shaped(output,[
      'eee',
      'ene',
      'eee'
  ],{
    e:'mysticalagriculture:circuit_essence',
    n:input
}
)}    
myc('mekanism:advanced_control_circuit','mekanism:basic_control_circuit')
myc('mekanism:elite_control_circuit','mekanism:advanced_control_circuit')
myc('mekanism:ultimate_control_circuit','mekanism:elite_control_circuit')
myc('mekaevolution:absolute_control_circuit','mekanism:ultimate_control_circuit')
myc('mekaevolution:supreme_control_circuit','mekaevolution:absolute_control_circuit')
myc('mekaevolution:cosmic_control_circuit','mekaevolution:supreme_control_circuit')
myc('mekaevolution:infinite_control_circuit','mekaevolution:cosmic_control_circuit')
myc('valine_s1ex:highend_circuit','valine_s1ex:handmade_circuit')
event.custom({
    "type": "productivebees:bee_conversion",
    "source": "productivebees:oily",
    "result": "productivebees:unknown_darkmatter",
    "item": {
        "item": "valine_s1ex:molten_midnight_bucket"
    }
})
event.custom({
    "type": "productivebees:bee_conversion",
    "source": "productivebees:chaos",
    "result": "productivebees:ultimate",
    "item": {
        "item": 'valine_s1ex:enriched_antimatter_eternal_ingot'
    }
})
	})
console.info('だからってアナザーレシピ無しは無理があるよ！？')
