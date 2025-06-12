//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Flux Dust
  e.custom({
    type: "extendedcrafting:shaped_ender_crafter",
    pattern: [" A ", "ABA", " A "],
    key: {
      A: {
        item: "cataclysm:black_steel_nugget"
      },
      B: {
        item: "embers:ember_grit"
      }
    },
    result: {
      item: "fluxnetworks:flux_dust",
      count: 4
    }
  });
  //#endregion
  //#region - Core, Block & Point/Plug
  e.remove([{ id: "fluxnetworks:fluxplug" }, { id: "fluxnetworks:fluxpoint" }, { id: "fluxnetworks:fluxcore" }, { id: "fluxnetworks:fluxblock" }]);
  let potting_element = (Base, Material, Result) => {
    e.shaped(Result, [" A ", "ABA", " A "], {
      A: Material,
      B: Base
    });
  };
  potting_element("cataclysm:ancient_metal_nugget", "fluxnetworks:flux_dust", "4x fluxnetworks:flux_core");
  potting_element("cataclysm:witherite_block", "fluxnetworks:flux_core", "fluxnetworks:flux_block");
  potting_element("modularrouters:range_up_augment", "fluxnetworks:flux_core", "fluxnetworks:flux_point");
  potting_element("modularrouters:range_down_augment", "fluxnetworks:flux_core", "fluxnetworks:flux_plug");
  //#endregion
  //#region - Controller + Storage
  e.remove([{ id: "fluxnetworks:fluxcontroller" }, { id: "fluxnetworks:basicfluxstorage" }, { id: "fluxnetworks:herculeanfluxstorage" }, { id: "fluxnetworks:gargantuanfluxstorage" }]);
  let potting_block_complex = (Base, Material, Flux, Result) => {
    e.shaped(Result, ["ABA", "BCB", "ABA"], {
      A: Material,
      B: Flux,
      C: Base
    });
  };
  potting_block_complex("ars_nouveau:source_jar", "extendedcrafting:black_iron_ingot", "fluxnetworks:flux_dust", "fluxnetworks:basic_flux_storage");
  potting_block_complex("fluxnetworks:basic_flux_storage", "extendedcrafting:ender_ingot", "fluxnetworks:flux_core", "fluxnetworks:herculean_flux_storage");
  potting_block_complex("fluxnetworks:herculean_flux_storage", "extendedcrafting:enhanced_ender_ingot", "fluxnetworks:flux_block", "fluxnetworks:gargantuan_flux_storage");
  potting_block_complex("fluxnetworks:gargantuan_flux_storage", "extendedcrafting:enhanced_redstone_ingot", "fluxnetworks:flux_block", "fluxnetworks:flux_controller");
  //#endregion
  //#region - Configurator
  e.remove({ id: "fluxnetworks:fluxconfigurator" });
  e.shaped("fluxnetworks:flux_configurator", [" A ", " BA", "B  "], {
    A: "fluxnetworks:flux_dust",
    B: "#forge:rods/wooden"
  });
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function fluxnetworks() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [];
  let hiding = ["fluxnetworks:admin_configurator"];
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
fluxnetworks();
//#endregion
