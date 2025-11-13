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
        item: "tconstruct:nahuatl"
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
        count: 64
      },
      {
        type: "aerial",
        count: 64
      },
      {
        type: "earthen",
        count: 64
      },
      {
        type: "infernal",
        count: 64
      },
      {
        type: "arcane",
        count: 64
      },
      {
        type: "sacred",
        count: 64
      },
      {
        type: "eldritch",
        count: 64
      },
      {
        type: "wicked",
        count: 64
      }
    ]
  });
  //#endregion
});
//#endregion
