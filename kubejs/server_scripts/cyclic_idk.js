onEvent("recipes", (event) => {
	event.remove({output:'cyclic:uncrafter'})
    let removebyname = [
     'cyclic:solidifier',
     'cyclic:magic_net',
     'cyclic:energy_pipe',
     'cyclic:item_pipe',
     'cyclic:fluid_pipe'
    ]
    removebyname.forEach((name) => {
        event.remove({output: name})
        })
    event.shaped('cyclic:solidifier', [
      'ACA',
      'BDB',
      'SSS'
    ], {
      S:'cyclic:netherite_pressure_plate',
      A:'tconstruct:sky_slime_crystal_block',
      B:'immersiveengineering:logic_circuit',
      C:'botania:third_eye',
      D:'pneumaticcraft:logistics_core'
      })
})