//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Router
  e.remove({ id: "modularrouters:modular_router" });
  e.shaped("4x modularrouters:modular_router", ["ABA", "CDC", "ACA"], {
    A: "create:andesite_alloy",
    B: "create:filter",
    C: "pipez:universal_pipe",
    D: "create:polished_rose_quartz"
  });
  //#endregion
  //#region - Upgrades
  e.remove([{ id: "modularrouters:augment_core" }, { id: "modularrouters:blank_module" }, { id: "modularrouters:blank_upgrade" }]);
  e.shaped("4x modularrouters:augment_core", ["ABA", "BCB", "ABA"], {
    A: "minecraft:gold_nugget",
    B: "minecraft:paper",
    C: "create:andesite_alloy"
  });
  e.shaped("4x modularrouters:blank_upgrade", ["ABB", "ACB", " AB"], {
    A: "minecraft:paper",
    B: "minecraft:gold_nugget",
    C: "create:andesite_alloy"
  });
  e.shaped("6x modularrouters:blank_module", [" A ", "ABA", "CCC"], {
    A: "minecraft:paper",
    B: "create:andesite_alloy",
    C: "minecraft:gold_nugget"
  });
  //#endregion
});
//#endregion
