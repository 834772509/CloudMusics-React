import { getUserDetail, getUserPlayList } from "@/services/user";
import * as actionTypes from "./constants";

// 用户详情
const changeUserDetailAction = (userDetail) => ({
  type: actionTypes.CHANGE_USER_DETAIL,
  userDetail,
});

export const getUserDetailAction = (uid) => {
  return (dispatch) => {
    getUserDetail(uid).then((res) => {
      dispatch(changeUserDetailAction(res.data));
    });
  };
};

// 创建的歌单
const changeUserPlayListAction = (userPlayList) => ({
  type: actionTypes.CHANGE_USER_PLAY_LIST,
  userPlayList,
});

export const getUserPlayListAction = (uid, limit, offset) => {
  return (dispatch) => {
    getUserPlayList(uid, limit, offset).then((res) => {
      dispatch(changeUserPlayListAction(res.data));
    });
  };
};
