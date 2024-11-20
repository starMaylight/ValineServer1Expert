onEvent("recipes", (event) => {
    let removebyids = [
		'powah:crafting/dielectric_paste',
		'powah:crafting/dielectric_paste_2',
		'powah:crafting/energizing_orb',
		'powah:energizing/energized_steel',
		'powah:energizing/blazing_crystal',
		'powah:energizing/blazing_crystal_2',
		'powah:energizing/niotic_crystal',
		'powah:energizing/spirited_crystal',
		'powah:energizing/nitro_crystal'
    ]
    removebyids.forEach((name) => {
        event.remove({id: name})
        })
	event.custom({
    "input": [
      {
        "tag": "forge:coal_coke"
      },
      {
        "tag": "forge:coal_coke"
      },
      {
        "tag": "forge:coal_coke"
      },
      {
        "item": "valine_s1ex:pyrotheum_dust"
      },
      {
        "item": "valine_s1ex:pyrotheum_dust"
      },
      {
        "item": "minecraft:clay"
      },
      {
        "item": "minecraft:clay"
      },
      {
        "item": "minecraft:clay"
      }
    ],
    "inputFluid": "{FluidName:\"valine_s1ex:unknown_darkmatter\",Amount:250}",
    "processingTime": 100,
    "output": {
      "item": "powah:dielectric_paste",
      "count": 16
    },
    "type": "industrialforegoing:dissolution_chamber"
  })
  event.custom({
	"type": "extendedcrafting:shaped_ender_crafter",
	"pattern": [
	  "AAA",
	  "ABA",
	  "CCC"
	],
	"key": {
	  "A": {
		"item": "botania:bifrost_perm"
	  },
	  "B": {
		"item": "powah:dielectric_casing"
	  },
	  "C": {
		"item": "powah:dielectric_rod_horizontal"
	  }
	},
	"result": {
	  "item": "powah:energizing_orb"
	}
  })
  event.custom({
	"type": "powah:energizing",
	"ingredients": [
	  {
		"tag": "forge:ingots/steel"
	  },
	  {
		"tag": "forge:silicon"
	  }
	],
	"energy": 100000,
	"result": {
	  "item": "powah:steel_energized",
	  "count": 1
	}
  })
  event.custom({
	"type": "powah:energizing",
	"ingredients": [
	  {
		"item": "valine_s1ex:pyrotheum_dust"
	  },
	  {
		"item": "tconstruct:blazing_bone"
	  },
	  {
		"item": "create:blaze_cake"
	  }
	],
	"energy": 500000,
	"result": {
	  "item": "powah:crystal_blazing",
	  "count": 1
	}
  })
  event.custom({
	"type": "powah:energizing",
	"ingredients": [
	  {
		"item": "botania:manasteel_ingot"
	  },
	  {
		"item": "valine_s1ex:azure_menril_ingot"
	  },
	  {
		"item": "valine_s1ex:arc_element_crystal"
	  }
	],
	"energy": 1000000,
	"result": {
	  "item": "powah:crystal_niotic",
	  "count": 1
	}
  })
  event.custom({
	"type": "powah:energizing",
	"ingredients": [
	  {
		"item": "valine_s1ex:empowered_lapis"
	  },
	  {
		"item": "valine_s1ex:degenerate_symbols"
	  },
	  {
		"item": "valine_s1ex:stabilized_core"
	  },
	  {
		"item": "botania:terrasteel_ingot"
	  }
	],
	"energy": 10000000,
	"result": {
	  "item": "powah:crystal_spirited",
	  "count": 1
	}
  })
  event.custom({
	"type": "powah:energizing",
	"ingredients": [
	  {
		"item": "powah:steel_energized"
	  },
	  {
		"item": "powah:crystal_blazing"
	  },
	  {
		"item": "powah:crystal_niotic"
	  },
	  {
		"item": "powah:crystal_spirited"
	  },
	  {
		"item": "cyclic:heart"
	  },
	  {
		"item": "valine_s1ex:ether_crystal"
	  }
	],
	"energy": 1000000000,
	"result": {
	  "item": "powah:crystal_nitro",
	  "count": 6
	}
  })
})