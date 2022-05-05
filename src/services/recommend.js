import { request } from "./request";

/** 轮播图
 */
export function getTopBanners() {
  return request({
    url: "/banner",
  });
}

/** 热门推荐
 * @param {Nubmer} limit 指定需要的数据个数
 */
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit: limit,
    },
  });
}

/** 新款上架
 * @param {Nubmer} limit 指定需要的数据个数
 */
export function getNewAlbum(limit) {
  return request({
    url: "/top/album",
    params: {
      limit: limit,
    },
  });
}

/** 榜单数据
 * @param {Nubmer} idx 0:云音乐飙升榜; 2:云音乐新歌榜; 3:云原创歌曲榜
 */
export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx: idx,
    },
  });
}

/**
 * 获取歌单分类,包含 category 信息
 */
export function getSongCategory() {
  return request({
    url: "/playlist/catlist",
  });
}

/**
 * 获取歌单信息
 * @param {String} cat 分类，默认为全部
 * @param {Number} offset 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @param {Number} limit 返回数量，默认为35
 */
export function getSongCategoryList(cat = "全部", offset = 0, limit = 35) {
  return request({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset,
    },
  });
}

// 入驻歌手
export const hotRadios = [
  {
    picUrl: "http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg",
    name: "陈立",
    position: "心理学家、美食家陈立教授",
    url: "/user/home?id=278438485",
  },
  {
    picUrl: "http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg",
    name: "DJ艳秋",
    position: "著名音乐节目主持人",
    url: "/user/home?id=91239965",
  },
  {
    picUrl: "http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg",
    name: "国家大剧院古典音乐频道",
    position: "国家大剧院古典音乐官方",
    url: "/user/home?id=324314596",
  },
  {
    picUrl: "http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg",
    name: "谢谢收听",
    position: "南京电台主持人王馨",
    url: "/user/home?id=1611157",
  },
  {
    picUrl: "http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg",
    name: "DJ晓苏",
    position: "独立DJ，CRI环球旅游广播特邀DJ",
    url: "/user/home?id=2313954",
  },
];
