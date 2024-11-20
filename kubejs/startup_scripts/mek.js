
onEvent('mekanism.infuse_type.registry', event => {
    event.create("valine_s1ex:chrome").color(0xe5abbe)
})
onEvent('mekanism.gas.registry', event => {
    event.create("valine_s1ex:lumium").color(0xfef263)
    event.create("valine_s1ex:sunnarium").color(0xfcc800).radioactivity(50.0)
})