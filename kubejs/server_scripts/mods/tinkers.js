//#region - Crafts
ServerEvents.recipes(e => {
  e.remove({id: /createaddition:compat\/tconstruct\//})
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function tinkers() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [/tconstruct:.*_sand_cast/, "tconstruct:plate_cast", "tconstruct:wire_cast", "tconstruct:potion_bucket", "tconstruct:debris_nugget", /ticex:rf_furnace_fuel_/, "tconstruct:copper_can", "ticex:exhausted_glove", "ticex:resonance_gauntlet", "tcompat:energy_arrow", "tcompat:mana_arrow"];
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
