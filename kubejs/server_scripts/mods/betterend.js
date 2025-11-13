//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  e.removeAllTagsFrom("betterend:thallasium_ingot");
  e.add("minecraft:beacon_payment_items", "betterend:thallasium_ingot");
});
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Aeternium
  let potting_aeternium = (Base, Result) => {
    e.custom({
      type: "minecraft:smithing_transform",
      addition: {
        item: "betterend:aeternium_ingot"
      },
      base: {
        item: Base
      },
      result: {
        item: Result
      },
      template: {
        item: "betterend:plate_upgrade_smithing_template"
      }
    });
  };
  potting_aeternium("betterend:terminite_helmet", "betterend:aeternium_helmet");
  potting_aeternium("betterend:terminite_chestplate", "betterend:aeternium_chestplate");
  potting_aeternium("betterend:terminite_leggings", "betterend:aeternium_leggings");
  potting_aeternium("betterend:terminite_boots", "betterend:aeternium_boots");
  //#endregion
  //#region - Thallasium & Terminite
  let potting_helmets = (Material, Helmet, Chestplate, Leggings, Boots) => {
    e.shaped(Helmet, ["AAA", "A A"], {
      A: Material
    });
    e.shaped(Chestplate, ["A A", "AAA", "AAA"], {
      A: Material
    });
    e.shaped(Leggings, ["AAA", "AAA", "A A"], {
      A: Material
    });
    e.shaped(Boots, ["A A", "A A"], {
      A: Material
    });
  };
  potting_helmets("betterend:thallasium_ingot", "betterend:thallasium_helmet", "betterend:thallasium_chestplate", "betterend:thallasium_leggings", "betterend:thallasium_boots");
  potting_helmets("betterend:terminite_ingot", "betterend:terminite_helmet", "betterend:terminite_chestplate", "betterend:terminite_leggings", "betterend:terminite_boots");
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function better_end() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [/betterend:.*_forged_plate/, /betterend:.*_chest$/];
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
better_end();
//#endregion
