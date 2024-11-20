onEvent('recipes', (event) => {
  console.log('excivator');

  //event.remove({type: 'immersiveengineering:mineral_mix'})
  let mineralVeins = [
    'ancient_debris',
    'auricupride',
    'beryl',
    'bituminous_coal',
    'cassiterite',
    'chalcopyrite',
    'cinnabar',
    'cooled_lava_tube',
    'cooperite',
    'galena',
    'igneous_rock',
    'laterite',
    'mephitic_quarzite',
    'nether_silt',
    'pentlandite',
    'silt',
    'uraninite',
    'wolframite',
  ];
  mineralVeins.forEach((vein) => {
    event.remove({ id: `immersiveengineering:mineral/${vein}` });
  });
  function excavate(mainore, subore, mainore2, back, orevein) {
    event
      .custom({
        type: 'immersiveengineering:mineral_mix',
        ores: [
          { chance: 0.45, output: { item: mainore } },
          { chance: 0.45, output: { item: subore } },
          { chance: 0.1, output: { item: mainore2 } },
        ],
        spoils: [
          { chance: 0.5, output: { item: 'minecraft:cobblestone' } },
          { chance: 0.3, output: { item: 'minecraft:gravel' } },
          { chance: 0.2, output: { item: 'minecraft:cobbled_deepslate' } },
        ],
        dimensions: ['minecraft:overworld'],
        weight: 40,
        fail_chance: 0.5,
        sample_background: back,
      })
      .id(`valine_s1ex:mineral/${orevein}`);
  }
  function netherexcavate(mainore, subore, mainore2, back, orevein) {
    event
      .custom({
        type: 'immersiveengineering:mineral_mix',
        ores: [
          { chance: 0.45, output: { item: mainore } },
          { chance: 0.45, output: { item: subore } },
          { chance: 0.1, output: { item: mainore2 } },
        ],
        spoils: [
          { chance: 0.5, output: { item: 'minecraft:netherrack' } },
          { chance: 0.3, output: { item: 'minecraft:soul_sand' } },
          { chance: 0.2, output: { item: 'minecraft:blackstone' } },
        ],
        dimensions: ['minecraft:the_nether'],
        weight: 20,
        fail_chance: 0.5,
        sample_background: back,
      })
      .id(`valine_s1ex:mineral/${orevein}`);
  }
  function endexcavate(mainore, subore, mainore2, back, orevein) {
    event
      .custom({
        type: 'immersiveengineering:mineral_mix',
        ores: [
          { chance: 0.45, output: { item: mainore } },
          { chance: 0.45, output: { item: subore } },
          { chance: 0.1, output: { item: mainore2 } },
        ],
        spoils: [
          { chance: 0.5, output: { item: 'minecraft:end_stone' } },
          { chance: 0.3, output: { item: 'minecraft:end_stone_bricks' } },
          {
            chance: 0.2,
            output: { item: 'extrautilitiesrebirth:ender_lilly_endstone' },
          },
        ],
        dimensions: ['minecraft:the_end'],
        weight: 20,
        fail_chance: 0.5,
        sample_background: back,
      })
      .id(`valine_s1ex:mineral/${orevein}`);
  }
  excavate(
    'minecraft:iron_ore',
    'minecraft:copper_ore',
    'minecraft:gold_ore',
    'minecraft:iron_ore',
    'iron'
  );
  excavate(
    'minecraft:coal_ore',
    'minecraft:diamond_ore',
    'minecraft:ancient_debris',
    'minecraft:coal_ore',
    'coal'
  );
  excavate(
    'minecraft:redstone_ore',
    'thermal:cinnabar_ore',
    'valine_s1ex:ilmenite_ore',
    'minecraft:redstone_ore',
    'redstone'
  );
  excavate(
    'mekanism:uranium_ore',
    'mysticalagriculture:inferium_ore',
    'minecraft:emerald_ore',
    'mekanism:uranium_ore',
    'uranium'
  );
  excavate(
    'minecraft:lapis_ore',
    'thermal:apatite_ore',
    'immersiveengineering:ore_silver',
    'thermal:apatite_ore',
    'lapis'
  );
  excavate(
    'thermal:nickel_ore',
    'thermal:sulfur_ore',
    'immersiveengineering:ore_uranium',
    'thermal:nickel_ore',
    'nickel'
  );
  excavate(
    'mekanism:fluorite_ore',
    'thermal:niter_ore',
    'mekanism:osmium_ore',
    'mekanism:fluorite_ore',
    'fluorite'
  );
  excavate(
    'valine_s1ex:platinum_ore',
    'valine_s1ex:tungsten_ore',
    'valine_s1ex:iridium_ore',
    'valine_s1ex:platinum_ore',
    'platinum'
  );
  excavate(
    'thermal:lead_ore',
    'immersiveengineering:ore_aluminum',
    'valine_s1ex:chromium_ore',
    'thermal:lead_ore',
    'lead'
  );
  excavate(
    'ae2:quartz_ore',
    'mysticalagriculture:prosperity_ore',
    'rftoolsbase:dimensionalshard_overworld',
    'ae2:quartz_ore',
    'certus'
  );
  excavate(
    'thermal:tin_ore',
    'immersiveengineering:ore_nickel',
    'mekanism:lead_ore',
    'thermal:tin_ore',
    'tin'
  );
  excavate(
    'create:zinc_ore',
    'mekanism:tin_ore',
    'thermal:silver_ore',
    'create:zinc_ore',
    'zinc'
  );
  netherexcavate(
    'mysticalagriculture:soulstone',
    'mysticalagriculture:soulium_ore',
    'minecraft:ancient_debris',
    'mysticalagriculture:soulium_ore',
    'soulstone'
  );
  netherexcavate(
    'minecraft:nether_quartz_ore',
    'minecraft:nether_gold_ore',
    'tconstruct:cobalt_ore',
    'minecraft:nether_quartz_ore',
    'quartz'
  );
  endexcavate(
    'draconicevolution:end_draconium_ore',
    'ae2:sky_stone_block',
    'rftoolsbase:dimensionalshard_end',
    'draconicevolution:end_draconium_ore',
    'draconic'
  );
});
