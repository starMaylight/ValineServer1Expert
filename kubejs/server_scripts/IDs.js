onEvent('recipes', event=>{
    //Lace add
    event.remove({output: 'integrateddynamics:energy_battery'})

    event.remove({output: 'integrateddynamics:cable'})
    event.remove({output: 'integrateddynamics:variable'})
    event.remove({output: 'integrateddynamics:variable_transformer_output'})
    event.remove({output: 'integrateddynamics:variable_transformer_input'})
    event.remove({output: 'integrateddynamics:logic_programmer'})
    event.remove({output: 'integrateddynamics:variablestore'})

    event.recipes.botania.runic_altar("integrateddynamics:energy_battery", ["thermal:machine_frame", "integrateddynamics:crystalized_menril_block","immersiveengineering:logic_unit"], 5000)

      event.recipes.thermal.smelter('3x valine_s1ex:azure_menril_ingot',['#forge:ingots/amethyst_bronze', 'integrateddynamics:crystalized_menril_chunk','#forge:ingots/slimesteel']).energy(200000)
      event.custom({
        "type":"createaddition:rolling",
        "input": {
              "item": "valine_s1ex:azure_menril_ingot"
        },
        "result": {
          "item": "integrateddynamics:cable",
          "count": 4
        }
      })
      event.recipes.thermal.press('integrateddynamics:variable', ['valine_s1ex:azure_menril_ingot'])
      event.shaped('integrateddynamics:variable_transformer_input', [
        ' A ',
        'SBS',
        ' A '
      ], {
        S: 'valine_s1ex:azure_menril_ingot',
        A: 'integrateddynamics:variable',
        B: 'minecraft:sticky_piston'
      })
      event.shaped('integrateddynamics:variable_transformer_output', [
        ' A ',
        'SBS',
        ' A '
      ], {
        S: 'valine_s1ex:azure_menril_ingot',
        A: 'integrateddynamics:variable',
        B: 'minecraft:piston'
      })
      event.shaped('integrateddynamics:logic_programmer', [
        'ASA',
        'SBS',
        'ASA'
      ], {
        S: 'valine_s1ex:azure_menril_ingot',
        A: 'integrateddynamics:variable',
        B: 'industrialforegoing:machine_frame_simple'
      })
      event.shaped('integrateddynamics:variablestore', [
        'ASA',
        'SBS',
        'ASA'
      ], {
        S: 'valine_s1ex:azure_menril_ingot',
        A: 'integrateddynamics:variable',
        B: 'integrateddynamics:energy_battery'
      })
  event.custom({
    "type": "integrateddynamics:drying_basin",
    "fluid": {
      "fluid": "integrateddynamics:menril_resin",
      "amount": 1000
    },
    "item": {
      "tag": "integrateddynamics:menril_logs"
    },
    "duration": 10000,
    "result": {
      "item":"integrateddynamics:menril_log_filled"
    }
  })
  event.custom({
    "type": "integrateddynamics:mechanical_drying_basin",
    "fluid": {
      "fluid": "integrateddynamics:menril_resin",
      "amount": 1000
    },
    "item": {
      "tag": "integrateddynamics:menril_logs"
    },
    "duration": 200,
    "result": {
      "item":"integrateddynamics:menril_log_filled"
    }
  })
    
})