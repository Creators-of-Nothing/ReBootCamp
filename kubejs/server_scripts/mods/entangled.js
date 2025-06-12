//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Block
  e.remove({ id: "entangled:block" });
  e.shaped("entangled:block", ["ABA", "CDC", "ACA"], {
    A: "#forge:ender_pearls",
    B: "create:item_vault",
    C: "pipez:universal_pipe",
    D: "mob_grinding_utils:tank"
  });
  //#endregion
  //#region - Binder
  e.remove({ id: "entangled:item" });
  e.shaped("entangled:item", [" AB", " CA", "C  "], { A: "create:andesite_alloy", B: "mob_ginding_utils:fluid_xp_bucket", C: "#forge:rods/wooden" });
  //#endregion
});
//#endregion
