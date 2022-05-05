import * as actionTypes from "./constants";
import { Map } from "immutable";

const defaultState = Map({
  // 所有榜单数据
  allTopList: {},
  topListDetail: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ALLTOPLIST:
      return state.set("allTopList", action.allTopList);
    case actionTypes.CHANGE_TOPLIST_DETAIL:
      return state.set("topListDetail", action.topListDetail);
    default:
      return state;
  }
}

export default reducer;
