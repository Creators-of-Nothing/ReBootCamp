//#region - Remove Ores (Credit to XenoArea)
WorldgenEvents.remove(e => {
  e.removeOres(p => {
    p.blocks = [/ad_astra:.*_ice_shard_ore/, /draconicevolution:.*_draconium_ore/, /gobber2:gobber2_ore/, "gobber2:gobber2_lucky_block", "iceandfire:sapphire_ore", "alexscaves:radrock_uranium_ore"];
  });
});
//#endregion
