//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Rings
  let potting_ring = (Base, Material, Result) => {
    e.shaped(Result, [" A ", "BCB", " A "], {
      A: "minecraft:emerald",
      B: Material,
      C: Base
    });
  };
  potting_ring("gobber2:gobber2_ring", "minecraft:lapis_lazuli", "gobber2:gobber2_ring_above");
  potting_ring("gobber2:gobber2_ring_nether", "minecraft:diamond", "gobber2:gobber2_ring_haste");
  //#endregion
  //#region - Staffs
  let potting_staffs = (Material1, Material2, Result) => {
    e.shaped(Result, [" AB", " CA", "C  "], {
      A: Material1,
      B: Material2,
      C: "#forge:rods/wooden"
    });
  };
  potting_staffs("minecraft:green_dye", "minecraft:wheat_seeds", "gobber2:gobber2_staff_clearing");
  potting_staffs("minecraft:yellow_dye", "gobber2:gobber2_ingot", "gobber2:gobber2_staff_harvest");
  //#endregion
  //#region - Ingots and Blocks
  let potting_ingots = (Base, Material, Mana, Result) => {
    e.custom({
      type: "botania:runic_altar",
      ingredients: [
        {
          item: Base
        },
        {
          item: "mythicbotany:asgard_rune"
        },
        {
          item: "mythicbotany:vanaheim_rune"
        },
        {
          item: Material
        },
        {
          item: "mythicbotany:alfheim_rune"
        },
        {
          item: "mythicbotany:midgard_rune"
        },
        {
          item: "mythicbotany:joetunheim_rune"
        },
        {
          item: "mythicbotany:muspelheim_rune"
        },
        {
          item: "mythicbotany:niflheim_rune"
        },
        {
          item: Material
        },
        {
          item: "mythicbotany:nidavellir_rune"
        },
        {
          item: "mythicbotany:helheim_rune"
        }
      ],
      mana: Mana,
      output: {
        item: Result
      }
    });
  };
  potting_ingots("minecraft:netherite_ingot", "botania:manasteel_ingot", 50000, "gobber2:gobber2_ingot");
  potting_ingots("gobber2:gobber2_ingot", "mythicbotany:alfsteel_ingot", 50000, "gobber2:gobber2_ingot_nether");
  potting_ingots("gobber2:gobber2_ingot_nether", "botania:gaia_ingot", 50000, "gobber2:gobber2_ingot_end");
  potting_ingots("minecraft:netherite_block", "botania:manasteel_block", 450000, "gobber2:gobber2_block");
  potting_ingots("gobber2:gobber2_block", "mythicbotany:alfsteel_block", 450000, "gobber2:gobber2_block_nether");
  potting_ingots("gobber2:gobber2_block_nether", "kubejs:gaia_block", 450000, "gobber2:gobber2_block_end");
  //#endregion
  //#region - Armor
  //#region - Helmet
  e.remove({ id: /gobber2:gobber2_helmet/ });
  let potting_helmet = (Base, Material, Result) => {
    e.shaped(Result, ["AAA", "ABA"], {
      A: Material,
      B: Base
    });
  };
  potting_helmet("minecraft:netherite_helmet", "gobber2:gobber2_ingot", "gobber2:gobber2_helmet");
  potting_helmet("gobber2:gobber2_helmet", "gobber2:gobber2_ingot_nether", "gobber2:gobber2_helmet_nether");
  potting_helmet("gobber2:gobber2_helmet_nether", "gobber2:gobber2_ingot_end", "gobber2:gobber2_helmet_end");
  //#endregion
  //#region - Chestplate
  e.remove({ id: /gobber2:gobber2_chestplate/ });
  let potting_chestplate = (Base, Material, Result) => {
    e.shaped(Result, ["ABA", "AAA", "AAA"], {
      A: Material,
      B: Base
    });
  };
  potting_chestplate("minecraft:netherite_chestplate", "gobber2:gobber2_ingot", "gobber2:gobber2_chestplate");
  potting_chestplate("gobber2:gobber2_chestplate", "gobber2:gobber2_ingot_nether", "gobber2:gobber2_chestplate_nether");
  potting_chestplate("gobber2:gobber2_chestplate_nether", "gobber2:gobber2_ingot_end", "gobber2:gobber2_chestplate_end");
  //#endregion
  //#region - Leggings
  e.remove({ id: /gobber2:gobber2_leggings/ });
  let potting_leggings = (Base, Material, Result) => {
    e.shaped(Result, ["AAA", "ABA", "A A"], {
      A: Material,
      B: Base
    });
  };
  potting_leggings("minecraft:netherite_leggings", "gobber2:gobber2_ingot", "gobber2:gobber2_leggings");
  potting_leggings("gobber2:gobber2_leggings", "gobber2:gobber2_ingot_nether", "gobber2:gobber2_leggings_nether");
  potting_leggings("gobber2:gobber2_leggings_nether", "gobber2:gobber2_ingot_end", "gobber2:gobber2_leggings_end");
  //#endregion
  //#region - Boots
  e.remove({ id: /gobber2:gobber2_boots/ });
  let potting_boots = (Base, Material, Result) => {
    e.shaped(Result, ["A A", "ABA"], {
      A: Material,
      B: Base
    });
  };
  potting_boots("minecraft:netherite_boots", "gobber2:gobber2_ingot", "gobber2:gobber2_boots");
  potting_boots("gobber2:gobber2_boots", "gobber2:gobber2_ingot_nether", "gobber2:gobber2_boots_nether");
  potting_boots("gobber2:gobber2_boots_nether", "gobber2:gobber2_ingot_end", "gobber2:gobber2_boots_end");
  //#endregion
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function gobber2() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    /gobber2:.*_glob/,
    /gobber2:.*_glass/,
    /gobber2:.*_lucky_block/,
    /gobber2:.*_rod/,
    /gobber2:.*_foo/,
    /gobber2:.*_goo/,
    /gobber2:gobber2_ore/,
    "gobber2:gobber2_staff_sniper",
    "gobber2:gobber2_medallion_hero",
    "gobber2:gobber2_medallion_healing",
    "gobber2:gobber2_medallion_healing2",
    "gobber2:gobber2_medallion_healing3",
    "gobber2:gobber2_ring_attraction",
    "gobber2:gobber2_ring_return",
    "gobber2:gobber2_ring_ascent",
    "gobber2:gobber2_ring_miner",
    "gobber2:gobber2_ring_sunshine",
    "gobber2:gobber2_ring_acceleration",
    "gobber2:gobber2_ring_leaping",
    "gobber2:gobber2_ring_blaze",
    "gobber2:gobber2_ring_repair",
    "gobber2:gobber2_ring_dismissal",
    "gobber2:gobber2_ring_pyro",
    "gobber2:gobber2_ring_enderchest",
    "gobber2:gobber2_ring_traveler",
    "gobber2:gobber2_ring_airwalking",
    "gobber2:gobber2_ring_teleport",
    "gobber2:gobber2_ring_blink",
    "gobber2:gobber2_ring_explorer",
    "gobber2:gobber2_staff_nature",
    "gobber2:gobber2_staff_stars",
    "gobber2:gobber2_staff_ensnarement",
    "gobber2:gobber2_links_end"
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
gobber2();
//#endregion
