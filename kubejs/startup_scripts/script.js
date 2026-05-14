// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')
const BlueprintCraftingRecipe = java("blusunrize.immersiveengineering.api.crafting.BlueprintCraftingRecipe")
BlueprintCraftingRecipe.recipeCategories.add("circuit")
BlueprintCraftingRecipe.recipeCategories.add("miscs")
BlueprintCraftingRecipe.recipeCategories.add("cell")
onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})