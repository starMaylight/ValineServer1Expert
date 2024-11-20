onEvent("recipes", (event) => {
  let removebyids = [
    'alchemistry:dissolver',
    'alchemistry:combiner'
  ]
  removebyids.forEach((name) => {
    event.remove({id: name})
    })
    event.custom({"type":"createaddition:charging",
        "input": {"item": "mekanism:salt","count": 2},
        "result": {"item": "chemlib:chlorine","count": 1},
        "energy": 10000})
    event.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "input1": {
          "type": "pneumaticcraft:fluid",
          "fluid": "valine_s1ex:vinyl_chloride",
          "amount": 1000
        },
        "input2": {
          "type": "pneumaticcraft:fluid",
          "fluid": "valine_s1ex:liquefied_compressed_air",
          "amount": 1000
        },
        "item_output": {
          "item": "chemlib:polyvinyl_chloride_dust"
        },
        "pressure":4.0,
        "time": 4000
      })
    event.recipes.create.compacting('chemlib:polyvinyl_chloride_plate','8x chemlib:polyvinyl_chloride_dust')
    event.shaped('alchemistry:combiner', [
      'DCD',
      'ASA',
      'BBB'
    ], {
      A:'lazierae2:parallel_processor',
      B:'fluxnetworks:flux_block',
      C:Item.of('immersiveengineering:graphite_electrode', '{Unbreakable:1b,graphDmg:0}'),
      D:'botania:mana_diamond',
      S:'rftoolsbase:machine_frame'
      })
  event.shaped('alchemistry:dissolver', [
      'DCD',
      'ASA',
      'BBB'
    ], {
      A:'powah:capacitor_nitro',
      B:'fluxnetworks:flux_block',
      C:Item.of('immersiveengineering:graphite_electrode', '{Unbreakable:1b,graphDmg:0}'),
      D:'lazierae2:fluix_steel_ingot',
      S:'rftoolsbase:machine_frame'
      })
})