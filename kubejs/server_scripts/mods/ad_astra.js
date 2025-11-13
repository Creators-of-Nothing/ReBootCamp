//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Replace Input
  e.replaceInput({ input: "ad_astra:iron_plate" }, "ad_astra:iron_plate", "embers:iron_plate");
  e.replaceInput({ input: "ad_astra:iron_rod" }, "ad_astra:iron_rod", "createaddition:iron_rod");
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function ad_astra() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["ad_astra:etrium_plate", "ad_astra:etrium_rod", "ad_astra:photovoltaic_etrium_cell", "ad_astra:solar_panel", "ad_astra:iron_plate", "ad_astra:iron_rod", "ad_astra:coal_generator"];
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
ad_astra();
//#endregion
