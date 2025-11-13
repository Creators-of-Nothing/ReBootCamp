//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([{ id: "iceandfire:ash_to_charcoal" }, { id: "iceandfire:dragon_ice" }]);
  //#endregion
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
  //#region - Summoning Crystal
  e.remove({ id: /iceandfire:summoning_crystal_/ });
  e.shapeless("iceandfire:summoning_crystal_fire", ["iceandfire:fire_dragon_blood", "minecraft:ender_pearl", "minecraft:diamond"]);
  e.shapeless("iceandfire:summoning_crystal_ice", ["iceandfire:ice_dragon_blood", "minecraft:ender_pearl", "minecraft:diamond"]);
  e.shapeless("iceandfire:summoning_crystal_lightning", ["iceandfire:lightning_dragon_blood", "minecraft:ender_pearl", "minecraft:diamond"]);
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function iceandfire() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["iceandfire:silver_ore", "iceandfire:deepslate_silver_ore", "iceandfire:raw_silver", "iceandfire:raw_silver_block", "iceandfire:silver_nugget", "iceandfire:silver_ingot", "iceandfire:silver_block", "iceandfire:sapphire_block", "iceandfire:sapphire_gem", "iceandfire:sapphire_ore"];
  let hiding = ["iceandfire:dread_spawner"];
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
iceandfire();
//#endregion
