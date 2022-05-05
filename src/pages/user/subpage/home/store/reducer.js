import * as actionTypes from "./constants";
import { Map } from "immutable";

const defaultState = Map({
  // 用户详情
  userDetail: {},
  // 创建的歌单
  userPlayList: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_USER_DETAIL:
      return state.set("userDetail", action.userDetail);
    case actionTypes.CHANGE_USER_PLAY_LIST:
      return state.set("userPlayList", action.userPlayList);
    default:
      return state;
  }
}

export default reducer;
