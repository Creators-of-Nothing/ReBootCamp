//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove({ id: /wormhole:/ });
  //#endregion
  //#region - Wormhole
  let potting = (Base, Material1, Material2, Result) => {
    e.shaped(Result, ["ABA", "BCB", "ABA"], {
      A: Material1,
      B: Material2,
      C: Base
    });
  };
  potting("malum:warp_flux", "malum:hallowed_gold_ingot", "malum:infernal_spirit", "wormhole:basic_energy_cell");
  potting("wormhole:basic_energy_cell", "malum:soul_stained_steel_ingot", "malum:infernal_spirit", "wormhole:advanced_energy_cell");
  potting("wormhole:advanced_energy_cell", "avaritia:infinity_ingot", "malum:infernal_spirit", "wormhole:creative_energy_cell");
  potting("malum:warp_flux", "malum:hallowed_gold_ingot", "malum:aerial_spirit", "wormhole:basic_target_cell");
  potting("wormhole:basic_target_cell", "malum:soul_stained_steel_ingot", "malum:aerial_spirit", "wormhole:advanced_target_cell");
  potting("ars_nouveau:magebloom_block", "malum:hallowed_gold_ingot", "malum:eldritch_spirit", "wormhole:portal_frame");
  potting("malum:warp_flux", "malum:hallowed_gold_ingot", "malum:arcane_charcoal", "wormhole:portal_stabilizer");
  potting("minecraft:target", "malum:hallowed_gold_ingot", "malum:earthen_spirit", "wormhole:target_device");
  potting("wormhole:target_device", "malum:soul_stained_steel_ingot", "malum:earthen_spirit", "wormhole:advanced_target_device");
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function wormhole() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["wormhole:coal_generator"];
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
wormhole();
//#endregion
