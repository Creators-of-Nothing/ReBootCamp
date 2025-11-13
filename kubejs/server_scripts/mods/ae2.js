//#region - Crafts
ServerEvents.recipes(e => {
  e.remove([{ id: /create:milling\/compat\/ae2\// }, { id: /createaddition:compat\/ae2\// }, { id: /ad_astra_giselle_addon:compat\/ae2\// }]);
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function ae2() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [/ae2omnicells:.*complex/, "ae2omnicells:netherite_scrap_block"];
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
ae2();
//#endregion
