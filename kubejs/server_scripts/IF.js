onEvent("recipes", (event) => {
    let removebyname = [
        'industrialforegoing:machine_frame_pity',
        'industrialforegoing:dryrubber',
        'industrialforegoing:machine_frame_simple',
        'industrialforegoing:machine_frame_advanced',
        'industrialforegoing:machine_frame_supreme',
       'industrialforegoing:infinity_nuke'
    ]
    removebyname.forEach((name) => {
        event.remove({output: name})
        })
        event.custom({
            "type": "extendedcrafting:shaped_ender_crafter",
            "pattern": [
              "ABA",
              "CDC",
              "AEA"
            ],
            "key": {
              "A": {
                "item": "immersiveengineering:fiberboard"
              },
              "B": {
                "item": "immersiveengineering:capacitor_hv"
              },
              "C": {
                "item": "immersiveengineering:insulating_glass"
              },
              "D": {
                "item": "immersiveengineering:heavy_engineering"
              },
              "E": {
                "item": "immersiveengineering:component_electronic_adv"
              }
            },
            "result": {
              "item": "industrialforegoing:machine_frame_pity"
            }
          })
    event.recipes.thermal.bottler('industrialforegoing:dryrubber',['industrialforegoing:tinydryrubber',Fluid.of('thermal:latex', 1000)])
    event.custom({
        "input": [
          {
            "tag": "forge:plastic"
          },
          {
            "tag": "industrialforegoing:machine_frame/pity"
          },
          {
            "tag": "forge:plastic"
          },
          {
            "item": "valine_s1ex:redalloy_ingot"
          },
          {
            "item": "valine_s1ex:redalloy_ingot"
          },
          {
            "tag": "forge:gears/gold"
          },
          {
            "item": "valine_s1ex:handmade_circuit"
          },
          {
            "tag": "forge:gears/gold"
          }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
        "processingTime": 1000,
        "output": {
          "item": "industrialforegoing:machine_frame_simple",
          "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
      })
  event.custom({
    "input": [
      {
        "tag": "forge:plastic"
      },
      {
        "tag": "industrialforegoing:machine_frame/simple"
      },
      {
        "tag": "forge:plastic"
      },
      {
        "tag": "forge:ingots/dragonsteel"
      },
      {
        "tag": "forge:ingots/dragonsteel"
      },
      {
        "tag": "forge:gears/enderium"
      },
      {
        "item": "valine_s1ex:handmade_circuit"
      },
      {
        "tag": "forge:gears/enderium"
      }
    ],
    "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:500}",
    "processingTime": 1000,
    "output": {
      "item": "industrialforegoing:machine_frame_advanced",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })
  event.custom({
    "output": "{FluidName:\"valine_s1ex:unknown_darkmatter\",Amount:10}",
    "rarity": [
      {
        "whitelist": {},
        "blacklist": {},
        "depth_min": -64,
        "depth_max": 256,
        "weight": 8
      }
    ],
    "pointer": 0,
    "catalyst": {
      "item": "industrialforegoing:laser_lens7"
    },
    "entity": "minecraft:ravager",
    "type": "industrialforegoing:laser_drill_fluid"
  })
  event.custom({
    "input": [
      {
        "tag": "forge:plastic"
      },
      {
        "tag": "industrialforegoing:machine_frame/advanced"
      },
      {
        "tag": "forge:plastic"
      },
      {
        "item": "valine_s1ex:high_node_item_circuit"
      },
      {
        "item": "valine_s1ex:high_node_fluid_circuit"
      },
      {
        "tag": "forge:ingots/terrasteel"
      },
      {
        "item": "extrautilitiesrebirth:super_speed_upgrade"
      },
      {
        "tag": "forge:ingots/terrasteel"
      }
    ],
    "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:135}",
    "processingTime": 300,
    "output": {
      "item": "industrialforegoing:machine_frame_supreme",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })
  event.custom({
    "input": [
      {
        "item": "valine_s1ex:industrial_tnt"
      },
      {
        "item": "valine_s1ex:industrial_tnt"
      },
      {
        "item": "valine_s1ex:industrial_tnt"
      },
      {
        "item": "valine_s1ex:industrial_tnt"
      },
      {
        "item": "industrialforegoing:fertilizer"
      },
      {
        "item":"tconstruct:sky_slime_crystal_block"
      },
      {
        "item": "extendedcrafting:ender_star"
      },
      {
        "item": "extendedcrafting:ender_star"
      }
    ],
    "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:2000}",
    "processingTime": 400,
    "output": {
      "item": "industrialforegoing:infinity_nuke",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })
})