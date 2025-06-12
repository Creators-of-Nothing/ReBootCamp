//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Processor Binding
  e.remove({ id: "refinedstorage:processor_binding" });
  let potting_processor_binding = Material => {
    e.custom({
      // x4 - Ars Nouveau
      type: "ars_nouveau:imbuement",
      count: 4,
      input: {
        item: Material
      },
      output: "refinedstorage:processor_binding",
      pedestalItems: [],
      source: 50
    });
    e.custom({
      // x8 - Mana and Artifice
      type: "mna:arcane-furnace",
      tier: 1,
      input: Material,
      output: "refinedstorage:processor_binding",
      outputQuantity: 8,
      burnTime: 200
    });
    e.custom({
      // x16 - Botania
      type: "botania:elven_trade",
      ingredients: [
        {
          item: Material
        }
      ],
      output: [
        {
          count: 16,
          item: "refinedstorage:processor_binding"
        }
      ]
    });
    e.custom({
      // x32 - Ad Astra
      type: "ad_astra:compressing",
      cookingtime: 100,
      energy: 20,
      ingredient: {
        item: Material
      },
      result: {
        count: 32,
        id: "refinedstorage:processor_binding"
      }
    });
    e.custom({
      // x64 - Powah
      type: "powah:energizing",
      ingredients: [
        {
          item: Material
        }
      ],
      energy: 2000,
      result: {
        item: "refinedstorage:processor_binding",
        count: 64
      }
    });
  };
  potting_processor_binding("minecraft:slime_ball"); // Définition de l'élément utilisé pour les Bindings
  //#endregion
  //#region - Processors
  e.remove([
    // Suppression des crafts des processors
    { id: "refinedstorage:raw_basic_processor" },
    { id: "refinedstorage:raw_improved_processor" },
    { id: "refinedstorage:raw_advanced_processor" },
    { id: "extradisks:raw_withering_processor" }
  ]);
  let potting_processors = (Material, Heat, Count, Result) => {
    e.custom({
      type: "create:mixing",
      heatRequirement: Heat,
      ingredients: [
        {
          item: "refinedstorage:silicon"
        },
        {
          item: "refinedstorage:processor_binding"
        },
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
  potting_processors("create:andesite_alloy", "none", 1, "refinedstorage:raw_basic_processor");
  potting_processors("mna:vinteum_ingot", "none", 1, "refinedstorage:raw_improved_processor");
  potting_processors("extendedcrafting:black_iron_ingot", "none", 1, "refinedstorage:raw_advanced_processor");
  potting_processors("gobber2:gobber2_ingot_end", "none", 1, "extradisks:raw_withering_processor");
  // Heated
  potting_processors("create:andesite_alloy", "heated", 2, "refinedstorage:basic_processor");
  potting_processors("mna:vinteum_ingot", "heated", 2, "refinedstorage:improved_processor");
  potting_processors("extendedcrafting:black_iron_ingot", "heated", 2, "refinedstorage:advanced_processor");
  potting_processors("gobber2:gobber2_ingot_end", "heated", 2, "extradisks:withering_processor");
  // SuperHeated
  potting_processors("create:andesite_alloy", "superheated", 4, "refinedstorage:basic_processor");
  potting_processors("mna:vinteum_ingot", "superheated", 4, "refinedstorage:improved_processor");
  potting_processors("extendedcrafting:black_iron_ingot", "superheated", 4, "refinedstorage:advanced_processor");
  potting_processors("gobber2:gobber2_ingot_end", "superheated", 4, "extradisks:withering_processor");
  //#endregion
  //#region - Crafters
  e.remove([{ id: "refinedstorage:crafter" }, { id: "extrastorage:iron_crafter" }]);
  e.shaped("refinedstorage:crafter", ["ABA", "BCB", "ABA"], {
    A: "refinedstorage:quartz_enriched_iron",
    B: "refinedstorage:construction_core",
    C: "refinedstorage:machine_casing"
  });
  let potting_crafters = (Base, Material, Result) => {
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
  potting_crafters("refinedstorage:crafter", "create:andesite_alloy_block", "extrastorage:iron_crafter");
  potting_crafters("extrastorage:iron_crafter", "mna:vinteum_block", "extrastorage:gold_crafter");
  potting_crafters("extrastorage:gold_crafter", "extendedcrafting:black_iron_block", "extrastorage:diamond_crafter");
  potting_crafters("extrastorage:diamond_crafter", "gobber2:gobber2_block_end", "extrastorage:netherite_crafter");
  //#endregion
  //#region - Machine Casing
  e.remove([{ id: "refinedstorage:machine_casing" }, { id: "extradisks:advanced_machine_casing" }]);
  let potting_machine_casing = (Base, Result) => {
    e.shaped(Result, ["ABA", "BCB", "ABA"], {
      A: "extendedcrafting:black_iron_ingot",
      B: Base,
      C: "extendedcrafting:black_iron_block"
    });
  };
  potting_machine_casing("sophisticatedbackpacks:stack_upgrade_tier_1", "refinedstorage:machine_casing");
  potting_machine_casing("sophisticatedbackpacks:tank_upgrade", "extradisks:advanced_machine_casing");
  //#endregion
  //#region - Range Upgrades
  e.remove([{ id: "refinedstorage:range_upgrade" }, { id: "rsinfinitybooster:infinity_card" }, { id: "rsinfinitybooster:dimension_card" }]);
  let potting_range_upgrades = (Base, Material, Flux, Result) => {
    e.shaped(Result, ["ABA", "BCB", "ABA"], {
      A: Material,
      B: Base,
      C: Flux
    });
  };
  potting_range_upgrades("refinedstorage:upgrade", "ad_astra:steel_ingot", "fluxnetworks:flux_dust", "refinedstorage:range_upgrade");
  potting_range_upgrades("refinedstorage:range_upgrade", "draconicevolution:draconium_ingot", "fluxnetworks:flux_core", "rsinfinitybooster:infinity_card");
  potting_range_upgrades("rsinfinitybooster:infinity_card", "draconicevolution:awakened_draconium_ingot", "fluxnetworks:flux_block", "rsinfinitybooster:dimension_card");
  //#endregion
  //#region - Controller
  e.remove([{ id: "refinedstorage:controller" }]);
  e.shaped("refinedstorage:controller", ["ABA", "CDE", "AFA"], {
    A: "refinedstorage:silicon",
    B: "cataclysm:monstrous_horn",
    C: "cataclysm:ignitium_ingot",
    D: "extendedcrafting:ender_ingot_block",
    E: "cataclysm:cursium_ingot",
    F: "cataclysm:abyssal_egg"
  });
  //#endregion
  //#region - Storage Housings
  e.remove([{ id: "refinedstorage:storage_housing" }, { id: "extradisks:advanced_storage_housing" }]);
  let potting_storage_housings = (Base, Result) => {
    e.shaped(Result, ["ABA", "BCB", "DDD"], {
      A: "#forge:glass",
      B: "minecraft:redstone",
      C: Base,
      D: "refinedstorage:quartz_enriched_iron"
    });
  };
  potting_storage_housings("sophisticatedstorage:chest", "refinedstorage:storage_housing");
  potting_storage_housings("mob_grinding_utils:tank", "extradisks:advanced_storage_housing");
  //#endregion
  //#region - Storage Parts
  e.remove([{ id: /refinedstorage:.*_part/ }, { id: /extradisks:part\// }]);
  let potting_storage_parts = (Base, Material1, Material2, Result) => {
    e.shaped(Result, ["ABA", "BCB", "ABA"], {
      A: Material1,
      B: Material2,
      C: Base
    });
  };
  potting_storage_parts("kubejs:empty_storage_part", "refinedstorage:basic_processor", "minecraft:copper_ingot", "refinedstorage:1k_storage_part");
  potting_storage_parts("refinedstorage:1k_storage_part", "refinedstorage:basic_processor", "minecraft:copper_ingot", "refinedstorage:4k_storage_part");
  potting_storage_parts("refinedstorage:4k_storage_part", "refinedstorage:improved_processor", "create:andesite_alloy", "refinedstorage:16k_storage_part");
  potting_storage_parts("refinedstorage:16k_storage_part", "refinedstorage:improved_processor", "create:andesite_alloy", "refinedstorage:64k_storage_part");
  potting_storage_parts("refinedstorage:64k_storage_part", "refinedstorage:improved_processor", "mna:vinteum_ingot", "extradisks:256k_storage_part");
  potting_storage_parts("extradisks:256k_storage_part", "refinedstorage:improved_processor", "mna:vinteum_ingot", "extradisks:1024k_storage_part");
  potting_storage_parts("extradisks:1024k_storage_part", "refinedstorage:advanced_processor", "extendedcrafting:black_iron_ingot", "extradisks:4096k_storage_part");
  potting_storage_parts("extradisks:4096k_storage_part", "refinedstorage:advanced_processor", "extendedcrafting:black_iron_ingot", "extradisks:16384k_storage_part");
  potting_storage_parts("extradisks:16384k_storage_part", "refinedstorage:advanced_processor", "gobber2:gobber2_ingot_end", "extradisks:65536k_storage_part");
  potting_storage_parts("extradisks:65536k_storage_part", "refinedstorage:advanced_processor", "gobber2:gobber2_ingot_end", "extradisks:262144k_storage_part");
  potting_storage_parts("extradisks:262144k_storage_part", "extradisks:withering_processor", "draconicevolution:chaos_shard", "extradisks:1048576k_storage_part");
  potting_storage_parts("extradisks:1048576k_storage_part", "extradisks:withering_processor", "avaritia:infinity_ingot", "extradisks:infinite_storage_part");
  //#endregion
  //#region - Storage Disks & Blocks
  e.remove([{ id: /refinedstorage:.*_storage_disk/ }, { id: /refinedstorage:.*_storage_block/ }, { id: /extradisks:disk\// }, { id: /extradisks:blocks\// }]);
  let potting_storage_disks_and_blocks = (Part, Material, Result) => {
    e.shapeless(Result, [Material, Part]);
  };
  // Items Disks
  potting_storage_disks_and_blocks("refinedstorage:1k_storage_part", "refinedstorage:storage_housing", "refinedstorage:1k_storage_disk");
  potting_storage_disks_and_blocks("refinedstorage:4k_storage_part", "refinedstorage:storage_housing", "refinedstorage:4k_storage_disk");
  potting_storage_disks_and_blocks("refinedstorage:16k_storage_part", "refinedstorage:storage_housing", "refinedstorage:16k_storage_disk");
  potting_storage_disks_and_blocks("refinedstorage:64k_storage_part", "refinedstorage:storage_housing", "refinedstorage:64k_storage_disk");
  potting_storage_disks_and_blocks("extradisks:256k_storage_part", "refinedstorage:storage_housing", "extradisks:256k_storage_disk");
  potting_storage_disks_and_blocks("extradisks:1024k_storage_part", "refinedstorage:storage_housing", "extradisks:1024k_storage_disk");
  potting_storage_disks_and_blocks("extradisks:4096k_storage_part", "refinedstorage:storage_housing", "extradisks:4096k_storage_disk");
  potting_storage_disks_and_blocks("extradisks:16384k_storage_part", "refinedstorage:storage_housing", "extradisks:16384k_storage_disk");
  potting_storage_disks_and_blocks("extradisks:65536k_storage_part", "refinedstorage:storage_housing", "extradisks:65536k_storage_disk");
  potting_storage_disks_and_blocks("extradisks:262144k_storage_part", "refinedstorage:storage_housing", "extradisks:262144k_storage_disk");
  potting_storage_disks_and_blocks("extradisks:infinite_storage_part", "refinedstorage:storage_housing", "extradisks:infinite_storage_disk");
  // Items Blocks
  potting_storage_disks_and_blocks("refinedstorage:1k_storage_part", "refinedstorage:machine_casing", "refinedstorage:1k_storage_block");
  potting_storage_disks_and_blocks("refinedstorage:4k_storage_part", "refinedstorage:machine_casing", "refinedstorage:4k_storage_block");
  potting_storage_disks_and_blocks("refinedstorage:16k_storage_part", "refinedstorage:machine_casing", "refinedstorage:16k_storage_block");
  potting_storage_disks_and_blocks("refinedstorage:64k_storage_part", "refinedstorage:machine_casing", "refinedstorage:64k_storage_block");
  potting_storage_disks_and_blocks("extradisks:256k_storage_part", "refinedstorage:machine_casing", "extradisks:256k_storage_block");
  potting_storage_disks_and_blocks("extradisks:1024k_storage_part", "refinedstorage:machine_casing", "extradisks:1024k_storage_block");
  potting_storage_disks_and_blocks("extradisks:4096k_storage_part", "refinedstorage:machine_casing", "extradisks:4096k_storage_block");
  potting_storage_disks_and_blocks("extradisks:16384k_storage_part", "refinedstorage:machine_casing", "extradisks:16384k_storage_block");
  potting_storage_disks_and_blocks("extradisks:65536k_storage_part", "refinedstorage:machine_casing", "extradisks:65536k_storage_block");
  potting_storage_disks_and_blocks("extradisks:262144k_storage_part", "refinedstorage:machine_casing", "extradisks:262144k_storage_block");
  potting_storage_disks_and_blocks("extradisks:infinite_storage_part", "refinedstorage:machine_casing", "extradisks:infinite_storage_block");
  // Fluid Disks
  potting_storage_disks_and_blocks("refinedstorage:64k_storage_part", "extradisks:advanced_storage_housing", "refinedstorage:64k_fluid_storage_disk");
  potting_storage_disks_and_blocks("extradisks:256k_storage_part", "extradisks:advanced_storage_housing", "refinedstorage:256k_fluid_storage_disk");
  potting_storage_disks_and_blocks("extradisks:1024k_storage_part", "extradisks:advanced_storage_housing", "refinedstorage:1024k_fluid_storage_disk");
  potting_storage_disks_and_blocks("extradisks:4096k_storage_part", "extradisks:advanced_storage_housing", "refinedstorage:4096k_fluid_storage_disk");
  potting_storage_disks_and_blocks("extradisks:16384k_storage_part", "extradisks:advanced_storage_housing", "extradisks:16384k_fluid_storage_disk");
  potting_storage_disks_and_blocks("extradisks:65536k_storage_part", "extradisks:advanced_storage_housing", "extradisks:65536k_fluid_storage_disk");
  potting_storage_disks_and_blocks("extradisks:262144k_storage_part", "extradisks:advanced_storage_housing", "extradisks:262144k_fluid_storage_disk");
  potting_storage_disks_and_blocks("extradisks:infinite_storage_part", "extradisks:advanced_storage_housing", "extradisks:infinite_fluid_storage_disk");
  // Fluid Blocks
  potting_storage_disks_and_blocks("refinedstorage:64k_storage_part", "extradisks:advanced_machine_casing", "refinedstorage:64k_fluid_storage_block");
  potting_storage_disks_and_blocks("extradisks:256k_storage_part", "extradisks:advanced_machine_casing", "refinedstorage:256k_fluid_storage_block");
  potting_storage_disks_and_blocks("extradisks:1024k_storage_part", "extradisks:advanced_machine_casing", "refinedstorage:1024k_fluid_storage_block");
  potting_storage_disks_and_blocks("extradisks:4096k_storage_part", "extradisks:advanced_machine_casing", "refinedstorage:4096k_fluid_storage_block");
  potting_storage_disks_and_blocks("extradisks:16384k_storage_part", "extradisks:advanced_machine_casing", "extradisks:16384k_fluid_storage_block");
  potting_storage_disks_and_blocks("extradisks:65536k_storage_part", "extradisks:advanced_machine_casing", "extradisks:65536k_fluid_storage_block");
  potting_storage_disks_and_blocks("extradisks:262144k_storage_part", "extradisks:advanced_machine_casing", "extradisks:262144k_fluid_storage_block");
  potting_storage_disks_and_blocks("extradisks:infinite_storage_part", "extradisks:advanced_machine_casing", "extradisks:infinite_fluid_storage_block");
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function refinedstorage() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    /extrastorage:block_/,
    /extrastorage:storagepart_/,
    /extrastorage:disk_/,
    "extrastorage:neural_processor",
    "extrastorage:raw_neural_processor",
    /refinedstorage:creative_wireless/,
    /refinedstorageaddons:creative_wireless_/,
    "refinedstorage:creative_storage_disk",
    "refinedstorage:creative_fluid_storage_disk",
    /refinedstorage:.*_fluid_storage_part/,
    /extradisks:.*_fluid_storage_part/
  ];
  let hiding = [
    /refinedstorage:white_/,
    /refinedstorage:orange_/,
    /refinedstorage:magenta_/,
    /refinedstorage:yellow_/,
    /refinedstorage:lime_/,
    /refinedstorage:pink_/,
    /refinedstorage:gray_/,
    /refinedstorage:light_gray_/,
    /refinedstorage:cyan_/,
    /refinedstorage:purple_/,
    /refinedstorage:blue_/,
    /refinedstorage:brown_/,
    /refinedstorage:green_/,
    /refinedstorage:red_/,
    /refinedstorage:black_/
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
refinedstorage();
//#endregion
