//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Netherite Trapdoor/Door/Safe
  e.remove([{ id: "supplementaries:netherite_trapdoor" }, { id: "supplementaries:netherite_door" }]);
  e.shapeless("supplementaries:netherite_trapdoor", ["supplementaries:gold_trapdoor", "minecraft:netherite_ingot"]);
  e.shapeless("supplementaries:netherite_door", ["supplementaries:gold_door", "minecraft:netherite_ingot"]);
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function supplementaries() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["supplementaries:safe"];
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
supplementaries();
//#endregion
