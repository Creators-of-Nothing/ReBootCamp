//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Warp Dust
  e.remove({ id: "waystones:warp_dust" });
  e.shapeless("waystones:warp_dust", ["malum:hex_ash", "minecraft:ender_pearl"]);
  //#endregion
  //#region - Waystones
  e.remove([
    { id: "waystones:waystone" },
    { id: "waystones:mossy_waystone" },
    { id: "waystones:mossy_waystone_convert" },
    { id: "waystones:sandy_waystone" },
    { id: "waystones:portstone" },
    { id: "waystones:sharestone" }
  ]);
  let potting = (Base, Material, Center, Result) => {
    e.shaped(Result, [" A ", "BCB", "ADA"], {
      A: Material,
      B: "waystones:warp_dust",
      C: Center,
      D: Base
    });
  };
  potting("wormhole:basic_target_cell", "minecraft:stone", "waystones:warp_dust", "waystones:waystone");
  potting("wormhole:basic_target_cell", "minecraft:mossy_stone_bricks", "waystones:warp_dust", "waystones:mossy_waystone");
  potting("wormhole:basic_target_cell", "minecraft:chiseled_sandstone", "waystones:warp_dust", "waystones:sandy_waystone");
  potting("wormhole:advanced_target_cell", "minecraft:stone_bricks", "waystones:warp_stone", "waystones:sharestone");
  potting("wormhole:basic_target_cell", "minecraft:smooth_stone", "waystones:warp_stone", "waystones:portstone");
  //#endregion
  //#region - Warp Plate
  e.remove({ id: "waystones:warp_plate" });
  e.shaped("waystones:warp_plate", ["   ", "AAA", "BCB"], {
    A: "waystones:warp_dust",
    B: "minecraft:smooth_stone_slab",
    C: "wormhole:basic_target_cell"
  });
  //#endregion
  //#region - Warp Stone
  e.remove({ id: "waystones:warp_stone" });
  e.shaped("waystones:warp_stone", [" A ", "ABA", " A "], {
    A: "waystones:warp_dust",
    B: "ars_nouveau:source_gem"
  });
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function waystones() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [/waystones:.*_scroll/];
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
waystones();
//#endregion
