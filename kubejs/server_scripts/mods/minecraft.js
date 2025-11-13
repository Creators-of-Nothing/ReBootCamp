//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  e.remove("c:chests", "minecraft:ender_chest");
  e.remove("handcrafted:chests", "minecraft:ender_chest");
  e.remove("forge:chests/wooden", "minecraft:trapped_chest");
});
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([{ id: "minecraft:netherite_ingot" }, { id: "minecraft:netherite_scrap" }]);
  //#endregion
  //#region - Replaced Inputs
  e.replaceInput({ input: "minecraft:chest" }, "minecraft:chest", "forge:chests/wooden");
  e.replaceInput({ input: "minecraft:barrel" }, "minecraft:barrel", "forge:barrels/wooden");
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function minecraft() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["minecraft:netherite_scrap", /minecraft:.*command_block/, "minecraft:structure_block", "minecraft:jigsaw"];
  let hiding = ["minecraft:tipped_arrow"];
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
minecraft();
//#endregion
