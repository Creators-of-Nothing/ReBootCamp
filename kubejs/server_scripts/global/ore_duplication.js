//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Définition des constantes
  const listOfOres = ["minecraft:coal_ore", "minecraft:iron_ore", "minecraft:copper_ore", "minecraft:gold_ore", "minecraft:redstone_ore", "minecraft:emerald_ore", "minecraft:lapis_ore", "minecraft:diamond_ore", "malum:natural_quartz_ore", "minecraft:ancient_debris", "ad_astra:moon_desh_ore", "ad_astra:mars_ostrum_ore", "ad_astra:venus_calorite_ore", "create:zinc_ore", "embers:lead_ore", "embers:silver_ore", "mythicbotany:elementium_ore", "mythicbotany:dragonstone_ore", "malum:soulstone_ore", /*"betterend:amber_ore", "betterend:thallasium_ore", "betterend:ender_ore", */ "enigmaticlegacy:etherium_ore", "malum:blazing_quartz_ore", "malum:brilliant_stone"];
  const listOfRaws = ["kubejs:raw_coal", "minecraft:raw_iron", "minecraft:raw_copper", "minecraft:raw_gold", "kubejs:raw_redstone", "kubejs:raw_emerald", "kubejs:raw_lapis_lazuli", "kubejs:raw_diamond", "kubejs:raw_quartz", "kubejs:raw_netherite", "ad_astra:raw_desh", "ad_astra:raw_ostrum", "ad_astra:raw_calorite", "create:raw_zinc", "embers:raw_lead", "embers:raw_silver", "mythicbotany:raw_elementium", "kubejs:raw_dragonstone", "malum:raw_soulstone", /*"betterend:raw_amber", "betterend:thallasium_raw", "kubejs:raw_ender", */ "kubejs:raw_etherium", "kubejs:raw_blazing_quartz", "kubejs:raw_brilliant"];
  const listOfClumps = ["kubejs:clump_coal", "kubejs:clump_iron", "kubejs:clump_copper", "kubejs:clump_gold", "kubejs:clump_redstone", "kubejs:clump_emerald", "kubejs:clump_lapis_lazuli", "kubejs:clump_diamond", "kubejs:clump_quartz", "kubejs:clump_netherite", "kubejs:clump_desh", "kubejs:clump_ostrum", "kubejs:clump_calorite", "kubejs:clump_zinc", "kubejs:clump_lead", "kubejs:clump_silver", "kubejs:clump_elementium", "kubejs:clump_dragonstone", "kubejs:clump_soulstone", /*"kubejs:clump_amber", "kubejs:clump_thallasium", "kubejs:clump_ender", */ "kubejs:clump_etherium", "kubejs:clump_blazing_quartz", "kubejs:clump_brilliant"];
  const listOfShards = ["kubejs:shard_coal", "kubejs:shard_iron", "kubejs:shard_copper", "kubejs:shard_gold", "kubejs:shard_redstone", "kubejs:shard_emerald", "kubejs:shard_lapis_lazuli", "kubejs:shard_diamond", "kubejs:shard_quartz", "kubejs:shard_netherite", "kubejs:shard_desh", "kubejs:shard_ostrum", "kubejs:shard_calorite", "kubejs:shard_zinc", "kubejs:shard_lead", "kubejs:shard_silver", "kubejs:shard_elementium", "kubejs:shard_dragonstone", "kubejs:shard_soulstone", /*"kubejs:shard_amber", "kubejs:shard_thallasium", "kubejs:shard_ender", */ "kubejs:shard_etherium", "kubejs:shard_blazing_quartz", "kubejs:shard_brilliant"];
  const listOfCrystals = ["kubejs:crystal_coal", "kubejs:crystal_iron", "kubejs:crystal_copper", "kubejs:crystal_gold", "kubejs:crystal_redstone", "kubejs:crystal_emerald", "kubejs:crystal_lapis_lazuli", "kubejs:crystal_diamond", "kubejs:crystal_quartz", "kubejs:crystal_netherite", "kubejs:crystal_desh", "kubejs:crystal_ostrum", "kubejs:crystal_calorite", "kubejs:crystal_zinc", "kubejs:crystal_lead", "kubejs:crystal_silver", "kubejs:crystal_elementium", "kubejs:crystal_dragonstone", "kubejs:crystal_soulstone", /*"kubejs:crystal_amber", "kubejs:crystal_thallasium", "kubejs:crystal_ender", */ "kubejs:crystal_etherium", "kubejs:crystal_blazing_quartz", "kubejs:crystal_brilliant"];
  const listOfFinalElements = ["minecraft:coal", "minecraft:iron_ingot", "minecraft:copper_ingot", "minecraft:gold_ingot", "minecraft:redstone", "minecraft:emerald", "minecraft:lapis_lazuli", "minecraft:diamond", "minecraft:quartz", "minecraft:netherite_ingot", "ad_astra:desh_ingot", "ad_astra:ostrum_ingot", "ad_astra:calorite_ingot", "create:zinc_ingot", "embers:lead_ingot", "embers:silver_ingot", "botania:elementium_ingot", "botania:dragonstone", "malum:processed_soulstone", /*"betterend:amber_gem", "betterend:thallasium_ingot", "minecraft:ender_pearl", */ "enigmaticlegacy:etherium_ingot", "malum:blazing_quartz", "malum:cluster_of_brilliance"];
  //#endregion
  //#region - Ore → Raw
  let potting_ore_to_raw = (Ore, Raw) => {
    e.custom({
      type: "minecraft:smelting",
      ingredient: {
        item: Ore
      },
      result: {
        count: 3,
        item: Raw
      },
      cookingtime: 200
    });
    e.custom({
      type: "minecraft:blasting",
      ingredient: {
        item: Ore
      },
      result: {
        count: 3,
        item: Raw
      },
      cookingtime: 100
    });
  };
  //#endregion
  //#region - Raw → Clump
  let potting_raw_to_clump = (Raw, Clump) => {
    e.custom({
      type: "ars_nouveau:imbuement",
      count: 1,
      input: {
        item: Raw
      },
      output: Clump,
      pedestalItems: [],
      source: 50
    });
  };
  //#endregion
  //#region - Clump → Shard
  let potting_clump_to_shard = (Clump, Shard) => {
    e.custom({
      type: "malum:spirit_infusion",
      extra_items: [],
      input: {
        count: 1,
        item: Clump
      },
      output: {
        item: Shard
      },
      spirits: [
        {
          type: "earthen"
        },
        {
          type: "infernal"
        }
      ]
    });
  };
  //#endregion
  //#region - Shard → Crystal
  let potting_shard_to_crystal = (Shard, Crystal) => {
    e.custom({
      type: "botania:mana_infusion",
      input: {
        item: Shard
      },
      mana: 10,
      output: {
        item: Crystal
      }
    });
  };
  //#endregion
  //#region - All → Final Element
  let potting_raw_to_final_element = (Raw, FinalElement) => {
    e.custom({
      type: "minecraft:smelting",
      ingredient: {
        item: Raw
      },
      result: {
        count: 1,
        item: FinalElement
      },
      cookingtime: 200,
      experience: 0.5
    });
  };
  let potting_clump_to_final_element = (Clump, FinalElement) => {
    e.custom({
      type: "minecraft:smelting",
      ingredient: {
        item: Clump
      },
      result: {
        count: 2,
        item: FinalElement
      },
      cookingtime: 200,
      experience: 0.5
    });
  };
  let potting_shard_to_final_element = (Shard, FinalElement) => {
    e.custom({
      type: "minecraft:smelting",
      ingredient: {
        item: Shard
      },
      result: {
        count: 4,
        item: FinalElement
      },
      cookingtime: 200,
      experience: 0.5
    });
  };
  let potting_crystal_to_final_element = (Crystal, FinalElement) => {
    e.custom({
      type: "minecraft:smelting",
      ingredient: {
        item: Crystal
      },
      result: {
        count: 8,
        item: FinalElement
      },
      cookingtime: 200,
      experience: 0.5
    });
  };
  //#endregion
  //#region - Potting (Credit to XenoArea)
  listOfOres.forEach((Ore, index) => {
    const Raw = listOfRaws[index];
    const Clump = listOfClumps[index];
    const Shard = listOfShards[index];
    const Crystal = listOfCrystals[index];
    const FinalElement = listOfFinalElements[index];
    potting_ore_to_raw(Ore, Raw);
    potting_raw_to_clump(Raw, Clump);
    potting_clump_to_shard(Clump, Shard);
    potting_shard_to_crystal(Shard, Crystal);
    potting_raw_to_final_element(Raw, FinalElement);
    potting_clump_to_final_element(Clump, FinalElement);
    potting_shard_to_final_element(Shard, FinalElement);
    potting_crystal_to_final_element(Crystal, FinalElement);
  });
  //#endregion
  //#region - Suppression de crafts
  e.remove([
    // Vanilla
    { id: /minecraft:.*_from_blasting/ },
    { id: /minecraft:.*_from_smelting/ },
    // Ad Astra
    { id: /ad_astra:blasting\// },
    { id: /ad_astra:smelting\// },
    // Alex's Caves
    { id: /alexscaves:furnace\// },
    // Aquaculture
    { id: "aquaculture:gold_nugget_from_blasting" },
    { id: "aquaculture:iron_nugget_from_blasting" },
    // Better End
    // { id: /betterend:.*_blasting/ },
    // { id: /betterend:.*_smelting/ },
    // Botania
    { id: /mythicbotany:blasting\// },
    { id: /mythicbotany:smelting\// },
    // Cataclysm
    { id: /cataclysm:.*_blasting/ },
    { id: /cataclysm:.*_smelting/ },
    // Create
    { id: /create:blasting\// },
    { id: /create:smelting\// },
    // Draconic Evolution
    { id: "draconicevolution:components/draconium_ingot_from_ore" },
    // Embers
    { id: /embers:.*_blasting/ },
    { id: /embers:.*_smelting/ },
    // Enigmatic Legacy
    { id: /enigmaticlegacy:etherium_ingot/ },
    // Farmer's Delight
    { id: /farmersdelight:.*_blasting/ },
    { id: /farmersdelight:.*_smelting/ },
    { id: /nethersdelight:.*_blasting/ },
    { id: /nethersdelight:.*_smelting/ },
    // Ice and Fire
    { id: /iceandfire:furnace\// },
    // Malum
    { id: /malum:.*_blasting/ },
    { id: /malum:.*_smelting/ }
  ]);
  //#endregion
});
//#endregion

//#region - Loot Tables
ServerEvents.blockLootTables(e => {
  //#region - Ore Drop
  let potting_ore_drop = (Ore, Block, Raw) => {
    e.addBlock(Ore, table => {
      table.addPool(no_enchant => {
        no_enchant.survivesExplosion();
        no_enchant.addCondition({
          condition: "minecraft:match_tool"
        });
        no_enchant.addCondition({
          condition: "minecraft:inverted",
          term: {
            condition: "minecraft:match_tool",
            predicate: {
              enchantments: [
                {
                  enchantment: "minecraft:silk_touch",
                  levels: {
                    min: 1
                  }
                }
              ]
            }
          }
        });
        no_enchant.addCondition({
          condition: "minecraft:inverted",
          term: {
            condition: "minecraft:match_tool",
            predicate: {
              enchantments: [
                {
                  enchantment: "minecraft:fortune",
                  levels: {
                    min: 1
                  }
                }
              ]
            }
          }
        });
        no_enchant.rolls = 1;
        no_enchant.addItem(Raw);
      });
      table.addPool(silk_touch => {
        silk_touch.survivesExplosion();
        silk_touch.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:silk_touch",
                levels: {
                  min: 1
                }
              }
            ]
          }
        });
        silk_touch.rolls = 1;
        silk_touch.addItem(Block);
      });
      table.addPool(fortune1 => {
        fortune1.survivesExplosion();
        fortune1.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 1
              }
            ]
          }
        });
        fortune1.rolls = 2;
        fortune1.addItem(Raw);
      });
      table.addPool(fortune2 => {
        fortune2.survivesExplosion();
        fortune2.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 2
              }
            ]
          }
        });
        fortune2.rolls = 4;
        fortune2.addItem(Raw);
      });
      table.addPool(fortune3 => {
        fortune3.survivesExplosion();
        fortune3.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 3
              }
            ]
          }
        });
        fortune3.rolls = 6;
        fortune3.addItem(Raw);
      });
      table.addPool(fortune4 => {
        fortune4.survivesExplosion();
        fortune4.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 4
              }
            ]
          }
        });
        fortune4.rolls = 8;
        fortune4.addItem(Raw);
      });
      table.addPool(fortune5 => {
        fortune5.survivesExplosion();
        fortune5.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 5
              }
            ]
          }
        });
        fortune5.rolls = 10;
        fortune5.addItem(Raw);
      });
      table.addPool(fortune6 => {
        fortune6.survivesExplosion();
        fortune6.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 6
              }
            ]
          }
        });
        fortune6.rolls = 12;
        fortune6.addItem(Raw);
      });
      table.addPool(fortune7 => {
        fortune7.survivesExplosion();
        fortune7.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 7
              }
            ]
          }
        });
        fortune7.rolls = 14;
        fortune7.addItem(Raw);
      });
      table.addPool(fortune8 => {
        fortune8.survivesExplosion();
        fortune8.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 8
              }
            ]
          }
        });
        fortune8.rolls = 16;
        fortune8.addItem(Raw);
      });
      table.addPool(fortune9 => {
        fortune9.survivesExplosion();
        fortune9.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 9
              }
            ]
          }
        });
        fortune9.rolls = 18;
        fortune9.addItem(Raw);
      });
      table.addPool(fortune10 => {
        fortune10.survivesExplosion();
        fortune10.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 10
              }
            ]
          }
        });
        fortune10.rolls = 20;
        fortune10.addItem(Raw);
      });
    });
  };
  //#region - Potting
  potting_ore_drop(["minecraft:coal_ore", "minecraft:deepslate_coal_ore", "ad_astra:venus_coal_ore", "ad_astra:glacio_coal_ore", "alexscaves:coprolith_coal_ore"], "minecraft:coal_ore", "kubejs:raw_coal");
  potting_ore_drop(["minecraft:iron_ore", "minecraft:deepslate_iron_ore", "ad_astra:moon_iron_ore", "ad_astra:mars_iron_ore", "ad_astra:mercury_iron_ore", "ad_astra:glacio_iron_ore", "alexscaves:galena_iron_ore"], "minecraft:iron_ore", "minecraft:raw_iron");
  potting_ore_drop(["minecraft:copper_ore", "minecraft:deepslate_copper_ore", "ad_astra:glacio_copper_ore"], "minecraft:copper_ore", "minecraft:raw_copper");
  potting_ore_drop(["minecraft:gold_ore", "minecraft:deepslate_gold_ore", "minecraft:nether_gold_ore", "ad_astra:venus_gold_ore", "mythicbotany:gold_ore"], "minecraft:gold_ore", "minecraft:raw_gold");
  potting_ore_drop(["minecraft:redstone_ore", "minecraft:deepslate_redstone_ore", "alexscaves:guanostone_redstone_ore"], "minecraft:redstone_ore", "kubejs:raw_redstone");
  potting_ore_drop(["minecraft:emerald_ore", "minecraft:deepslate_emerald_ore"], "minecraft:emerald_ore", "kubejs:raw_emerald");
  potting_ore_drop(["minecraft:lapis_ore", "minecraft:deepslate_lapis_ore", "ad_astra:glacio_lapis_ore"], "minecraft:lapis_ore", "kubejs:raw_lapis");
  potting_ore_drop(["minecraft:diamond_ore", "minecraft:deepslate_diamond_ore", "ad_astra:mars_diamond_ore", "ad_astra:venus_diamond_ore"], "minecraft:diamond_ore", "kubejs:raw_diamond");
  potting_ore_drop(["malum:natural_quartz_ore", "malum:deepslate_quartz_ore", "minecraft:nether_quartz_ore"], "malum:natural_quartz_ore", "kubejs:raw_quartz");
  potting_ore_drop("minecraft:ancient_debris", "minecraft:ancient_debris", "kubejs:raw_netherite");
  potting_ore_drop(["ad_astra:moon_desh_ore", "ad_astra:deepslate_desh_ore"], "ad_astra:moon_desh_ore", "ad_astra:raw_desh");
  potting_ore_drop(["ad_astra:mars_ostrum_ore", "ad_astra:deepslate_ostrum_ore"], "ad_astra:mars_ostrum_ore", "ad_astra:raw_ostrum");
  potting_ore_drop(["ad_astra:venus_calorite_ore", "ad_astra:deepslate_calorite_ore"], "ad_astra:venus_calorite_ore", "ad_astra:raw_calorite");
  potting_ore_drop(["create:zinc_ore", "create:deepslate_zinc_ore"], "create:zinc_ore", "create:raw_zinc");
  potting_ore_drop(["embers:lead_ore", "embers:deepslate_lead_ore"], "embers:lead_ore", "embers:raw_lead");
  potting_ore_drop(["embers:silver_ore", "embers:deepslate_silver_ore"], "embers:silver_ore", "embers:raw_silver");
  potting_ore_drop("mythicbotany:elementium_ore", "mythicbotany:elementium_ore", "mythicbotany:raw_elementium");
  potting_ore_drop("mythicbotany:dragonstone_ore", "mythicbotany:dragonstone_ore", "kubejs:raw_dragonstone");
  potting_ore_drop(["malum:soulstone_ore", "malum:deepslate_soulstone_ore"], "malum:soulstone_ore", "malum:raw_soulstone");
  // potting_ore_drop("betterend:amber_ore", "betterend:amber_ore", "betterend:raw_amber");
  // potting_ore_drop("betterend:thallasium_ore", "betterend:thallasium_ore", "betterend:thallasium_raw");
  // potting_ore_drop("betterend:ender_ore", "betterend:ender_ore", "kubejs:raw_ender");
  potting_ore_drop("malum:blazing_quartz_ore", "malum:blazing_quartz_ore", "kubejs:raw_blazing_quartz");
  potting_ore_drop("malum:brilliant_ore", "malum:brilliant_ore", "kubejs:raw_brilliant");
  //#endregion
  //#endregion
});
//#endregion
