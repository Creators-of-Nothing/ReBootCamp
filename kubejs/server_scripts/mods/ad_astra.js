//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Plates
  e.remove({ id: /ad_astra:compressing\// });
  e.replaceInput({ input: "ad_astra:iron_plate" }, "ad_astra:iron_plate", "embers:iron_plate");
  let potting_plates = (Material, Time, Energy, Count, Result) => {
    e.custom({
      type: "ad_astra:compressing",
      cookingtime: Time,
      energy: Energy,
      ingredient: {
        item: Material
      },
      result: {
        count: Count,
        id: Result
      }
    });
  };
  // Brass
  potting_plates("create:brass_ingot", 10, 20, 2, "create:brass_sheet");
  potting_plates("create:brass_block", 50, 100, 18, "create:brass_sheet");
  // Calorite
  potting_plates("ad_astra:calorite_ingot", 10, 20, 2, "ad_astra:calorite_plate");
  potting_plates("ad_astra:calorite_block", 50, 100, 18, "ad_astra:calorite_plate");
  // Copper
  potting_plates("minecraft:copper_ingot", 10, 20, 2, "embers:copper_plate");
  potting_plates("minecraft:copper_block", 50, 100, 18, "embers:copper_plate");
  // Dawnstone
  potting_plates("embers:dawnstone_ingot", 10, 20, 2, "embers:dawnstone_plate");
  potting_plates("embers:dawnstone_block", 50, 100, 18, "embers:dawnstone_plate");
  // Desh
  potting_plates("ad_astra:desh_ingot", 10, 20, 2, "ad_astra:desh_plate");
  potting_plates("ad_astra:desh_block", 50, 100, 18, "ad_astra:desh_plate");
  // Gold
  potting_plates("minecraft:gold_ingot", 10, 20, 2, "create:golden_sheet");
  potting_plates("minecraft:gold_block", 50, 100, 18, "create:golden_sheet");
  // Iron
  potting_plates("minecraft:iron_ingot", 10, 20, 2, "embers:iron_plate");
  potting_plates("minecraft:iron_block", 50, 100, 18, "embers:iron_plate");
  // Lead
  potting_plates("embers:lead_ingot", 10, 20, 2, "embers:lead_plate");
  potting_plates("embers:lead_block", 50, 100, 18, "embers:lead_plate");
  // Ostrum
  potting_plates("ad_astra:ostrum_ingot", 10, 20, 2, "ad_astra:ostrum_plate");
  potting_plates("ad_astra:ostrum_block", 50, 100, 18, "ad_astra:ostrum_plate");
  // Raw Caminite
  potting_plates("embers:caminite_blend", 10, 20, 2, "embers:raw_caminite_plate");
  potting_plates("embers:raw_caminite_block", 50, 100, 18, "embers:raw_caminite_plate");
  // Silver
  potting_plates("embers:silver_ingot", 10, 20, 2, "embers:silver_plate");
  potting_plates("embers:silver_block", 50, 100, 18, "embers:silver_plate");
  // Steel
  potting_plates("ad_astra:steel_ingot", 10, 20, 2, "ad_astra:steel_plate");
  potting_plates("ad_astra:steel_block", 50, 100, 18, "ad_astra:steel_plate");
  // Sturdy
  potting_plates("create:powdered_obsidian", 10, 20, 2, "create:sturdy_sheet");
  potting_plates("kubejs:powdered_obsidian_block", 50, 100, 18, "create:sturdy_sheet");
  // Void Steel
  potting_plates("createutilities:void_steel_ingot", 10, 20, 2, "createutilities:void_steel_sheet");
  potting_plates("createutilities:void_steel_block", 50, 100, 18, "createutilities:void_steel_sheet");
  // Zinc
  potting_plates("create:zinc_ingot", 10, 20, 2, "createaddition:zinc_sheet");
  potting_plates("create:zinc_block", 50, 100, 18, "createaddition:zinc_sheet");
  //#endregion
  //#region - Rods
  e.replaceInput({ input: "ad_astra:iron_rod" }, "ad_astra:iron_rod", "createaddition:iron_rod");
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function ad_astra() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [/ad_astra:.*etrium/, "ad_astra:solar_panel", "ad_astra:iron_plate", "ad_astra:iron_rod", "ad_astra:coal_generator", /ad_astra:.*ice_shard/];
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
ad_astra();
//#endregion
