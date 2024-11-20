onEvent('recipes', event => {
    event.remove({output:'pneumaticcraft:pressure_chamber_interface'})
    event.remove({output:'pneumaticcraft:logistics_core'})
    event.remove({output:'pneumaticcraft:heat_frame'})
    event.remove({id:'pneumaticcraft:gps_tool'})
    event.remove({id:'pneumaticcraft:drone'})
    event.remove({id:'pneumaticcraft:logistics_drone'})
    event.remove({id:'pneumaticcraft:harvesting_drone'})
    event.remove({id:'pneumaticcraft:guard_drone'})
    event.remove({id:'pneumaticcraft:collector_drone'})
    event.shaped('2x pneumaticcraft:pressure_chamber_interface', [
        'AAA',
        'ASA',
        'AAA'
      ], {
        S: 'minecraft:nether_star',
        A: 'pneumaticcraft:pressure_chamber_wall'
      }).id('netherstar_is_tutorial')
      event.shaped('pneumaticcraft:logistics_core', [
        'AAA',
        'ASA',
        'AAA'
      ], {
        S: 'rftoolsutility:logic',
        A: 'pneumaticcraft:reinforced_brick_tile'
      })
      event.shaped('pneumaticcraft:heat_frame', [
        'AAA',
        'ASA',
        'AAA'
      ], {
        S: 'minecraft:furnace',
        A: 'pneumaticcraft:heat_sink'
      })
      event.shaped('pneumaticcraft:gps_tool', [
        ' A ',
        'BSB',
        'BCB'
      ], {
        S: 'cyclic:location_data',
        A: 'xnet:antenna',
        B:'pneumaticcraft:plastic',
        C:'immersiveengineering:logic_circuit'
      })
      event.shaped('pneumaticcraft:drone', [
        ' A ',
        'ASA',
        'BAB'
      ], {
        S: 'pneumaticcraft:printed_circuit_board',
        A: 'pneumaticcraft:turbine_rotor',
        B:'immersiveengineering:logic_circuit'
      })
      event.shaped('pneumaticcraft:logistics_drone', [
        ' A ',
        'ASA',
        'BAB'
      ], {
        S:'pneumaticcraft:drone',
        A: 'immersiveengineering:component_electronic',
        B:'immersiveengineering:component_electronic_adv'
      })
      event.shaped('pneumaticcraft:harvesting_drone', [
        ' A ',
        'ASA',
        'BAB'
      ], {
        S: 'pneumaticcraft:drone',
        A: 'cyclic:scythe_harvest',
        B:'create:mechanical_harvester'
      })
      event.shaped('pneumaticcraft:guard_drone', [
        ' A ',
        'ASA',
        'BAB'
      ], {
        S: 'pneumaticcraft:drone',
        A: 'cyclic:emerald_sword',
        B:'immersiveengineering:shield'
      })
      event.shaped('pneumaticcraft:collector_drone', [
        ' A ',
        'ASA',
        'BAB'
      ], {
        S: 'pneumaticcraft:drone',
        A:'pneumaticcraft:omnidirectional_hopper',
        B:'functionalstorage:collector_upgrade'
      })
})