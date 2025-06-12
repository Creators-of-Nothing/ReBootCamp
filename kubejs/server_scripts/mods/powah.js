//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove({ id: /powah:energizing\// });
  //#endregion
  //#region - Dielectric Paste
  e.remove([{ id: "powah:crafting/dielectric_paste" }, { id: "powah:crafting/dielectric_paste_2" }]);
  e.custom({
    type: "ad_astra:alloying",
    cookingtime: 100,
    energy: 150,
    ingredients: [
      {
        item: "fluxnetworks:flux_dust"
      },
      {
        item: "minecraft:clay_ball"
      }
    ],
    result: {
      id: "powah:dielectric_paste"
    }
  });
  //#endregion
  //#region - Dielectric Casing
  e.shaped("powah:dielectric_casing", ["ABA", "B B", "ABA"], {
    A: "ad_astra:steel_ingot",
    B: "powah:dielectric_paste"
  });
  //#endregion
  //#region - Thermo Plate
  e.custom({
    type: "powah:energizing",
    ingredients: [
      {
        item: "botania:rune_fire"
      }
    ],
    energy: 20000,
    result: {
      item: "powah:thermoelectric_plate"
    }
  });
  //#endregion
  //#region - Energizing Orb
  e.shaped("powah:energizing_orb", [" A ", "ABA", "CAC"], {
    A: "cataclysm:dying_ember",
    B: "powah:dielectric_casing",
    C: "powah:dielectric_paste"
  });
  //#endregion
  //#region - Nitro Crystal Block
  e.remove([{ id: "powah:crafting/crystal_nitro" }, { id: "powah:crafting/nitro_crystal_block" }]);
  e.custom({
    type: "powah:energizing",
    ingredients: [
      {
        item: "mna:chimerite_crystal_red"
      },
      {
        item: "mna:chimerite_crystal_red"
      },
      {
        item: "mna:chimerite_crystal_red"
      },
      {
        item: "powah:thermoelectric_plate"
      },
      {
        item: "powah:thermoelectric_plate"
      },
      {
        item: "powah:thermoelectric_plate"
      }
    ],
    energy: 20000,
    result: {
      item: "powah:nitro_crystal_block"
    }
  });
  //#endregion
  //#region - Powah Tier
  let potting_powah_tier = (Base, Material, Count, Result) => {
    e.custom({
      type: "create:deploying",
      ingredients: [
        {
          item: Base
        },
        {
          item: Material
        }
      ],
      results: [
        {
          count: Count,
          item: Result
        }
      ]
    });
  };
  // Thermo Generators
  potting_powah_tier("powah:thermoelectric_plate", "create:andesite_alloy_block", 1, "powah:thermo_generator_starter");
  potting_powah_tier("powah:thermo_generator_starter", "mna:vinteum_block", 1, "powah:thermo_generator_hardened");
  potting_powah_tier("powah:thermo_generator_hardened", "extendedcrafting:black_iron_block", 1, "powah:thermo_generator_niotic");
  potting_powah_tier("powah:thermo_generator_niotic", "gobber2:gobber2_block_end", 1, "powah:thermo_generator_nitro");
  // Energy Cables
  potting_powah_tier("pipez:energy_pipe", "create:andesite_alloy_block", 4, "powah:energy_cable_starter");
  potting_powah_tier("powah:energy_cable_starter", "mna:vinteum_block", 4, "powah:energy_cable_hardened");
  potting_powah_tier("powah:energy_cable_hardened", "extendedcrafting:black_iron_block", 4, "powah:energy_cable_niotic");
  potting_powah_tier("powah:energy_cable_niotic", "gobber2:gobber2_block_end", 4, "powah:energy_cable_nitro");
  // Energy Cell
  potting_powah_tier("wormhole:basic_energy_cell", "create:andesite_alloy_block", 1, "powah:energy_cell_starter");
  potting_powah_tier("powah:energy_cell_starter", "mna:vinteum_block", 1, "powah:energy_cell_hardened");
  potting_powah_tier("powah:energy_cell_hardened", "extendedcrafting:black_iron_block", 1, "powah:energy_cell_niotic");
  potting_powah_tier("powah:energy_cell_niotic", "gobber2:gobber2_block_end", 1, "powah:energy_cell_nitro");
  // Energizing Rod
  potting_powah_tier("mna:constructs/rune_rod", "create:andesite_alloy_block", 1, "powah:energizing_rod_starter");
  potting_powah_tier("powah:energizing_rod_starter", "mna:vinteum_block", 1, "powah:energizing_rod_hardened");
  potting_powah_tier("powah:energizing_rod_hardened", "extendedcrafting:black_iron_block", 1, "powah:energizing_rod_niotic");
  potting_powah_tier("powah:energizing_rod_niotic", "gobber2:gobber2_block_end", 1, "powah:energizing_rod_nitro");
  //#endregion
});

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function powah() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    /powah:battery_/,
    /powah:ender_cell_/,
    /powah:ender_gate_/,
    /powah:furnator_/,
    /powah:magmator_/,
    /powah:solar_panel_/,
    /powah:reactor_/,
    /powah:player_transmitter_/,
    /powah:energy_hopper_/,
    /powah:energy_discharger_/,
    /powah:.*ender/,
    /powah:.*_pearl/,
    /powah:.*_card/,
    /powah:capacitor_/,
    /powah:dielectric_rod/,
    "powah:charged_snowball",
    "powah:photoelectric_pane",
    "powah:steel_energized",
    "powah:energized_steel_block",
    "powah:crystal_blazing",
    "powah:blazing_crystal_block",
    "powah:crystal_niotic",
    "powah:niotic_crystal_block",
    "powah:crystal_spirited",
    "powah:spirited_crystal_block",
    /powah:.*_basic/,
    /powah:.*_spirited/,
    /powah:.*_blazing/,
    /powah:.*uraninite/,
    "powah:dry_ice"
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
powah();
//#endregion
