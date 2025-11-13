//ignored: true

//#region - Tags
ServerEvents.tags(["item", "block"], e => {});
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Plates, Rods and Gears
  e.remove({ id: /ad_astra:compressing\// });
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
});
//#endregion

//#region - Loot Tables
ServerEvents.blockLootTables(e => {});
//#endregion
