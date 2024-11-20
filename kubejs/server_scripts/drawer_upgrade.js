//Tier 1 > 2
onEvent("recipes", event => {
  event.remove({ output: 'storagedrawers:iron_storage_upgrade' })

  event.shaped('storagedrawers:iron_storage_upgrade', [
    'AAA',
    'BCB',
    'AAA'
  ], {
    A: '#forge:rods/wooden',
    B: 'minecraft:iron_ingot',
    C: 'storagedrawers:obsidian_storage_upgrade'

  })
})

//Tier 2 > 3
onEvent("recipes", event => {
  event.remove({ output: 'storagedrawers:gold_storage_upgrade' })

  event.shaped('storagedrawers:gold_storage_upgrade', [
    'AAA',
    'BCB',
    'AAA'
  ], {
    A: '#forge:rods/wooden',
    B: 'minecraft:gold_ingot',
    C: 'storagedrawers:iron_storage_upgrade'

  })
})

//Tier 3 > 4
onEvent("recipes", event => {
  event.remove({ output: 'storagedrawers:diamond_storage_upgrade' })

  event.shaped('storagedrawers:diamond_storage_upgrade', [
    'AAA',
    'BCB',
    'AAA'
  ], {
    A: '#forge:rods/wooden',
    B: 'minecraft:diamond',
    C: 'storagedrawers:gold_storage_upgrade'

  })
})

//Tier 4 > 5
onEvent("recipes", event => {
  event.remove({ output: 'storagedrawers:emerald_storage_upgrade' })

  event.shaped('storagedrawers:emerald_storage_upgrade', [
    'AAA',
    'BCB',
    'AAA'
  ], {
    A: '#forge:rods/wooden',
    B: 'minecraft:emerald',
    C: 'storagedrawers:diamond_storage_upgrade'

  })
})

//Tier 5 >Creative
onEvent("recipes", event => {
  event.shaped('storagedrawers:creative_storage_upgrade', [
    'AAA',
    'BCB',
    'AAA'
  ], {
    A: '#forge:rods/wooden',
    B: 'avaritia:neutronium_ingot',
    C: 'storagedrawers:emerald_storage_upgrade'

  })
})