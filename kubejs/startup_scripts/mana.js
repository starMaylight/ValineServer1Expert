function modifyMechanicalManaPoolCatalysts() {
    const $BlockEntityMechanicalManaPool = (new ResourceLocation("")).getClass().forName("de.melanx.botanicalmachinery.blocks.tiles.BlockEntityMechanicalManaPool");
    const CATALYSTS_FIELD = $BlockEntityMechanicalManaPool.getField("CATALYSTS");
    const CATALYSTS = CATALYSTS_FIELD.get(null);
    const empoweredlapis = Block.getBlock(new ResourceLocation("valine_s1ex:empowered_lapis")).asItem();
    CATALYSTS.set(2, empoweredlapis)
}

onEvent("server.load", event => {
    modifyMechanicalManaPoolCatalysts()
})
onEvent("client.logged_in", event => {
    modifyMechanicalManaPoolCatalysts()
})