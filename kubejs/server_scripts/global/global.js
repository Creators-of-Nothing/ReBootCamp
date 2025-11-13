//#region -Tags
ServerEvents.tags(["item", "block"], e => {
  //#region - Crafting Table
  e.add("forge:crafting_tables", ["minecraft:crafting_table", /biomeswevegone:.*_crafting_table/]);
  //#endregion
});
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Replace Input
  e.replaceInput({ input: "minecraft:crafting_table" }, "minecraft:crafting_table", "#forge:crafting_tables");
  //#endregion
  //#region - Compression & Decompression
  e.remove({ id: "minecraft:nether_wart_block" });
  let potting_compress_and_decompress = (count, base, compress) => {
    // Vérification du count pour appliquer un craft avec 4 ou 9 items
    e.shaped(compress, count === 4 ? ["AA", "AA"] : ["AAA", "AAA", "AAA"], { A: base });
    e.shapeless(`${count}x ${base}`, compress);
  };
  potting_compress_and_decompress(9, "botania:pebble", "minecraft:cobblestone");
  potting_compress_and_decompress(9, "minecraft:nether_wart", "minecraft:nether_wart_block");
  //#endregion
  //#region - A ranger
  //#region - Others
  e.remove({ id: "alexscaves:furnace/smooth_bone_smelting" });
  e.remove({ id: "alexscaves:hollow_bone" });
  e.remove({ id: "alexscaves:thin_bone" });
  //#endregion
  //#region - Ender Block
  // e.remove([{ id: "betterend:ender_perl_to_block" }, { id: "betterend:ender_block_to_perl" }]);
  // e.shapeless("9x minecraft:ender_pearl", "betterend:ender_block");
  // e.shaped("betterend:ender_block", ["AAA", "AAA", "AAA"], {
  // A: "minecraft:ender_pearl"
  // });
  //#endregion
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
    // Relics
    "relics:researching_table",
    // Structure Gel API
    /structure_gel:/
  ];
  let hiding = [
    // Global
    /debug/,
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
