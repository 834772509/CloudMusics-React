import {
  getDjradioCateList,
  getDjradioProgramRecommend,
  getDjradioProgramTopList,
  getDjradioRecommendHot,
  getDjradioRecommendType,
} from "@/services/djradio";
import * as actionTypes from "./constants";

// 电台分类
const changeDjradioCateListAction = (cateList) => ({
  type: actionTypes.CHANGE_DJRADIO_CATELIST,
  cateList,
});

export const getDjradioCateListAction = () => {
  return (dispatch) => {
    getDjradioCateList().then((res) => {
      dispatch(changeDjradioCateListAction(res.data));
    });
  };
};

// 推荐节目
const changeDjradioProgramRecommendAction = (programRecommend) => ({
  type: actionTypes.CHANGE_DJRADIO_PROGRAM_RECOMMEND,
  programRecommend,
});

export const getDjradioProgramRecommendAction = () => {
  return (dispatch) => {
    getDjradioProgramRecommend().then((res) => {
      dispatch(changeDjradioProgramRecommendAction(res.data));
    });
  };
};

// 节目排行榜
const changeDjradioProgramTopListAction = (programTopList) => ({
  type: actionTypes.CHANGE_DJRADIO_PROGRAM_TOPLIST,
  programTopList,
});

export const getDjradioProgramTopListAction = (limit, offset) => {
  return (dispatch) => {
    getDjradioProgramTopList(limit, offset).then((res) => {
      dispatch(changeDjradioProgramTopListAction(res.data));
    });
  };
};

// 获取对应类型电台列表
const changeDjradioRecommendTypeAction = (recommendType) => ({
  type: actionTypes.CHANGE_DJRADIO_RECOMMEND_TYPE,
  recommendType,
});

export const getDjradioRecommendTypeAction = (type) => {
  return (dispatch) => {
    getDjradioRecommendType(type).then((res) => {
      dispatch(changeDjradioRecommendTypeAction(res.data));
    });
  };
};

// 优秀新电台
const changeExcellentDjradioAction = (excellentDjradio) => ({
  type: actionTypes.CHANGE_DJRADIO_EXCELLENTDJRADIO,
  excellentDjradio,
});

export const getExcellentDjradioAction = (id) => {
  return (dispatch) => {
    getDjradioRecommendType(id).then((res) => {
      dispatch(changeExcellentDjradioAction(res.data));
    });
  };
};

// 电台排行榜
const changeDjradioRecommendHotAction = (recommendHot) => ({
  type: actionTypes.CHANGE_DJRADIO_RECOMMEND_HOT,
  recommendHot,
});

export const getDjradioRecommendHotAction = (cateId, limit, offset) => {
  return (dispatch) => {
    getDjradioRecommendHot(cateId, limit, offset).then((res) => {
      dispatch(changeDjradioRecommendHotAction(res.data));
    });
  };
};
