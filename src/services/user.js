import { request } from "./request";

/**
 * 获取用户详情
 * @param {Number} uid 用户 id
 */
export function getUserDetail(uid) {
  return request({
    url: "/user/detail",
    params: {
      uid,
    },
  });
}

/**
 * 获取用户歌单
 * @param {Number} uid 用户 id
 * @param {Number} limit 返回数量 , 默认为 30
 * @param {Number} offset 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 */
export function getUserPlayList(uid, limit = 30, offset = 0) {
  return request({
    url: "/user/playlist",
    params: {
      uid,
      limit,
      offset,
    },
  });
}

/**
 * 获取用户播放记录
 * @param {Number} uid 用户 id
 * @param {Number} type type=1 时只返回 weekData, type=0 时返回 allData
 */
export function getUserRecord(uid, type = 1) {
  return request({
    url: "/user/record",
    params: {
      uid,
      type,
    },
  });
}

/**
 * 获取行政区划代码
 */
export function getCityCode() {
  return request({
    url: "https://passer-by.com/data_location/list.json",
  });
}

/**
 * 手机登录
 * @param {Number} phone 手机号码
 * @param {Number} password 密码
 * @param {Number} countrycode  国家码，用于国外手机号登录，例如美国传入：1
 * @param {Number} md5_password  md5加密后的密码,传入后 password 将失效
 */
export function loginCallPhone(phone, password, countrycode, md5_password) {
  return request({
    url: "/login/cellphone",
    method: "post",
    params: {
      phone,
      password,
      countrycode,
      md5_password,
    },
  });
}

/**
 * 邮箱登录 完成登录后 , 会在浏览器保存一个 Cookies 用作登录凭证 , 大部分 API 都需要用到这个 Cookies,非跨域情况请求会自动带上 Cookies
 * @param {String} email 163 网易邮箱
 * @param {Number} password 密码
 */
export function loginEmail(email, password) {
  return request({
    url: "/login?email",
    method: "post",
    params: {
      email,
      password,
    },
  });
}
