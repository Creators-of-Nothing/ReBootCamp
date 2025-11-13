//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Flower Oil
  let potting_flower_oil = (Material, Heat, Quantity, Result) => {
    e.custom({
      type: "create:mixing",
      heatRequirement: Heat,
      ingredients: [
        {
          tag: Material
        },
        {
          amount: 100,
          fluid: "minecraft:water"
        }
      ],
      results: [
        {
          amount: Quantity,
          fluid: Result
        }
      ]
    });
  };
  potting_flower_oil("botania:mystical_flowers", "heated", 500, "kubejs:flower_oil");
  potting_flower_oil("botania:double_mystical_flowers", "heated", 500, "kubejs:flower_oil");
  potting_flower_oil("botania:mystical_flowers", "superheated", 1000, "kubejs:flower_oil");
  potting_flower_oil("botania:double_mystical_flowers", "superheated", 1000, "kubejs:flower_oil");
  //#endregion
  //#region - Other Fluids
  let potting_kubejs_fluid_mixing = (Material, Heat, Quantity, Result) => {
    e.custom({
      type: "create:mixing",
      heatRequirement: Heat,
      ingredients: [
        {
          item: Material
        },
        {
          amount: 100,
          fluid: "minecraft:water"
        }
      ],
      results: [
        {
          amount: Quantity,
          fluid: Result
        }
      ]
    });
  };
  // Void Fluid
  potting_kubejs_fluid_mixing("cataclysm:void_core", "heated", 500, "kubejs:void_fluid");
  potting_kubejs_fluid_mixing("cataclysm:void_core", "superheated", 1000, "kubejs:void_fluid");
  // Infinity Fluid
  potting_kubejs_fluid_mixing("avaritia:infinity_ingot", "heated", 500, "kubejs:infinity_fluid");
  potting_kubejs_fluid_mixing("avaritia:infinity_ingot", "superheated", 1000, "kubejs:infinity_fluid");
  //#endregion
  //#region - Powdered Obsidian Block & Powdered
  e.shapeless("9x create:powdered_obsidian", "kubejs:powdered_obsidian_block");
  e.shaped("kubejs:powdered_obsidian_block", ["AAA", "AAA", "AAA"], {
    A: "create:powdered_obsidian"
  });
  //#endregion
});
//#endregion
