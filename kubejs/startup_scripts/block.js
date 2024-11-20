onEvent('block.registry', event => {
    event.create('valine_s1ex:sturdy_sheet_block')
          .material('metal')
          .hardness(5.0)
          .displayName('Sturdy Sheet Slock') // No longer required in 1.18.2+
          .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a pickaxe in 1.18.2+
          .tagBlock('minecraft:needs_iron_tool') // Make it require an iron or higher level tool on 1.18.2+
          .requiresTool(true) // Make it require a tool to drop ay loot
    event.create('valine_s1ex:ilmenite_ore')
          .material('stone')
          .hardness(5.0)
          .displayName('Ilmenite ore') // No longer required in 1.18.2+
          .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a pickaxe in 1.18.2+
          .tagBlock('forge:needs_netherite_tool') // Make it require an iron or higher level tool on 1.18.2+
          .tagBoth('forge:ores/titanium')
          .tagBoth('forge:ores')
          .tagBoth('balm:ores')
          .requiresTool(true)
      event.create('valine_s1ex:tungsten_ore')
          .material('stone')
          .hardness(5.0)
          .displayName('Tungsten ore') // No longer required in 1.18.2+
          .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a pickaxe in 1.18.2+
          .tagBlock('forge:needs_netherite_tool') // Make it require an iron or higher level tool on 1.18.2+
          .tagBoth('forge:ores/tungsten')
          .tagBoth('forge:ores')
          .tagBoth('balm:ores')
          .requiresTool(true)
      event.create('valine_s1ex:deepslate_tungsten_ore')
          .material('stone')
          .hardness(5.0)
          .displayName('Deepslate Tungsten ore') // No longer required in 1.18.2+
          .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a pickaxe in 1.18.2+
          .tagBlock('forge:needs_netherite_tool') // Make it require an iron or higher level tool on 1.18.2+
          .tagBoth('forge:ores/tungsten')
          .tagBoth('forge:ores')
          .tagBoth('balm:ores')
          .requiresTool(true)
      event.create('valine_s1ex:iridium_ore')
          .material('stone')
          .hardness(5.0)
          .displayName('Iridium ore') // No longer required in 1.18.2+
          .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a pickaxe in 1.18.2+
          .tagBlock('forge:needs_netherite_tool') // Make it require an iron or higher level tool on 1.18.2+
          .tagBoth('forge:ores/iridium')
          .tagBoth('forge:ores')
          .tagBoth('balm:ores')
          .requiresTool(true)
      event.create('valine_s1ex:deepslate_iridium_ore')
          .material('stone')
          .hardness(5.0)
          .displayName('Deepslate Iridium ore') // No longer required in 1.18.2+
          .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a pickaxe in 1.18.2+
          .tagBlock('forge:needs_netherite_tool') // Make it require an iron or higher level tool on 1.18.2+
          .tagBoth('forge:ores/iridium')
          .tagBoth('forge:ores')
          .tagBoth('balm:ores')
          .requiresTool(true)
      event.create('valine_s1ex:chromium_ore')
          .material('stone')
          .hardness(5.0)
          .displayName('Chromium ore') // No longer required in 1.18.2+
          .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a pickaxe in 1.18.2+
          .tagBlock('forge:needs_netherite_tool') // Make it require an iron or higher level tool on 1.18.2+
          .tagBoth('forge:ores/chromium')
          .tagBoth('forge:ores/chrome')
          .tagBoth('forge:ores')
          .tagBoth('balm:ores')
          .requiresTool(true)
      event.create('valine_s1ex:deepslate_chromium_ore')
          .material('stone')
          .hardness(5.0)
          .displayName('Deepslate Chromium ore') // No longer required in 1.18.2+
          .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a pickaxe in 1.18.2+
          .tagBlock('forge:needs_netherite_tool') // Make it require an iron or higher level tool on 1.18.2+
          .tagBoth('forge:ores/chromium')
          .tagBoth('forge:ores/chrome')
          .tagBoth('forge:ores')
          .tagBoth('balm:ores')
          .requiresTool(true)
      event.create('valine_s1ex:platinum_ore')
          .material('stone')
          .hardness(5.0)
          .displayName('Platinum ore') // No longer required in 1.18.2+
          .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a pickaxe in 1.18.2+
          .tagBlock('forge:needs_netherite_tool') // Make it require an iron or higher level tool on 1.18.2+
          .tagBoth('forge:ores/platinum')
          .tagBoth('forge:ores')
          .tagBoth('balm:ores')
          .requiresTool(true)
      event.create('valine_s1ex:deepslate_platinum_ore')
          .material('stone')
          .hardness(5.0)
          .displayName('Deepslate Platinum ore') // No longer required in 1.18.2+
          .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a pickaxe in 1.18.2+
          .tagBlock('forge:needs_netherite_tool') // Make it require an iron or higher level tool on 1.18.2+
          .tagBoth('forge:ores/platinum')
          .tagBoth('forge:ores')
          .tagBoth('balm:ores')
          .requiresTool(true)
    event.create('valine_s1ex:degenerate_symbols')
          .material('metal')
          .hardness(5.0)
          .displayName('Degenerate Symbols') // No longer required in 1.18.2+
          .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a pickaxe in 1.18.2+
          .tagBlock('minecraft:needs_iron_tool') // Make it require an iron or higher level tool on 1.18.2+
          .requiresTool(true)
    event.create('valine_s1ex:empowered_lapis')
          .material('metal')
          .hardness(5.0)
          .displayName('Empowered Lapis') // No longer required in 1.18.2+
          .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a pickaxe in 1.18.2+
          .tagBlock('minecraft:needs_iron_tool') // Make it require an iron or higher level tool on 1.18.2+
          .requiresTool(true)
          event.create('valine_s1ex:nichrome_coil_block')
          .material('metal')
          .hardness(5.0)
          .displayName('Nichrome Coil Blok') // No longer required in 1.18.2+
          .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a pickaxe in 1.18.2+
          .tagBlock('minecraft:needs_iron_tool') // Make it require an iron or higher level tool on 1.18.2+
          .requiresTool(true)
          .texture('up','valine_s1ex:block/nichrome_coil_top')
          .texture('down','valine_s1ex:block/nichrome_coil_top')
    event.create('valine_s1ex:eternal_block')
    event.create('valine_s1ex:industrial_tnt')
          .material('metal')
          .hardness(5.0)
          .displayName('Industrial TNT')
          .texture('up','valine_s1ex:block/industrial_tnt_top')
          .texture('down','valine_s1ex:block/industrial_tnt_down')
    event.create('valine_s1ex:polonium_pellet_block')

})