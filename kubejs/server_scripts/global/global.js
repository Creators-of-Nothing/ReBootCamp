//#region -Tags
ServerEvents.tags(["item", "block"], e => {
  //#region - Crafting Table
  e.add("forge:crafting_tables", ["minecraft:crafting_table", /biomeswevegone:.*_crafting_table/]);
  //#endregion
});
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Angel Ring
  e.remove({ id: "create:mechanical_crafting/ascended_flight_ring" });
  e.custom({
    type: "create:mechanical_crafting",
    key: {
      A: {
        item: "minecraft:feather"
      },
      B: {
        item: "create:brass_ingot"
      },
      C: {
        item: "mythicbotany:alfsteel_ingot"
      },
      D: {
        item: "malum:hallowed_gold_ingot"
      },
      E: {
        item: "ad_astra:cheese"
      },
      F: {
        item: "embers:dawnstone_ingot"
      },
      G: {
        item: "cataclysm:ancient_metal_ingot"
      },
      H: {
        item: "gobber2:gobber2_ring_end"
      },
      I: {
        item: "minecraft:gold_ingot"
      }
    },
    pattern: [" ABA ", "ACDEA", "FGHGF", "IEDCI", " IBI "],
    result: {
      item: "angelring:angel_ring"
    }
  });
  //#endregion
  //#region - Guide Book
  e.remove({ id: "sebastrnlib:sebastrn_mods_guide_book_recipe_shapeless" });
  e.replaceInput({ input: "minecraft:crafting_table" }, "minecraft:crafting_table", "#forge:crafting_tables");
  //#endregion
  //#region - Disenchanting Table
  e.replaceInput({ id: "disenchanting_table:disenchanting_table" }, "minecraft:lapis_lazuli", "createutilities:void_steel_ingot");
  //#endregion
  //#region - Llama Plush
  e.remove({ id: /moa_decor_toys:llama/ });
  let potting_llama_plush = (Wool, Result) => {
    e.shapeless(Result, ["moa_decor_toys:gemadejuguetes", "minecraft:leather", "#minecraft:wool_carpets", Wool]);
  };
  potting_llama_plush("minecraft:white_wool", "moa_decor_toys:llamablanca");
  potting_llama_plush("minecraft:brown_wool", "moa_decor_toys:llamacafe");
  potting_llama_plush("minecraft:yellow_wool", "moa_decor_toys:llamacrema");
  potting_llama_plush("minecraft:light_gray_wool", "moa_decor_toys:llamagris");
  //#endregion
  //#region - Ice and Fire
  // Ores
  e.replaceInput({ input: "iceandfire:silver_ore" }, "iceandfire:silver_ore", "embers:silver_ore");
  e.replaceInput({ input: "iceandfire:deepslate_silver_ore" }, "iceandfire:deepslate_silver_ore", "embers:deepslate_silver_ore");
  e.replaceInput({ input: "iceandfire:raw_silver" }, "iceandfire:raw_silver", "embers:raw_silver");
  e.replaceInput({ input: "iceandfire:raw_silver_block" }, "iceandfire:raw_silver_block", "embers:raw_silver_block");
  e.replaceInput({ input: "iceandfire:silver_nugget" }, "iceandfire:silver_nugget", "embers:silver_nugget");
  e.replaceInput({ input: "iceandfire:silver_ingot" }, "iceandfire:silver_ingot", "embers:silver_ingot");
  e.replaceInput({ input: "iceandfire:silver_block" }, "iceandfire:silver_block", "embers:silver_block");
  e.replaceOutput({ output: "iceandfire:silver_ore" }, "iceandfire:silver_ore", "embers:silver_ore");
  e.replaceOutput({ output: "iceandfire:deepslate_silver_ore" }, "iceandfire:deepslate_silver_ore", "embers:deepslate_silver_ore");
  e.replaceOutput({ output: "iceandfire:raw_silver" }, "iceandfire:raw_silver", "embers:raw_silver");
  e.replaceOutput({ output: "iceandfire:raw_silver_block" }, "iceandfire:raw_silver_block", "embers:raw_silver_block");
  e.replaceOutput({ output: "iceandfire:silver_nugget" }, "iceandfire:silver_nugget", "embers:silver_nugget");
  e.replaceOutput({ output: "iceandfire:silver_ingot" }, "iceandfire:silver_ingot", "embers:silver_ingot");
  e.replaceOutput({ output: "iceandfire:silver_block" }, "iceandfire:silver_block", "embers:silver_block");
  //#endregion
  //#region - Ender Block
  e.remove([{ id: "betterend:ender_perl_to_block" }, { id: "betterend:ender_block_to_perl" }]);
  e.shapeless("9x minecraft:ender_pearl", "betterend:ender_block");
  e.shaped("betterend:ender_block", ["AAA", "AAA", "AAA"], {
    A: "minecraft:ender_pearl"
  });
  //#endregion
  //#region - Nether Wart
  e.shapeless("9x minecraft:nether_wart", "minecraft:nether_wart_block");
  //#endregion
  //#region - Summoning Crystal
  e.remove({ id: /iceandfire:summoning_crystal_/ });
  e.shapeless("iceandfire:summoning_crystal_fire", ["iceandfire:fire_dragon_blood", "minecraft:ender_pearl", "minecraft:diamond"]);
  e.shapeless("iceandfire:summoning_crystal_ice", ["iceandfire:ice_dragon_blood", "minecraft:ender_pearl", "minecraft:diamond"]);
  e.shapeless("iceandfire:summoning_crystal_lightning", ["iceandfire:lightning_dragon_blood", "minecraft:ender_pearl", "minecraft:diamond"]);
  //#endregion
  //#region - Compression & Decompression
  let potting_compress_and_decompress = (count, base, compress) => {
    // Vérification du count pour appliquer un craft avec 4 ou 9 items
    e.shaped(compress, count === 4 ? ["AA", "AA"] : ["AAA", "AAA", "AAA"], { A: base });
    e.shapeless(`${count}x ${base}`, compress);
  };
  potting_compress_and_decompress(9, "botania:pebble", "minecraft:cobblestone");
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function global() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    // Alex's Caves
    "alexscaves:nuclear_furnace_component",
    /alexscaves:.*uranium/,
    "alexscaves:charred_remnant",
    "alexscaves:nuclear_siren",
    "alexscaves:nuclear_bomb",
    // Angel Ring 2
    "angelring:diamond_ring",
    /angelring:.*_angel_ring/,
    // Aquaculture
    "aquaculture:neptunes_bounty",
    // Enigmatic Legacy
    "enigmaticlegacy:deception_amulet",
    "enigmaticlegacy:etherium_scraps",
    // FTB Quests
    "ftbquests:barrier",
    "ftbquests:stage_barrier",
    "ftbquests:detector",
    "ftbquests:loot_crate_opener",
    "ftbquests:screen_1",
    "ftbquests:screen_3",
    "ftbquests:screen_5",
    "ftbquests:screen_7",
    "ftbquests:task_screen_configurator",
    // HammerLib
    /hammerlib:/,
    // Ice and Fire
    "iceandfire:silver_ore",
    "iceandfire:deepslate_silver_ore",
    "iceandfire:raw_silver",
    "iceandfire:raw_silver_block",
    "iceandfire:silver_nugget",
    "iceandfire:silver_ingot",
    "iceandfire:silver_block",
    "iceandfire:sapphire_block",
    "iceandfire:sapphire_gem",
    "iceandfire:sapphire_ore",
    // Relics
    "relics:researching_table",
    // Structure Gel API
    /structure_gel:/
  ];
  let hiding = [
    // Global
    /debug/,
    // Ice and Fire
    "iceandfire:dread_spawner",
    // Patchouli
    /patchouli:/,
    // Supplementaries
    /supplementaries:bamboo_spikes_tipped/
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
global();
//#endregion
