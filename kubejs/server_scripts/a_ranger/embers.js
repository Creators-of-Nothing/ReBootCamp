//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([{ id: "embers:dawnstone_anvil/tool_materia_repair" }, { id: "embers:dawnstone_anvil/tool_repair" }, { id: /embers:stamping\/nuggets\// }, { id: /embers:stamping\/gears\// }, { id: /embers:stamping\/ingots\// }]);
  //#endregion
  //#region - Replaced Crafts
  e.replaceInput([{ id: "embers:caminite_lever" }, { id: "embers:ember_emitter" }, { id: "embers:ember_receiver" }], "embers:caminite_plate", "embers:caminite_brick");
  //#endregion
  //#region - Caminite Blend
  e.remove({ id: "embers:caminite_blend" });
  let potting_caminite_blend = (Base, Count) => {
    e.custom({
      type: "ars_nouveau:enchanting_apparatus",
      output: {
        count: Count,
        item: "embers:caminite_blend"
      },
      pedestalItems: [{ item: "minecraft:clay_ball" }, { item: "minecraft:clay_ball" }, { item: "minecraft:clay_ball" }, { item: "minecraft:clay_ball" }, { item: "minecraft:clay_ball" }, { item: "minecraft:clay_ball" }, { item: "minecraft:clay_ball" }, { item: "minecraft:clay_ball" }],
      reagent: [{ item: Base }],
      sourceCost: 0
    });
  };
  potting_caminite_blend("minecraft:sand", 1);
  potting_caminite_blend("minecraft:sandstone", 4);
  potting_caminite_blend("minecraft:smooth_sandstone", 8);
  e.shapeless("9x embers:caminite_blend", "embers:raw_caminite_block");
  //#endregion
  //#region - Caminite Block
  e.remove({ id: "embers:raw_caminite_block" });
  e.shaped("embers:raw_caminite_block", ["AAA", "AAA", "AAA"], {
    A: "embers:caminite_blend"
  });
  //#endregion
  //#region - Plates
  e.remove([{ id: /embers:stamping\/plates\// }, { id: /embers:.*_plate_hammering/ }, { id: "embers:raw_caminite_plate" }, { id: /embers:melting\/plates\// }]);
  let potting_plates = (Material, Count, Result) => {
    e.custom({
      type: "embers:stamping",
      input: {
        item: Material
      },
      output: {
        count: Count,
        item: Result
      },
      stamp: {
        item: "embers:flat_stamp"
      }
    });
  };
  // Brass
  potting_plates("create:brass_ingot", 1, "create:brass_sheet");
  potting_plates("create:brass_block", 9, "create:brass_sheet");
  // Calorite
  potting_plates("ad_astra:calorite_ingot", 1, "ad_astra:calorite_plate");
  potting_plates("ad_astra:calorite_block", 9, "ad_astra:calorite_plate");
  // Copper
  potting_plates("minecraft:copper_ingot", 1, "embers:copper_plate");
  potting_plates("minecraft:copper_block", 9, "embers:copper_plate");
  // Dawnstone
  potting_plates("embers:dawnstone_ingot", 1, "embers:dawnstone_plate");
  potting_plates("embers:dawnstone_block", 9, "embers:dawnstone_plate");
  // Desh
  potting_plates("ad_astra:desh_ingot", 1, "ad_astra:desh_plate");
  potting_plates("ad_astra:desh_block", 9, "ad_astra:desh_plate");
  // Gold
  potting_plates("minecraft:gold_ingot", 1, "create:golden_sheet");
  potting_plates("minecraft:gold_block", 9, "create:golden_sheet");
  // Iron
  potting_plates("minecraft:iron_ingot", 1, "embers:iron_plate");
  potting_plates("minecraft:iron_block", 9, "embers:iron_plate");
  // Lead
  potting_plates("embers:lead_ingot", 1, "embers:lead_plate");
  potting_plates("embers:lead_block", 9, "embers:lead_plate");
  // Ostrum
  potting_plates("ad_astra:ostrum_ingot", 1, "ad_astra:ostrum_plate");
  potting_plates("ad_astra:ostrum_block", 9, "ad_astra:ostrum_plate");
  // Raw Caminite
  potting_plates("embers:caminite_blend", 1, "embers:raw_caminite_plate");
  potting_plates("embers:raw_caminite_block", 9, "embers:raw_caminite_plate");
  // Silver
  potting_plates("embers:silver_ingot", 1, "embers:silver_plate");
  potting_plates("embers:silver_block", 9, "embers:silver_plate");
  // Steel
  potting_plates("ad_astra:steel_ingot", 1, "ad_astra:steel_plate");
  potting_plates("ad_astra:steel_block", 9, "ad_astra:steel_plate");
  // sturdy
  potting_plates("create:powdered_obsidian", 1, "create:sturdy_sheet");
  potting_plates("kubejs:powdered_obsidian_block", 9, "create:sturdy_sheet");
  // Void Steel
  potting_plates("createutilities:void_steel_ingot", 1, "createutilities:void_steel_sheet");
  potting_plates("createutilities:void_steel_block", 9, "createutilities:void_steel_sheet");
  // Zinc
  potting_plates("create:zinc_ingot", 1, "createaddition:zinc_sheet");
  potting_plates("create:zinc_block", 9, "createaddition:zinc_sheet");
  //#endregion
  //#region - Melting
  e.remove({ id: /embers:melting\// });
  let potting_melting = (Material, Quantity, Result) => {
    e.custom({
      type: "embers:melting",
      input: [
        {
          item: Material
        }
      ],
      output: {
        amount: Quantity,
        fluid: Result
      }
    });
  };
  // Elements
  potting_melting("minecraft:iron_ingot", 90, "embers:molten_iron");
  potting_melting("minecraft:copper_ingot", 90, "embers:molten_copper");
  potting_melting("embers:lead_ingot", 90, "embers:molten_lead");
  potting_melting("embers:silver_ingot", 90, "embers:molten_silver");
  potting_melting("embers:dawnstone_ingot", 90, "embers:molten_dawnstone");
  potting_melting("create:zinc_ingot", 90, "embers:molten_zinc");
  // Others
  potting_melting("minecraft:soul_sand", 50, "embers:soul_crude");
  potting_melting("minecraft:soul_soil", 100, "embers:soul_crude");
  //#endregion
  //#region - Ember
  e.remove([{ id: "embers:stamping/ember_shard" }, { id: "embers:ember_shard_to_crystal" }, { id: "embers:ember_crystal_to_shard" }]);
  e.shapeless("9x embers:ember_shard", "embers:ember_crystal");
  e.shaped("embers:ember_crystal", ["AAA", "AAA", "AAA"], {
    A: "embers:ember_shard"
  });
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function embers() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [/embers:.*invar/, /embers:.*constantan/, /embers:.*electrum/, /embers:.*bronze/, /embers:.*platinum/, /embers:.*aluminum/, /embers:.*tin_/, /embers:.*nickel/, /embers:.*uranium/, /embers:.*ingot_stamp/, /embers:.*gear_stamp/, /embers:.*plate_stamp/, /embers:.*nugget_stamp/, "embers:geologic_separator"];
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
embers();
//#endregion
