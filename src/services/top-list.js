import { request } from "./request";

/**
 * 获取所有榜单数据
 */
export function getAllTopList() {
  return request({
    url: "/toplist",
  });
}

/**
 * 获取 榜单数据、歌单详情数据
 * @param {Number} id 歌曲ID
 */
export function getTopListDetail(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}
