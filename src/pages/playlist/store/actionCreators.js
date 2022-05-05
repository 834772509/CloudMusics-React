import {
  getPlayListComment,
  getPlayListDetail,
  getPlayListSubscribers,
  getRelatedPlayList,
} from "@/services/playlist";
import * as actionTypes from "./constants";

// 歌单信息
const changePlayListDetailAction = (playListDetail) => ({
  type: actionTypes.CHANGE_PLAYLIST_DETAIL,
  playListDetail,
});

export const getPlayListDetailAction = (id) => {
  return (dispatch) => {
    getPlayListDetail(id).then((res) => {
      dispatch(changePlayListDetailAction(res.data));
    });
  };
};

// 歌单评论
const changePlayListCommentAction = (playListComment) => ({
  type: actionTypes.CHANGE_PLAYLIST_COMMENT,
  playListComment,
});

export const getPlayListCommentAction = (id, limit, offset) => {
  return (dispatch) => {
    getPlayListComment(id, limit, offset).then((res) => {
      dispatch(changePlayListCommentAction(res.data));
    });
  };
};

// 相关歌单推荐
const changeRelatedPlayListAction = (relatedPlayList) => ({
  type: actionTypes.CHANGE_RELATED_PLAYLIST,
  relatedPlayList,
});

export const getRelatedPlayListAction = (id) => {
  return (dispatch) => {
    getRelatedPlayList(id).then((res) => {
      dispatch(changeRelatedPlayListAction(res.data));
    });
  };
};

// 相关歌单推荐
const changePlayListSubscribersAction = (playListSubscribers) => ({
  type: actionTypes.CHANGE_PLAYLIST_SUBCRIBERS,
  playListSubscribers,
});

export const getPlayListSubscribersAction = (id) => {
  return (dispatch) => {
    getPlayListSubscribers(id).then((res) => {
      dispatch(changePlayListSubscribersAction(res.data));
    });
  };
};
