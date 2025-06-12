//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Changed Crafts
  e.replaceInput({ id: "cataclysm:monstrous_eye" }, "minecraft:netherite_scrap", "minecraft:netherite_ingot");
  e.replaceInput({ id: "cataclysm:flame_eye" }, "minecraft:netherite_scrap", "minecraft:netherite_ingot");
});
//#endregion
