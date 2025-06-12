//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Pipes
  e.remove({ id: /pipez:.*_pipe/ });
  let potting_pipes = (Material, Result) => {
    e.shaped(Result, ["AAA", "BCB", "AAA"], {
      A: "create:andesite_alloy",
      B: Material,
      C: "minecraft:redstone"
    });
  };
  potting_pipes("minecraft:dropper", "8x pipez:item_pipe");
  potting_pipes("minecraft:bucket", "8x pipez:fluid_pipe");
  potting_pipes("minecraft:redstone_block", "8x pipez:energy_pipe");
  e.shaped("6x pipez:universal_pipe", ["ABC", "D D", "CBA"], {
    A: "pipez:item_pipe",
    B: "pipez:energy_pipe",
    C: "pipez:fluid_pipe",
    D: "create:andesite_alloy"
  });
  //#endregion
  //#region - Upgrades
  e.remove({ id: /pipez:.*_upgrade/ });
  let potting_upgrades = (Base, Material, Result) => {
    e.custom({
      type: "create:deploying",
      ingredients: [
        {
          item: Base
        },
        {
          item: Material
        }
      ],
      results: [
        {
          item: Result
        }
      ]
    });
  };
  potting_upgrades("minecraft:heavy_weighted_pressure_plate", "create:andesite_alloy_block", "pipez:basic_upgrade");
  potting_upgrades("pipez:basic_upgrade", "mna:vinteum_block", "pipez:improved_upgrade");
  potting_upgrades("pipez:improved_upgrade", "extendedcrafting:black_iron_block", "pipez:advanced_upgrade");
  potting_upgrades("pipez:advanced_upgrade", "gobber2:gobber2_block_end", "pipez:ultimate_upgrade");
  potting_upgrades("pipez:ultimate_upgrade", "avaritia:infinity", "pipez:infinity_upgrade");
  //#endregion
  //#region - Wrench
  e.remove({ id: "pipez:wrench" });
  e.shaped("pipez:wrench", [" A ", " BA", "B  "], {
    A: "minecraft:flint",
    B: "#forge:rods/wooden"
  });
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function pipez() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["pipez:gas_pipe"];
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
pipez();
//#endregion
