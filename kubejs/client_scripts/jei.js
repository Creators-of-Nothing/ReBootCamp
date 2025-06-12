//#region - Hiding elements in JEI
JEIEvents.hideItems(e => {
  e.hide("#forge:hiding");
});
JEIEvents.hideFluids(e => {
  e.hide("embers:molten_invar");
  e.hide("embers:molten_constantan");
  e.hide("embers:molten_electrum");
  e.hide("embers:molten_bronze");
  e.hide("embers:molten_platinum");
  e.hide("embers:molten_aluminum");
  e.hide("embers:molten_tin");
  e.hide("embers:molten_nickel");
});
JEIEvents.removeCategories(e => {
  e.remove("minecraft:anvil");
  e.remove("minecraft:fuel");
  e.remove("create:automatic_brewing");
  e.remove("create:automatic_packing");
  e.remove("create:automatic_shaped");
  e.remove("create:automatic_shapeless");
  e.remove("embers:dawnstone_anvil");
  e.remove("framedblocks:framing_saw");
  e.remove("malum:spirit_repair");
  e.remove("tconstruct:tool_recipes");
  e.remove("jeresources:plant");
  e.remove("jeresources:worldgen");
});
JEIEvents.removeRecipes(event => {
  event.remove("minecraft:crating", /simplyjetpacks:particle_/);
});
//#endregion

// Showing items in JEI
JEIEvents.addItems(e => {
  e.add([
    // Global
    "minecraft:pig_spawn_egg",
    // Botany Pots
    "botanypots:terracotta_botany_pot",
    "botanypots:terracotta_hopper_botany_pot",
    "botanypotstiers:elite_terracotta_botany_pot",
    "botanypotstiers:elite_terracotta_hopper_botany_pot",
    "botanypotstiers:ultra_terracotta_botany_pot",
    "botanypotstiers:ultra_terracotta_hopper_botany_pot",
    "botanypotstiers:creative_terracotta_botany_pot",
    "botanypotstiers:creative_terracotta_hopper_botany_pot",
    // Patchouli
    Item.of("patchouli:guide_book", '{"patchouli:book":"apotheosis:apoth_chronicle"}'),
    Item.of("patchouli:guide_book", '{"patchouli:book":"ad_astra:astrodux"}'),
    Item.of("patchouli:guide_book", '{"patchouli:book":"extendedcrafting:guide"}'),
    Item.of("patchouli:guide_book", '{"patchouli:book":"buildinggadgets2:buildinggadgets2book"}'),
    Item.of("patchouli:guide_book", '{"patchouli:book":"modularrouters:book"}'),
    // Sophisticated Backpacks
    "sophisticatedbackpacks:backpack",
    // Sophisticated Storage
    Item.of("sophisticatedstorage:chest", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:copper_chest", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:iron_chest", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:gold_chest", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:diamond_chest", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:netherite_chest", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:barrel", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:copper_barrel", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:iron_barrel", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:gold_barrel", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:diamond_barrel", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:netherite_barrel", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_barrel_1", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_copper_barrel_1", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_iron_barrel_1", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_gold_barrel_1", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_diamond_barrel_1", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_netherite_barrel_1", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_barrel_2", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_copper_barrel_2", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_iron_barrel_2", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_gold_barrel_2", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_diamond_barrel_2", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_netherite_barrel_2", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_barrel_3", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_copper_barrel_3", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_iron_barrel_3", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_gold_barrel_3", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_diamond_barrel_3", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_netherite_barrel_3", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_barrel_4", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_copper_barrel_4", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_iron_barrel_4", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_gold_barrel_4", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_diamond_barrel_4", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_netherite_barrel_4", '{woodType:"oak"}'),
    "sophisticatedstorage:shulker_box",
    "sophisticatedstorage:copper_shulker_box",
    "sophisticatedstorage:iron_shulker_box",
    "sophisticatedstorage:gold_shulker_box",
    "sophisticatedstorage:diamond_shulker_box",
    "sophisticatedstorage:netherite_shulker_box"
  ]);
});

/*// Adding informations
ItemEvents.tooltip(e => {
    // Iron Furnaces
    e.add('ironfurnaces:copper_furnace', '§216 RF/t')
    e.add('ironfurnaces:silver_furnace', '§232 RF/t')
    e.add('ironfurnaces:iron_furnace', '§264 RF/t')
    e.add('ironfurnaces:gold_furnace', '§2128 RF/t')
    e.add('ironfurnaces:diamond_furnace', '§2256 RF/t')
    e.add('ironfurnaces:obsidian_furnace', '§2512 RF/t')
    e.add('ironfurnaces:emerald_furnace', '§21024 RF/t')
    e.add('ironfurnaces:netherite_furnace', '§22048 RF/t')
    e.add('ironfurnaces:million_furnace', '§24096 RF/t')
})*/

/*
//#region - New Categories (Thanks to Gu-meng for the "Explore Everything" Modpack, where we found exemples)sssssssssssssssssssss
JEIAddedEvents.registerCategories(e => {
  e.custom("rebootcamp:sculk_crafting_recipe", category => {
    let jeiHelpers = category.getJeiHelpers()
    let guihelper = jeiHelpers.getGUIHelper()
    category
      .title("Sculk Crafting")
      .icon(guihelper.createDrawableItemStack(Item.of("avaritia:sculk_crafting_table")))
      .background(guiHelper.createBlankDrawable(150, 80))
      .handleLookup(builder => {
        builder.addSlot("Input", 10, 10).addItemStack("minecraft:diamond").setSlotName("input")
        builder.addSlot("Input", 30, 30).addItemStack("minecraft:iron_ingot").setSlotName("input")
        builder.addSlot("Output", 50, 50).addItemStack("minecraft:nether_star").setSlotName("output")
      })
      .setDrawHandler(guiGraphics => {
        guiGraphics.drawWordWrap(Client.font, Text.of("Test de texte"), 0, 10, 100, 0)
      })
  })
})

JEIAddedEvents.registerRecipes(e => {
  e.custom("rebootcamp:sculk_crafting_recipe").add({
    name: "minecraft:diamond",
    type: "item",
    description: "Test de description"
  })
})
//#endregion
*/
