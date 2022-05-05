import { getDjradioDetail, getDjradioProgramList } from "@/services/djradio";
import * as actionTypes from "./constants";

// 电台的详情介绍
const changeDjradioDetailAction = (djradioDetail) => ({
  type: actionTypes.CHANGE_DJRADIO_DETAIL,
  djradioDetail,
});

export const getDjradioDetailAction = (id) => {
  return (dispatch) => {
    getDjradioDetail(id).then((res) => {
      dispatch(changeDjradioDetailAction(res.data));
    });
  };
};

// 电台节目列表
const changeDjradioProgramListAction = (djradioProgramList) => ({
  type: actionTypes.CHANGE_DJRADIO_PROGRAM_LIST,
  djradioProgramList,
});

export const getDjradioProgramListAction = (rid, limit, offset, asc) => {
  return (dispatch) => {
    getDjradioProgramList(rid, limit, offset, asc).then((res) => {
      dispatch(changeDjradioProgramListAction(res.data));
    });
  };
};
