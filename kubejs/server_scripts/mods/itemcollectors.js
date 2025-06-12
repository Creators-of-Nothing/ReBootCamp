//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Collectors
  e.remove({ id: /itemcollectors:/ });
  let potting_collector = (result, top, center, bottom) => {
    e.shaped(result, [" A ", "BCB", "DED"], {
      A: top,
      B: "waystones:warp_dust",
      C: center,
      D: "create:andesite_alloy",
      E: bottom
    });
  };
  potting_collector("itemcollectors:basic_collector", "minecraft:ender_pearl", "minecraft:hopper", "create:andesite_alloy");
  potting_collector("itemcollectors:advanced_collector", "modularrouters:range_up_augment", "itemcollectors:basic_collector", "create:filter");
  //#endregion
});
//#endregion
