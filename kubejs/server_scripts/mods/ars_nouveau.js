//#region - Définition/Suppression/Masquage d'éléments dans JEI
function ars_nouveau() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "ars_nouveau:drygmy_se",
    "ars_nouveau:starbuncle_se",
    "ars_nouveau:whirlisprig_se",
    "ars_nouveau:wilden_hunter_se",
    "ars_nouveau:wilden_guardian_se",
    "ars_nouveau:wilden_stalker_se",
    "starbunclemania:star_saddle",
    "starbunclemania:star_sword",
    "starbunclemania:star_wand",
    "ars_nouveau:archwood_chest"
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
ars_nouveau();
//#endregion
