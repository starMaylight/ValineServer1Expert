// @ts-check
/**
 * These codes are licensed under CC0.
 * http://creativecommons.org/publicdomain/zero/1.0/deed.ja
 */

//const allowedPlayers = ["valine_3g"];

/**
 * //*typedef {Internal.BlockBreakEventJS | Internal.BlockPlaceEventJS | Internal.BlockRightClickEventJS} BlockEvent
 */

/**
 * /*@param {string} message 
 * /*@returns {(ev: BlockEvent) => void}
 */
/*function createHandler(message) {
  return (ev) => {
    if (!ev.block.id.startsWith("torcherino:")) {
      return;
    }
    if (allowedPlayers.indexOf(ev.entity.name.string) !== -1){
      return;
    }

    ev.entity.tell(Component.red(message));
    ev.cancel();
  };
}

onEvent("block.break", createHandler("あなたはトーチーノを破壊できません！"));
onEvent("block.place", createHandler("あなたはトーチーノを設置できません！"));
onEvent("block.right_click", createHandler("あなたはトーチーノの設定を変更できません！"));
*/

onEvent("recipes", (ev) => {
  ev.remove({ mod: "torcherino" });
});
