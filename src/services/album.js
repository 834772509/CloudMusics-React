import { request } from "./request";

/**
 * 获取新碟上架列表。如需具体音乐信息需要调用获取专辑列表接口: /album
 * @param {*} area
 * @param {*} type
 * @param {*} limit
 * @param {*} offset
 */
export function getAlbumTop(area = "ALL", type = "new", limit = 50, offset = 0) {
  return request({
    url: "/top/album",
    params: {
      area,
      type,
      limit,
      offset,
    },
  });
}

/**
 * 获取专辑内容
 * @param {Number} id 专辑 id
 */
export function getAlbum(id) {
  return request({
    url: "/album",
    params: {
      id,
    },
  });
}

/**
 *
 * @param {Number} id 专辑 id
 * @param {Number} limit 取出评论数量 , 默认为 20
 * @param {Number} offset 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 */
export function getAlbumComment(id, limit = 20, offset = 0) {
  return request({
    url: "/comment/album",
    params: {
      id,
      limit,
      offset,
    },
  });
}
