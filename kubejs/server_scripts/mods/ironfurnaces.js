//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Furnaces & Upgrades
  e.remove([{ id: /ironfurnaces:furnaces\// }, { id: /ironfurnaces:upgrades\// }]);
  let potting_furnace_and_upgrade = (Base, Material1, Material2, Result) => {
    e.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: Base
      },
      loops: 1,
      results: [
        {
          chance: 100.0,
          item: Result
        }
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            {
              item: Base
            },
            {
              item: Material1
            }
          ],
          results: [
            {
              item: Base
            }
          ]
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: Base
            },
            {
              item: Material2
            }
          ],
          results: [
            {
              item: Base
            }
          ]
        }
      ],
      transitionalItem: {
        item: Base
      }
    });
  };
  // Furnaces
  potting_furnace_and_upgrade("embers:hearth_coil", "minecraft:bricks", "minecraft:amethyst_block", "ironfurnaces:copper_furnace");
  potting_furnace_and_upgrade("ironfurnaces:copper_furnace", "minecraft:cobblestone", "minecraft:copper_block", "ironfurnaces:iron_furnace");
  potting_furnace_and_upgrade("ironfurnaces:iron_furnace", "ars_nouveau:source_gem_block", "create:andesite_alloy_block", "ironfurnaces:gold_furnace");
  potting_furnace_and_upgrade("ironfurnaces:gold_furnace", "embers:dawnstone_block", "mna:vinteum_block", "ironfurnaces:diamond_furnace");
  potting_furnace_and_upgrade("ironfurnaces:diamond_furnace", "botania:terrasteel_block", "extendedcrafting:black_iron_block", "ironfurnaces:emerald_furnace");
  potting_furnace_and_upgrade("ironfurnaces:emerald_furnace", "ad_astra:steel_block", "gobber2:gobber2_block_end", "ironfurnaces:obsidian_furnace");
  potting_furnace_and_upgrade("ironfurnaces:obsidian_furnace", "draconicevolution:draconium_block", "draconicevolution:chaos_shard", "ironfurnaces:netherite_furnace");
  potting_furnace_and_upgrade("ironfurnaces:netherite_furnace", "avaritia:neutron", "avaritia:infinity", "ironfurnaces:million_furnace");
  // Upgrades
  potting_furnace_and_upgrade("embers:copper_plate", "minecraft:bricks", "minecraft:amethyst_block", "ironfurnaces:upgrade_copper");
  potting_furnace_and_upgrade("ironfurnaces:upgrade_copper", "minecraft:cobblestone", "minecraft:copper_block", "ironfurnaces:upgrade_iron2");
  potting_furnace_and_upgrade("ironfurnaces:upgrade_iron2", "ars_nouveau:source_gem_block", "create:andesite_alloy_block", "ironfurnaces:upgrade_gold");
  potting_furnace_and_upgrade("ironfurnaces:upgrade_gold", "embers:dawnstone_block", "mna:vinteum_block", "ironfurnaces:upgrade_diamond");
  potting_furnace_and_upgrade("ironfurnaces:upgrade_diamond", "botania:terrasteel_block", "extendedcrafting:black_iron_block", "ironfurnaces:upgrade_emerald");
  potting_furnace_and_upgrade("ironfurnaces:upgrade_emerald", "ad_astra:steel_block", "gobber2:gobber2_block_end", "ironfurnaces:upgrade_obsidian");
  potting_furnace_and_upgrade("ironfurnaces:upgrade_obsidian", "draconicevolution:draconium_block", "draconicevolution:chaos_shard", "ironfurnaces:upgrade_netherite");
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function ironfurnaces() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["ironfurnaces:crystal_furnace", "ironfurnaces:silver_furnace", "ironfurnaces:upgrade_crystal", "ironfurnaces:upgrade_gold2", "ironfurnaces:upgrade_iron", "ironfurnaces:upgrade_obsidian2", "ironfurnaces:upgrade_silver", "ironfurnaces:upgrade_silver2", "ironfurnaces:rainbow_coal", "ironfurnaces:rainbow_core", "ironfurnaces:rainbow_plating"];
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
ironfurnaces();
//#endregion
