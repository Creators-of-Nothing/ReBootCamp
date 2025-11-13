//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Solar Panels
  let potting_solar_panel = (Base, Material1, Material2, Result) => {
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
  potting_solar_panel("createaddition:small_light_connector", "minecraft:oak_log", "minecraft:amethyst_block", "solarflux:sp_custom_solar_panel_1");
  potting_solar_panel("solarflux:sp_custom_solar_panel_1", "minecraft:cobblestone", "minecraft:copper_block", "solarflux:sp_custom_solar_panel_2");
  potting_solar_panel("solarflux:sp_custom_solar_panel_2", "minecraft:cobblestone", "minecraft:iron_block", "solarflux:sp_custom_solar_panel_3");
  potting_solar_panel("solarflux:sp_custom_solar_panel_3", "ars_nouveau:source_gem_block", "create:andesite_alloy_block", "solarflux:sp_custom_solar_panel_4");
  potting_solar_panel("solarflux:sp_custom_solar_panel_4", "ars_nouveau:source_gem_block", "create:brass_block", "solarflux:sp_custom_solar_panel_5");
  potting_solar_panel("solarflux:sp_custom_solar_panel_5", "embers:dawnstone_block", "mna:vinteum_block", "solarflux:sp_custom_solar_panel_6");
  potting_solar_panel("solarflux:sp_custom_solar_panel_6", "embers:dawnstone_block", "mna:decoration/transmuted_silver_block", "solarflux:sp_custom_solar_panel_7");
  potting_solar_panel("solarflux:sp_custom_solar_panel_7", "botania:terrasteel_block", "extendedcrafting:black_iron_block", "solarflux:sp_custom_solar_panel_8");
  potting_solar_panel("solarflux:sp_custom_solar_panel_8", "botania:terrasteel_block", "cataclysm:ignitium_block", "solarflux:sp_custom_solar_panel_9");
  potting_solar_panel("solarflux:sp_custom_solar_panel_9", "ad_astra:steel_block", "gobber2:gobber2_block_end", "solarflux:sp_custom_solar_panel_10");
  potting_solar_panel("solarflux:sp_custom_solar_panel_10", "ad_astra:steel_block", "powah:nitro_crystal_block", "solarflux:sp_custom_solar_panel_11");
  potting_solar_panel("solarflux:sp_custom_solar_panel_11", "draconicevolution:draconium_block", "draconicevolution:chaos_shard", "solarflux:sp_custom_solar_panel_12");
  potting_solar_panel("solarflux:sp_custom_solar_panel_12", "avaritia:neutron", "avaritia:infinity", "solarflux:sp_custom_solar_panel_13");
  //#endregion
  //#region - Upgrades
  e.custom({
    type: "create:pressing",
    ingredients: [
      {
        item: "minecraft:stone"
      }
    ],
    results: [
      {
        item: "solarflux:blank_upgrade"
      }
    ]
  });
  let potting_upgrade = (Material, Result) => {
    e.custom({
      type: "create:deploying",
      ingredients: [
        {
          item: "solarflux:blank_upgrade"
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
  potting_upgrade("ironfurnaces:augment_generator", "solarflux:efficiency_upgrade");
  potting_upgrade("pipez:ultimate_upgrade", "solarflux:transfer_rate_upgrade");
  potting_upgrade("fluxnetworks:basic_flux_storage", "solarflux:capacity_upgrade");
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function solarflux() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["solarflux:mirror", "solarflux:photovoltaic_cell_1", "solarflux:photovoltaic_cell_2", "solarflux:photovoltaic_cell_3", "solarflux:photovoltaic_cell_4", "solarflux:photovoltaic_cell_5", "solarflux:photovoltaic_cell_6", "solarflux:blazing_coating", "solarflux:emerald_glass", "solarflux:ender_glass", "solarflux:traversal_upgrade", "solarflux:dispersive_upgrade", "solarflux:block_charging_upgrade", "solarflux:furnace_upgrade", "solarflux:sp_1", "solarflux:sp_2", "solarflux:sp_3", "solarflux:sp_4", "solarflux:sp_5", "solarflux:sp_6", "solarflux:sp_7", "solarflux:sp_8", "solarflux:sp_de.wyvern", "solarflux:sp_de.draconic", "solarflux:sp_de.chaotic", "solarflux:sp_avaritia.neutronium", "solarflux:sp_avaritia.infinity"];
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
solarflux();
//#endregion
