onEvent('recipes', event => {
    event.remove({mod: 'botany_pots_ore_planting'})
    event.custom({
      "type": "botanypots:soil",
      "input": {"item": "mysticalagriculture:inferium_growth_accelerator"},
      "display": {"block": "mysticalagriculture:inferium_growth_accelerator"},
      "categories": ["customtier1"],
      "growthModifier": 1})
    event.custom({
      "type": "botanypotstiers:soil",
      "input": {"item": "mysticalagriculture:inferium_growth_accelerator"},
      "display": {"block": "mysticalagriculture:inferium_growth_accelerator"},
      "categories": ["customtier1"],
      "growthModifier": 1})
    event.custom({
      "type": "botanypots:soil",
      "input": {"item": "mysticalagriculture:prudentium_growth_accelerator"},
      "display": {"block": "mysticalagriculture:prudentium_growth_accelerator"},
      "categories": ["customtier2"],
      "growthModifier": 1})
    event.custom({
      "type": "botanypotstiers:soil",
      "input": {"item": "mysticalagriculture:prudentium_growth_accelerator"},
      "display": {"block": "mysticalagriculture:prudentium_growth_accelerator"},
      "categories": ["customtier2"],
      "growthModifier": 1})
    event.custom({
      "type": "botanypots:soil",
      "input": {"item": "mysticalagriculture:tertium_growth_accelerator"},
      "display": {"block": "mysticalagriculture:tertium_growth_accelerator"},
      "categories": ["customtier3"],
      "growthModifier": 1})
      event.custom({
        "type": "botanypotstiers:soil",
        "input": {"item": "mysticalagriculture:tertium_growth_accelerator"},
        "display": {"block": "mysticalagriculture:tertium_growth_accelerator"},
        "categories": ["customtier3"],
        "growthModifier": 1})
    event.custom({
      "type": "botanypots:soil",
      "input": {"item": "mysticalagriculture:imperium_growth_accelerator"},
      "display": {"block": "mysticalagriculture:imperium_growth_accelerator"},
      "categories": ["customtier4"],
      "growthModifier": 1})
      event.custom({
        "type": "botanypotstiers:soil",
        "input": {"item": "mysticalagriculture:imperium_growth_accelerator"},
        "display": {"block": "mysticalagriculture:imperium_growth_accelerator"},
        "categories": ["customtier4"],
        "growthModifier": 1})
    event.custom({
      "type": "botanypots:soil",
      "input": {"item": "mysticalagriculture:supremium_growth_accelerator"},
      "display": {"block": "mysticalagriculture:supremium_growth_accelerator"},
      "categories": ["customtier5"],
      "growthModifier": 1})
      event.custom({
        "type": "botanypotstiers:soil",
        "input": {"item": "mysticalagriculture:supremium_growth_accelerator"},
        "display": {"block": "mysticalagriculture:supremium_growth_accelerator"},
        "categories": ["customtier5"],
        "growthModifier": 1})
        event.custom({
          "type": "botanypots:soil",
          "input": {"item": "mysticalagradditions:insanium_farmland"},
          "display": {"block": "mysticalagradditions:insanium_farmland"},
          "categories": ["customtier6"],
          "growthModifier": 1})
    event.custom({
          "type": "botanypotstiers:soil",
          "input": {"item": "mysticalagradditions:insanium_farmland"},
          "display": {"block": "mysticalagradditions:insanium_farmland"},
          "categories": ["customtier6"],
          "growthModifier": 1})
    event.custom({
      "type": "botanypots:soil",
      "input": {"item": "mysticalagradditions:insanium_farmland"},
      "display": {"block": "mysticalagradditions:insanium_farmland"},
      "categories": ["customtier6"],
      "growthModifier": 1})
    function crop(seeds,output,categories,oredisplay,growthTicks){
        event.custom({"type": "botanypots:crop",
            "seed": seeds,
            "categories": [categories],
            "growthTicks": growthTicks,
            "display": {
              "type": "botanypots:aging",
              "block": oredisplay},
            "drops": [{"chance": 1.00,"output": {"item": output},"minRolls": 2,"maxRolls": 3}]})
        event.custom({"type": "botanypotstiers:crop",
                    "seed": {
                    "item": seeds},
                    "categories": [categories],
                    "growthTicks": growthTicks,
                    "display": {
                    "type": "botanypotstiers:aging",
                    "block": oredisplay
                    },
                    "drops": [{"chance": 1.00,"output": {"item": output}}]})
       }
    //tier1
    crop('mysticalagriculture:prosperity_ingot','mysticalagriculture:prosperity_shard',"customtier1",'mysticalagriculture:prosperity_ore',1200)
    crop('mysticalagriculture:soulium_ingot','mysticalagriculture:soulium_dust',"customtier1",'mysticalagriculture:soulium_ore',1200)
    crop('mysticalagriculture:inferium_ingot','mysticalagriculture:inferium_essence',"customtier1",'mysticalagriculture:inferium_ingot_block',1000)
    crop('minecraft:oak_leaves','minecraft:oak_leaves',"customtier1",'minecraft:oak_leaves',10)
    //tier2
    crop('minecraft:coal','minecraft:coal',"customtier2",'minecraft:coal_ore',1200)
    crop('thermal:sulfur','thermal:sulfur',"customtier2",'thermal:sulfur_ore',1200)
    crop('mysticalagriculture:prudentium_ingot','mysticalagriculture:prudentium_essence',"customtier2",'mysticalagriculture:prudentium_ingot_block',1200)
    //tier3
    crop('chemlib:tin_ingot','thermal:raw_tin',"customtier3",'mekanism:tin_ore',1200)
    crop('mekanism:ingot_tin','thermal:raw_tin',"customtier3",'mekanism:tin_ore',1200)
    crop('thermal:tin_ingot','thermal:raw_tin',"customtier3",'mekanism:tin_ore',1200)
    crop('create:zinc_ingot','create:raw_zinc',"customtier3",'create:zinc_ore',1200)
    crop('chemlib:zinc_ingot','create:raw_zinc',"customtier3",'create:zinc_ore',1200)
    crop('minecraft:iron_ingot','minecraft:raw_iron',"customtier3",'minecraft:iron_ore',1200)
    crop('thermal:lead_ingot','mekanism:raw_lead',"customtier3",'immersiveengineering:ore_lead',1200)
    crop('mekanism:ingot_lead','mekanism:raw_lead',"customtier3",'immersiveengineering:ore_lead',1200)
    crop('immersiveengineering:ingot_lead','mekanism:raw_lead',"customtier3",'immersiveengineering:ore_lead',1200)
    crop('chemlib:lead_ingot','mekanism:raw_lead',"customtier3",'immersiveengineering:ore_lead',1200)

    crop('minecraft:quartz','minecraft:quartz','tier3quartz','minecraft:nether_quartz_ore',1200)
    crop('minecraft:copper_ingot','minecraft:raw_copper','tier3copper','minecraft:copper_ore',1200)
    crop('mysticalagriculture:tertium_ingot','mysticalagriculture:tertium_essence','tier3teri','mysticalagriculture:tertium_ingot_block',1600)
    //tier4
    crop('minecraft:lapis_lazuli','minecraft:lapis_lazuli',"customtier4",'minecraft:lapis_ore',1200)
    crop('chemlib:nickel_ingot','thermal:raw_nickel',"customtier4",'thermal:nickel_ore',1200)
    crop('immersiveengineering:ingot_nickel','thermal:raw_nickel',"customtier4",'thermal:nickel_ore',1200)
    crop('thermal:nickel_ingot','thermal:raw_nickel',"customtier4",'thermal:nickel_ore',1200)
    crop('minecraft:gold_ingot','minecraft:raw_gold',"customtier4",'minecraft:gold_ore',1200)
    crop('mekanism:ingot_osmium','mekanism:raw_osmium',"customtier4",'mekanism:osmium_ore',1200)
    crop('chemlib:osmium_ingot','mekanism:raw_osmium',"customtier4",'mekanism:osmium_ore',1200)
    crop('chemlib:uranium_ingot','immersiveengineering:raw_uranium',"customtier4",'immersiveengineering:ore_uranium',1200)
    crop('immersiveengineering:ingot_uranium','immersiveengineering:raw_uranium',"customtier4",'immersiveengineering:ore_uranium',1200)
    crop('mekanism:ingot_uranium','immersiveengineering:raw_uranium',"customtier4",'immersiveengineering:ore_uranium',1200)
    crop('mekanism:fluorite_gem','mekanism:fluorite_gem',"customtier4",'mekanism:fluorite_ore',1200)
    crop('mysticalagriculture:imperium_ingot','mysticalagriculture:imperium_essence',"customtier4",'mysticalagriculture:imperium_ingot_block',2400)
    //tier5
    crop('minecraft:emerald','minecraft:emerald',"customtier5",'minecraft:emerald_ore',1200)
    crop('draconicevolution:draconium_ingot','draconicevolution:draconium_dust',"customtier5",'draconicevolution:overworld_draconium_ore',1200)
    crop('minecraft:diamond','minecraft:diamond',"customtier5",'minecraft:diamond_ore',1200)
    crop('minecraft:netherite_ingot','minecraft:ancient_debris',"customtier5",'minecraft:ancient_debris',1200)
    crop('mysticalagriculture:supremium_ingot','mysticalagriculture:supremium_essence',"customtier5",'mysticalagriculture:supremium_ingot_block',2800)
    //overtier
    crop('mysticalagradditions:insanium_ingot','mysticalagradditions:insanium_essence',"customtier6",'mysticalagradditions:insanium_ingot_block',3000)
})