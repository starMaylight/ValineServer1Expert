onEvent("recipes", (event) => {
    let removebyname = [
        'ironjetpacks:basic_coil',
        'ironjetpacks:advanced_coil','ironjetpacks:elite_coil','ironjetpacks:ultimate_coil'
    ]
    removebyname.forEach((name) => {
      event.remove({ output: name })
    })
    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
          " AB",
          "ACA",
          "BA "
        ],
        "key": {
          "A": {
            "tag": 'forge:gears/iron'
          },
          "B": {
            "item": "thermal:rf_coil"
          },
          "C": {
            "item": "immersiveengineering:stick_treated"
          }
        },
        "result": {
          "item": "ironjetpacks:basic_coil"
        }
      })
      event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
          " AB",
          "ACA",
          "BA "
        ],
        "key": {
          "A": {
            "item": "thermal:electrum_gear"
          },
          "B": {
            "item": "ironjetpacks:basic_coil"
          },
          "C": {
            "item": "botania:incense_stick"
          }
        },
        "result": {
          "item": "ironjetpacks:advanced_coil"
        }
      })
    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
          " AB",
          "ACA",
          "BA "
        ],
        "key": {
          "A": {
            "item": "pneumaticcraft:drill_bit_diamond"
          },
          "B": {
            "item": "ironjetpacks:advanced_coil"
          },
          "C": {
            "item": "cyclic:crystal_sword"
          }
        },
        "result": {
          "item": "ironjetpacks:elite_coil"
        }
      })
    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
          " AB",
          "ACA",
          "BA "
        ],
        "key": {
          "A": {
            "item": "valine_s1ex:enritched_sunnarium_alloy"
          },
          "B": {
            "item": "ironjetpacks:elite_coil"
          },
          "C": {
            "item": "mekanism:hdpe_stick"
          }
        },
        "result": {
          "item": "ironjetpacks:ultimate_coil"
        }
      })
})