//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Gaia Spirit
  e.shaped("kubejs:gaia_block", ["AAA", "AAA", "AAA"], {
    A: "botania:gaia_ingot"
  });
  e.shapeless("9x botania:gaia_ingot", "kubejs:gaia_block");
  e.shaped("kubejs:gaia_block", [" A ", "ABA", " A "], {
    A: "botania:life_essence",
    B: "botania:terrasteel_block"
  });
  //#endregion
});
//#endregion
