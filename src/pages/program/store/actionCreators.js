import { getDjradioProgramList } from "@/services/djradio";
import { getProgramComment, getProgramDetail } from "@/services/program";
import * as actionTypes from "./constants";

// 电台节目详情
const changeProgramDetailAction = (programDetail) => ({
  type: actionTypes.CHANGE_PROGRAM_DETAIL,
  programDetail,
});

export const getProgramDetailAction = (id) => {
  return (dispatch) => {
    getProgramDetail(id).then((res) => {
      dispatch(changeProgramDetailAction(res.data));
    });
  };
};

// 电台节目评论
const changeProgramCommentAction = (programComment) => ({
  type: actionTypes.CHANGE_PROGRAM_COMMENT,
  programComment,
});

export const getProgramCommentAction = (id, limit, offset) => {
  return (dispatch) => {
    getProgramComment(id, limit, offset).then((res) => {
      dispatch(changeProgramCommentAction(res.data));
    });
  };
};

// 更多节目

// getDjradioProgramList

const changeDjradioProgramListAction = (djradioProgramList) => ({
  type: actionTypes.CHANGE_DJRADIO_PROGRAM_LIST,
  djradioProgramList,
});

export const getDjradioProgramListAction = (rid, limit, offset) => {
  return (dispatch) => {
    getDjradioProgramList(rid, limit, offset).then((res) => {
      dispatch(changeDjradioProgramListAction(res.data));
    });
  };
};
