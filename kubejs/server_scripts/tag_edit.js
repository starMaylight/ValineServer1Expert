onEvent('block.tags', event => {
    event.remove('minecraft:needs_stone_tool', 'mekanism:osmium_ore')
    event.add('forge:needs_netherite_tool', 'mekanism:osmium_ore')
    event.add('forge:mineable/paxel','valine_s1ex:eternal_block')
    event.add('forge:ores/eternal','valine_s1ex:eternal_block')
    
})
onEvent('item.tags', event => {
    event.add('forge:ingots/chromium', 'valine_s1ex:chrome_ingot')
    event.add('forge:ingots/chrome', 'valine_s1ex:chrome_ingot')
    event.add('forge:ingots/chrome', 'chemlib:chromium_ingot')
    event.add('forge:dusts/chrome', 'chemlib:chromium_dust')
    event.add('forge:nuggets/chrome', 'chemlib:chromium_nugget')
    event.add('forge:plates/chrome', 'chemlib:chromium_plate')
    event.add('valine_s1ex:graphite_electrode','immersiveengineering:graphite_electrode')
})
onEvent('fluid.tags', event => {
    event.add('valine_s1ex:unknown_darkmatter', 'valine_s1ex:unknown_darkmatter')
    event.add('valine_s1ex:fermented_biodiesel','valine_s1ex:fermented_biodiesel')
    event.add('valine_s1ex:molten_tungsten_carbite', 'valine_s1ex:molten_tungsten_carbite')
    
})
