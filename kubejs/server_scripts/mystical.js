onEvent("recipes", (event) => {
  let removebyname = [
    'mysticalagriculture:inferium_farmland',
    'mysticalagriculture:inferium_growth_accelerator',
    'mysticalagriculture:infusion_crystal',
    'mysticalagriculture:supremium_growth_accelerator',
    'mysticalagriculture:imperium_growth_accelerator',
    'mysticalagriculture:tertium_growth_accelerator',
    'mysticalagriculture:prudentium_growth_accelerator',
    'mysticalagriculture:supremium_farmland',
    'mysticalagriculture:imperium_farmland',
    'mysticalagriculture:tertium_farmland',
    'mysticalagriculture:prudentium_farmland',
    'mysticalagradditions:insanium_farmland',
    'mysticalagriculture:master_infusion_crystal',
    'mysticalagradditions:nether_star_crux',
    'mysticalagradditions:neutronium_crux',
    'mysticalagradditions:dragon_egg_crux',
    'mysticalagradditions:awakened_draconium_crux',
    'mysticalagradditions:nitro_crystal_crux',
    'mysticalagradditions:gaia_spirit_crux'
  ]
  removebyname.forEach((name) => {
    event.remove({ output: name })
  })
  event.remove({ id: 'mysticalagriculture:inferium_seeds' })
  let removebyids = [
    'awakened_draconium','uraninite','iridium','enderium','manyullyn',
    'queens_slime','hepatizon','terrasteel','draconium','platinum','wither_skeleton','emerald',
    'netherite','diamond','fluix','magma_cube','compressed_iron','refined_obsidian','refined_glowstone',
    'fluorite','osmium','elementium','rose_gold','enderman','cobalt','tungsten','titanium','uranium',
    'ruby','sapphire','signalum','lumium','invar','electrum','constantan','nickel','steel','blaze','experience','lapis_lazuli','gold',
    'coal','amethyst','slime','silicon','sulfur','aluminum','apatite','menril',
    'certus_quartz','quartz_enriched_iron','manasteel','pig_iron','slimesteel','amethyst_bronze','basalz','blitz','blizz',
    'lead','tin','bronze','zinc','brass','silver','prismarine','obsidian','redstone','glowstone','nether_quartz','copper','iron'
  ]
  removebyids.forEach((name) => {
    event.remove({ id: `mysticalagriculture:seed/infusion/${name}` })
  })
  event.remove({ output: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:inferium_essence"}') })
  event.shapeless('mysticalagriculture:inferium_farmland', ['minecraft:farmland', 'mysticalagriculture:inferium_growth_accelerator']).id('valine_s1ex:not_that_hard')
  event.shapeless('mysticalagriculture:prudentium_farmland', ['minecraft:farmland', 'mysticalagriculture:prudentium_growth_accelerator'])
  event.shapeless('mysticalagriculture:tertium_farmland', ['minecraft:farmland', 'mysticalagriculture:tertium_growth_accelerator'])
  event.shapeless('mysticalagriculture:imperium_farmland', ['minecraft:farmland', 'mysticalagriculture:imperium_growth_accelerator'])
  event.shapeless('mysticalagriculture:supremium_farmland', ['minecraft:farmland', 'mysticalagriculture:supremium_growth_accelerator'])
  event.shapeless('mysticalagradditions:insanium_farmland', ['minecraft:farmland', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:insanium_essence"}')])
  event.shaped('mysticalagriculture:inferium_growth_accelerator', [
    'ABA',
    'BDB',
    'ABA'
  ], {
    D: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:inferium_essence"}'),
    A: 'thermal:phytosoil',
    B: 'valine_s1ex:mysterious_mixture'
  }).id('valine_s1ex:you_cant_escape')
  event.shaped('mysticalagriculture:prudentium_growth_accelerator', [
    'ABA',
    'BDB',
    'ABA'
  ], {
    D: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:prudentium_essence"}'),
    A: 'thermal:phytosoil',
    B: 'valine_s1ex:mysterious_mixture'
  })
  event.shaped('mysticalagriculture:tertium_growth_accelerator', [
    'ABA',
    'BDB',
    'ABA'
  ], {
    D:Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tertium_essence"}'),
    A: 'thermal:phytosoil',
    B: 'valine_s1ex:mysterious_mixture'
  })
  event.shaped('mysticalagriculture:imperium_growth_accelerator', [
    'ABA',
    'BDB',
    'ABA'
  ], {
    D: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:imperium_essence"}'),
    A: 'thermal:phytosoil',
    B: 'valine_s1ex:mysterious_mixture'
  })
  event.shaped('mysticalagriculture:supremium_growth_accelerator', [
    'ABA',
    'BDB',
    'ABA'
  ], {
    D: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:supremium_essence"}'),
    A: 'thermal:phytosoil',
    B: 'valine_s1ex:mysterious_mixture'
  })
  event.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 1000000,
    "input": {
      "item": "cyclic:soulstone"
    },
    "ingredients": [
      {
        "item": "mysticalagriculture:inferium_growth_accelerator"
      },
      {
        "item": "mysticalagriculture:inferium_growth_accelerator"
      },
      {
        "item": "minecraft:emerald"
      },
      {
        "item": "thermal:sapphire"
      },
      {
        "item": "mysticalagriculture:inferium_growth_accelerator"
      },
      {
        "item": "mysticalagriculture:inferium_growth_accelerator"
      },
      {
        "item": "minecraft:amethyst_shard"
      },
      {
        "item": "thermal:ruby"
      }
    ],
    "result": {
      "item": "mysticalagriculture:infusion_crystal"
    }
  }).id('valine_s1ex:view_to_if_laser_drill')
  let AIOM = 'valine_s1ex:valine_mys';
  event.recipes.createSequencedAssembly([Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:inferium_essence"}')], 'mysticalagriculture:inferium_essence', [
    event.recipes.createDeploying(AIOM, [AIOM, 'mysticalagriculture:inferium_essence']),
    event.recipes.createDeploying(AIOM, [AIOM, 'mysticalagriculture:inferium_essence']),
    event.recipes.createDeploying(AIOM, [AIOM, 'mysticalagriculture:inferium_essence']),
    event.recipes.createDeploying(AIOM, [AIOM, 'mysticalagriculture:inferium_essence']),
    event.recipes.createDeploying(AIOM, [AIOM, 'mysticalagriculture:inferium_essence']),
    event.recipes.createDeploying(AIOM, [AIOM, 'mysticalagriculture:inferium_essence']),
    event.recipes.createDeploying(AIOM, [AIOM, 'mysticalagriculture:inferium_essence']),
    event.recipes.createDeploying(AIOM, [AIOM, 'mysticalagriculture:inferium_essence']),
    event.recipes.createDeploying(AIOM, [AIOM, 'mysticalagriculture:inferium_essence']),
    event.recipes.createDeploying(AIOM, [AIOM, 'mysticalagriculture:inferium_essence'])
  ]).transitionalItem(AIOM).loops(1000)
  function infuser(input, essence, comb, output) {
    event.custom({
      "type": "mysticalagriculture:infusion",
      "input": {
        "item": input
      },
      "ingredients": [
        {
          "item": essence
        },
        {
          "type": "forge:nbt",
          "item": "productivebees:configurable_honeycomb",
          "nbt": {
            "EntityTag": {
              "type": `productivebees:${comb}`
            }
          }
        },
        {
          "item": essence
        },
        {
          "type": "forge:nbt",
          "item": "productivebees:configurable_honeycomb",
          "nbt": {
            "EntityTag": {
              "type": `productivebees:${comb}`
            }
          }
        },
        {
          "item": essence
        },
        {
          "type": "forge:nbt",
          "item": "productivebees:configurable_honeycomb",
          "nbt": {
            "EntityTag": {
              "type": `productivebees:${comb}`
            }
          }
        },
        {
          "item": essence
        },
        {
          "type": "forge:nbt",
          "item": "productivebees:configurable_honeycomb",
          "nbt": {
            "EntityTag": {
              "type": `productivebees:${comb}`
            }
          }
        }
      ],
      "result": {
        "item": output
      }
    })
  }
  //infuser()
  //t1
  infuser('mysticalagriculture:prosperity_seed_base', 'mysticalagriculture:inferium_essence', 'inferium', 'mysticalagriculture:inferium_seeds')
  //t2
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:prudentium_essence','coal','mysticalagriculture:coal_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:prudentium_essence','amethyst','mysticalagriculture:amethyst_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:prudentium_essence','slimy','mysticalagriculture:slime_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:prudentium_essence','silicon','mysticalagriculture:silicon_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:prudentium_essence','sulfur','mysticalagriculture:sulfur_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:prudentium_essence','aluminum','mysticalagriculture:aluminum_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:prudentium_essence','apatite','mysticalagriculture:apatite_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:prudentium_essence','menril','mysticalagriculture:menril_seeds')
  //t3
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','spacial','mysticalagriculture:certus_quartz_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','quartz_enriched_iron','mysticalagriculture:quartz_enriched_iron_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','manasteel','mysticalagriculture:manasteel_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','pig_iron','mysticalagriculture:pig_iron_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','slimesteel','mysticalagriculture:slimesteel_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','amethyst_bronze','mysticalagriculture:amethyst_bronze_seeds')
  infuser('mysticalagriculture:soulium_seed_base','mysticalagriculture:tertium_essence','basalz','mysticalagriculture:basalz_seeds')
  infuser('mysticalagriculture:soulium_seed_base','mysticalagriculture:tertium_essence','blitz','mysticalagriculture:blitz_seeds')
  infuser('mysticalagriculture:soulium_seed_base','mysticalagriculture:tertium_essence','blizz','mysticalagriculture:blizz_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','lead','mysticalagriculture:lead_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','tin','mysticalagriculture:tin_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','bronze','mysticalagriculture:bronze_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','zinc','mysticalagriculture:zinc_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','brass','mysticalagriculture:brass_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','silver','mysticalagriculture:silver_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','prismarine','mysticalagriculture:prismarine_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','obsidian','mysticalagriculture:obsidian_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','redstone','mysticalagriculture:redstone_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','glowing','mysticalagriculture:glowstone_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','crystalline','mysticalagriculture:nether_quartz_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','copper','mysticalagriculture:copper_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:tertium_essence','iron','mysticalagriculture:iron_seeds')
  //t4
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','fluix','mysticalagriculture:fluix_seeds')
  infuser('mysticalagriculture:soulium_seed_base','mysticalagriculture:imperium_essence','magmatic','mysticalagriculture:magma_cube_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','compressed_iron','mysticalagriculture:compressed_iron_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','refined_obsidian','mysticalagriculture:refined_obsidian_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','refined_glowstone','mysticalagriculture:refined_glowstone_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','fluorite','mysticalagriculture:fluorite_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','osmium','mysticalagriculture:osmium_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','elementium','mysticalagriculture:elementium_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','rose_gold','mysticalagriculture:rose_gold_seeds')
  infuser('mysticalagriculture:soulium_seed_base','mysticalagriculture:imperium_essence','ender','mysticalagriculture:enderman_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','cobalt','mysticalagriculture:cobalt_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','tungsten','mysticalagriculture:tungsten_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','titanium','mysticalagriculture:titanium_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','radioactive','mysticalagriculture:uranium_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','ruby','mysticalagriculture:ruby_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','sapphire','mysticalagriculture:sapphire_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','signalum','mysticalagriculture:signalum_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','lumium','mysticalagriculture:lumium_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','invar','mysticalagriculture:invar_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','electrum','mysticalagriculture:electrum_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','constantan','mysticalagriculture:constantan_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','nickel','mysticalagriculture:nickel_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','steel','mysticalagriculture:steel_seeds')
  infuser('mysticalagriculture:soulium_seed_base','mysticalagriculture:imperium_essence','blazing','mysticalagriculture:blaze_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','experience','mysticalagriculture:experience_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','lapis','mysticalagriculture:lapis_lazuli_seeds')
  infuser('mysticalagriculture:prosperity_seed_base','mysticalagriculture:imperium_essence','gold','mysticalagriculture:gold_seeds')
  //t5
  infuser('mysticalagriculture:prosperity_seed_base', 'mysticalagriculture:supremium_essence', 'uraninite', 'mysticalagriculture:uraninite_seeds')
  infuser('mysticalagriculture:prosperity_seed_base', 'mysticalagriculture:supremium_essence', 'iridium', 'mysticalagriculture:iridium_seeds')
  infuser('mysticalagriculture:prosperity_seed_base', 'mysticalagriculture:supremium_essence', 'enderium', 'mysticalagriculture:enderium_seeds')
  infuser('mysticalagriculture:prosperity_seed_base', 'mysticalagriculture:supremium_essence', 'manyullyn', 'mysticalagriculture:manyullyn_seeds')
  infuser('mysticalagriculture:prosperity_seed_base', 'mysticalagriculture:supremium_essence', 'queens_slime', 'mysticalagriculture:queens_slime_seeds')
  infuser('mysticalagriculture:prosperity_seed_base', 'mysticalagriculture:supremium_essence', 'hepatizon', 'mysticalagriculture:hepatizon_seeds')
  infuser('mysticalagriculture:prosperity_seed_base', 'mysticalagriculture:supremium_essence', 'terrasteel', 'mysticalagriculture:terrasteel_seeds')
  infuser('mysticalagriculture:prosperity_seed_base', 'mysticalagriculture:supremium_essence', 'draconium','mysticalagriculture:draconium_seeds')
  infuser('mysticalagriculture:prosperity_seed_base', 'mysticalagriculture:supremium_essence', 'platinum','mysticalagriculture:platinum_seeds')
  infuser('mysticalagriculture:soulium_seed_base', 'mysticalagriculture:supremium_essence', 'withered','mysticalagriculture:wither_skeleton_seeds')
  infuser('mysticalagriculture:prosperity_seed_base', 'mysticalagriculture:supremium_essence', 'netherite','mysticalagriculture:netherite_seeds')
  infuser('mysticalagriculture:prosperity_seed_base', 'mysticalagriculture:supremium_essence', 'emerald','mysticalagriculture:emerald_seeds')
  infuser('mysticalagriculture:prosperity_seed_base', 'mysticalagriculture:supremium_essence', 'diamond','mysticalagriculture:diamond_seeds')
  //t6
  infuser('mysticalagriculture:prosperity_seed_base', 'mysticalagradditions:insanium_essence', 'awakened', 'mysticalagriculture:awakened_draconium_seeds')

  let AIOMP = 'valine_s1ex:valine_myspur';
  event.recipes.createSequencedAssembly([Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:prudentium_essence"}')], 'mysticalagriculture:prudentium_essence', [
    event.recipes.createDeploying(AIOMP, [AIOMP, 'mysticalagriculture:prudentium_essence']),
    event.recipes.createDeploying(AIOMP, [AIOMP, 'mysticalagriculture:prudentium_essence']),
    event.recipes.createDeploying(AIOMP, [AIOMP, 'mysticalagriculture:prudentium_essence']),
    event.recipes.createDeploying(AIOMP, [AIOMP, 'mysticalagriculture:prudentium_essence']),
    event.recipes.createDeploying(AIOMP, [AIOMP, 'mysticalagriculture:prudentium_essence']),
    event.recipes.createDeploying(AIOMP, [AIOMP, 'mysticalagriculture:prudentium_essence']),
    event.recipes.createDeploying(AIOMP, [AIOMP, 'mysticalagriculture:prudentium_essence']),
    event.recipes.createDeploying(AIOMP, [AIOMP, 'mysticalagriculture:prudentium_essence']),
    event.recipes.createDeploying(AIOMP, [AIOMP, 'mysticalagriculture:prudentium_essence']),
    event.recipes.createDeploying(AIOMP, [AIOMP, 'mysticalagriculture:prudentium_essence'])
  ]).transitionalItem(AIOMP).loops(1000)
  let AIOMT = 'valine_s1ex:valine_myster';
  event.recipes.createSequencedAssembly([Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tertium_essence"}')], 'mysticalagriculture:tertium_essence', [
    event.recipes.createDeploying(AIOMT, [AIOMT, 'mysticalagriculture:tertium_essence']),
    event.recipes.createDeploying(AIOMT, [AIOMT, 'mysticalagriculture:tertium_essence']),
    event.recipes.createDeploying(AIOMT, [AIOMT, 'mysticalagriculture:tertium_essence']),
    event.recipes.createDeploying(AIOMT, [AIOMT, 'mysticalagriculture:tertium_essence']),
    event.recipes.createDeploying(AIOMT, [AIOMT, 'mysticalagriculture:tertium_essence']),
    event.recipes.createDeploying(AIOMT, [AIOMT, 'mysticalagriculture:tertium_essence']),
    event.recipes.createDeploying(AIOMT, [AIOMT, 'mysticalagriculture:tertium_essence']),
    event.recipes.createDeploying(AIOMT, [AIOMT, 'mysticalagriculture:tertium_essence']),
    event.recipes.createDeploying(AIOMT, [AIOMT, 'mysticalagriculture:tertium_essence']),
    event.recipes.createDeploying(AIOMT, [AIOMT, 'mysticalagriculture:tertium_essence'])
  ]).transitionalItem(AIOMT).loops(1000)
  let AIOMI = 'valine_s1ex:valine_mysimp';
  event.recipes.createSequencedAssembly([Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:imperium_essence"}')], 'mysticalagriculture:imperium_essence', [
    event.recipes.createDeploying(AIOMI, [AIOMI, 'mysticalagriculture:imperium_essence']),
    event.recipes.createDeploying(AIOMI, [AIOMI, 'mysticalagriculture:imperium_essence']),
    event.recipes.createDeploying(AIOMI, [AIOMI, 'mysticalagriculture:imperium_essence']),
    event.recipes.createDeploying(AIOMI, [AIOMI, 'mysticalagriculture:imperium_essence']),
    event.recipes.createDeploying(AIOMI, [AIOMI, 'mysticalagriculture:imperium_essence']),
    event.recipes.createDeploying(AIOMI, [AIOMI, 'mysticalagriculture:imperium_essence']),
    event.recipes.createDeploying(AIOMI, [AIOMI, 'mysticalagriculture:imperium_essence']),
    event.recipes.createDeploying(AIOMI, [AIOMI, 'mysticalagriculture:imperium_essence']),
    event.recipes.createDeploying(AIOMI, [AIOMI, 'mysticalagriculture:imperium_essence']),
    event.recipes.createDeploying(AIOMI, [AIOMI, 'mysticalagriculture:imperium_essence'])
  ]).transitionalItem(AIOMI).loops(1000)
  let AIOMS = 'valine_s1ex:valine_myssup';
  event.recipes.createSequencedAssembly([Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:supremium_essence"}')], 'mysticalagriculture:supremium_essence', [
    event.recipes.createDeploying(AIOMS, [AIOMS,'mysticalagriculture:supremium_essence']),
    event.recipes.createDeploying(AIOMS, [AIOMS,'mysticalagriculture:supremium_essence']),
    event.recipes.createDeploying(AIOMS, [AIOMS,'mysticalagriculture:supremium_essence']),
    event.recipes.createDeploying(AIOMS, [AIOMS,'mysticalagriculture:supremium_essence']),
    event.recipes.createDeploying(AIOMS, [AIOMS,'mysticalagriculture:supremium_essence']),
    event.recipes.createDeploying(AIOMS, [AIOMS,'mysticalagriculture:supremium_essence']),
    event.recipes.createDeploying(AIOMS, [AIOMS,'mysticalagriculture:supremium_essence']),
    event.recipes.createDeploying(AIOMS, [AIOMS,'mysticalagriculture:supremium_essence']),
    event.recipes.createDeploying(AIOMS, [AIOMS,'mysticalagriculture:supremium_essence']),
    event.recipes.createDeploying(AIOMS, [AIOMS,'mysticalagriculture:supremium_essence'])
  ]).transitionalItem(AIOMS).loops(1000)
  let AIOMIS = 'valine_s1ex:valine_mysins';
  event.recipes.createSequencedAssembly([Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:insanium_essence"}')], 'mysticalagradditions:insanium_essence', [
    event.recipes.createDeploying(AIOMIS, [AIOMIS,'mysticalagradditions:insanium_essence']),
    event.recipes.createDeploying(AIOMIS, [AIOMIS,'mysticalagradditions:insanium_essence']),
    event.recipes.createDeploying(AIOMIS, [AIOMIS,'mysticalagradditions:insanium_essence']),
    event.recipes.createDeploying(AIOMIS, [AIOMIS,'mysticalagradditions:insanium_essence']),
    event.recipes.createDeploying(AIOMIS, [AIOMIS,'mysticalagradditions:insanium_essence']),
    event.recipes.createDeploying(AIOMIS, [AIOMIS,'mysticalagradditions:insanium_essence']),
    event.recipes.createDeploying(AIOMIS, [AIOMIS,'mysticalagradditions:insanium_essence']),
    event.recipes.createDeploying(AIOMIS, [AIOMIS,'mysticalagradditions:insanium_essence']),
    event.recipes.createDeploying(AIOMIS, [AIOMIS,'mysticalagradditions:insanium_essence']),
    event.recipes.createDeploying(AIOMIS, [AIOMIS,'mysticalagradditions:insanium_essence'])
  ]).transitionalItem(AIOMIS).loops(1000)
event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 9999999999,
  "input": {
    "item": "mysticalagriculture:infusion_crystal"
  },
  "ingredients": [
    {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:insanium_essence\"}"
    },
    {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:tertium_essence\"}"
    },
    {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:prudentium_essence\"}"
    },
    {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:inferium_essence\"}"
    },
    {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:imperium_essence\"}"
    },
    {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:supremium_essence\"}"
    }
  ],
  "result": {
    "item": "mysticalagriculture:master_infusion_crystal"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_ender_crafter",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:ender_star"
    },
    "B": {
      "item": "minecraft:nether_star"
    },
    "C": {
      "item": "mysticalagradditions:withering_soul"
    },
    "D": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:insanium_essence\"}"
    }
  },
  "result": {
    "item": "mysticalagradditions:nether_star_crux"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_ender_crafter",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:black_iron_ingot"
    },
    "B": {
      "item": "avaritia:neutronium_ingot"
    },
    "C": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:insanium_essence\"}"
    }
  },
  "result": {
    "item": "mysticalagradditions:neutronium_crux"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_ender_crafter",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "tconstruct:dragon_scale"
    },
    "B": {
      "item": "mysticalagradditions:dragon_scale"
    },
    "C": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:insanium_essence\"}"
    }
  },
  "result": {
    "item": "mysticalagradditions:dragon_egg_crux"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_ender_crafter",
  "pattern": [
    "ABA",
    "CDC",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "draconicevolution:awakened_core"
    },
    "B": {
      "item": "draconicevolution:dragon_heart"
    },
    "C": {
      "item": "draconicevolution:awakened_draconium_block"
    },
    "D": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:insanium_essence\"}"
    }
  },
  "result": {
    "item": 'mysticalagradditions:awakened_draconium_crux'
  }
})
event.custom({
  "type": "extendedcrafting:shaped_ender_crafter",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "powah:nitro_crystal_block"
    },
    "B": {
      "item": "powah:capacitor_nitro"
    },
    "C": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:insanium_essence\"}"
    }
  },
  "result": {
    "item": 'mysticalagradditions:nitro_crystal_crux'
  }
})
event.custom({
  "type": "extendedcrafting:shaped_ender_crafter",
  "pattern": [
    "ABA",
    "CDC",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "botania:spawner_mover"
    },
    "B": {
      "item": "botania:terrasteel_block"
    },
    "C": {
      "item": "botania:gaia_ingot"
    },
    "D": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:insanium_essence\"}"
    }
  },
  "result": {
    "item": 'mysticalagradditions:gaia_spirit_crux'
  }
})
})