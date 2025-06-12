//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([{ id: "draconicevolution:components/draconium_ingot_from_dust" }, { id: "draconicevolution:components/awakened_draconium_ingot_from_dust" }]);
  //#endregion
  //#region - Modules
  e.remove({ id: /draconicevolution:modules\/item_/ });
  //#region - Basic Modules
  let potting_basic_modules_from_base = (Base, Basic) => {
    e.shaped(Basic, ["ABA", "CDC", "ABA"], {
      A: Base,
      B: "create:andesite_alloy",
      C: "draconicevolution:draconium_core",
      D: "draconicevolution:module_core"
    });
  };
  potting_basic_modules_from_base("minecraft:piston", "draconicevolution:item_draconium_aoe");
  potting_basic_modules_from_base("minecraft:sugar", "draconicevolution:item_draconium_speed");
  potting_basic_modules_from_base("ars_nouveau:wilden_horn", "draconicevolution:item_draconium_damage");
  potting_basic_modules_from_base("fluxnetworks:gargantuan_flux_storage", "draconicevolution:item_draconium_energy");
  potting_basic_modules_from_base("minecraft:rabbit_foot", "draconicevolution:item_draconium_jump");
  potting_basic_modules_from_base("minecraft:cookie", "draconicevolution:item_draconium_auto_feed");
  //#endregion
  //#region - Wyvern Modules
  let potting_wyvern_modules_from_base = (Base, Wyvern) => {
    e.shaped(Wyvern, ["ABA", "CDC", "ABA"], {
      A: Base,
      B: "mna:vinteum_ingot",
      C: "draconicevolution:wyvern_core",
      D: "draconicevolution:module_core"
    });
  };
  potting_wyvern_modules_from_base("draconicevolution:basic_wireless_crystal", "draconicevolution:item_wyvern_energy_link");
  potting_wyvern_modules_from_base("minecraft:elytra", "draconicevolution:item_wyvern_flight");
  potting_wyvern_modules_from_base("draconicevolution:item_wyvern_shield_capacity", "draconicevolution:item_wyvern_large_shield_capacity");
  potting_wyvern_modules_from_base("minecraft:target", "draconicevolution:item_wyvern_proj_accuracy");
  potting_wyvern_modules_from_base("minecraft:arrow", "draconicevolution:item_wyvern_proj_damage");
  potting_wyvern_modules_from_base("iceandfire:stymphalian_arrow", "draconicevolution:item_wyvern_proj_grav_comp");
  potting_wyvern_modules_from_base("alexscaves:burrowing_arrow", "draconicevolution:item_wyvern_proj_penetration");
  potting_wyvern_modules_from_base("iceandfire:amphithere_arrow", "draconicevolution:item_wyvern_proj_velocity");
  potting_wyvern_modules_from_base("minecraft:netherite_ingot", "draconicevolution:item_wyvern_shield_capacity");
  potting_wyvern_modules_from_base("powah:thermoelectric_plate", "draconicevolution:item_wyvern_shield_control");
  potting_wyvern_modules_from_base("minecraft:glistering_melon_slice", "draconicevolution:item_wyvern_shield_recovery");
  potting_wyvern_modules_from_base("minecraft:oak_log", "draconicevolution:item_wyvern_tree_harvest");
  potting_wyvern_modules_from_base("minecraft:totem_of_undying", "draconicevolution:item_wyvern_undying");
  potting_wyvern_modules_from_base("minecraft:ender_chest", "draconicevolution:item_wyvern_ender_collection");
  potting_wyvern_modules_from_base("minecraft:clock", "draconicevolution:item_wyvern_auto_fire");
  potting_wyvern_modules_from_base("minecraft:water_bucket", "draconicevolution:item_wyvern_aqua_adapt");
  potting_wyvern_modules_from_base("minecraft:golden_carrot", "draconicevolution:item_wyvern_night_vision");
  potting_wyvern_modules_from_base("minecraft:oak_stairs", "draconicevolution:item_wyvern_hill_step");
  potting_wyvern_modules_from_base("minecraft:magma_block", "draconicevolution:item_wyvern_junk_filter");
  potting_wyvern_modules_from_base("minecraft:phantom_membrane", "draconicevolution:item_wyvern_mining_stability");
  let potting_wyvern_modules = (Basic, Wyvern) => {
    e.shaped(Wyvern, [" A ", "BCB", " A "], {
      A: "mna:vinteum_ingot",
      B: "draconicevolution:wyvern_core",
      C: Basic
    });
  };
  potting_wyvern_modules("draconicevolution:item_draconium_aoe", "draconicevolution:item_wyvern_aoe");
  potting_wyvern_modules("draconicevolution:item_draconium_speed", "draconicevolution:item_wyvern_speed");
  potting_wyvern_modules("draconicevolution:item_draconium_damage", "draconicevolution:item_wyvern_damage");
  potting_wyvern_modules("draconicevolution:item_draconium_energy", "draconicevolution:item_wyvern_energy");
  potting_wyvern_modules("draconicevolution:item_draconium_jump", "draconicevolution:item_wyvern_jump");
  potting_wyvern_modules("draconicevolution:item_draconium_auto_feed", "draconicevolution:item_wyvern_auto_feed");
  //#endregion
  //#region - Draconic Modules
  let potting_draconic_modules_from_base = (Base, Draconic) => {
    e.shaped(Draconic, ["ABA", "CDC", "ABA"], {
      A: Base,
      B: "extendedcrafting:black_iron_ingot",
      C: "draconicevolution:awakened_core",
      D: "draconicevolution:module_core"
    });
  };
  potting_draconic_modules_from_base("minecraft:ender_pearl", "draconicevolution:item_draconic_proj_anti_immune");
  let potting_draconic_modules = (Wyvern, Draconic) => {
    e.shaped(Draconic, [" A ", "BCB", " A "], {
      A: "extendedcrafting:black_iron_ingot",
      B: "draconicevolution:awakened_core",
      C: Wyvern
    });
  };
  potting_draconic_modules("draconicevolution:item_wyvern_aoe", "draconicevolution:item_draconic_aoe");
  potting_draconic_modules("draconicevolution:item_wyvern_speed", "draconicevolution:item_draconic_speed");
  potting_draconic_modules("draconicevolution:item_wyvern_damage", "draconicevolution:item_draconic_damage");
  potting_draconic_modules("draconicevolution:item_wyvern_energy", "draconicevolution:item_draconic_energy");
  potting_draconic_modules("draconicevolution:item_wyvern_jump", "draconicevolution:item_draconic_jump");
  potting_draconic_modules("draconicevolution:item_wyvern_auto_feed", "draconicevolution:item_draconic_auto_feed");
  potting_draconic_modules("draconicevolution:item_wyvern_energy_link", "draconicevolution:item_draconic_energy_link");
  potting_draconic_modules("draconicevolution:item_wyvern_flight", "draconicevolution:item_draconic_flight");
  potting_draconic_modules("draconicevolution:item_wyvern_large_shield_capacity", "draconicevolution:item_draconic_large_shield_capacity");
  potting_draconic_modules("draconicevolution:item_wyvern_proj_accuracy", "draconicevolution:item_draconic_proj_accuracy");
  potting_draconic_modules("draconicevolution:item_wyvern_proj_damage", "draconicevolution:item_draconic_proj_damage");
  potting_draconic_modules("draconicevolution:item_wyvern_proj_grav_comp", "draconicevolution:item_draconic_proj_grav_comp");
  potting_draconic_modules("draconicevolution:item_wyvern_proj_penetration", "draconicevolution:item_draconic_proj_penetration");
  potting_draconic_modules("draconicevolution:item_wyvern_proj_velocity", "draconicevolution:item_draconic_proj_velocity");
  potting_draconic_modules("draconicevolution:item_wyvern_shield_capacity", "draconicevolution:item_draconic_shield_capacity");
  potting_draconic_modules("draconicevolution:item_wyvern_shield_control", "draconicevolution:item_draconic_shield_control");
  potting_draconic_modules("draconicevolution:item_wyvern_shield_recovery", "draconicevolution:item_draconic_shield_recovery");
  potting_draconic_modules("draconicevolution:item_wyvern_tree_harvest", "draconicevolution:item_draconic_tree_harvest");
  potting_draconic_modules("draconicevolution:item_wyvern_undying", "draconicevolution:item_draconic_undying");
  potting_draconic_modules("draconicevolution:item_wyvern_ender_collection", "draconicevolution:item_draconic_ender_collection");
  //#endregion
  //#region - Chaotic Modules
  let potting_chaotic_modules = (Draconic, Chaotic) => {
    e.shaped(Chaotic, [" A ", "BCB", " A "], {
      A: "gobber2:gobber2_ingot_end",
      B: "draconicevolution:chaotic_core",
      C: Draconic
    });
  };
  potting_chaotic_modules("draconicevolution:item_draconic_aoe", "draconicevolution:item_chaotic_aoe");
  potting_chaotic_modules("draconicevolution:item_draconic_speed", "draconicevolution:item_chaotic_speed");
  potting_chaotic_modules("draconicevolution:item_draconic_damage", "draconicevolution:item_chaotic_damage");
  potting_chaotic_modules("draconicevolution:item_draconic_energy", "draconicevolution:item_chaotic_energy");
  potting_chaotic_modules("draconicevolution:item_draconic_jump", "draconicevolution:item_chaotic_jump");
  potting_chaotic_modules("draconicevolution:item_draconic_energy_link", "draconicevolution:item_chaotic_energy_link");
  potting_chaotic_modules("draconicevolution:item_draconic_flight", "draconicevolution:item_chaotic_flight");
  potting_chaotic_modules("draconicevolution:item_draconic_large_shield_capacity", "draconicevolution:item_chaotic_large_shield_capacity");
  potting_chaotic_modules("draconicevolution:item_draconic_proj_accuracy", "draconicevolution:item_chaotic_proj_accuracy");
  potting_chaotic_modules("draconicevolution:item_draconic_proj_damage", "draconicevolution:item_chaotic_proj_damage");
  potting_chaotic_modules("draconicevolution:item_draconic_proj_grav_comp", "draconicevolution:item_chaotic_proj_grav_comp");
  potting_chaotic_modules("draconicevolution:item_draconic_proj_penetration", "draconicevolution:item_chaotic_proj_penetration");
  potting_chaotic_modules("draconicevolution:item_draconic_proj_velocity", "draconicevolution:item_chaotic_proj_velocity");
  potting_chaotic_modules("draconicevolution:item_draconic_shield_capacity", "draconicevolution:item_chaotic_shield_capacity");
  potting_chaotic_modules("draconicevolution:item_draconic_shield_control", "draconicevolution:item_chaotic_shield_control");
  potting_chaotic_modules("draconicevolution:item_draconic_shield_recovery", "draconicevolution:item_chaotic_shield_recovery");
  potting_chaotic_modules("draconicevolution:item_draconic_tree_harvest", "draconicevolution:item_chaotic_tree_harvest");
  potting_chaotic_modules("draconicevolution:item_draconic_undying", "draconicevolution:item_chaotic_undying");
  //#endregion
  //#endregion
  //#region - Injectors
  e.remove({ id: /draconicevolution:machines\/.*_crafting_injector/ });
  let potting_injector = (Base, Core, Result) => {
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
              item: Core
            }
          ],
          results: [
            {
              item: Base
            }
          ]
        },
        {
          type: "create:pressing",
          ingredients: [
            {
              item: Base
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
  //#region - Potting
  potting_injector("ad_astra:steel_block", "draconicevolution:draconium_core", "draconicevolution:basic_crafting_injector");
  potting_injector("draconicevolution:basic_crafting_injector", "draconicevolution:wyvern_core", "draconicevolution:wyvern_crafting_injector");
  potting_injector("draconicevolution:wyvern_crafting_injector", "draconicevolution:awakened_core", "draconicevolution:awakened_crafting_injector");
  potting_injector("draconicevolution:awakened_crafting_injector", "draconicevolution:chaotic_core", "draconicevolution:chaotic_crafting_injector");
  //#endregion
  //#endregion
  //#region - Potentiometer
  e.remove({ id: "draconicevolution:machines/potentiometer" });
  e.shaped("draconicevolution:potentiometer", [" A ", "BCB", "DDD"], {
    A: "#minecraft:planks",
    B: "minecraft:redstone",
    C: "create:shaft",
    D: "minecraft:stone_slab"
  });
  //#endregion
  //#region - Dislocator
  e.remove({ id: "draconicevolution:tools/dislocator" });
  e.shaped("draconicevolution:dislocator", [" A ", "ABA", " A "], {
    A: "enigmaticlegacy:astral_dust",
    B: "waystones:warp_stone"
  });
  //#endregion
  //#region - Dislocator Receptacle
  e.shaped("draconicevolution:dislocator_receptacle", ["ABA", " C ", "A A"], {
    A: "minecraft:iron_ingot",
    B: "draconicevolution:draconium_core",
    C: "minecraft:obsidian"
  });
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function draconicevolution() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "draconicevolution:stabilized_spawner",
    "draconicevolution:disenchanter",
    "draconicevolution:generator",
    /draconicevolution:.*_draconium_ore/,
    /draconicevolution:.*draconium_dust/,
    "draconicevolution:infused_obsidian",
    "draconicevolution:info_tablet",
    /draconicevolution:reactor_/,
    "draconicevolution:draconium_chest",
    "draconicevolution:grinder"
  ];
  let hiding = ["draconic_evolution:p2p_dislocator", "draconic_evolution:player_dislocator"];
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
draconicevolution();
//#endregion
