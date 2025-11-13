//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Angel Ring
  e.remove({ id: "create:mechanical_crafting/ascended_flight_ring" });
  e.custom({
    type: "extendedcrafting:combination",
    powerCost: 10000000,
    powerRate: 50000,
    input: { item: "enigmaticlegacy:golden_ring" },
    ingredients: [
      {
        item: "tcintegrations:bronze_ingot"
      },
      {
        item: "minecraft:feather"
      },
      {
        item: "create:brass_ingot"
      },
      {
        item: "minecraft:feather"
      },
      {
        item: "tcintegrations:bronze_ingot"
      },
      {
        item: "minecraft:feather"
      },
      {
        item: "extendedcrafting:flux_star"
      },
      {
        item: "create:brass_ingot"
      },
      {
        item: "extendedcrafting:flux_star"
      },
      {
        item: "minecraft:gold_ingot"
      },
      {
        item: "tcintegrations:bronze_ingot"
      },
      {
        item: "minecraft:gold_ingot"
      },
      {
        item: "create:brass_ingot"
      },
      {
        item: "minecraft:gold_ingot"
      },
      {
        item: "tcintegrations:bronze_ingot"
      },
      {
        item: "minecraft:gold_ingot"
      },
      {
        item: "extendedcrafting:flux_star"
      },
      {
        item: "create:brass_ingot"
      },
      {
        item: "extendedcrafting:flux_star"
      },
      {
        item: "minecraft:feather"
      }
    ],
    result: {
      item: "angelring:angel_ring"
    }
  });
  e.custom({
    type: "mythicbotany:rune_ritual",
    center: {
      item: "enigmaticlegacy:golden_ring"
    },
    inputs: [],
    mana: 1000000,
    outputs: [
      {
        count: 1,
        item: "angelring:angel_ring"
      }
    ],
    runes: [
      // Feather
      {
        consume: true,
        rune: {
          item: "minecraft:feather"
        },
        x: -3,
        z: 4
      },
      {
        consume: true,
        rune: {
          item: "minecraft:feather"
        },
        x: 3,
        z: 4
      },
      {
        consume: true,
        rune: {
          item: "minecraft:feather"
        },
        x: -4,
        z: 3
      },
      {
        consume: true,
        rune: {
          item: "minecraft:feather"
        },
        x: 4,
        z: 3
      },
      // Gold Ingot
      {
        consume: true,
        rune: {
          item: "minecraft:gold_ingot"
        },
        x: -4,
        z: -3
      },
      {
        consume: true,
        rune: {
          item: "minecraft:gold_ingot"
        },
        x: 4,
        z: -3
      },
      {
        consume: true,
        rune: {
          item: "minecraft:gold_ingot"
        },
        x: -3,
        z: -4
      },
      {
        consume: true,
        rune: {
          item: "minecraft:gold_ingot"
        },
        x: 3,
        z: -4
      },
      // Manipulation Essence
      {
        consume: true,
        rune: {
          item: "ars_nouveau:manipulation_essence"
        },
        x: 0,
        z: 5
      },
      {
        consume: true,
        rune: {
          item: "ars_nouveau:manipulation_essence"
        },
        x: -5,
        z: 0
      },
      {
        consume: true,
        rune: {
          item: "ars_nouveau:manipulation_essence"
        },
        x: 5,
        z: 0
      },
      {
        consume: true,
        rune: {
          item: "ars_nouveau:manipulation_essence"
        },
        x: 0,
        z: -5
      },
      // Arcane Gold Ingot
      {
        consume: true,
        rune: {
          item: "wizards_reborn:arcane_gold_ingot"
        },
        x: -2,
        z: 2
      },
      {
        consume: true,
        rune: {
          item: "wizards_reborn:arcane_gold_ingot"
        },
        x: 2,
        z: 2
      },
      {
        consume: true,
        rune: {
          item: "wizards_reborn:arcane_gold_ingot"
        },
        x: -2,
        z: -2
      },
      {
        consume: true,
        rune: {
          item: "wizards_reborn:arcane_gold_ingot"
        },
        x: 2,
        z: -2
      },
      // Alfsteel Ingot
      {
        consume: true,
        rune: {
          item: "mythicbotany:alfsteel_ingot"
        },
        x: -1,
        z: 1
      },
      {
        consume: true,
        rune: {
          item: "mythicbotany:alfsteel_ingot"
        },
        x: 1,
        z: 1
      },
      {
        consume: true,
        rune: {
          item: "mythicbotany:alfsteel_ingot"
        },
        x: -1,
        z: -1
      },
      {
        consume: true,
        rune: {
          item: "mythicbotany:alfsteel_ingot"
        },
        x: 1,
        z: -1
      }
    ],
    ticks: 200
  });
  //#endregion
});

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function angelring() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["angelring:diamond_ring", /angelring:.*_angel_ring/];
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
angelring();
//#endregion
