import * as actionTypes from "./constants";
import { Map } from "immutable";

const defaultState = Map({
  // 专辑信息
  album: {},
  // 专辑评论
  albumComment: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_AlBUM:
      return state.set("album", action.album);
    case actionTypes.CHANGE_AlBUM_COMMENT:
      return state.set("albumComment", action.albumComment);
    default:
      return state;
  }
}

export default reducer;
