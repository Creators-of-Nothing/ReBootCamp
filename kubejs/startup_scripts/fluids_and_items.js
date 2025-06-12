//#region - Custom Fluids
StartupEvents.registry("fluid", e => {
  e.create("flower_oil").thinTexture(0xc4b99f).bucketColor(0xc4b99f).displayName("Flower Oil");
  e.create("void_fluid").thinTexture(0x3d1673).bucketColor(0x3d1673).displayName("Void Fluid");
  e.create("infinity_fluid")
    .stillTexture("avaritia:block/resource/infinity")
    .flowingTexture("avaritia:block/resource/infinity")
    .bucketColor(0xf0f0f0)
    .displayName("Infinity Fluid")
    .viscosity("10000")
    .temperature("0");
});
//#endregion

//#region - Custom Items
StartupEvents.registry("item", e => {
  e.create("aspectus_stamp").displayName("Aspectus Stamp");
  e.create("dragon_cast").displayName("Dragon Cast");
  e.create("extreme_cast").displayName("Extreme Cast");
  e.create("inert_aspectus").displayName("Inert Aspectus");
  e.create("inert_ingot").displayName("Inert Ingot");
  e.create("raw_aspectus_stamp").displayName("Raw Aspectus Stamp");
  e.create("sculk_cast").displayName("Sculk Cast");
  e.create("wither_cast").displayName("Wither Cast");
  // Ores Duplication
  e.create("clump_amber").displayName("Amber Clump");
  e.create("clump_blazing_quartz").displayName("Blazing Quartz Clump");
  e.create("clump_brilliant").displayName("Brilliant Clump");
  e.create("clump_calorite").displayName("Calorite Clump");
  e.create("clump_coal").displayName("Coal Clump");
  e.create("clump_cobalt").displayName("Cobalt Clump");
  e.create("clump_copper").displayName("Copper Clump");
  e.create("clump_desh").displayName("Desh Clump");
  e.create("clump_diamond").displayName("Diamond Clump");
  e.create("clump_dragonstone").displayName("Dragonstone Clump");
  e.create("clump_elementium").displayName("Elementium Clump");
  e.create("clump_emerald").displayName("Emerald Clump");
  e.create("clump_end_gobber").displayName("End Gobber Clump");
  e.create("clump_ender").displayName("Ender Clump");
  e.create("clump_etherium").displayName("Etherium Clump");
  e.create("clump_gobber").displayName("Gobber Clump");
  e.create("clump_gold").displayName("Gold Clump");
  e.create("clump_iron").displayName("Iron Clump");
  e.create("clump_lapis_lazuli").displayName("Lapis Lazuli Clump");
  e.create("clump_lead").displayName("Lead Clump");
  e.create("clump_nether_gobber").displayName("Nether Gobber Clump");
  e.create("clump_netherite").displayName("Netherite Clump");
  e.create("clump_ostrum").displayName("Ostrum Clump");
  e.create("clump_quartz").displayName("Quartz Clump");
  e.create("clump_redstone").displayName("Redstone Clump");
  e.create("clump_silver").displayName("Silver Clump");
  e.create("clump_soulstone").displayName("Soulstone Clump");
  e.create("clump_thallasium").displayName("Thallasium Clump");
  e.create("clump_vinteum").displayName("Vinteum Clump");
  e.create("clump_zinc").displayName("Zinc Clump");
  e.create("crystal_amber").displayName("Amber Crystal");
  e.create("crystal_blazing_quartz").displayName("Blazing Quartz Crystal");
  e.create("crystal_brilliant").displayName("Brilliant Crystal");
  e.create("crystal_calorite").displayName("Calorite Crystal");
  e.create("crystal_coal").displayName("Coal Crystal");
  e.create("crystal_cobalt").displayName("Cobalt Crystal");
  e.create("crystal_copper").displayName("Copper Crystal");
  e.create("crystal_desh").displayName("Desh Crystal");
  e.create("crystal_diamond").displayName("Diamond Crystal");
  e.create("crystal_dragonstone").displayName("Dragonstone Crystal");
  e.create("crystal_elementium").displayName("Elementium Crystal");
  e.create("crystal_emerald").displayName("Emerald Crystal");
  e.create("crystal_end_gobber").displayName("End Gobber Crystal");
  e.create("crystal_ender").displayName("Ender Crystal");
  e.create("crystal_etherium").displayName("Etherium Crystal");
  e.create("crystal_gobber").displayName("Gobber Crystal");
  e.create("crystal_gold").displayName("Gold Crystal");
  e.create("crystal_iron").displayName("Iron Crystal");
  e.create("crystal_lapis_lazuli").displayName("Lapis Lazuli Crystal");
  e.create("crystal_lead").displayName("Lead Crystal");
  e.create("crystal_nether_gobber").displayName("Nether Gobber Crystal");
  e.create("crystal_netherite").displayName("Netherite Crystal");
  e.create("crystal_ostrum").displayName("Ostrum Crystal");
  e.create("crystal_quartz").displayName("Quartz Crystal");
  e.create("crystal_redstone").displayName("Redstone Crystal");
  e.create("crystal_silver").displayName("Silver Crystal");
  e.create("crystal_soulstone").displayName("Soulstone Crystal");
  e.create("crystal_thallasium").displayName("Thallasium Crystal");
  e.create("crystal_vinteum").displayName("Vinteum Crystal");
  e.create("crystal_zinc").displayName("Zinc Crystal");
  e.create("raw_blazing_quartz").displayName("Raw Blazing Quartz");
  e.create("raw_brilliant").displayName("Raw Brilliant");
  e.create("raw_coal").displayName("Raw Coal");
  e.create("raw_diamond").displayName("Raw Diamond");
  e.create("raw_dragonstone").displayName("Raw Dragonstone");
  e.create("raw_emerald").displayName("Raw Emerald");
  e.create("raw_end_gobber").displayName("End Raw Gobber");
  e.create("raw_ender").displayName("Raw Ender");
  e.create("raw_etherium").displayName("Raw Etherium");
  e.create("raw_gobber").displayName("Raw Gobber");
  e.create("raw_lapis_lazuli").displayName("Lapis Raw Lazuli");
  e.create("raw_nether_gobber").displayName("Nether Raw Gobber");
  e.create("raw_netherite").displayName("Raw Netherite");
  e.create("raw_quartz").displayName("Raw Quartz");
  e.create("raw_redstone").displayName("Raw Redstone");
  e.create("shard_amber").displayName("Amber Shard");
  e.create("shard_blazing_quartz").displayName("Blazing Quartz Shard");
  e.create("shard_brilliant").displayName("Brilliant Shard");
  e.create("shard_calorite").displayName("Calorite Shard");
  e.create("shard_coal").displayName("Coal Shard");
  e.create("shard_cobalt").displayName("Cobalt Shard");
  e.create("shard_copper").displayName("Copper Shard");
  e.create("shard_desh").displayName("Desh Shard");
  e.create("shard_diamond").displayName("Diamond Shard");
  e.create("shard_dragonstone").displayName("Dragonstone Shard");
  e.create("shard_elementium").displayName("Elementium Shard");
  e.create("shard_emerald").displayName("Emerald Shard");
  e.create("shard_end_gobber").displayName("End Gobber Shard");
  e.create("shard_ender").displayName("Ender Shard");
  e.create("shard_etherium").displayName("Etherium Shard");
  e.create("shard_gobber").displayName("Gobber Shard");
  e.create("shard_gold").displayName("Gold Shard");
  e.create("shard_iron").displayName("Iron Shard");
  e.create("shard_lapis_lazuli").displayName("Lapis Lazuli Shard");
  e.create("shard_lead").displayName("Lead Shard");
  e.create("shard_nether_gobber").displayName("Nether Gobber Shard");
  e.create("shard_netherite").displayName("Netherite Shard");
  e.create("shard_ostrum").displayName("Ostrum Shard");
  e.create("shard_quartz").displayName("Quartz Shard");
  e.create("shard_redstone").displayName("Redstone Shard");
  e.create("shard_silver").displayName("Silver Shard");
  e.create("shard_soulstone").displayName("Soulstone Shard");
  e.create("shard_thallasium").displayName("Thallasium Shard");
  e.create("shard_vinteum").displayName("Vinteum Shard");
  e.create("shard_zinc").displayName("Zinc Shard");
});
//#endregion

//#region - Custom Items
StartupEvents.registry("block", e => {
  e.create("powdered_obsidian_block").displayName("Powdered Obsidian Block");
  e.create("gaia_block").displayName("Gaia Spirit Block");
  e.create("inert_block").displayName("Inert Block");
});
//#endregion
