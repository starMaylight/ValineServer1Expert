onEvent("recipes", (event) => {
    let removebyname = [
        'compactmachines:machine_tiny',
        'compactmachines:machine_small',
        'compactmachines:machine_normal',
        'compactmachines:machine_large',
        'compactmachines:machine_giant',
        'compactmachines:machine_maximum'
    ]
    removebyname.forEach((name) => {
        event.remove({output: name})
        })
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 100000,
        "input": {
          "item": "compactmachines:wall"
        },
        "ingredients": [
          {
            "item": "extrautilitiesrebirth:triple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:triple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:triple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:triple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:triple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:triple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:triple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:triple_compressed_cobblestone"
          }
        ],
        "result": {
          "item": "compactmachines:machine_tiny"
        }
      })
      event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 200000,
        "input": {
          "item": "compactmachines:machine_tiny"
        },
        "ingredients": [
          {
            "item": "extrautilitiesrebirth:quadruple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:quadruple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:quadruple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:quadruple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:quadruple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:quadruple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:quadruple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:quadruple_compressed_cobblestone"
          }
        ],
        "result": {
          "item": "compactmachines:machine_small"
        }
      })
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 400000,
        "input": {
          "item": "compactmachines:machine_small"
        },
        "ingredients": [
          {
            "item": "extrautilitiesrebirth:quintuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:quintuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:quintuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:quintuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:quintuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:quintuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:quintuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:quintuple_compressed_cobblestone"
          }
        ],
        "result": {
          "item": "compactmachines:machine_normal"
        }
      })
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 800000,
        "input": {
          "item": "compactmachines:machine_normal"
        },
        "ingredients": [
          {
            "item": "extrautilitiesrebirth:sextuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:sextuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:sextuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:sextuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:sextuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:sextuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:sextuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:sextuple_compressed_cobblestone"
          }
        ],
        "result": {
          "item": "compactmachines:machine_large"
        }
      })
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 1600000,
        "input": {
          "item": "compactmachines:machine_large"
        },
        "ingredients": [
          {
            "item": "extrautilitiesrebirth:septuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:septuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:septuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:septuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:septuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:septuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:septuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:septuple_compressed_cobblestone"
          }
        ],
        "result": {
          "item": "compactmachines:machine_giant"
        }
      })
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 100000,
        "input": {
          "item": "compactmachines:machine_giant"
        },
        "ingredients": [
          {
            "item": "extrautilitiesrebirth:octuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:octuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:octuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:octuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:octuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:octuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:octuple_compressed_cobblestone"
          },
          {
            "item": "extrautilitiesrebirth:octuple_compressed_cobblestone"
          }
        ],
        "result": {
          "item": "compactmachines:machine_maximum"
        }
      })
})