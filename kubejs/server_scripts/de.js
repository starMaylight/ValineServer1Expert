onEvent('recipes', event => {
    let removebyids = [
        'draconicevolution:draconium_ingot',
        'draconicevolution:components/draconium_ingot',
        'draconicevolution:basic_crafting_injector',
        'draconicevolution:components/wyvern_energy_core',
        'draconicevolution:components/draconium_core',
        'draconicevolution:wyvern_crafting_injector',
        'draconicevolution:awakened_draconium_block',
        'draconicevolution:components/wyvern_core',
        'draconicevolution:components/awakened_core',
        'draconicevolution:modules/module_core',
        'draconicevolution:components/draconic_energy_core',
        'draconicevolution:components/chaotic_core',
        'draconicevolution:components/chaotic_energy_core',
        'draconicevolution:awakened_crafting_injector',
        'draconicevolution:chaotic_crafting_injector',
        'draconicevolution:tools/chaotic_sword',
        'draconicevolution:crafting_core'
      ]
    removebyids.forEach((name) => {
        event.remove({id: name})
        })
function fusion_crafting(output, mainInput, sideInput, tier, energy) {
    if (typeof tier!="string") tier = "DRACONIUM"
    if (typeof energy!="number") energy = 100000
    let catalyst = Ingredient.of(mainInput)
    if (catalyst.getCount() > 1) {
        catalyst = {
            type: "draconicevolution:ingredient_stack",
            items: [catalyst],
            count: catalyst.getCount()
        }
    }
    
    let items = Array.isArray(sideInput) ? sideInput : [sideInput]
    let ingredients = []
    items.forEach(item => {ingredients.push(Ingredient.of(item))})
            
    event.custom({
        type: "draconicevolution:fusion_crafting",

        catalyst: catalyst,
        ingredients: ingredients,
        result: Ingredient.of(output),

        total_energy: energy,
        tier: tier
    })
}
event.recipes.thermal.smelter('4x draconicevolution:draconium_ingot',['4x draconicevolution:draconium_dust', 'industrialforegoing:infinity_nuke','4x mekanism:pellet_antimatter']).energy(200000)
let AIO3 = 'valine_s1ex:valine_de';
  event.recipes.createSequencedAssembly(['draconicevolution:basic_crafting_injector'],'mekanismgenerators:fission_reactor_casing',[
    event.recipes.createDeploying(AIO3,[AIO3,'valine_s1ex:high_voltage_module']),
    event.recipes.createDeploying(AIO3,[AIO3,'valine_s1ex:connector']),
    event.recipes.createDeploying(AIO3,[AIO3,'valine_s1ex:high_voltage_module']),
    event.recipes.createDeploying(AIO3,[AIO3,'valine_s1ex:connector']),
    event.recipes.createDeploying(AIO3,[AIO3,'valine_s1ex:resister']),
    event.recipes.createDeploying(AIO3,[AIO3,'immersiveengineering:transformer_hv']),
    event.recipes.createDeploying(AIO3,[AIO3,'rftoolspower:blazing_generator']),
    event.recipes.createDeploying(AIO3,[AIO3,'valine_s1ex:highend_circuit']),
    event.recipes.createDeploying(AIO3,[AIO3,'pneumaticcraft:display_table']),
  ]).transitionalItem(AIO3).loops(4)
  fusion_crafting('draconicevolution:draconium_core','valine_s1ex:highend_circuit',['avaritia:crystal_matrix_ingot','avaritia:crystal_matrix_ingot','avaritia:crystal_matrix_ingot','avaritia:crystal_matrix_ingot','draconicevolution:draconium_block','draconicevolution:draconium_block','draconicevolution:draconium_block','draconicevolution:draconium_block','mekanism:teleportation_core','mekaevolution:absolute_control_circuit'],"DRACONIUM",1000000)
  fusion_crafting('draconicevolution:wyvern_core','draconicevolution:draconium_core',['avaritia:crystal_matrix_ingot','avaritia:crystal_matrix_ingot','avaritia:crystal_matrix_ingot','avaritia:crystal_matrix_ingot','avaritia:crystal_matrix_ingot','avaritia:crystal_matrix_ingot','avaritia:crystal_matrix_ingot','avaritia:crystal_matrix_ingot','draconicevolution:wyvern_relay_crystal','draconicevolution:wyvern_relay_crystal','draconicevolution:wyvern_relay_crystal','draconicevolution:wyvern_relay_crystal','mekaevolution:supreme_control_circuit','mekaevolution:supreme_control_circuit','draconicevolution:draconium_block','draconicevolution:draconium_block','draconicevolution:draconium_block','draconicevolution:draconium_block'],"DRACONIUM",10000000)
  fusion_crafting('draconicevolution:wyvern_crafting_injector','draconicevolution:basic_crafting_injector',['draconicevolution:draconium_block','draconicevolution:draconium_block','draconicevolution:draconium_block','draconicevolution:draconium_block','draconicevolution:wyvern_core','draconicevolution:wyvern_core','draconicevolution:wyvern_core','draconicevolution:wyvern_core','mekaevolution:supreme_control_circuit','mekaevolution:supreme_control_circuit','mekaevolution:supreme_control_circuit','mekaevolution:supreme_control_circuit','valine_s1ex:high_voltage_module','valine_s1ex:high_voltage_module','valine_s1ex:high_voltage_module','valine_s1ex:high_voltage_module','valine_s1ex:connector','mekaevolution:qio_drive_supreme'],"DRACONIUM",50000000)
  let WEC = 'valine_s1ex:valine_dex';
  event.recipes.createSequencedAssembly(['draconicevolution:wyvern_energy_core'],'draconicevolution:draconium_core',[
    event.recipes.createDeploying(WEC,[WEC,'ae2:energy_card']),
    event.recipes.createDeploying(WEC,[WEC,'valine_s1ex:redalloy_ingot']),
    event.recipes.createDeploying(WEC,[WEC,'draconicevolution:draconium_block']),
    event.recipes.createDeploying(WEC,[WEC,'valine_s1ex:high_voltage_module'])
  ]).transitionalItem(WEC).loops(4)
  fusion_crafting('4x draconicevolution:awakened_draconium_block','4x draconicevolution:draconium_block',['draconicevolution:wyvern_core','draconicevolution:wyvern_core','draconicevolution:wyvern_core','draconicevolution:wyvern_core','valine_s1ex:souls_of_different_orders_of_magnitude','valine_s1ex:souls_of_different_orders_of_magnitude','draconicevolution:dragon_heart','draconicevolution:dragon_heart'],"WYVERN",100000000)
  fusion_crafting('draconicevolution:awakened_core','draconicevolution:wyvern_energy_core',['draconicevolution:awakened_draconium_block','draconicevolution:awakened_draconium_block','draconicevolution:awakened_draconium_block','draconicevolution:awakened_draconium_block','valine_s1ex:highend_circuit','valine_s1ex:highend_circuit','valine_s1ex:highend_circuit','valine_s1ex:highend_circuit','mekaevolution:cosmic_control_circuit','mekaevolution:cosmic_control_circuit','mekaevolution:cosmic_control_circuit','mekaevolution:cosmic_control_circuit','valine_s1ex:souls_of_different_orders_of_magnitude','valine_s1ex:souls_of_different_orders_of_magnitude','valine_s1ex:souls_of_different_orders_of_magnitude','valine_s1ex:souls_of_different_orders_of_magnitude','draconicevolution:wyvern_core','draconicevolution:wyvern_core','draconicevolution:wyvern_core','draconicevolution:wyvern_core'],"WYVERN",100000000)
  let DEC = 'valine_s1ex:valine_decore';
  event.recipes.createSequencedAssembly(['draconicevolution:module_core'],'draconicevolution:energy_core',[
    event.recipes.createDeploying(DEC,[DEC,'draconicevolution:draconium_core']),
    event.recipes.createDeploying(DEC,[DEC,'mekanism:teleportation_core']),
    event.recipes.createDeploying(DEC,[DEC,'mekanism:electrolytic_core']),
    event.recipes.createDeploying(DEC,[DEC,'pneumaticcraft:logistics_core']),
    event.recipes.createDeploying(DEC,[DEC,'powah:ender_core']),
    event.recipes.createDeploying(DEC,[DEC,'alchemistry:fusion_core']),
    event.recipes.createDeploying(DEC,[DEC,'alchemistry:fission_core']),
    event.recipes.createDeploying(DEC,[DEC,'pneumaticcraft:spawner_core']),
    event.recipes.createDeploying(DEC,[DEC,'valine_s1ex:eliminated_core']),
    event.recipes.createDeploying(DEC,[DEC,'valine_s1ex:stabilized_core']),
  ]).transitionalItem(DEC).loops(4)
  fusion_crafting('draconicevolution:awakened_crafting_injector','draconicevolution:wyvern_crafting_injector',['draconicevolution:awakened_draconium_block','draconicevolution:awakened_draconium_block','draconicevolution:awakened_draconium_block','draconicevolution:awakened_draconium_block','draconicevolution:awakened_core','draconicevolution:awakened_core','draconicevolution:awakened_core','draconicevolution:awakened_core','mekaevolution:cosmic_control_circuit','mekaevolution:cosmic_control_circuit','mekaevolution:cosmic_control_circuit','mekaevolution:cosmic_control_circuit','valine_s1ex:souls_of_different_orders_of_magnitude','valine_s1ex:souls_of_different_orders_of_magnitude','valine_s1ex:souls_of_different_orders_of_magnitude','valine_s1ex:souls_of_different_orders_of_magnitude','mekaevolution:qio_drive_cosmic','valine_s1ex:connector'],"WYVERN",10000000000)
  fusion_crafting('draconicevolution:chaotic_core','draconicevolution:draconic_energy_core',['draconicevolution:awakened_draconium_block','draconicevolution:awakened_draconium_block','draconicevolution:awakened_draconium_block','draconicevolution:awakened_draconium_block','draconicevolution:awakened_core','draconicevolution:awakened_core','draconicevolution:awakened_core','draconicevolution:awakened_core','mekaevolution:infinite_control_circuit','mekaevolution:infinite_control_circuit','mekaevolution:infinite_control_circuit','mekaevolution:infinite_control_circuit','extendedcrafting:the_ultimate_catalyst','extendedcrafting:the_ultimate_catalyst','extendedcrafting:the_ultimate_catalyst','extendedcrafting:the_ultimate_catalyst','mekaevolution:infinite_energy_cube','mekaevolution:infinite_energy_cube','mekaevolution:infinite_energy_cube','mekaevolution:infinite_energy_cube','draconicevolution:large_chaos_frag','draconicevolution:large_chaos_frag','draconicevolution:large_chaos_frag','draconicevolution:large_chaos_frag'],"DRACONIC",500000000)
  event.custom({
    "type": "immersiveengineering:blueprint",
    "inputs": [
      {
        "item": "draconicevolution:awakened_core"
      },
      {"count": 16,
        "base_ingredient": [
      {
        "item": "draconicevolution:wyvern_energy_core"}]
      },
      {"count": 64,
        "base_ingredient": [
      {
        "item": "draconicevolution:awakened_draconium_ingot"}]
      },
      {"count": 16,
        "base_ingredient": [
      {
        "item": "fluxnetworks:gargantuan_flux_storage"}]
      },
      {
        "count": 32,
        "base_ingredient": [
      {
        "item": "mekanism:ultimate_control_circuit"}]      
      },
      {
        "item": "draconicevolution:wyvern_capacitor"}
    ],
    "category": "circuit",
    "result": {
      "item": "draconicevolution:draconic_energy_core"
    } 
  })
  event.custom({
    "type": "immersiveengineering:blueprint",
    "inputs": [
      {
        "item": "draconicevolution:chaotic_core"
      },
      {"count": 16,
        "base_ingredient": [
      {
        "item": "draconicevolution:draconic_energy_core"}]
      },
      {"count": 64,
        "base_ingredient": [
      {
        "item": "draconicevolution:medium_chaos_frag"}]
      },
      {"count": 64,
        "base_ingredient": [
      {
        "item": "powah:reactor_nitro"}]
      },
      {
        "count": 32,
        "base_ingredient": [
      {
        "item": "mekaevolution:infinite_control_circuit"}]      
      },
      {
        "item": "draconicevolution:draconic_capacitor"}
    ],
    "category": "circuit",
    "result": {
      "item": "draconicevolution:chaotic_energy_core"
    } 
  })
  fusion_crafting('draconicevolution:chaotic_crafting_injector','draconicevolution:awakened_crafting_injector',['minecraft:dragon_egg','minecraft:dragon_egg','minecraft:dragon_egg','minecraft:dragon_egg','draconicevolution:chaotic_core','draconicevolution:chaotic_core','draconicevolution:chaotic_core','draconicevolution:chaotic_core','draconicevolution:chaotic_energy_core','draconicevolution:chaotic_energy_core','draconicevolution:chaotic_energy_core','draconicevolution:chaotic_energy_core','draconicevolution:large_chaos_frag','draconicevolution:large_chaos_frag','draconicevolution:large_chaos_frag','draconicevolution:large_chaos_frag','extendedcrafting:the_ultimate_catalyst','extendedcrafting:the_ultimate_catalyst','extendedcrafting:the_ultimate_catalyst','extendedcrafting:the_ultimate_catalyst','mekaevolution:qio_drive_infinite','valine_s1ex:connector','mekanism:ultimate_induction_cell','mekanism:ultimate_induction_provider'],"DRACONIC",2147483647)
  event.custom(
    {
        "type": "draconicevolution:fusion_crafting",
        "result": {
            "type": "forge:nbt",
            "item": "productivebees:spawn_egg_configurable_bee",
            "nbt": {
                "EntityTag": {
                    "type": "productivebees:chaos"
                }
            }
        },
        "catalyst": {
            "type": "forge:nbt",
            "item": "productivebees:spawn_egg_configurable_bee",
            "nbt": {
                "EntityTag": {
                    "type": "productivebees:awakened"
                }
            }
        },
        "total_energy": 640000000,
        "tier": "CHAOTIC",
        "ingredients": [
            {
                "item": "draconicevolution:chaotic_core"
            },
            {
                "item": "draconicevolution:chaotic_core"
            },
            {
                "item": "draconicadditions:chaos_heart"
            },
            {
                "item": "draconicadditions:chaos_heart"
            },
            {
                "item": "draconicevolution:chaotic_energy_core"
            },
            {
                "item": "draconicevolution:chaotic_energy_core"
            },
            {
                "item": "mekaevolution:qio_drive_infinite"
            },
            {
                "item": "mekaevolution:qio_drive_infinite"
            },
            {
                "item": "valine_s1ex:souls_of_different_orders_of_magnitude"
            }
        ]
    }
)
event.custom({
  "type": "extendedcrafting:compressor",
  "power_cost": 500000,
  "ingredient": {
    
      //"type": "forge:nbt",
      "item": "extendedcrafting:black_iron_ingot",
      "count": 100,
      //"nbt": "{data_model:{id:\"hostilenetworks:ender_dragon\"}}"
  },
  "catalyst": {
    "item": "extendedcrafting:ultimate_catalyst"
  },
  "result": {
    "item": "draconicevolution:dragon_heart"
  }
})
fusion_crafting('draconicevolution:chaotic_sword','draconicevolution:draconic_sword',['draconicevolution:awakened_draconium_ingot','draconicevolution:chaotic_core','draconicevolution:awakened_draconium_ingot','draconicevolution:awakened_draconium_ingot','draconicevolution:awakened_draconium_ingot','draconicevolution:awakened_draconium_ingot','draconicevolution:chaotic_energy_core','draconicevolution:awakened_draconium_ingot'],"DRACONIC",128000000)
event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "rftoolsdim:knowledge_holder"
  },
  "ingredients": [
    {
      "item": "mekanismgenerators:fission_reactor_casing"
    },
    {
      "item": "mekanismgenerators:fission_reactor_casing"
    },
    {
      "item": "draconicevolution:draconium_block"
    },
    {
      "item": "draconicevolution:draconium_block"
    },
    {
      "item": "mekanismgenerators:fission_reactor_casing"
    },
    {
      "item": "mekanismgenerators:fission_reactor_casing"
    },
    {
      "item": "draconicevolution:draconium_block"
    },
    {
      "item": "draconicevolution:draconium_block"
    }
  ],
  "result": {
    "item": 'draconicevolution:crafting_core'
  }
})
})