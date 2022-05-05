import { getAlbum, getAlbumComment } from "@/services/album";
import * as actionTypes from "./constants";

// 专辑信息
const changeAlbumAction = (album) => ({
  type: actionTypes.CHANGE_AlBUM,
  album,
});

export const getAlbumAction = (id) => {
  return (dispatch) => {
    getAlbum(id).then((res) => {
      dispatch(changeAlbumAction(res.data));
    });
  };
};

// 专辑评论
const changeAlbumCommentAction = (albumComment) => ({
  type: actionTypes.CHANGE_AlBUM_COMMENT,
  albumComment,
});

export const getAlbumCommentAction = (id, limit, offset) => {
  return (dispatch) => {
    getAlbumComment(id, limit, offset).then((res) => {
      dispatch(changeAlbumCommentAction(res.data));
    });
  };
};
