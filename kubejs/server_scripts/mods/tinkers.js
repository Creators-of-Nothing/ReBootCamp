//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove({ id: /tconstruct:.*_sand_cast/ });
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function tinkers() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [/tconstruct:.*_sand_cast/, /tconstruct:plate.*_cast/, /tconstruct:wire.*_cast/, /tconstruct:gear.*_cast/, /tconstruct:potion_bucket/];
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
tinkers();
//#endregion
