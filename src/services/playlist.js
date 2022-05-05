import { request } from "./request";

/**
 * 获取歌单详情（未登录状态只能获取不完整的歌单,登录后是完整的）
 * @param {Number} id 歌单ID
 */
export function getPlayListDetail(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id: id,
    },
  });
}

/**
 * 获得歌单的所有评论 ( 不需要 登录 )
 * @param {Number} id 歌单ID
 * @param {Number} limit 取出评论数量 , 默认为 20
 * @param {Number} offset 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 */
export function getPlayListComment(id, limit = 20, offset = 0) {
  return request({
    url: "/comment/playlist",
    params: {
      id,
      limit,
      offset,
    },
  });
}

/**
 * 获取相关歌单推荐
 * @param {Number} id 歌单ID
 */
export function getRelatedPlayList(id) {
  return request({
    url: "/related/playlist",
    params: {
      id,
    },
  });
}

/**
 * 获取歌单的所有收藏者
 * @param {Number} id 歌单ID
 */
export function getPlayListSubscribers(id) {
  return request({
    url: "/playlist/subscribers",
    params: {
      id,
    },
  });
}
