//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([
    { id: /sophisticatedbackpacks:.*backpack/ },
    { id: /sophisticatedstorage:.*_barrel/ },
    { id: /sophisticatedstorage:.*_chest/ },
    { id: /sophisticatedstorage:.*_shulker/ },
    { id: /sophisticatedstorage:shulker/ },
    { id: "minecraft:shulker_box_from_vanilla_shulker_box" },
    { id: /sophisticatedstorage:.*_tier_upgrade/ }
  ]);
  //#endregion
  //#region - Basic Backpack
  e.shaped("sophisticatedbackpacks:backpack", ["ABA", "CDC", "ABA"], {
    A: "minecraft:leather",
    B: "minecraft:string",
    C: "botania:pebble",
    D: "sophisticatedstorage:chest"
  });
  //#endregion
  //#region - Backpack Tiers
  let potting_backpack_tier = (Base, Material1, Material2, Result) => {
    e.custom({
      type: "sophisticatedbackpacks:backpack_upgrade",
      conditions: [
        {
          type: "sophisticatedcore:item_enabled",
          itemRegistryName: Result
        }
      ],
      key: {
        A: {
          item: "minecraft:leather"
        },
        B: {
          item: Material1
        },
        C: {
          item: Material2
        },
        D: {
          item: Base
        }
      },
      pattern: ["ABA", "CDC", "ABA"],
      result: {
        item: Result
      }
    });
  };
  potting_backpack_tier("sophisticatedbackpacks:backpack", "minecraft:cobblestone", "minecraft:copper_block", "sophisticatedbackpacks:copper_backpack");
  potting_backpack_tier("sophisticatedbackpacks:copper_backpack", "ars_nouveau:source_gem_block", "create:andesite_alloy_block", "sophisticatedbackpacks:iron_backpack");
  potting_backpack_tier("sophisticatedbackpacks:iron_backpack", "embers:dawnstone_block", "mna:vinteum_block", "sophisticatedbackpacks:gold_backpack");
  potting_backpack_tier("sophisticatedbackpacks:gold_backpack", "botania:terrasteel_block", "extendedcrafting:black_iron_block", "sophisticatedbackpacks:diamond_backpack");
  potting_backpack_tier("sophisticatedbackpacks:diamond_backpack", "ad_astra:steel_block", "gobber2:gobber2_block_end", "sophisticatedbackpacks:netherite_backpack");
  //#endregion
  //#region - Crafts with Chests
  e.remove([{ id: "minecraft:hopper" }, { id: "bclib:tag_hopper" }]);
  e.shaped("minecraft:hopper", ["A A", "ABA", " A "], {
    A: "minecraft:iron_ingot",
    B: "sophisticatedstorage:chest"
  });
  let potting_crafts_with_chests_shapeless = (Material, Result_and_ID) => {
    e.remove({ id: Result_and_ID });
    e.shapeless(Result_and_ID, ["sophisticatedstorage:chest", Material]);
  };
  potting_crafts_with_chests_shapeless("minecraft:oak_boat", "minecraft:oak_chest_boat");
  potting_crafts_with_chests_shapeless("minecraft:bamboo_raft", "minecraft:bamboo_chest_raft");
  potting_crafts_with_chests_shapeless("minecraft:spruce_boat", "minecraft:spruce_chest_boat");
  potting_crafts_with_chests_shapeless("minecraft:birch_boat", "minecraft:birch_chest_boat");
  potting_crafts_with_chests_shapeless("minecraft:jungle_boat", "minecraft:jungle_chest_boat");
  potting_crafts_with_chests_shapeless("minecraft:acacia_boat", "minecraft:acacia_chest_boat");
  potting_crafts_with_chests_shapeless("minecraft:dark_oak_boat", "minecraft:dark_oak_chest_boat");
  potting_crafts_with_chests_shapeless("minecraft:mangrove_boat", "minecraft:mangrove_chest_boat");
  potting_crafts_with_chests_shapeless("minecraft:cherry_boat", "minecraft:cherry_chest_boat");
  potting_crafts_with_chests_shapeless("alexscaves:pewen_boat", "alexscaves:pewen_chest_boat");
  potting_crafts_with_chests_shapeless("alexscaves:thornwood_boat", "alexscaves:thornwood_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:aspen_boat", "biomeswevegone:aspen_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:baobab_boat", "biomeswevegone:baobab_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:blue_enchanted_boat", "biomeswevegone:blue_enchanted_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:cika_boat", "biomeswevegone:cika_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:cypress_boat", "biomeswevegone:cypress_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:ebony_boat", "biomeswevegone:ebony_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:fir_boat", "biomeswevegone:fir_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:florus_boat", "biomeswevegone:florus_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:green_enchanted_boat", "biomeswevegone:green_enchanted_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:holly_boat", "biomeswevegone:holly_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:ironwood_boat", "biomeswevegone:ironwood_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:jacaranda_boat", "biomeswevegone:jacaranda_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:mahogany_boat", "biomeswevegone:mahogany_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:maple_boat", "biomeswevegone:maple_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:palm_boat", "biomeswevegone:palm_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:pine_boat", "biomeswevegone:pine_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:rainbow_eucalyptus_boat", "biomeswevegone:rainbow_eucalyptus_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:redwood_boat", "biomeswevegone:redwood_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:sakura_boat", "biomeswevegone:sakura_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:skyris_boat", "biomeswevegone:skyris_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:white_mangrove_boat", "biomeswevegone:white_mangrove_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:willow_boat", "biomeswevegone:willow_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:witch_hazel_boat", "biomeswevegone:witch_hazel_chest_boat");
  potting_crafts_with_chests_shapeless("biomeswevegone:zelkova_boat", "biomeswevegone:zelkova_chest_boat");
  potting_crafts_with_chests_shapeless("minecraft:tripwire_hook", "minecraft:trapped_chest");
  potting_crafts_with_chests_shapeless("minecraft:minecart", "minecraft:chest_minecart");
  //#endregion
  //#region - Barrel, Chest and Shulker
  let potting_storage = (Material1, Material2, Result) => {
    e.shaped(Result, ["ABA", "ACA", "ABA"], {
      A: Material1,
      B: Material2,
      C: "botania:pebble"
    });
  };
  potting_storage("#minecraft:planks", "#minecraft:wooden_slabs", Item.of("sophisticatedstorage:barrel", '{woodType:"oak"}'));
  potting_storage("#minecraft:planks", "#minecraft:planks", Item.of("sophisticatedstorage:chest", '{woodType:"oak"}'));
  potting_storage("cataclysm:chiseled_purpur_block", "minecraft:shulker_shell", "sophisticatedstorage:shulker_box");
  //#endregion
  //#region - Limited Barrel
  let potting_limited_barrel = (Material1, Material2, Material3, Material4, Result) => {
    e.shaped(Result, ["ABA", "CDE", "AFA"], {
      A: "#minecraft:planks",
      B: Material1,
      C: Material2,
      D: "botania:pebble",
      E: Material3,
      F: Material4
    });
  };
  potting_limited_barrel("#minecraft:wooden_slabs", "#minecraft:planks", "#minecraft:planks", "#minecraft:planks", Item.of("sophisticatedstorage:limited_barrel_1", '{woodType:"oak"}'));
  potting_limited_barrel("#minecraft:planks", "#minecraft:wooden_slabs", "#minecraft:wooden_slabs", "#minecraft:planks", Item.of("sophisticatedstorage:limited_barrel_2", '{woodType:"oak"}'));
  potting_limited_barrel("#minecraft:wooden_slabs", "#minecraft:wooden_slabs", "#minecraft:wooden_slabs", "#minecraft:planks", Item.of("sophisticatedstorage:limited_barrel_3", '{woodType:"oak"}'));
  potting_limited_barrel(
    "#minecraft:wooden_slabs",
    "#minecraft:wooden_slabs",
    "#minecraft:wooden_slabs",
    "#minecraft:wooden_slabs",
    Item.of("sophisticatedstorage:limited_barrel_4", '{woodType:"oak"}')
  );
  //#endregion
  //#region - Storage Tiers
  let potting_storage_tier = (Base, Material1, Material2, Result) => {
    e.custom({
      type: "sophisticatedstorage:storage_tier_upgrade",
      conditions: [
        {
          type: "sophisticatedcore:item_enabled",
          itemRegistryName: Result
        }
      ],
      key: {
        A: {
          tag: "minecraft:planks"
        },
        B: {
          item: Material1
        },
        C: {
          item: Material2
        },
        D: {
          item: Base
        }
      },
      pattern: ["ABA", "CDC", "ABA"],
      result: {
        item: Result
      }
    });
  };
  potting_storage_tier("sophisticatedstorage:barrel", "minecraft:cobblestone", "minecraft:copper_block", "sophisticatedstorage:copper_barrel");
  potting_storage_tier("sophisticatedstorage:copper_barrel", "ars_nouveau:source_gem_block", "create:andesite_alloy_block", "sophisticatedstorage:iron_barrel");
  potting_storage_tier("sophisticatedstorage:iron_barrel", "embers:dawnstone_block", "mna:vinteum_block", "sophisticatedstorage:gold_barrel");
  potting_storage_tier("sophisticatedstorage:gold_barrel", "botania:terrasteel_block", "extendedcrafting:black_iron_block", "sophisticatedstorage:diamond_barrel");
  potting_storage_tier("sophisticatedstorage:diamond_barrel", "ad_astra:steel_block", "gobber2:gobber2_block_end", "sophisticatedstorage:netherite_barrel");
  potting_storage_tier("sophisticatedstorage:chest", "minecraft:cobblestone", "minecraft:copper_block", "sophisticatedstorage:copper_chest");
  potting_storage_tier("sophisticatedstorage:copper_chest", "ars_nouveau:source_gem_block", "create:andesite_alloy_block", "sophisticatedstorage:iron_chest");
  potting_storage_tier("sophisticatedstorage:iron_chest", "embers:dawnstone_block", "mna:vinteum_block", "sophisticatedstorage:gold_chest");
  potting_storage_tier("sophisticatedstorage:gold_chest", "botania:terrasteel_block", "extendedcrafting:black_iron_block", "sophisticatedstorage:diamond_chest");
  potting_storage_tier("sophisticatedstorage:diamond_chest", "ad_astra:steel_block", "gobber2:gobber2_block_end", "sophisticatedstorage:netherite_chest");
  potting_storage_tier("sophisticatedstorage:shulker_box", "minecraft:cobblestone", "minecraft:copper_block", "sophisticatedstorage:copper_shulker_box");
  potting_storage_tier("sophisticatedstorage:copper_shulker_box", "ars_nouveau:source_gem_block", "create:andesite_alloy_block", "sophisticatedstorage:iron_shulker_box");
  potting_storage_tier("sophisticatedstorage:iron_shulker_box", "embers:dawnstone_block", "mna:vinteum_block", "sophisticatedstorage:gold_shulker_box");
  potting_storage_tier("sophisticatedstorage:gold_shulker_box", "botania:terrasteel_block", "extendedcrafting:black_iron_block", "sophisticatedstorage:diamond_shulker_box");
  potting_storage_tier("sophisticatedstorage:diamond_shulker_box", "ad_astra:steel_block", "gobber2:gobber2_block_end", "sophisticatedstorage:netherite_shulker_box");
  potting_storage_tier("sophisticatedstorage:limited_barrel_1", "minecraft:cobblestone", "minecraft:copper_block", "sophisticatedstorage:limited_copper_barrel_1");
  potting_storage_tier("sophisticatedstorage:limited_copper_barrel_1", "ars_nouveau:source_gem_block", "create:andesite_alloy_block", "sophisticatedstorage:limited_iron_barrel_1");
  potting_storage_tier("sophisticatedstorage:limited_iron_barrel_1", "embers:dawnstone_block", "mna:vinteum_block", "sophisticatedstorage:limited_gold_barrel_1");
  potting_storage_tier("sophisticatedstorage:limited_gold_barrel_1", "botania:terrasteel_block", "extendedcrafting:black_iron_block", "sophisticatedstorage:limited_diamond_barrel_1");
  potting_storage_tier("sophisticatedstorage:limited_diamond_barrel_1", "ad_astra:steel_block", "gobber2:gobber2_block_end", "sophisticatedstorage:limited_netherite_barrel_1");
  potting_storage_tier("sophisticatedstorage:limited_barrel_2", "minecraft:cobblestone", "minecraft:copper_block", "sophisticatedstorage:limited_copper_barrel_2");
  potting_storage_tier("sophisticatedstorage:limited_copper_barrel_2", "ars_nouveau:source_gem_block", "create:andesite_alloy_block", "sophisticatedstorage:limited_iron_barrel_2");
  potting_storage_tier("sophisticatedstorage:limited_iron_barrel_2", "embers:dawnstone_block", "mna:vinteum_block", "sophisticatedstorage:limited_gold_barrel_2");
  potting_storage_tier("sophisticatedstorage:limited_gold_barrel_2", "botania:terrasteel_block", "extendedcrafting:black_iron_block", "sophisticatedstorage:limited_diamond_barrel_2");
  potting_storage_tier("sophisticatedstorage:limited_diamond_barrel_2", "ad_astra:steel_block", "gobber2:gobber2_block_end", "sophisticatedstorage:limited_netherite_barrel_2");
  potting_storage_tier("sophisticatedstorage:limited_barrel_3", "minecraft:cobblestone", "minecraft:copper_block", "sophisticatedstorage:limited_copper_barrel_3");
  potting_storage_tier("sophisticatedstorage:limited_copper_barrel_3", "ars_nouveau:source_gem_block", "create:andesite_alloy_block", "sophisticatedstorage:limited_iron_barrel_3");
  potting_storage_tier("sophisticatedstorage:limited_iron_barrel_3", "embers:dawnstone_block", "mna:vinteum_block", "sophisticatedstorage:limited_gold_barrel_3");
  potting_storage_tier("sophisticatedstorage:limited_gold_barrel_3", "botania:terrasteel_block", "extendedcrafting:black_iron_block", "sophisticatedstorage:limited_diamond_barrel_3");
  potting_storage_tier("sophisticatedstorage:limited_diamond_barrel_3", "ad_astra:steel_block", "gobber2:gobber2_block_end", "sophisticatedstorage:limited_netherite_barrel_3");
  potting_storage_tier("sophisticatedstorage:limited_barrel_4", "minecraft:cobblestone", "minecraft:copper_block", "sophisticatedstorage:limited_copper_barrel_4");
  potting_storage_tier("sophisticatedstorage:limited_copper_barrel_4", "ars_nouveau:source_gem_block", "create:andesite_alloy_block", "sophisticatedstorage:limited_iron_barrel_4");
  potting_storage_tier("sophisticatedstorage:limited_iron_barrel_4", "embers:dawnstone_block", "mna:vinteum_block", "sophisticatedstorage:limited_gold_barrel_4");
  potting_storage_tier("sophisticatedstorage:limited_gold_barrel_4", "botania:terrasteel_block", "extendedcrafting:black_iron_block", "sophisticatedstorage:limited_diamond_barrel_4");
  potting_storage_tier("sophisticatedstorage:limited_diamond_barrel_4", "ad_astra:steel_block", "gobber2:gobber2_block_end", "sophisticatedstorage:limited_netherite_barrel_4");
  //#endregion
  //#region - Tier Upgrades
  let potting_storage_tier_upgrade = (Base, Material1, Material2, Result) => {
    e.shaped(Result, ["ABA", "CDC", "ABA"], {
      A: "#minecraft:planks",
      B: Material1,
      C: Material2,
      D: Base
    });
  };
  potting_storage_tier_upgrade("minecraft:oak_pressure_plate", "minecraft:cobblestone", "minecraft:copper_block", "sophisticatedstorage:basic_to_copper_tier_upgrade");
  potting_storage_tier_upgrade("sophisticatedstorage:basic_to_copper_tier_upgrade", "ars_nouveau:source_gem_block", "create:andesite_alloy_block", "sophisticatedstorage:copper_to_iron_tier_upgrade");
  potting_storage_tier_upgrade("sophisticatedstorage:copper_to_iron_tier_upgrade", "embers:dawnstone_block", "mna:vinteum_block", "sophisticatedstorage:iron_to_gold_tier_upgrade");
  potting_storage_tier_upgrade("sophisticatedstorage:iron_to_gold_tier_upgrade", "botania:terrasteel_block", "extendedcrafting:black_iron_block", "sophisticatedstorage:gold_to_diamond_tier_upgrade");
  potting_storage_tier_upgrade("sophisticatedstorage:gold_to_diamond_tier_upgrade", "ad_astra:steel_block", "gobber2:gobber2_block_end", "sophisticatedstorage:diamond_to_netherite_tier_upgrade");
  //#endregion
  //#region - Upgrades
  e.remove([
    { id: /sophisticatedstorage:tier_upgrade/ },
    { id: /sophisticatedstorage:.*from/ },
    { id: /sophisticatedstorage:stack_/ },
    { id: /sophisticatedbackpacks:.*from/ },
    { id: /sophisticatedbackpacks:stack_/ }
  ]);
  let potting_upgrade = (Base, Material, Result) => {
    e.custom({
      type: "create:deploying",
      ingredients: [
        {
          item: Base
        },
        {
          item: Material
        }
      ],
      results: [
        {
          item: Result
        }
      ]
    });
  };
  potting_upgrade("sophisticatedbackpacks:upgrade_base", "create:andesite_alloy_block", "sophisticatedbackpacks:stack_upgrade_tier_1");
  potting_upgrade("sophisticatedbackpacks:stack_upgrade_tier_1", "mna:vinteum_block", "sophisticatedbackpacks:stack_upgrade_tier_2");
  potting_upgrade("sophisticatedbackpacks:stack_upgrade_tier_2", "extendedcrafting:black_iron_block", "sophisticatedbackpacks:stack_upgrade_tier_3");
  potting_upgrade("sophisticatedbackpacks:stack_upgrade_tier_3", "gobber2:gobber2_block_end", "sophisticatedbackpacks:stack_upgrade_tier_4");
  potting_upgrade("sophisticatedstorage:upgrade_base", "create:andesite_alloy_block", "sophisticatedstorage:stack_upgrade_tier_2");
  potting_upgrade("sophisticatedstorage:stack_upgrade_tier_2", "mna:vinteum_block", "sophisticatedstorage:stack_upgrade_tier_3");
  potting_upgrade("sophisticatedstorage:stack_upgrade_tier_3", "extendedcrafting:black_iron_block", "sophisticatedstorage:stack_upgrade_tier_4");
  potting_upgrade("sophisticatedstorage:stack_upgrade_tier_4", "gobber2:gobber2_block_end", "sophisticatedstorage:stack_upgrade_tier_5");
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function sophisticated() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "sophisticatedbackpacks:advanced_tool_swapper_upgrade",
    "sophisticatedbackpacks:infinity_upgrade",
    "sophisticatedbackpacks:stack_upgrade_omega_tier",
    "sophisticatedbackpacks:stack_upgrade_starter_tier",
    "sophisticatedbackpacks:tool_swapper_upgrade",
    "sophisticatedstorage:advanced_pump_upgrade",
    "sophisticatedstorage:basic_tier_upgrade",
    "sophisticatedstorage:basic_to_diamond_tier_upgrade",
    "sophisticatedstorage:basic_to_gold_tier_upgrade",
    "sophisticatedstorage:basic_to_iron_tier_upgrade",
    "sophisticatedstorage:basic_to_netherite_tier_upgrade",
    "sophisticatedstorage:copper_to_diamond_tier_upgrade",
    "sophisticatedstorage:copper_to_gold_tier_upgrade",
    "sophisticatedstorage:copper_to_netherite_tier_upgrade",
    "sophisticatedstorage:gold_to_netherite_tier_upgrade",
    "sophisticatedstorage:infinity_upgrade",
    "sophisticatedstorage:iron_to_diamond_tier_upgrade",
    "sophisticatedstorage:iron_to_netherite_tier_upgrade",
    "sophisticatedstorage:pump_upgrade",
    "sophisticatedstorage:stack_upgrade_omega_tier",
    "sophisticatedstorage:stack_upgrade_tier_1_plus",
    "sophisticatedstorage:stack_upgrade_tier_1",
    "sophisticatedstorage:xp_pump_upgrade",
    /sophisticatedbackpacks:stack_downgrade/,
    /sophisticatedstorage:stack_downgrade/
  ];
  let hiding = [
    /sophisticatedbackpacks:backpack/,
    /sophisticatedstorage:barrel/,
    /sophisticatedstorage:chest/,
    /sophisticatedstorage:copper_barrel/,
    /sophisticatedstorage:copper_chest/,
    /sophisticatedstorage:copper_shulker_box/,
    /sophisticatedstorage:diamond_barrel/,
    /sophisticatedstorage:diamond_chest/,
    /sophisticatedstorage:diamond_shulker_box/,
    /sophisticatedstorage:gold_barrel/,
    /sophisticatedstorage:gold_chest/,
    /sophisticatedstorage:gold_shulker_box/,
    /sophisticatedstorage:iron_barrel/,
    /sophisticatedstorage:iron_chest/,
    /sophisticatedstorage:iron_shulker_box/,
    /sophisticatedstorage:limited_barrel_1/,
    /sophisticatedstorage:limited_barrel_2/,
    /sophisticatedstorage:limited_barrel_3/,
    /sophisticatedstorage:limited_barrel_4/,
    /sophisticatedstorage:limited_copper_barrel_1/,
    /sophisticatedstorage:limited_copper_barrel_2/,
    /sophisticatedstorage:limited_copper_barrel_3/,
    /sophisticatedstorage:limited_copper_barrel_4/,
    /sophisticatedstorage:limited_diamond_barrel_1/,
    /sophisticatedstorage:limited_diamond_barrel_2/,
    /sophisticatedstorage:limited_diamond_barrel_3/,
    /sophisticatedstorage:limited_diamond_barrel_4/,
    /sophisticatedstorage:limited_gold_barrel_1/,
    /sophisticatedstorage:limited_gold_barrel_2/,
    /sophisticatedstorage:limited_gold_barrel_3/,
    /sophisticatedstorage:limited_gold_barrel_4/,
    /sophisticatedstorage:limited_iron_barrel_1/,
    /sophisticatedstorage:limited_iron_barrel_2/,
    /sophisticatedstorage:limited_iron_barrel_3/,
    /sophisticatedstorage:limited_iron_barrel_4/,
    /sophisticatedstorage:limited_netherite_barrel_1/,
    /sophisticatedstorage:limited_netherite_barrel_2/,
    /sophisticatedstorage:limited_netherite_barrel_3/,
    /sophisticatedstorage:limited_netherite_barrel_4/,
    /sophisticatedstorage:netherite_barrel/,
    /sophisticatedstorage:netherite_chest/,
    /sophisticatedstorage:netherite_shulker_box/,
    /sophisticatedstorage:shulker_box/
  ];
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
sophisticated();
//#endregion
