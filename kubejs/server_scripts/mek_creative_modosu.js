onEvent("recipes", event => {
    event.shaped('1x mekanism:creative_chemical_tank', [
        '   ', 
        ' A ',
        '   '  
      ], {
        A: 'mekanism:creative_chemical_tank'
      }
    )}
)

onEvent("recipes", event => {
    event.shaped('1x mekanism:creative_fluid_tank', [
        '   ', 
        ' A ',
        '   '  
      ], {
        A: 'mekanism:creative_fluid_tank'
      }
    )
})
onEvent('recipes', event => {
  ['smelting','enriching','crushing','compressing','combining','purifying','injecting','infusing','sawing'].forEach((id)=>{
      event.remove({id:`mekanism:factory/basic/${id}`}),
      event.remove({id:`mekanism:factory/advanced/${id}`}),
      event.remove({id:`mekanism:factory/elite/${id}`}),
      event.remove({id:`mekanism:factory/ultimate/${id}`})
  })
})