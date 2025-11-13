//#region - Définition/Suppression/Masquage d'éléments dans JEI
function enigmaticlegacy() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["enigmaticlegacy:magnet_ring", "enigmaticlegacy:super_magnet_ring"];
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
enigmaticlegacy();
//#endregion
