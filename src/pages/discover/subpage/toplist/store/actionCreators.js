import * as actionTypes from "./constants";
import { getAllTopList, getTopListDetail } from "@/services/top-list";

const changeAllTopList = (allTopList) => ({
  type: actionTypes.CHANGE_ALLTOPLIST,
  allTopList,
});

const changeTopListDetail = (topListDetail) => ({
  type: actionTypes.CHANGE_TOPLIST_DETAIL,
  topListDetail,
});

export const getAllTopListAction = () => {
  return (dispatch) => {
    getAllTopList().then((res) => {
      dispatch(changeAllTopList(res.data));
    });
  };
};

export const getTopListDetailAction = (id) => {
  return (dispatch) => {
    getTopListDetail(id).then((res) => {
      dispatch(changeTopListDetail(res.data));
    });
  };
};
