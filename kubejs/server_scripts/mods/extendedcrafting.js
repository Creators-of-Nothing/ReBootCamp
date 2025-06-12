//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Black Iron
  e.remove([{ id: "extendedcrafting:black_iron_ingot" }]);
  let potting_black_iron = (Base, Result) => {
    e.custom({
      type: "embers:alchemy",
      aspects: [
        {
          tag: "embers:aspectus/iron"
        }
      ],
      inputs: [
        {
          item: "minecraft:black_dye"
        },
        {
          item: "minecraft:black_dye"
        },
        {
          item: "minecraft:black_dye"
        },
        {
          item: "minecraft:black_dye"
        }
      ],
      output: {
        item: Result
      },
      tablet: {
        item: Base
      }
    });
  };
  potting_black_iron("embers:caminite_blend", "extendedcrafting:black_iron_ingot");
  potting_black_iron("embers:raw_caminite_block", "extendedcrafting:black_iron_block");
  //#endregion
  //#region - Elements
  e.remove([{ id: "extendedcrafting:ender_ingot" }, { id: "extendedcrafting:redstone_ingot" }, { id: "extendedcrafting:enhanced_ender_ingot" }, { id: "extendedcrafting:enhanced_redstone_ingot" }]);
  let potting_elements = (Base, Reactives, Rate, Max, Result) => {
    e.custom({
      type: "extendedcrafting:combination",
      powerCost: Max,
      powerRate: Rate,
      input: { item: Base },
      ingredients: [{ item: Reactives }, { item: Reactives }, { item: Reactives }, { item: Reactives }],
      result: { item: Result }
    });
  };
  // Black iron
  potting_elements("embers:caminite_blend", "minecraft:black_dye", 1000, 20000, "extendedcrafting:black_iron_ingot");
  potting_elements("embers:raw_caminite_block", "minecraft:black_dye", 9000, 180000, "extendedcrafting:black_iron_block");
  // Ender Ingot
  potting_elements("extendedcrafting:black_iron_nugget", "minecraft:ender_eye", 90000, 1800000, "extendedcrafting:ender_nugget");
  potting_elements("extendedcrafting:black_iron_ingot", "minecraft:ender_eye", 10000, 200000, "extendedcrafting:ender_ingot");
  potting_elements("extendedcrafting:black_iron_block", "minecraft:ender_eye", 90000, 1800000, "extendedcrafting:ender_ingot_block");
  potting_elements("extendedcrafting:ender_star", "extendedcrafting:ender_ingot", 100000, 2000000, "extendedcrafting:enhanced_ender_ingot");
  potting_elements("extendedcrafting:ender_star_block", "extendedcrafting:ender_ingot", 900000, 18000000, "extendedcrafting:enhanced_ender_ingot_block");
  // Redstone Ingot
  potting_elements("extendedcrafting:black_iron_nugget", "minecraft:redstone", 90000, 1800000, "extendedcrafting:redstone_nugget");
  potting_elements("extendedcrafting:black_iron_ingot", "minecraft:redstone", 10000, 200000, "extendedcrafting:redstone_ingot");
  potting_elements("extendedcrafting:black_iron_block", "minecraft:redstone", 90000, 1800000, "extendedcrafting:redstone_ingot_block");
  potting_elements("extendedcrafting:flux_star", "extendedcrafting:redstone_ingot", 100000, 2000000, "extendedcrafting:enhanced_redstone_ingot");
  potting_elements("extendedcrafting:flux_star_block", "extendedcrafting:redstone_ingot", 900000, 18000000, "extendedcrafting:enhanced_redstone_ingot_block");
  //#endregion
  //#region - Crafting Core
  e.shaped("extendedcrafting:crafting_core", ["ABA", "ACA", "AAA"], {
    A: "extendedcrafting:black_iron_ingot",
    B: "minecraft:cyan_dye",
    C: "avaritia:compressed_crafting_table"
  });
  //#endregion
  //#region - Crafters
  e.remove([{ id: "extendedcrafting:ender_crafter" }, { id: "extendedcrafting:flux_crafter" }]);
  let potting_crafters = (Base, Material1, Material2, Result) => {
    e.shaped(Result, ["AAA", "BCB", "BBB"], {
      A: Material1,
      B: Material2,
      C: Base
    });
  };
  // Ender Crafter
  potting_crafters("avaritia:compressed_crafting_table", "minecraft:ender_eye", "extendedcrafting:ender_ingot", "extendedcrafting:ender_crafter");
  potting_crafters("extendedcrafting:ender_crafter", "minecraft:ender_eye", "extendedcrafting:enhanced_ender_ingot", "extendedcrafting:auto_ender_crafter");
  // Flux Crafter
  potting_crafters("avaritia:compressed_crafting_table", "minecraft:gold_ingot", "extendedcrafting:redstone_ingot", "extendedcrafting:flux_crafter");
  potting_crafters("extendedcrafting:flux_crafter", "minecraft:gold_ingot", "extendedcrafting:enhanced_redstone_ingot", "extendedcrafting:auto_flux_crafter");
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function extendedcrafting() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "extendedcrafting:black_iron_slate",
    "extendedcrafting:compressor",
    "extendedcrafting:frame",
    /extendedcrafting:.*_catalyst/,
    /extendedcrafting:.*_component/,
    /extendedcrafting:.*_table/,
    /extendedcrafting:crystaltine/,
    /extendedcrafting:the_ultimate/,
    /extendedcrafting:luminessence/
  ];
  let hiding = ["extendedcrafting:recipe_maker"];
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
extendedcrafting();
//#endregion
