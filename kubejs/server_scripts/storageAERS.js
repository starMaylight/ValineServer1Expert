onEvent("recipes", (event) => {
	let removebyname = [
		'refinedstorage:crafter',
		'extradisks:withering_processor',
		'refinedstorage:improved_processor',
		'refinedstorage:advanced_processor',
		'refinedstorage:basic_processor',
		'refinedstorage:machine_casing',
		'ae2:cell_component_1k',
		'ae2:cell_component_4k',
		'ae2:cell_component_16k',
		'ae2:cell_component_64k',
		'ae2:cell_component_256k',
		'ae2:inscriber',
    'ae2extras:cell_component_1m',
    'ae2:energy_acceptor',
    'megacells:cell_component_1m',
    'megacells:cell_component_4m',
    'megacells:cell_component_16m',
    'megacells:cell_component_64m',
    'megacells:cell_component_256m'
    ]
    removebyname.forEach((name) => {
        event.remove({output: name})
        })
        if (!BlueprintCraftingRecipe.recipeCategories.contains("cell")) {
          BlueprintCraftingRecipe.recipeCategories.add("cell")}
		event.custom({
		  "type": "pneumaticcraft:assembly_laser",
		  "input": {
			"item": "extradisks:raw_withering_processor",
			"count": 1
		  },
		  "result": {
			"item": "extradisks:withering_processor",
			"count": 1
		  },
		  "program": "laser"
		})
		event.custom({
			"type": "pneumaticcraft:assembly_laser",
			"input": {
			  "count": 1,
			  "item": "refinedstorage:raw_basic_processor"
			},
			"program": "laser",
			"result": {
			  "count": 1,
			  "item": "refinedstorage:basic_processor"
			}
		  })
		  event.custom({
			"type": "pneumaticcraft:assembly_laser",
			"input": {
			  "count": 1,
			  "item": "refinedstorage:raw_improved_processor"
			},
			"program": "laser",
			"result": {
			  "count": 1,
			  "item": "refinedstorage:improved_processor"
			}
		  })
		  event.custom({
			"type": "pneumaticcraft:assembly_laser",
			"input": {
			  "count": 1,
			  "item": "refinedstorage:raw_advanced_processor"
			},
			"program": "laser",
			"result": {
			  "count": 1,
			  "item": "refinedstorage:advanced_processor"
			}
		  })
		  event.recipes.botania.terra_plate('refinedstorage:machine_casing', ['immersiveengineering:rs_engineering', 'refinedstorage:quartz_enriched_iron_block','botania:corporea_spark'], 5000000)
	event.custom({
    "type": "immersiveengineering:blueprint",
    "inputs": [
      {
        "item": "pneumaticcraft:printed_circuit_board"
      },
      {
        "item": "ae2:logic_processor"
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": "valine_s1ex:redalloy_ingot"
      }]
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": "ae2:charged_certus_quartz_crystal"
      }]
      }
    ],
    "category": "miscs",
    "result": {
      "item": "ae2:cell_component_1k"
    }
  })
  event.custom({
    "type": "immersiveengineering:blueprint",
    "inputs": [
      {
        "count":3,
        "base_ingredient": [{
        "item": "ae2:cell_component_1k"
      }]
      },
      {
        "item": "ae2:calculation_processor"
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": "valine_s1ex:redalloy_ingot"
      }]
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": "ae2:charged_certus_quartz_crystal"
      }]
      }
    ],
    "category": "miscs",
    "result": {
      "item": "ae2:cell_component_4k"
    }
  })
  event.custom({
    "type": "immersiveengineering:blueprint",
    "inputs": [
      {
        "count":3,
        "base_ingredient": [{
        "item": "ae2:cell_component_4k"
      }]
      },
      {
        "item": "ae2:calculation_processor"
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": "valine_s1ex:redalloy_ingot"
      }]
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": "ae2:charged_certus_quartz_crystal"
      }]
      }
    ],
    "category": "miscs",
    "result": {
      "item": "ae2:cell_component_16k"
    }
  })
  event.custom({
    "type": "immersiveengineering:blueprint",
    "inputs": [
      {
        "count":3,
        "base_ingredient": [{
        "item": "ae2:cell_component_16k"
      }]
      },
      {
        "item": "ae2:calculation_processor"
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": "valine_s1ex:redalloy_ingot"
      }]
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": "ae2:charged_certus_quartz_crystal"
      }]
      }
    ],
    "category": "miscs",
    "result": {
      "item": "ae2:cell_component_64k"
    }
  })
  event.custom({
    "type": "immersiveengineering:blueprint",
    "inputs": [
      {
        "count":3,
        "base_ingredient": [{
        "item": "ae2:cell_component_64k"
      }]
      },
      {
        "item": "ae2:calculation_processor"
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": "valine_s1ex:redalloy_ingot"
      }]
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": "ae2:charged_certus_quartz_crystal"
      }]
      }
    ],
    "category": "miscs",
    "result": {
      "item": "ae2:cell_component_256k"
    }
  })

  event.custom({
    "type": "immersiveengineering:blueprint",
    "inputs": [
      {
        "count":3,
        "base_ingredient": [{
        "item": "ae2:cell_component_256k"
      }]
      },
      {
        "item": "ae2:calculation_processor"
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": "valine_s1ex:redalloy_ingot"
      }]
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": 'lazierae2:resonating_crystal'
      }]
      }
    ],
    "category": "cell",
    "result": {
      "item": 'megacells:cell_component_1m'
    }
  })
  event.custom({
    "type": "immersiveengineering:blueprint",
    "inputs": [
      {
        "count":3,
        "base_ingredient": [{
        "item": 'megacells:cell_component_1m'
      }]
      },
      {
        "item": "ae2:calculation_processor"
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": "valine_s1ex:redalloy_ingot"
      }]
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": 'lazierae2:resonating_crystal'
      }]
      }
    ],
    "category": "cell",
    "result": {
      "item": 'megacells:cell_component_4m'
    }
  })
  event.custom({
    "type": "immersiveengineering:blueprint",
    "inputs": [
      {
        "count":3,
        "base_ingredient": [{
        "item": 'megacells:cell_component_4m'
      }]
      },
      {
        "item": "ae2:calculation_processor"
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": "valine_s1ex:redalloy_ingot"
      }]
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": 'lazierae2:resonating_crystal'
      }]
      }
    ],
    "category": "cell",
    "result": {
      "item": 'megacells:cell_component_16m'
    }
  })
  event.custom({
    "type": "immersiveengineering:blueprint",
    "inputs": [
      {
        "count":3,
        "base_ingredient": [{
        "item": 'megacells:cell_component_16m'
      }]
      },
      {
        "item": "ae2:calculation_processor"
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": "valine_s1ex:redalloy_ingot"
      }]
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": 'lazierae2:resonating_crystal'
      }]
      }
    ],
    "category": "cell",
    "result": {
      "item": 'megacells:cell_component_64m'
    }
  })
  event.custom({
    "type": "immersiveengineering:blueprint",
    "inputs": [
      {
        "count":3,
        "base_ingredient": [{
        "item": 'megacells:cell_component_64m'
      }]
      },
      {
        "item": "ae2:calculation_processor"
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": "valine_s1ex:redalloy_ingot"
      }]
      },
      {
        "count":32,
        "base_ingredient": [{
        "item": 'lazierae2:resonating_crystal'
      }]
      }
    ],
    "category": "cell",
    "result": {
      "item": 'megacells:cell_component_256m'
    }
  })
  event.shaped('ae2:inscriber', [
    'BCB',
    'A B',
    'BCB'
  ], {
    A:'#forge:ingots/constantan',
    B:'powah:steel_energized',
    C:'minecraft:sticky_piston'
    })
    event.shaped('ae2:energy_acceptor', [
      'ABA',
      'BCB',
      'ABA'
    ], {
      A:'#forge:ingots/iron',
      B:'ae2:sky_dust',
      C:'valine_s1ex:redalloy_ingot'
      })
  event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"cell"}'), [
    ' D ',
    'BBB',
    'AAA'
  ], {
    D:'ae2:cell_component_256k',
    A:'#forge:plates/polyvinyl_chloride',
    B:'minecraft:glow_ink_sac'
    })
 })