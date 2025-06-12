//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Mega Torch
  e.remove({ id: "torchmaster:megatorch" });
  e.shaped("torchmaster:megatorch", [" A ", " B ", " B "], {
    A: "supplementaries:fire_pit",
    B: "#minecraft:logs"
  });
  //#endregion
  //#region - Dread Lamp
  e.remove({ id: "torchmaster:dreadlamp" });
  e.shaped("torchmaster:dreadlamp", [" A ", "BCB", " A "], {
    A: "#chipped:obsidian",
    B: "#forge:glass/colorless",
    C: "supplementaries:fire_pit"
  });
  //#endregion
});
//#endregion
