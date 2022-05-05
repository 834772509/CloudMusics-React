import * as actionTypes from "./constants";
import { Map } from "immutable";

const defaultState = Map({
  // 电台的详情介绍
  djradioDetail: {},
  // 电台节目列表
  djradioProgramList: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_DJRADIO_DETAIL:
      return state.set("djradioDetail", action.djradioDetail);
    case actionTypes.CHANGE_DJRADIO_PROGRAM_LIST:
      return state.set("djradioProgramList", action.djradioProgramList);
    default:
      return state;
  }
}

export default reducer;
