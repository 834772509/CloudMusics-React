import { getTopBanners, getHotRecommends } from "@/services/recommend";
import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUM,
  CHANGE_UP_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHANGE_NEW_RANKING,
} from "./constants";
import { getNewAlbum, getTopList } from "@/services/recommend";

const changeTopBannerAction = (res) => ({
  type: CHANGE_TOP_BANNERS,
  topBanners: res.data.banners,
});

const changeHotRecommendAction = (res) => ({
  type: CHANGE_HOT_RECOMMEND,
  hotRecommends: res.data.result,
});

const changeNewAlbumAction = (res) => ({
  type: CHANGE_NEW_ALBUM,
  newAlbums: res.data.albums,
});

const changeUpRankingAction = (res) => ({
  type: CHANGE_UP_RANKING,
  upRanking: res.data.playlist,
});
const changeNewRankingAction = (res) => ({
  type: CHANGE_NEW_RANKING,
  newRanking: res.data.playlist,
});
const changeOriginRankingAction = (res) => ({
  type: CHANGE_ORIGIN_RANKING,
  originRanking: res.data.playlist,
});

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbum(limit).then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(res));
          break;
        case 2:
          dispatch(changeNewRankingAction(res));
          break;
        case 3:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
          break;
      }
    });
  };
};
