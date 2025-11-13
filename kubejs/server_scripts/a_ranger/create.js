//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([{ id: "farmersdelight:cutting/gravel_using_deployer" }, { id: /create_central_kitchen:crafting\/dough/ }, { id: "create:crushing/nether_wart_block" }, { id: /create:crushing\/tuff/ }]);
  //#endregion
  //#region - Replaced Crafts
  e.replaceInput({ id: "create:crafting/kinetics/fluid_tank" }, "#c:wooden_barrels", "#forge:glass/colorless");
  //#endregion
  //#region - Plates
  e.remove([{ id: /create.*:pressing\/.*_ingot/ }, { id: "createutilities:pressing/void_steel_sheet" }, { id: "create:sequenced_assembly/sturdy_sheet" }]);
  e.replaceInput({ input: "create:iron_sheet" }, "create:iron_sheet", "embers:iron_plate");
  e.replaceInput({ input: "create:copper_sheet" }, "create:copper_sheet", "embers:copper_plate");
  let potting_plates = (Material, Count, Result) => {
    e.custom({
      type: "create:pressing",
      ingredients: [
        {
          item: Material
        }
      ],
      results: [
        {
          count: Count,
          item: Result
        }
      ]
    });
  };
  // Brass
  potting_plates("create:brass_ingot", 1, "create:brass_sheet");
  potting_plates("create:brass_block", 9, "create:brass_sheet");
  // Calorite
  potting_plates("ad_astra:calorite_ingot", 1, "ad_astra:calorite_plate");
  potting_plates("ad_astra:calorite_block", 9, "ad_astra:calorite_plate");
  // Copper
  potting_plates("minecraft:copper_ingot", 1, "embers:copper_plate");
  potting_plates("minecraft:copper_block", 9, "embers:copper_plate");
  // Dawnstone
  potting_plates("embers:dawnstone_ingot", 1, "embers:dawnstone_plate");
  potting_plates("embers:dawnstone_block", 9, "embers:dawnstone_plate");
  // Desh
  potting_plates("ad_astra:desh_ingot", 1, "ad_astra:desh_plate");
  potting_plates("ad_astra:desh_block", 9, "ad_astra:desh_plate");
  // Gold
  potting_plates("minecraft:gold_ingot", 1, "create:golden_sheet");
  potting_plates("minecraft:gold_block", 9, "create:golden_sheet");
  // Iron
  potting_plates("minecraft:iron_ingot", 1, "embers:iron_plate");
  potting_plates("minecraft:iron_block", 9, "embers:iron_plate");
  // Lead
  potting_plates("embers:lead_ingot", 1, "embers:lead_plate");
  potting_plates("embers:lead_block", 9, "embers:lead_plate");
  // Ostrum
  potting_plates("ad_astra:ostrum_ingot", 1, "ad_astra:ostrum_plate");
  potting_plates("ad_astra:ostrum_block", 9, "ad_astra:ostrum_plate");
  // Raw Caminite
  potting_plates("embers:caminite_blend", 1, "embers:raw_caminite_plate");
  potting_plates("embers:raw_caminite_block", 9, "embers:raw_caminite_plate");
  // Silver
  potting_plates("embers:silver_ingot", 1, "embers:silver_plate");
  potting_plates("embers:silver_block", 9, "embers:silver_plate");
  // Steel
  potting_plates("ad_astra:steel_ingot", 1, "ad_astra:steel_plate");
  potting_plates("ad_astra:steel_block", 9, "ad_astra:steel_plate");
  // sturdy
  potting_plates("create:powdered_obsidian", 1, "create:sturdy_sheet");
  potting_plates("kubejs:powdered_obsidian_block", 9, "create:sturdy_sheet");
  // Void Steel
  potting_plates("createutilities:void_steel_ingot", 1, "createutilities:void_steel_sheet");
  potting_plates("createutilities:void_steel_block", 9, "createutilities:void_steel_sheet");
  // Zinc
  potting_plates("create:zinc_ingot", 1, "createaddition:zinc_sheet");
  potting_plates("create:zinc_block", 9, "createaddition:zinc_sheet");
  //#endregion
  //#region - Void Steel
  e.remove({ id: "createutilities:mixing/void_steel_ingot" });
  let potting_void_steel = (Material1, Material2, Result) => {
    e.custom({
      type: "create:mixing",
      heatRequirement: "superheated",
      ingredients: [
        {
          item: Material1
        },
        {
          item: Material2
        }
      ],
      results: [
        {
          item: Result
        }
      ]
    });
  };
  potting_void_steel("create:brass_ingot", "minecraft:ender_pearl", "createutilities:void_steel_ingot");
  // potting_void_steel("create:brass_block", "betterend:ender_block", "createutilities:void_steel_block");
  //#endregion
  //#region - Chorium Ingot
  e.remove({ id: "createcasing:sequenced_assembly/chorium_ingot" });
  e.custom({
    type: "create:sequenced_assembly",
    ingredient: { item: "create:polished_rose_quartz" },
    loops: 4,
    results: [{ item: "createcasing:chorium_ingot" }],
    sequence: [
      {
        type: "create:deploying",
        ingredients: [{ item: "createcasing:processing_chorium" }, { item: "avaritia:neutron_pile" }],
        results: [{ item: "createcasing:processing_chorium" }]
      },
      {
        type: "create:filling",
        ingredients: [{ item: "createcasing:processing_chorium" }, { amount: 250, fluid: "kubejs:infinity_fluid", nbt: {} }],
        results: [{ item: "createcasing:processing_chorium" }]
      },
      {
        type: "create:deploying",
        ingredients: [{ item: "createcasing:processing_chorium" }, { item: "minecraft:popped_chorus_fruit" }],
        results: [{ item: "createcasing:processing_chorium" }]
      },
      {
        type: "create:pressing",
        ingredients: [{ item: "createcasing:processing_chorium" }],
        results: [{ item: "createcasing:processing_chorium" }]
      }
    ],
    transitionalItem: { item: "createcasing:processing_chorium" }
  });
  //#endregion
  //#region - Creative Casing
  e.remove({ id: /createcasing:item_application\// });
  e.custom({
    type: "create:item_application",
    ingredients: [{ item: "ad_astra:steel_block" }, { item: "createcasing:chorium_ingot" }],
    results: [{ item: "createcasing:creative_casing" }]
  });
  //#endregion
  //#region - Rose Quartz
  e.remove({ id: "create:crafting/materials/rose_quartz" });
  e.shapeless("create:rose_quartz", ["#forge:gems/quartz", "minecraft:red_dye"]);
  //#endregion
  //#region - Precision Mechanism
  e.custom({
    type: "create:sequenced_assembly",
    ingredient: { tag: "forge:plates/gold" },
    loops: 5,
    results: [{ item: "create:precision_mechanism" }],
    sequence: [
      {
        type: "create:deploying",
        ingredients: [{ item: "create:incomplete_precision_mechanism" }, { item: "create:cogwheel" }],
        results: [{ item: "create:incomplete_precision_mechanism" }]
      },
      {
        type: "create:deploying",
        ingredients: [{ item: "create:incomplete_precision_mechanism" }, { item: "create:large_cogwheel" }],
        results: [{ item: "create:incomplete_precision_mechanism" }]
      },
      {
        type: "create:deploying",
        ingredients: [{ item: "create:incomplete_precision_mechanism" }, { item: "extendedcrafting:black_iron_nugget" }],
        results: [{ item: "create:incomplete_precision_mechanism" }]
      }
    ],
    transitionalItem: { item: "create:incomplete_precision_mechanism" }
  });
  //#endregion
  //#region - Ore Vein Finder
  e.remove({ id: "createoreexcavation:vein_finder" });
  e.shaped("createoreexcavation:vein_finder", [" AB", " CA", "C  "], {
    A: "create:andesite_alloy",
    B: "minecraft:ender_eye",
    C: "#forge:rods/wooden"
  });
  //#endregion
  //#region - Crushing
  e.remove([
    { id: /create:crushing\/.*_ore/ },
    { id: "create:crushing/gilded_blackstone" },
    { id: "malum:create/crushing/crush_blazing_quartz" },
    { id: "malum:create/crushing/crush_rare_earths_block" },
    { id: "malum:create/crushing/crush_natural_quartz_deepslate" },
    { id: "malum:create/crushing/crush_natural_quartz" },
    { id: /create:milling\/compat\/botania\/.*_petal/ }
  ]);
  //#endregion
  //#region - Fuel for Liquid Blaze Burner
  let potting_fuel_liquid_blaze_burner = (Fluid, Duration, Superheat) => {
    e.custom({
      type: "createaddition:liquid_burning",
      input: {
        fluid: Fluid,
        amount: 1000
      },
      burnTime: Duration,
      superheated: Superheat
    });
  };
  potting_fuel_liquid_blaze_burner("mob_grinding_utils:fluid_xp", 72000, "true");
  potting_fuel_liquid_blaze_burner("kubejs:infinity_fluid", 1728000, "true");
  //#endregion
  //#region - Drills
  e.shaped("createoreexcavation:netherite_drill", [" A ", "ABA", " A "], {
    A: "minecraft:netherite_ingot",
    B: "create:mechanical_drill"
  });
  //#endregion
  //#region - Ore Vein Type
  e.remove({ id: /createoreexcavation:ore_vein_type\// });
  let potting_ore_vein_type = (Dimension, Icon, Name) => {
    e.custom({
      type: "createoreexcavation:vein",
      amountMax: 2.0,
      amountMin: 1.0,
      biomeWhitelist: Dimension,
      icon: { item: Icon },
      name: Name,
      neverFinite: true,
      placement: {
        salt: 1195889335,
        separation: 8,
        spacing: 64
      },
      priority: 0
    });
  };
  //#region - Fluids
  potting_ore_vein_type("forge:is_nether", "minecraft:lava_bucket", "Excavated Lava");
  potting_ore_vein_type("forge:is_overworld", "starbunclemania:source_fluid_bucket", "Excavated Source");
  potting_ore_vein_type("forge:is_overworld", "mob_grinding_utils:fluid_xp_bucket", "Excavated XP");
  potting_ore_vein_type("forge:is_alfheim", "kubejs:flower_oil_bucket", "Excavated Flower Oil");
  potting_ore_vein_type("forge:multiple_overworld_moon_mars_mercury_glacio", "ad_astra:cryo_fuel_bucket", "Excavated Cryo Fuel");
  potting_ore_vein_type("forge:is_overworld", "kubejs:infinity_fluid_bucket", "Excavated Infinity Fluid");
  //#endregion
  //#region - Blocks
  // Vanilla
  potting_ore_vein_type("forge:multiple_overworld_venus_glacio", "minecraft:coal_ore", "Excavated Coal");
  potting_ore_vein_type("forge:multiple_overworld_moon_mars_mercury_glacio", "minecraft:iron_ore", "Excavated Iron");
  potting_ore_vein_type("forge:multiple_overworld_glacio", "minecraft:copper_ore", "Excavated Copper");
  potting_ore_vein_type("forge:multiple_overworld_nether_venus_alfheim", "minecraft:gold_ore", "Excavated Gold");
  potting_ore_vein_type("forge:is_overworld", "minecraft:redstone_ore", "Excavated Redstone");
  potting_ore_vein_type("forge:multiple_overworld_everbright_everdawn", "minecraft:emerald_ore", "Excavated Emerald");
  potting_ore_vein_type("forge:multiple_overworld_glacio", "minecraft:lapis_ore", "Excavated Lapis Lazuli");
  potting_ore_vein_type("forge:multiple_overworld_mars_venus", "minecraft:diamond_ore", "Excavated Diamond");
  potting_ore_vein_type("forge:multiple_overworld_nether", "malum:natural_quartz_ore", "Excavated Quartz");
  potting_ore_vein_type("forge:is_nether", "minecraft:ancient_debris", "Excavated Ancient Debris");
  // Ad Astra
  potting_ore_vein_type("forge:is_moon", "ad_astra:moon_desh_ore", "Excavated Desh");
  potting_ore_vein_type("forge:multiple_moon_mars_glacio", "ad_astra:moon_ice_shard_ore", "Excavated Ice Shard");
  potting_ore_vein_type("forge:is_mars", "ad_astra:mars_ostrum_ore", "Excavated Ostrum");
  potting_ore_vein_type("forge:is_venus", "ad_astra:venus_calorite_ore", "Excavated Calorite");
  // Create
  potting_ore_vein_type("forge:is_overworld", "create:zinc_ore", "Excavated Zinc");
  // Embers
  potting_ore_vein_type("forge:is_overworld", "embers:lead_ore", "Excavated Lead");
  potting_ore_vein_type("forge:is_overworld", "embers:silver_ore", "Excavated Silver");
  // Botania
  potting_ore_vein_type("forge:is_alfheim", "mythicbotany:elementium_ore", "Excavated Elementium");
  potting_ore_vein_type("forge:is_alfheim", "mythicbotany:dragonstone_ore", "Excavated Dragonstone");
  // Malum
  potting_ore_vein_type("forge:is_overworld", "malum:soulstone_ore", "Excavated Soulstone");
  potting_ore_vein_type("forge:is_nether", "malum:blazing_quartz_ore", "Excavated Blazing Quartz");
  potting_ore_vein_type("forge:is_overworld", "malum:brilliant_stone", "Excavated Brilliant");
  // Better End
  // potting_ore_vein_type("forge:is_end", "betterend:amber_ore", "Excavated Amber");
  // potting_ore_vein_type("forge:is_end", "betterend:thallasium_ore", "Excavated Thallasium");
  // potting_ore_vein_type("forge:is_end", "betterend:ender_ore", "Excavated Ender");
  // Enigmatic Legacy
  potting_ore_vein_type("forge:is_end", "enigmaticlegacy:etherium_ore", "Excavated Etherium");
  //#endregion
  //#endregion
  //#region - Excavation
  e.remove([{ id: /createoreexcavation:extractor\// }, { id: /createoreexcavation:drilling\// }]);
  //#region - Drilling
  let potting_drilling = (Output, Fluid, Vein) => {
    e.custom({
      type: "createoreexcavation:drilling",
      drill: {
        item: "createoreexcavation:netherite_drill"
      },
      fluid: {
        amount: 10,
        fluid: Fluid,
        nbt: {}
      },
      output: [
        {
          item: Output
        }
      ],
      priority: 0,
      stress: 256,
      ticks: 600,
      vein_id: Vein
    });
  };
  //#region - Tier 1
  potting_drilling("minecraft:coal_ore", "minecraft:water", "createoreexcavation:kjs/605l7u0al1wiypwmq8rns9eku");
  potting_drilling("minecraft:iron_ore", "minecraft:water", "createoreexcavation:kjs/54x3aqjle91pcc3oszqk7ll3n");
  potting_drilling("minecraft:copper_ore", "minecraft:water", "createoreexcavation:kjs/2wdgmohas0h7pvh0o6sxro1v8");
  potting_drilling("minecraft:gold_ore", "minecraft:water", "createoreexcavation:kjs/a75sdpb256o5muikxautnmo79");
  potting_drilling("minecraft:redstone_ore", "minecraft:water", "createoreexcavation:kjs/7dmbrosn7ne7qmz1973z2rkys");
  potting_drilling("minecraft:emerald_ore", "minecraft:water", "createoreexcavation:kjs/cqicsom9d73f06y8n4rih4gfd");
  potting_drilling("minecraft:lapis_ore", "minecraft:water", "createoreexcavation:kjs/3orjwhf3rqzbefk1skbovyxus");
  potting_drilling("minecraft:diamond_ore", "minecraft:water", "createoreexcavation:kjs/2a9o79mwu7k4a30v5g25hq3rb");
  potting_drilling("malum:natural_quartz_ore", "minecraft:water", "createoreexcavation:kjs/4qtu31fhslea13ftvmg2l0idj");
  //#endregion
  //#region - Tier 2
  potting_drilling("create:zinc_ore", "starbunclemania:source_fluid", "createoreexcavation:kjs/485r39lqoij3qw6uhq0445fc6");
  // potting_drilling("betterend:amber_ore", "starbunclemania:source_fluid", "createoreexcavation:kjs/84wwdqfemsctpqacovo5qnl3y");
  // potting_drilling("betterend:thallasium_ore", "starbunclemania:source_fluid", "createoreexcavation:kjs/8sau9kc2gzq2ovtpstiqgtxr5");
  // potting_drilling("betterend:ender_ore", "starbunclemania:source_fluid", "createoreexcavation:kjs/66wo8vfvo7b92ueoq14ziv26t");
  //#endregion
  //#region - Tier 3
  potting_drilling("minecraft:ancient_debris", "mob_grinding_utils:fluid_xp", "createoreexcavation:kjs/9liu9p380erpe2om2j9k4pweu");
  potting_drilling("embers:lead_ore", "mob_grinding_utils:fluid_xp", "createoreexcavation:kjs/3sefclhi7djadt7ez6wbu1yuj");
  potting_drilling("embers:silver_ore", "mob_grinding_utils:fluid_xp", "createoreexcavation:kjs/b9x62b93flvh7nqpc4s7sin25");
  potting_drilling("malum:soulstone_ore", "mob_grinding_utils:fluid_xp", "createoreexcavation:kjs/aaknrkhipo8j87wy7nwzbgpkh");
  potting_drilling("malum:blazing_quartz_ore", "mob_grinding_utils:fluid_xp", "createoreexcavation:kjs/7fbj7fvwu1x38ks6wpzepp0up");
  potting_drilling("malum:brilliant_stone", "mob_grinding_utils:fluid_xp", "createoreexcavation:kjs/8rtl8txppl7215mn8hjzaf2dl");
  //#endregion
  //#region - Tier 4
  potting_drilling("mythicbotany:elementium_ore", "kubejs:flower_oil", "createoreexcavation:kjs/3yndoh7cda6ko6t29n6p34bz2");
  potting_drilling("mythicbotany:dragonstone_ore", "kubejs:flower_oil", "createoreexcavation:kjs/dpj5rhd0aar35fs07yakpavs3");
  //#endregion
  //#region - Tier 5
  potting_drilling("ad_astra:moon_desh_ore", "ad_astra:cryo_fuel", "createoreexcavation:kjs/9u8q2c9cq3efhz91c49yf837b");
  potting_drilling("ad_astra:mars_ostrum_ore", "ad_astra:cryo_fuel", "createoreexcavation:kjs/8z7kpudeahhj4yx42tumfbn5q");
  potting_drilling("ad_astra:venus_calorite_ore", "ad_astra:cryo_fuel", "createoreexcavation:kjs/4e4d4n5d9gx637qjnk2gzwmhc");
  potting_drilling("enigmaticlegacy:etherium_ore", "ad_astra:cryo_fuel", "createoreexcavation:kjs/cp04muewyllqb49bb2c5nift7");
  //#endregion
  //#endregion
  //#region - Fluid Well
  let potting_extracting = (Output, Fluid, Vein) => {
    e.custom({
      type: "createoreexcavation:extracting",
      drill: { item: "createoreexcavation:netherite_drill" },
      fluid: {
        amount: 10,
        fluid: Fluid,
        nbt: {}
      },
      output: {
        amount: 500,
        fluid: Output
      },
      priority: 0,
      stress: 256,
      ticks: 20,
      vein_id: Vein
    });
  };
  potting_extracting("minecraft:lava", "minecraft:water", "createoreexcavation:kjs/531vgator9brtmhkbebpzqjiu");
  potting_extracting("starbunclemania:source_fluid", "minecraft:water", "createoreexcavation:kjs/6vq25cbk8efcaxxngl0sl6mj5");
  potting_extracting("mob_grinding_utils:fluid_xp", "starbunclemania:source_fluid", "createoreexcavation:kjs/ap59pcgx5ttxov5b6grzusi72");
  potting_extracting("kubejs:flower_oil", "mob_grinding_utils:fluid_xp", "createoreexcavation:kjs/3wgtm2s6rv0lcprrk1m5zbmr5");
  potting_extracting("ad_astra:cryo_fuel", "kubejs:flower_oil", "createoreexcavation:kjs/enkpyozrdmu4smfog9p4y2i52");
  potting_extracting("kubejs:infinity_fluid", "ad_astra:cryo_fuel", "createoreexcavation:kjs/4u3l80rvulw4zyltc99dg1e5l");
  //#endregion
  //#endregion
  //#region - Creative
  let potting_creative_blocks = (Base, Result) => {
    e.shaped(Result, [" A ", "ABA", " A "], {
      A: "createcasing:creative_casing",
      B: Base
    });
  };
  potting_creative_blocks("createaddition:modular_accumulator", "createaddition:creative_energy");
  potting_creative_blocks("create:cogwheel", "createcasing:creative_cogwheel");
  potting_creative_blocks("create:item_vault", "create:creative_crate");
  potting_creative_blocks("create:fluid_tank", "create:creative_fluid_tank");
  potting_creative_blocks("createaddition:electric_motor", "create:creative_motor");

  e.custom({
    type: "create:deploying",
    ingredients: [
      {
        item: "create:blaze_cake"
      },
      {
        item: "createcasing:chorium_ingot"
      }
    ],
    results: [
      {
        item: "create:creative_blaze_cake"
      }
    ]
  });
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function create() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    /createaddition:.*electrum/,
    "create:iron_sheet",
    "create:copper_sheet",
    /create:crushed_/,
    /create:.*_backtank/,
    "createaddition:brass_rod",
    "createutilities:void_battery",
    "create:handheld_worldshaper",
    /createoreexcavation:raw_/,
    "createoreexcavation:drill",
    "createoreexcavation:diamond_drill"
  ];
  let hiding = [];
  // Fonctions pour supprimer les tags et les crafts des éléments définis juste au dessus
  function handle_Tags(e) {
    e.removeAllTagsFrom(unused);
    e.add("forge:hiding", [unused, hiding]);
  }
  function handle_Recipes(e) {
    e.remove([{ input: unused }, { output: unused }]);
  }
  ServerEvents.tags(["item", "block"], handle_Tags);
  ServerEvents.recipes(handle_Recipes);
}
create();
//#endregion
