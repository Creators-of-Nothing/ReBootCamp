//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove({ id: "apotheosis:enchanting/trident" });
  //#endregion
  //#region - Bookshelves
  e.remove([{ id: "apotheosis:hellshelf" }, { id: "apotheosis:seashelf" }, { id: "apotheosis:dormant_deepshelf" }, { id: "apotheosis:endshelf" }]);
  let potting_bookshelf = (Material1, Material2, Potion, Result) => {
    e.shaped(Result, ["AAA", "BCD", "AEA"], {
      A: Material1,
      B: Material2,
      C: "createutilities:void_steel_ingot",
      D: Potion,
      E: "#forge:bookshelves"
    });
  };
  potting_bookshelf("minecraft:nether_bricks", "minecraft:blaze_rod", Item.of("minecraft:potion", '{Potion:"minecraft:long_fire_resistance"}'), "apotheosis:hellshelf");
  potting_bookshelf("minecraft:prismarine_bricks", "minecraft:pufferfish", Item.of("minecraft:potion", '{Potion:"minecraft:long_water_breathing"}'), "apotheosis:seashelf");
  potting_bookshelf("minecraft:deepslate_tiles", "minecraft:sculk", Item.of("minecraft:potion", '{Potion:"minecraft:long_night_vision"}'), "apotheosis:dormant_deepshelf");
  potting_bookshelf("minecraft:end_stone_bricks", "minecraft:dragon_breath", Item.of("minecraft:potion", '{Potion:"minecraft:long_slow_falling"}'), "apotheosis:endshelf");
  //#endregion
  //#region - Library
  e.remove({ id: "apotheosis:library" });
  e.shaped("apotheosis:library", [" A ", "BCB", "DEF"], {
    A: "handcrafted:stackable_book",
    B: "#forge:chests/wooden",
    C: "apotheosis:endshelf",
    D: "apotheosis:hellshelf",
    E: "apotheosis:seashelf",
    F: "apotheosis:dormant_deepshelf"
  });
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function apotheosis() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["apotheosis:inert_trident"];
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
apotheosis();
//#endregion
