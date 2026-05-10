import { findByStoreName } from "@vendetta/metro";
import { patcher } from "@vendetta/patcher";

export default {
  onLoad: () => {
    console.log("Voice Status Plugin geladen!");
  },
  onUnload: () => {
    patcher.unpatchAll();
  }
}
