let draconicFusion = (e, output, outputNBT, craftingTier, energy, middleItem, ingredientList) => {
  //crafting tier: 1.draconium, 2.wyvern, 3.draconic, 4.chaotic
  let tiers = ['WYVERN', 'DRACONIC', 'CHAOTIC']
  e.custom({
    type: 'draconicevolution:fusion_crafting',
    result: { item: output, nbt: outputNBT },
    catalyst: Item.of(middleItem).toJson(),
    total_energy: energy,
    tier: (craftingTier > 4 && craftingTier <= 1) ? 'DRACONIUM' : tiers[craftingTier - 2],
    ingredients: ingredientList.map(item => {
      if (typeof item === 'string') {
        return item.charAt(0) === '#' ? { tag: item.substring(1) } : { item: item }
      } else {
        return item.toJson()
      }
    })
  })//.id(`kubejs:fusion_crafting/${output.replace(':', '/')}`)
}

/*
onEvent('recipes', e => {
  draconicFusion(e,
  , // 出力アイテム
  null, // 出力アイテムのNBT
  ,                  // クラフティングティア (1:ドラコニウム, 2:ワイバーン, 3:ドラコニック, 4:カオティック)
  ,               // 必要エネルギー
  , // 中央の触媒アイテム
  [                   // 材料リスト

  ]
  )
})
*/
onEvent('recipes', event => {
  // レシピを削除
  event.remove({ id: 'extendedcrafting:ultimate_singularity' })
})

/*onEvent('recipes', e => {
  draconicFusion(e,
    'extendedcrafting:ultimate_singularity', // 出力アイテム
    null, // 出力アイテムのNBT
    4,                  // クラフティングティア (1:ドラコニウム, 2:ワイバーン, 3:ドラコニック, 4:カオティック)
    2147483647,               // 必要エネルギー
    'extendedcrafting:ender_star', // 中央の触媒アイテム
    [                   // 材料リスト
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coin"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:twinite_ingot"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:universal_mass"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:draconic_core"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:pig_iron"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:logic_director"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:heart_of_the_sea"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:precision_mechanism"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:dimensionalshard"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:plastic"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:raw_emerald"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:vacuum_tube"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:blazing"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:dragon_breath"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:actinium_ingot"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:angel_core"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:cake"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:singularity"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:hdpe"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:bedrockium"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:supremium_coal"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:sea_pickle"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:endest_pearl"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:logic_unit"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:pellet_plutonium"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:salmon_tempura"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:sawdust"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:enchanted_golden_apple"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:dragonstone"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:oak"}'),
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:photonic_solar_element"}')
    ]
  )

})

onEvent('recipes', event => {
  // レシピを削除
  event.remove({ id: 'avaritia:infinity_catalyst' })
})

  onEvent('recipes', e => {
  draconicFusion(e,
    'avaritia:infinity_catalyst', // 出力アイテム
    null, // 出力アイテムのNBT
    4,                  // クラフティングティア (1:ドラコニウム, 2:ワイバーン, 3:ドラコニック, 4:カオティック)
    10000000000,               // 必要エネルギー
    'extendedcrafting:ultimate_singularity', // 中央の触媒アイテム
    [                   // 材料リスト
      'avaritia:neutronium_ingot',
      'avaritia:neutronium_ingot',
      'avaritia:record_fragment',
      'avaritia:record_fragment',
      'avaritia:endest_pearl',
      'avaritia:endest_pearl',
      'avaritia:ultimate_stew',
      'avaritia:cosmic_meatballs'
    ]
  )
})

onEvent('recipes', e => {
  draconicFusion(e,
    'mekanism:creative_energy_cube', // 出力アイテム
    null, // 出力アイテムのNBT
    4,                  // クラフティングティア (1:ドラコニウム, 2:ワイバーン, 3:ドラコニック, 4:カオティック)
    2147483647,               // 必要エネルギー
    'mekaevolution:infinite_energy_cube', // 中央の触媒アイテム
    [                   // 材料リスト
      Item.of('create:creative_motor'),
      Item.of('ae2:creative_energy_cell'),
      Item.of('refinedstorage:creative_controller'),
      Item.of('avaritia:infinity_catalyst'),
      Item.of('create:creative_blaze_cake'),
      Item.of('botania:creative_pool')
    ]
  )

  draconicFusion(e,
    'mekanism:creative_energy_cube',    // 出力アイテム
    { mekData: { EnergyContainers: [{ stored: "18446744073709551615.9999" }] } }, // 出力アイテムのNBT
    4,                  // クラフティングティア (1:ドラコニウム, 2:ワイバーン, 3:ドラコニック, 4:カオティック)
    4294967295,               // 必要エネルギー
    'mekanism:creative_energy_cube', // 中央の触媒アイテム
    [                   // 材料リスト
      Item.of('mekaevolution:infinite_energy_cube',
        '{mekData:{EnergyContainers:[{Container:0b,stored:"65536000000"}]}}'),
      Item.of('mekaevolution:infinite_energy_cube',
        '{mekData:{EnergyContainers:[{Container:0b,stored:"65536000000"}]}}'),
      Item.of('mekaevolution:infinite_energy_cube',
        '{mekData:{EnergyContainers:[{Container:0b,stored:"65536000000"}]}}'),
      Item.of('mekaevolution:infinite_energy_cube',
        '{mekData:{EnergyContainers:[{Container:0b,stored:"65536000000"}]}}')
    ]
  )

  draconicFusion(e,
    'storagedrawers:creative_vending_upgrade', // 出力アイテム
    null, // 出力アイテムのNBT
    4,                  // クラフティングティア (1:ドラコニウム, 2:ワイバーン, 3:ドラコニック, 4:カオティック)
    1099511627775,               // 必要エネルギー
    'storagedrawers:creative_storage_upgrade', // 中央の触媒アイテム
    [                   // 材料リスト
      Item.of('avaritia:infinity_catalyst'),
      Item.of('draconicevolution:creative_capacitor'),
      Item.of('create:creative_motor'),
      Item.of('ae2:creative_energy_cell'),
      Item.of('mekanism:creative_fluid_tank'),
      Item.of('mekanism:creative_chemical_tank'),
      Item.of('refinedstorage:creative_controller'),
      Item.of('mekanism:creative_energy_cube'),
      Item.of('create:creative_blaze_cake'),
      Item.of('modularrouters:creative_module'),
      Item.of('botania:creative_pool')



    ]
  )

})*/
