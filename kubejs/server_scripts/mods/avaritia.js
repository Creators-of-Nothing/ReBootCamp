//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove({ id: "avaritia:skull_fire_sword" });
  //#endregion
  //#region - Tables
  e.remove([{ id: "avaritia:nether_crafting_table" }, { id: "avaritia:end_crafting_table" }]);
  let potting_tables = (Base, Core, Material1, Material2, Material3, Material4, Result) => {
    e.shaped(Result, ["ABA", "CDC", "EFE"], {
      A: Material1,
      B: Base,
      C: Material2,
      D: Core,
      E: Material3,
      F: Material4
    });
  };
  potting_tables(
    "extendedcrafting:crafting_core",
    "draconicevolution:draconium_core",
    "minecraft:sculk",
    "minecraft:sculk_shrieker",
    "minecraft:reinforced_deepslate",
    "avaritia:neutron_pile",
    "avaritia:sculk_crafting_table"
  );
  potting_tables(
    "avaritia:sculk_crafting_table",
    "draconicevolution:wyvern_core",
    "minecraft:crimson_hyphae",
    "minecraft:respawn_anchor",
    "minecraft:polished_basalt",
    "avaritia:neutron_nugget",
    "avaritia:nether_crafting_table"
  );
  potting_tables(
    "avaritia:nether_crafting_table",
    "draconicevolution:awakened_core",
    "minecraft:end_stone",
    "betterend:infusion_pedestal",
    "betterend:ender_block",
    "avaritia:neutron_ingot",
    "avaritia:end_crafting_table"
  );
  potting_tables(
    "avaritia:end_crafting_table",
    "draconicevolution:chaotic_core",
    "ad_astra:polished_permafrost",
    "minecraft:beacon",
    "avaritia:crystal_matrix",
    "avaritia:neutron",
    "avaritia:extreme_crafting_table"
  );
  //#endregion
  //#region - Tier 1 Table
  e.remove({ id: "avaritia:infinity_ingot" });
  e.custom({
    type: "avaritia:shaped_table",
    key: {
      C: {
        item: "avaritia:crystal_matrix_ingot"
      },
      N: {
        item: "avaritia:neutron_ingot"
      },
      X: {
        item: "avaritia:infinity_catalyst"
      }
    },
    pattern: ["NNN", "CXC", "NNN"],
    result: {
      item: "avaritia:infinity_ingot"
    },
    tier: 1
  });
  //#endregion
  //#region - Neutron Collector
  e.remove({ id: "avaritia:neutron_collector" });
  let potting_neutron_collector = (Base, Tier, Energy, Neutron, Result) => {
    e.custom({
      type: "draconicevolution:fusion_crafting",
      catalyst: {
        item: Base
      },
      ingredients: [
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        },
        {
          item: Neutron
        }
      ],
      result: {
        item: Result
      },
      tier: Tier,
      total_energy: Energy
    });
  };
  //#region - Potting
  potting_neutron_collector("avaritia:crystal_matrix", "DRACONIUM", 1000, "avaritia:neutron_pile", "avaritia:neutron_collector");
  potting_neutron_collector("avaritia:neutron_collector", "WYVERN", 10000, "avaritia:neutron_nugget", "avaritia:dense_neutron_collector");
  potting_neutron_collector("avaritia:dense_neutron_collector", "DRACONIC", 100000, "avaritia:neutron_ingot", "avaritia:denser_neutron_collector");
  potting_neutron_collector("avaritia:denser_neutron_collector", "CHAOTIC", 1000000, "avaritia:neutron", "avaritia:densest_neutron_collector");
  //#endregion
  //#endregion
  //#region - Crystal Matrix Ingot
  let potting_crystal_matrix_ingot = (Cast, Number) => {
    e.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: "kubejs:inert_ingot"
      },
      loops: 1,
      results: [
        {
          chance: 100.0,
          count: Number,
          item: "avaritia:crystal_matrix_ingot"
        }
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:inert_ingot"
            },
            {
              item: Cast
            }
          ],
          keepHeldItem: true,
          results: [
            {
              item: "kubejs:inert_ingot"
            }
          ]
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:inert_ingot"
            },
            {
              item: "minecraft:diamond"
            }
          ],
          results: [
            {
              item: "kubejs:inert_ingot"
            }
          ]
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:inert_ingot"
            },
            {
              item: "malum:astral_weave"
            }
          ],
          results: [
            {
              item: "kubejs:inert_ingot"
            }
          ]
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:inert_ingot"
            },
            {
              item: "mna:vinteum_ingot"
            }
          ],
          results: [
            {
              item: "kubejs:inert_ingot"
            }
          ]
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:inert_ingot"
            },
            {
              item: "botania:manasteel_ingot"
            }
          ],
          results: [
            {
              item: "kubejs:inert_ingot"
            }
          ]
        }
      ],
      transitionalItem: {
        item: "kubejs:inert_ingot"
      }
    });
  };
  potting_crystal_matrix_ingot("kubejs:sculk_cast", 1);
  potting_crystal_matrix_ingot("kubejs:wither_cast", 2);
  potting_crystal_matrix_ingot("kubejs:dragon_cast", 4);
  potting_crystal_matrix_ingot("kubejs:extreme_cast", 8);
  //#endregion
  //#region - Crystal Matrix
  let potting_crystal_matrix = (Cast, Number) => {
    e.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: "kubejs:inert_block"
      },
      loops: 1,
      results: [
        {
          chance: 100.0,
          count: Number,
          item: "avaritia:crystal_matrix"
        }
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:inert_block"
            },
            {
              item: Cast
            }
          ],
          keepHeldItem: true,
          results: [
            {
              item: "kubejs:inert_block"
            }
          ]
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:inert_block"
            },
            {
              item: "minecraft:diamond_block"
            }
          ],
          results: [
            {
              item: "kubejs:inert_block"
            }
          ]
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:inert_block"
            },
            {
              item: "malum:block_of_astral_weave"
            }
          ],
          results: [
            {
              item: "kubejs:inert_block"
            }
          ]
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:inert_block"
            },
            {
              item: "mna:vinteum_block"
            }
          ],
          results: [
            {
              item: "kubejs:inert_block"
            }
          ]
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:inert_block"
            },
            {
              item: "botania:manasteel_block"
            }
          ],
          results: [
            {
              item: "kubejs:inert_block"
            }
          ]
        }
      ],
      transitionalItem: {
        item: "kubejs:inert_block"
      }
    });
  };
  potting_crystal_matrix("kubejs:sculk_cast", 1);
  potting_crystal_matrix("kubejs:wither_cast", 2);
  potting_crystal_matrix("kubejs:dragon_cast", 4);
  potting_crystal_matrix("kubejs:extreme_cast", 8);
  //#endregion
  //#region - Pile of Neutrons
  e.custom({
    type: "apotheosis:enchanting",
    input: {
      item: "draconicevolution:small_chaos_frag"
    },
    requirements: {
      eterna: 50,
      quanta: 100,
      arcana: 100
    },
    max_requirements: {
      eterna: -1,
      quanta: -1,
      arcana: -1
    },
    result: {
      item: "avaritia:neutron_pile",
      count: 1
    }
  });
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function avaritia() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "avaritia:crystal_sword",
    "avaritia:crystal_hoe",
    "avaritia:crystal_pickaxe",
    "avaritia:crystal_shovel",
    "avaritia:crystal_axe",
    "avaritia:blaze_sword",
    "avaritia:blaze_hoe",
    "avaritia:blaze_pickaxe",
    "avaritia:blaze_shovel",
    "avaritia:blaze_axe",
    "avaritia:neutron_ring",
    "avaritia:infinity_ring",
    "avaritia:infinity_umbrella",
    "avaritia:diamond_lattice",
    "avaritia:diamond_lattice_block",
    "avaritia:singularity",
    "avaritia:blaze_cube",
    "avaritia:neutron_gear",
    "avaritia:star_fuel",
    "avaritia:star_fuel_block",
    "avaritia:infinity_chest",
    "avaritia:blaze_cube_block",
    "avaritia:compressed_chest",
    "avaritia:double_compressed_crafting_table",
    "avaritia:neutron_compressor",
    "avaritia:eternal_singularity",
    "avaritia:soul_farmland",
    /avaritia:refined_coal/
  ];
  let hiding = ["avaritia:matter_cluster"];
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
avaritia();
//#endregion
