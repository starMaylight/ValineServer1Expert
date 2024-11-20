onEvent('worldgen.remove', event => {
	event.removeOres(ores => {
	  ores.blocks = [
		'minecraft:coal_ore', 
		'minecraft:iron_ore', 
		'minecraft:gold_ore', 
		'minecraft:nether_gold_ore', 
		'minecraft:copper_ore', 
		'minecraft:nether_quartz_ore', 
		'minecraft:lapis_ore', 
		'minecraft:emerald_ore', 
		'minecraft:diamond_ore', 
		'minecraft:redstone_ore', 
    'minecraft:deepslate_diamond_ore',
    'minecraft:deepslate_lapis_ore',
    'minecraft:deepslate_coal_ore',
    'minecraft:deepslate_copper_ore',
    'minecraft:deepslate_iron_ore',
    'minecraft:deepslate_emerald_ore',
    'minecraft:deepslate_gold_ore',
    'minecraft:deepslate_redstone_ore'
	]
	})
	
})
onEvent('worldgen.add', event => {
    // use the anchors helper from the event (NOTE: this requires newer versions of KubeJS)
    // if you are using an older version of KubeJS, you can use the methods in the ore properties class
    const { anchors } = event
   //iron vein
    event.addOre(ore => {
      ore.id = 'kubejs:iron_vein' // (optional, but recommended) custom id for the feature
      ore.biomes = {not: ["^nether", "^the_end"]}
  
      // examples on how to use targets
      ore.addTarget('minecraft:stone', 'minecraft:iron_ore')
      ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_iron_ore')
  
      ore.count([8, 12])             // generate between 15 and 50 veins (chosen at random), you could use a single number here for a fixed amount of blocks
        .squared()                    // randomly spreads the ores out across the chunk, instead of generating them in a column
        .triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
          anchors.aboveBottom(0),    // the lower bound should be 32 blocks above the bottom of the world, so in this case, Y = -32 since minY = -64
          anchors.absolute(150)	      // the upper bound, meanwhile is set to be just exactly at Y = 96
        )
      ore.size = 25                           
      ore.noSurface = 0                    
      ore.worldgenLayer = 'underground_ores'  
      ore.chance = 0							
    })
    //copper vain
    event.addOre((ore) => {
      ore.id = 'kubejs:copper_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone', 'minecraft:copper_ore')
      ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_copper_ore')
      ore.count([8, 16])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(49),
              anchors.absolute(256)
          )
      ore.size = 30
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //gold_vein
    event.addOre((ore) => {
      ore.id = 'kubejs:l_gold_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:iron_ore', 'minecraft:gold_ore')
      ore.addTarget('minecraft:deepslate_iron_ore', 'minecraft:deepslate_gold_ore')
      ore.addTarget('minecraft:copper_ore', 'minecraft:gold_ore')
      ore.addTarget('minecraft:deepslate_copper_ore', 'minecraft:deepslate_gold_ore')
      ore.count(200)
          .squared()
          .uniformHeight(
              anchors.aboveBottom(49),
              anchors.absolute(256)
          )
      ore.size = 20
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //coal vein
    event.addOre((ore) => {
      ore.id = 'kubejs:coal_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone', 'minecraft:coal_ore')
      ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_coal_ore')
      ore.count([10, 18])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(0),
              anchors.absolute(256)
          )
      ore.size = 35
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //diamond vein
    event.addOre((ore) => {
      ore.id = 'kubejs:diamond_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:coal_ore','minecraft:diamond_ore')
      ore.addTarget('minecraft:deepslate_coal_ore','minecraft:deepslate_diamond_ore')
      ore.count(200)
          .squared()
          .uniformHeight(
              anchors.aboveBottom(0),
              anchors.absolute(11)
          )
      ore.size = 10
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //redstone vein
    event.addOre((ore) => {
      ore.id = 'kubejs:redstone_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone', 'minecraft:redstone_ore')
      ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_redstone_ore')
      ore.count([5, 10])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(0),
              anchors.absolute(16)
          )
      ore.size = 35
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //cinnabar vein
    event.addOre((ore) => {
      ore.id = 'kubejs:cinnabar_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone','thermal:cinnabar_ore')
      ore.addTarget('minecraft:deepslate', 'thermal:deepslate_cinnabar_ore')
      ore.count([5, 10])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(32),
              anchors.absolute(64)
          )
      ore.size = 15
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //ilmenite vein
    event.addOre((ore) => {
      ore.id = 'kubejs:ilmenite_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:redstone_ore','kubejs:ilmenite_ore')
      ore.addTarget('thermal:cinnabar_ore','kubejs:ilmenite_ore')
      ore.count(200)
          .squared()
          .uniformHeight(
              anchors.aboveBottom(32),
              anchors.absolute(12)
          )
      ore.size = 10
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //uranium vein
    event.addOre((ore) => {
      ore.id = 'kubejs:uranium_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone','mekanism:uranium_ore')
      ore.addTarget('minecraft:deepslate', 'mekanism:deepslate_uranium_ore')
      ore.count([6,10])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(0),
              anchors.absolute(12)
          )
      ore.size = 25
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //essence vein
    event.addOre((ore) => {
      ore.id = 'kubejs:inferium_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone','mysticalagriculture:inferium_ore')
      ore.addTarget('minecraft:deepslate', 'mysticalagriculture:deepslate_inferium_ore')
      ore.count([5,8])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(45),
              anchors.absolute(5)
          )
      ore.size = 15
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //emerald_vein
    event.addOre((ore) => {
      ore.id = 'kubejs:emerald_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('mysticalagriculture:inferium_ore','minecraft:emerald_ore')
      ore.addTarget('mysticalagriculture:deepslate_inferium_ore','minecraft:deepslate_emerald_ore')
      ore.addTarget('mekanism:uranium_ore','minecraft:emerald_ore')
      ore.addTarget('mekanism:deepslate_uranium_ore', 'minecraft:deepslate_emerald_ore')
      ore.count(200)
          .squared()
          .uniformHeight(
              anchors.aboveBottom(0),
              anchors.absolute(256)
          )
      ore.size = 10
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //lapis vein
    event.addOre((ore) => {
      ore.id = 'kubejs:lapis_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone','minecraft:lapis_ore')
      ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_lapis_ore')
      ore.count([10,12])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(48),
              anchors.absolute(256)
          )
      ore.size = 20
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //apatite_vein
    event.addOre((ore) => {
      ore.id = 'kubejs:apatite_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone','thermal:apatite_ore')
      ore.addTarget('minecraft:deepslate', 'thermal:deepslate_apatite_ore')
      ore.count([12,18])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(48),
              anchors.absolute(256)
          )
      ore.size = 15
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //certus vein
    event.addOre((ore) => {
      ore.id = 'kubejs:certus_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:lapis_ore','ae2:quartz_ore')
      ore.addTarget('minecraft:deepslate_lapis_ore','ae2:deepslate_quartz_ore')
      ore.addTarget('thermal:apatite_ore','ae2:quartz_ore')
      ore.addTarget('thermal:deepslate_apatite_ore', 'ae2:deepslate_quartz_ore')
      ore.count(200)
          .squared()
          .uniformHeight(
              anchors.aboveBottom(0),
              anchors.absolute(256)
          )
      ore.size = 15
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //zinc vein
    event.addOre((ore) => {
      ore.id = 'kubejs:zinc_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone','create:zinc_ore')
      ore.addTarget('minecraft:deepslate', 'create:deepslate_zinc_ore')
      ore.count([10,15])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(0),
              anchors.absolute(256)
          )
      ore.size = 25
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //tin vein
    event.addOre((ore) => {
      ore.id = 'kubejs:tin_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone','thermal:tin_ore')
      ore.addTarget('minecraft:deepslate', 'thermal:deepslate_tin_ore')
      ore.count([10,12])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(55),
              anchors.absolute(256)
          )
      ore.size = 25
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //silver vein
    event.addOre((ore) => {
      ore.id = 'kubejs:silver_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('thermal:tin_ore','thermal:silver_ore')
      ore.addTarget('thermal:deepslate_tin_ore','thermal:deepslate_silver_ore')
      ore.addTarget('create:zinc_ore','thermal:silver_ore')
      ore.addTarget('create:deepslate_zinc_ore', 'thermal:deepslate_silver_ore')
      ore.count(200)
          .squared()
          .uniformHeight(
              anchors.aboveBottom(0),
              anchors.absolute(256)
          )
      ore.size = 15
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //nickel vein
    event.addOre((ore) => {
      ore.id = 'kubejs:nickel_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone','thermal:nickel_ore')
      ore.addTarget('minecraft:deepslate', 'thermal:deepslate_nickel_ore')
      ore.count([8,10])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(0),
              anchors.absolute(256)
          )
      ore.size = 15
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //sulfer vein
    event.addOre((ore) => {
      ore.id = 'kubejs:sulfer_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone','thermal:sulfur_ore')
      ore.addTarget('minecraft:deepslate','thermal:deepslate_sulfur_ore')
      ore.count([5,10])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(0),
              anchors.absolute(64)
          )
      ore.size = 15
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //niter vein
    event.addOre((ore) => {
      ore.id = 'kubejs:niter_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone','thermal:niter_ore')
      ore.addTarget('minecraft:deepslate','thermal:deepslate_niter_ore')
      ore.count([5,10])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(0),
              anchors.absolute(256)
          )
      ore.size = 25
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //fluorite vein
    event.addOre((ore) => {
      ore.id = 'kubejs:fluorite_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone','mekanism:fluorite_ore')
      ore.addTarget('minecraft:deepslate','mekanism:deepslate_fluorite_ore')
      ore.count([10,15])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(0),
              anchors.absolute(5)
          )
      ore.size = 25
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //osmium ore
    event.addOre((ore) => {
      ore.id = 'kubejs:osmium_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('thermal:niter_ore','mekanism:osmium_ore')
      ore.addTarget('thermal:deepslate_niter_ore','mekanism:deepslate_osmium_ore')
      ore.addTarget('mekanism:fluorite_ore','mekanism:osmium_ore')
      ore.addTarget('mekanism:deepslate_fluorite_ore', 'mekanism:deepslate_osmium_ore')
      ore.count(200)
          .squared()
          .uniformHeight(
              anchors.aboveBottom(0),
              anchors.absolute(256)
          )
      ore.size = 10
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //bauxite vein
    event.addOre((ore) => {
      ore.id = 'kubejs:bauxite_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone','immersiveengineering:ore_aluminum')
      ore.addTarget('minecraft:deepslate','immersiveengineering:deepslate_ore_aluminum')
      ore.count([5,8])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(32),
              anchors.absolute(32)
          )
      ore.size = 20
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //lead vein
    event.addOre((ore) => {
      ore.id = 'kubejs:lead_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone','thermal:lead_ore')
      ore.addTarget('minecraft:deepslate','thermal:deepslate_lead_ore')
      ore.count([6,10])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(32),
              anchors.absolute(64)
          )
      ore.size = 20
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //chromium vein
    event.addOre((ore) => {
      ore.id = 'kubejs:chromium_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('immersiveengineering:ore_aluminum','valine_s1ex:chromium_ore')
      ore.addTarget('immersiveengineering:deepslate_ore_aluminum','valine_s1ex:deepslate_chromium_ore')
      ore.addTarget('thermal:lead_ore','valine_s1ex:chromium_ore')
      ore.addTarget('thermal:deepslate_lead_ore', 'valine_s1ex:deepslate_chromium_ore')
      ore.count(200)
          .squared()
          .uniformHeight(
              anchors.aboveBottom(32),
              anchors.absolute(8)
          )
      ore.size = 10
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //tungstain vain
    event.addOre((ore) => {
      ore.id = 'kubejs:tungstain_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone','valine_s1ex:tungsten_ore')
      ore.addTarget('minecraft:deepslate','valine_s1ex:deepslate_tungsten_ore')
      ore.count([6,10])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(32),
              anchors.absolute(0)
          )
      ore.size = 20
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //platinum vein
    event.addOre((ore) => {
      ore.id = 'kubejs:platinum_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('minecraft:stone','valine_s1ex:platinum_ore')
      ore.addTarget('minecraft:deepslate','valine_s1ex:deepslate_platinum_ore')
      ore.count([6,10])
          .squared()
          .uniformHeight(
              anchors.aboveBottom(32),
              anchors.absolute(0)
          )
      ore.size = 20
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
    //iridium vein
    event.addOre((ore) => {
      ore.id = 'kubejs:iridium_vein'
      ore.biomes = {not: ["^nether", "^the_end"]}
      ore.addTarget('valine_s1ex:tungsten_ore','valine_s1ex:iridium_ore')
      ore.addTarget('valine_s1ex:deepslate_tungsten_ore','valine_s1ex:deepslate_iridium_ore')
      ore.addTarget('valine_s1ex:platinum_ore','valine_s1ex:iridium_ore')
      ore.addTarget('valine_s1ex:deepslate_platinum_ore', 'valine_s1ex:deepslate_iridium_ore')
      ore.count(200)
          .squared()
          .uniformHeight(
              anchors.aboveBottom(32),
              anchors.absolute(8)
          )
      ore.size = 10
      ore.noSurface = 0
      ore.worldgenLayer = "underground_ores"
      ore.chance = 0
    })
  })