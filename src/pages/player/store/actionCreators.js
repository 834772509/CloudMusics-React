import {
  getSongDetail,
  getLyric,
  getSimiSongs,
  getSongComments,
  getSimiPlaylist,
} from "@/services/player";
import * as actionTypes from "./constants";
import { getRandomNumber } from "@/utils/math-utils";
import { parseLyric } from "@/utils/parse-lyric";

// 获取歌曲详细信息
const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
});

export const changePlayModeAction = (playMode) => ({
  type: actionTypes.CHANGE_PLAYMODE,
  playMode,
});

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 根据id查找playList中是否存在该歌曲
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex((song) => song.id === ids);

    let song = null;
    // 是否是否找到歌曲
    if (songIndex !== -1) {
      // 找到歌曲
      dispatch(changeCurrentSongIndexAction(songIndex));
      song = playList[songIndex];
      dispatch(changePlayListAction(song));
      dispatch(getLyricActon(song.id));
    } else {
      // 没有找到歌曲

      // 请求歌曲数据
      getSongDetail(ids).then((res) => {
        const song = res.data.songs && res.data.songs[0];

        if (!song) return;
        // 将最新请求的歌曲增加到播放列表中
        const newPlayList = [...playList];
        newPlayList.push(song);

        // 更新Redux中的数据
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));

        // 请求该歌曲的歌词
        if (!song) return;
        dispatch(getLyricActon(song.id));
      });
    }
  };
};

// 增加歌曲到播放列表

const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex,
});

export function addSongtoListAction(ids) {
  return (dispatch, getState) => {
    // 根据id查找playList中是否存在该歌曲
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex((song) => song.id === ids);

    let song = null;
    // 是否是否找到歌曲
    if (songIndex !== -1) {
      // 找到歌曲
      dispatch(changeCurrentSongIndexAction(songIndex));
      song = playList[songIndex];
      dispatch(changePlayListAction(song));
      dispatch(getLyricActon(song.id));
    } else {
      // 没有找到歌曲

      // 请求歌曲数据
      getSongDetail(ids).then((res) => {
        const song = res.data.songs && res.data.songs[0];

        if (!song) return;
        // 将最新请求的歌曲增加到播放列表中
        const newPlayList = [...playList];
        newPlayList.push(song);

        // 更新Redux中的数据
        dispatch(changePlayListAction(newPlayList));
      });
    }
  };
}

// 改变当前歌词索引
export const changeCurrentLyricIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index,
});

// 获取歌曲的歌词
const changeLyricListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRICE_LIST,
  lyricList,
});

export const getLyricActon = (id) => {
  return (dispatch) => {
    getLyric(id).then((res) => {
      const lyric = res.data.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changeLyricListAction(lyricList));
    });
  };
};

// 改变歌曲播放模式

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

export const changeCurrentIndexAndSongAction = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    const playMode = getState().getIn(["player", "playMode"]);
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);

    switch (playMode) {
      case 1:
        // 随机播放
        let randomIndex = getRandomNumber(playList.length);
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length);
        }
        currentSongIndex = randomIndex;
        break;
      default:
        // 顺序播放
        currentSongIndex += tag;
        if (currentSongIndex >= playList.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
        break;
    }
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));

    // 请求该歌曲的歌词
    dispatch(getLyricActon(currentSong.id));
  };
};

// 获取歌曲的相似歌曲
export const changeSimiSongsAction = (simiSongs) => ({
  type: actionTypes.CHANGE_SIMISONGS,
  simiSongs,
});

export const getSimiSongsAction = (id) => {
  return (dispatch) => {
    getSimiSongs(id).then((res) => {
      dispatch(changeSimiSongsAction(res.data.songs));
    });
  };
};

// 获取相似歌单

export const changeSimiPlaylistAction = (simiPlaylist) => ({
  type: actionTypes.CHANGE_SIMI_PLAY_LIST,
  simiPlaylist,
});

export const getSimiPlaylistAction = (id) => {
  return (dispatch) => {
    getSimiPlaylist(id).then((res) => {
      dispatch(changeSimiPlaylistAction(res.data));
    });
  };
};

// 获取热门评论

export const changeHotCommentAction = (hotComment) => ({
  type: actionTypes.CHANGE_HOTCOMMENT,
  hotComment,
});

export const getHotCommentAction = (id, limit, offset) => {
  return (dispatch) => {
    getSongComments(id, limit, offset).then((res) => {
      dispatch(changeHotCommentAction(res.data));
    });
  };
};

// 获取所有评论
export const changeCommentAction = (comment) => ({
  type: actionTypes.CHANGE_COMMENT,
  comment,
});

export const getCommentAction = (id, limit, offset) => {
  return (dispatch) => {
    getSongComments(id, limit, offset).then((res) => {
      dispatch(changeCommentAction(res.data));
    });
  };
};
