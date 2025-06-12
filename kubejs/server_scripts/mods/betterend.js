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
  let potting_helmets = (Material, Result) => {
    e.shaped(Result, ["AAA", "A A"], {
      A: Material
    });
  };
  potting_helmets("betterend:thallasium_ingot", "betterend:thallasium_helmet");
  potting_helmets("betterend:terminite_ingot", "betterend:terminite_helmet");
  let potting_chestplates = (Material, Result) => {
    e.shaped(Result, ["A A", "AAA", "AAA"], {
      A: Material
    });
  };
  potting_chestplates("betterend:thallasium_ingot", "betterend:thallasium_chestplate");
  potting_chestplates("betterend:terminite_ingot", "betterend:terminite_chestplate");
  let potting_leggings = (Material, Result) => {
    e.shaped(Result, ["AAA", "A A", "A A"], {
      A: Material
    });
  };
  potting_leggings("betterend:thallasium_ingot", "betterend:thallasium_leggings");
  potting_leggings("betterend:terminite_ingot", "betterend:terminite_leggings");
  let potting_boots = (Material, Result) => {
    e.shaped(Result, ["A A", "A A"], {
      A: Material
    });
  };
  potting_boots("betterend:thallasium_ingot", "betterend:thallasium_boots");
  potting_boots("betterend:terminite_ingot", "betterend:terminite_boots");
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
