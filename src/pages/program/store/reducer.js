import * as actionTypes from "./constants";
import { Map } from "immutable";

const defaultState = Map({
  // 电台节目详情
  programDetail: {},
  // 电台节目评论
  programComment: {},
  // 更多节目
  djradioProgramList: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_PROGRAM_DETAIL:
      return state.set("programDetail", action.programDetail);
    case actionTypes.CHANGE_PROGRAM_COMMENT:
      return state.set("programComment", action.programComment);
    case actionTypes.CHANGE_DJRADIO_PROGRAM_LIST:
      return state.set("djradioProgramList", action.djradioProgramList);
    default:
      return state;
  }
}

export default reducer;
