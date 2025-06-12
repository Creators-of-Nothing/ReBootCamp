//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Portal
  e.remove({ id: /javd:/ });
  e.custom({
    type: "malum:spirit_infusion",
    extra_items: [
      {
        item: "alexsmobs:void_worm_eye"
      },
      {
        item: "mna:patch_void"
      },
      {
        item: "cataclysm:void_core"
      }
    ],
    input: {
      item: "ars_nouveau:void_prism"
    },
    output: {
      item: "javd:portal_block"
    },
    spirits: [
      {
        type: "aqueous",
        count: 32
      },
      {
        type: "aerial",
        count: 32
      },
      {
        type: "earthen",
        count: 32
      },
      {
        type: "infernal",
        count: 32
      },
      {
        type: "arcane",
        count: 32
      },
      {
        type: "sacred",
        count: 32
      },
      {
        type: "eldritch",
        count: 32
      },
      {
        type: "wicked",
        count: 32
      }
    ]
  });
  //#endregion
});
//#endregion
