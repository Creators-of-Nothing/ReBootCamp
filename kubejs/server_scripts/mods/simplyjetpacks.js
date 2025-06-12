//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Thrusters
  let potting_thruster = (Material, Result) => {
    e.shaped(Result, [" A ", "ABA", "ACA"], {
      A: Material,
      B: "embers:ancient_motive_core",
      C: "minecraft:blaze_powder"
    });
  };
  potting_thruster("botania:pebble", "simplyjetpacks:thruster_te1");
  potting_thruster("ars_nouveau:source_gem", "simplyjetpacks:thruster_te2");
  potting_thruster("embers:dawnstone_ingot", "simplyjetpacks:thruster_te3");
  potting_thruster("botania:terrasteel_ingot", "simplyjetpacks:thruster_te4");
  potting_thruster("ad_astra:steel_ingot", "simplyjetpacks:thruster_te5");
  potting_thruster("avaritia:neutron_ingot", "simplyjetpacks:thruster_mek4");
  //#endregion
  //#region - Jetpacks
  let potting_jetpack = (Base, Material1, Material2, Thruster, Energy, Result) => {
    e.custom({
      type: "extendedcrafting:shaped_flux_crafter",
      powerRequired: Energy,
      pattern: ["ABA", "ACA", "D D"],
      key: {
        A: { item: Material1 },
        B: { item: Material2 },
        C: { item: Base },
        D: { item: Thruster }
      },
      result: { item: Result }
    });
  };
  potting_jetpack("simplyjetpacks:leather_strap", "minecraft:copper_ingot", "botania:pebble", "simplyjetpacks:thruster_te1", 64, "simplyjetpacks:jetpack_te1_armored");
  potting_jetpack("simplyjetpacks:jetpack_te1_armored", "create:andesite_alloy", "ars_nouveau:source_gem", "simplyjetpacks:thruster_te2", 1024, "simplyjetpacks:jetpack_te2_armored");
  potting_jetpack("simplyjetpacks:jetpack_te2_armored", "mna:vinteum_ingot", "embers:dawnstone_ingot", "simplyjetpacks:thruster_te3", 12288, "simplyjetpacks:jetpack_te3_armored");
  potting_jetpack("simplyjetpacks:jetpack_te3_armored", "extendedcrafting:black_iron_ingot", "botania:terrasteel_ingot", "simplyjetpacks:thruster_te4", 131072, "simplyjetpacks:jetpack_te4_armored");
  potting_jetpack("simplyjetpacks:jetpack_te4_armored", "gobber2:gobber2_ingot_end", "ad_astra:steel_ingot", "simplyjetpacks:thruster_te5", 1310720, "simplyjetpacks:jetpack_te5_enderium");
  potting_jetpack("simplyjetpacks:jetpack_te5_enderium", "avaritia:infinity_ingot", "avaritia:neutron_ingot", "simplyjetpacks:thruster_mek4", 25165824, "simplyjetpacks:jetpack_creative_armored");
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function simplyjetpacks() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "simplyjetpacks:cryogenic_crystal",
    "simplyjetpacks:flux_chestplate",
    "simplyjetpacks:jetpack_ie1_armored",
    "simplyjetpacks:jetpack_ie1",
    "simplyjetpacks:jetpack_ie2_armored",
    "simplyjetpacks:jetpack_ie2",
    "simplyjetpacks:jetpack_ie3_armored",
    "simplyjetpacks:jetpack_ie3",
    "simplyjetpacks:jetpack_mek1_armored",
    "simplyjetpacks:jetpack_mek1",
    "simplyjetpacks:jetpack_mek2_armored",
    "simplyjetpacks:jetpack_mek2",
    "simplyjetpacks:jetpack_mek3_armored",
    "simplyjetpacks:jetpack_mek3",
    "simplyjetpacks:jetpack_mek4_armored",
    "simplyjetpacks:jetpack_mek4",
    "simplyjetpacks:jetpack_te1",
    "simplyjetpacks:jetpack_te2",
    "simplyjetpacks:jetpack_te3",
    "simplyjetpacks:jetpack_te4",
    "simplyjetpacks:jetpack_te5",
    "simplyjetpacks:jetpack_vanilla1_armored",
    "simplyjetpacks:jetpack_vanilla1",
    "simplyjetpacks:jetpack_vanilla2_armored",
    "simplyjetpacks:jetpack_vanilla2",
    "simplyjetpacks:jetpack_vanilla3_armored",
    "simplyjetpacks:jetpack_vanilla3",
    "simplyjetpacks:jetpack_vanilla4_armored",
    "simplyjetpacks:jetpack_vanilla4",
    "simplyjetpacks:thruster_ie1",
    "simplyjetpacks:thruster_ie2",
    "simplyjetpacks:thruster_ie3",
    "simplyjetpacks:thruster_mek1",
    "simplyjetpacks:thruster_mek2",
    "simplyjetpacks:thruster_mek3",
    "simplyjetpacks:thruster_vanilla1",
    "simplyjetpacks:thruster_vanilla2",
    "simplyjetpacks:thruster_vanilla3",
    "simplyjetpacks:thruster_vanilla4",
    /simplyjetpacks:armorplating_/,
    /simplyjetpacks:unit_/
  ];
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
simplyjetpacks();
//#endregion
