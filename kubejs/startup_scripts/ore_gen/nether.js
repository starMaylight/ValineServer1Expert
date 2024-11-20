onEvent('worldgen.remove', event => {
    event.removeOres(ores => {
        ores.blocks = [
            'minecraft:nether_gold_ore',
            'minecraft:nether_quartz_ore',
            'minecraft:ancient_debris'
        ]
    })

})
onEvent('worldgen.add', event => {

    console.log('nether')

    const netherSurfaceChance = 0.75
    //gold
    const { anchors } = event
    event.addOre((ore) => {
        ore.id = 'kubejs:nether_gold_vein'

        ore.addTarget('minecraft:netherrack', 'minecraft:nether_gold_ore')
        ore.count([5, 10])
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256)
            )
        ore.size = 20
        ore.noSurface = netherSurfaceChance
        ore.worldgenLayer = "underground_ores"
        ore.chance = 0
        ore.biomes = "^nether"
    })
    //quarts vein
    event.addOre((ore) => {
        ore.id = 'kubejs:nether_quartz_vein'

        ore.addTarget('minecraft:netherrack', 'minecraft:nether_quartz_ore')
        ore.count([5, 20])
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256)
            )
        ore.size = 20
        ore.noSurface = netherSurfaceChance
        ore.worldgenLayer = "underground_ores"
        ore.chance = 0
        ore.biomes = "^nether"
    })
    //debris
    event.addOre((ore) => {
        ore.id = 'kubejs:netherite_vein'

        ore.addTarget('minecraft:netherrack', 'minecraft:ancient_debris')
        ore.count([1, 3])
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(16)
            )
        ore.size = 10
        ore.noSurface = netherSurfaceChance
        ore.worldgenLayer = "underground_ores"
        ore.chance = 0
        ore.biomes = "^nether"
    })
    //cobalt
    event.addOre((ore) => {
        ore.id = 'kubejs:nether_cobalt_vein'

        ore.addTarget('minecraft:netherrack', 'tconstruct:cobalt_ore')
        ore.count([1, 10])
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256)
            )
        ore.size = 10
        ore.noSurface = netherSurfaceChance
        ore.worldgenLayer = "underground_ores"
        ore.chance = 0
        ore.biomes = "^nether"
    })
    //soulstone
    event.addOre((ore) => {
        ore.id = 'kubejs:soulstone'

        ore.addTarget('minecraft:netherrack', 'mysticalagriculture:soulstone')
        ore.count([10, 20])
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256)
            )
        ore.size = 30
        ore.noSurface = netherSurfaceChance
        ore.worldgenLayer = "underground_ores"
        ore.chance = 0
        ore.biomes = "^nether"
    })
    //soulium vein
    event.addOre((ore) => {
        ore.id = 'kubejs:soulium_veim'

        ore.addTarget('mysticalagriculture:soulstone','mysticalagriculture:soulium_ore')
        ore.count([200])
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256)
            )
        ore.size = 15
        ore.noSurface = netherSurfaceChance
        ore.worldgenLayer = "underground_ores"
        ore.chance = 0
        ore.biomes = "^nether"
    })
})