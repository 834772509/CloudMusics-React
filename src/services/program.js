import { request } from "./request";

/**
 * 获得电台节目详情
 * @param {Number} id 电台节目 的 id
 */
export function getProgramDetail(id) {
  return request({
    url: "/dj/program/detail",
    params: {
      id,
    },
  });
}

/**
 *
 * @param {Number} id 电台节目的 id
 * @param {Number} limit 取出评论数量 , 默认为 20
 * @param {Number} offset  偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 */
export function getProgramComment(id, limit = 20, offset = 0) {
  return request({
    url: "/comment/dj",
    params: {
      id,
      limit,
      offset,
    },
  });
}
