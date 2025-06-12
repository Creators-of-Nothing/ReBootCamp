//#region Ajout de Crafts
ServerEvents.recipes(e => {
  //#region - Tanks
  e.remove([{ id: "mob_grinding_utils:recipe_jumbotank" }, { id: "mob_grinding_utils:recipe_tank" }, { id: "mob_grinding_utils:recipe_tank_sink" }, { id: "mob_grinding_utils:recipe_xp_tap" }]);
  e.shaped("mob_grinding_utils:tank_sink", ["A ", "B "], {
    A: "create:item_drain",
    B: "mob_grinding_utils:tank"
  });
  e.shaped("mob_grinding_utils:xp_tap", ["A  ", "BB ", "B  "], {
    A: "create:hand_crank",
    B: "create:andesite_alloy"
  });
  let potting_tank = (Material, Result) => {
    e.shaped(Result, ["ABA", "B B", "ABA"], {
      A: "create:andesite_alloy",
      B: Material
    });
  };
  potting_tank("minecraft:glass", "mob_grinding_utils:tank");
  potting_tank("mob_grinding_utils:tank", "mob_grinding_utils:jumbo_tank");
  //#endregion
  //#region - Farm
  e.remove([{ id: "mob_grinding_utils:recipe_fan" }, { id: "mob_grinding_utils:recipe_entity_conveyor" }, { id: "mob_grinding_utils:recipe_ender_inhibitor" }]);
  e.shaped("mob_grinding_utils:entity_conveyor", ["   ", "AAA", "BBB"], {
    A: "create:belt_connector",
    B: "create:andesite_alloy"
  });
  e.shaped("mob_grinding_utils:fan", ["AAA", "ABA", "AAA"], {
    A: "create:andesite_alloy",
    B: "create:propeller"
  });
  e.shaped("mob_grinding_utils:saw", [" A ", "BAB", "CCC"], {
    A: "create:propeller",
    B: "createaddition:diamond_grit",
    C: "create:andesite_alloy"
  });
  e.shaped("mob_grinding_utils:ender_inhibitor_on", [" A ", "BCB", " A "], {
    A: "waystones:warp_dust",
    B: "create:andesite_alloy",
    C: "minecraft:ender_eye"
  });
  //#endregion
  //#region - Upgrades
  e.remove([{ id: /mob_grinding_utils:recipe_saw_upgrade_/ }, { id: /mob_grinding_utils:recipe_fan_upgrade_/ }]);
  e.shapeless("mob_grinding_utils:fan_upgrade_height", ["mob_grinding_utils:fan_upgrade_width"]);
  e.shapeless("mob_grinding_utils:fan_upgrade_width", ["mob_grinding_utils:fan_upgrade_height"]);
  let potting = (Material, Result) => {
    e.custom({
      type: "create:deploying",
      ingredients: [
        {
          item: "minecraft:red_carpet"
        },
        {
          item: Material
        }
      ],
      results: [
        {
          item: Result
        }
      ]
    });
  };
  potting("iceandfire:stymphalian_bird_feather", "mob_grinding_utils:saw_upgrade_sharpness");
  potting("botania:cosmetic_four_leaf_clover", "mob_grinding_utils:saw_upgrade_looting");
  potting("minecraft:spider_eye", "mob_grinding_utils:saw_upgrade_arthropod");
  potting("minecraft:rotten_flesh", "mob_grinding_utils:saw_upgrade_smite");
  potting("minecraft:campfire", "mob_grinding_utils:saw_upgrade_fire");
  potting("minecraft:wither_skeleton_skull", "mob_grinding_utils:saw_upgrade_beheading");
  potting("modularrouters:range_up_augment", "mob_grinding_utils:fan_upgrade_speed");
  potting("minecraft:feather", "mob_grinding_utils:fan_upgrade_width");
  //#endregion
  //#region - Spawn Eggs
  e.remove({ id: "mob_grinding_utils:gm_chicken_feed" });
  e.custom({
    type: "mob_grinding_utils:chicken_feed",
    ingredients: [
      {
        tag: "botania:mystical_flowers"
      },
      {
        item: "mob_grinding_utils:mob_swab_used"
      },
      {
        type: "mob_grinding_utils:fluid",
        advanced: false,
        fluid: "kubejs:void_fluid"
      }
    ],
    result: {
      item: "mob_grinding_utils:gm_chicken_feed"
    }
  });
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function mob_grinding_utils() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "mob_grinding_utils:spikes",
    "mob_grinding_utils:entity_spawner",
    "mob_grinding_utils:solid_xp_mould_blank",
    "mob_grinding_utils:dark_oak_stone",
    "mob_grinding_utils:xpsolidifier",
    "mob_grinding_utils:solid_xp_block",
    "mob_grinding_utils:solid_xp_mould_baby",
    "mob_grinding_utils:solid_xp_baby",
    "mob_grinding_utils:absorption_hopper",
    "mob_grinding_utils:absorption_upgrade",
    "mob_grinding_utils:xp_solidifier_upgrade",
    "mob_grinding_utils:spawner_upgrade_height",
    "mob_grinding_utils:spawner_upgrade_width"
  ];
  let hiding = ["mob_grinding_utils:ender_inhibitor_off"];
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
mob_grinding_utils();
//#endregion
