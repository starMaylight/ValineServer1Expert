onEvent("recipes", (event) => {
    event.remove({id:'tconstruct:smeltery/scorched/alloyer'})
    event.remove({id:'tconstruct:smeltery/casting/seared/smeltery_controller'})
    event.remove({output:'tconstruct:gear_cast'})
    event.remove({output:'tconstruct:gear_sand_cast'})
    event.remove({output:'tconstruct:gear_red_sand_cast'})

    event.shaped('tconstruct:scorched_alloyer', [
        '   ',
        'ASA',
        'ABA'
      ], {
        S: '#tconstruct:seared_tanks',
        A: 'tconstruct:scorched_brick',
        B:'pneumaticcraft:ingot_iron_compressed'
      })
      event.custom({
        "type": "tconstruct:retextured_casting_basin",
        "cast": {
          "item": "tconstruct:foundry_controller"
        },
        "cast_consumed": true,
        "fluid": {
          "tag": "pneumaticcraft:etching_acid",
          "amount": 1000
        },
        "result": "tconstruct:smeltery_controller",
        "cooling_time": 100
      })
});
