//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Llama Plush
  e.remove({ id: /moa_decor_toys:llama/ });
  let potting_llama_plush = (Wool, Result) => {
    e.shapeless(Result, ["moa_decor_toys:gemadejuguetes", "minecraft:leather", "#minecraft:wool_carpets", Wool]);
  };
  potting_llama_plush("minecraft:white_wool", "moa_decor_toys:llamablanca");
  potting_llama_plush("minecraft:brown_wool", "moa_decor_toys:llamacafe");
  potting_llama_plush("minecraft:yellow_wool", "moa_decor_toys:llamacrema");
  potting_llama_plush("minecraft:light_gray_wool", "moa_decor_toys:llamagris");
  //#endregion
});
//#endregion
