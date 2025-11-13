//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Blazing Quartz
  e.remove([{ id: "malum:blazing_quartz_fragment" }, { id: "malum:blazing_quartz_from_fragment" }]);
  e.shapeless("9x malum:blazing_quartz_fragment", "malum:blazing_quartz");
  e.shaped("malum:blazing_quartz", ["AAA", "AAA", "AAA"], {
    A: "malum:blazing_quartz_fragment"
  });
  //#endregion
  //#region - Brilliance
  e.shapeless("9x malum:chunk_of_brilliance", "malum:cluster_of_brilliance");
  e.shaped("malum:cluster_of_brilliance", ["AAA", "AAA", "AAA"], {
    A: "malum:chunk_of_brilliance"
  });
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function malum() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [/malum:crushed_/, /malum:.*aluminum/, /malum:.*nickel/, /malum:.*uranium/];
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
malum();
//#endregion
