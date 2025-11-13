//#region - Définition/Suppression/Masquage d'éléments dans JEI
function refinedstorage() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [/extrastorage:block_/, /extrastorage:storagepart_/, /extrastorage:disk_/, "extrastorage:neural_processor", "extrastorage:raw_neural_processor", /refinedstorage:creative_wireless/, /refinedstorageaddons:creative_wireless_/, "refinedstorage:creative_storage_disk", "refinedstorage:creative_fluid_storage_disk", /refinedstorage:.*_fluid_storage_part/, /extradisks:.*_fluid_storage_part/];
  let hiding = [/refinedstorage:white_/, /refinedstorage:orange_/, /refinedstorage:magenta_/, /refinedstorage:yellow_/, /refinedstorage:lime_/, /refinedstorage:pink_/, /refinedstorage:gray_/, /refinedstorage:light_gray_/, /refinedstorage:cyan_/, /refinedstorage:purple_/, /refinedstorage:blue_/, /refinedstorage:brown_/, /refinedstorage:green_/, /refinedstorage:red_/, /refinedstorage:black_/];
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
refinedstorage();
//#endregion
