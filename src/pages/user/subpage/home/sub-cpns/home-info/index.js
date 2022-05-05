import { getCityCode } from "@/services/user";
import { getSizeImage } from "@/utils/format-utils";
import React, { memo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Wrapper } from "./style";

export default memo(function UserHomeInfo() {
  // 获取数据
  const { userDetail } = useSelector(
    (state) => ({
      userDetail: state.getIn(["userhome", "userDetail"]),
    }),
    shallowEqual
  );

  const [cityCode, setCityCode] = useState({});
  const profile = userDetail.profile || {};

  // 省份
  const province = profile.province;
  // 城市
  const city = profile.city;

  useEffect(() => {
    getCityCode().then((res) => {
      setCityCode(res.data);
    });
  }, []);

  return (
    <Wrapper>
      <div className="image">
        <img src={getSizeImage(profile.avatarUrl, 180)} alt="" />
      </div>
      <div className="info">
        <div className="name">
          <h2 className="nickname">
            {profile.nickname}
            <span className="icon-level sprite_icon3">
              <span>{userDetail.level}</span>
              <i className="icon-level-right sprite_icon3"></i>
            </span>
            <i
              className={`${profile.gender === 1 ? "icon-sex-man" : "icon-sex-woman"} sprite_icon2`}
            ></i>
          </h2>
          <div className="btns">
            <button className="btn-send sprite_button2">
              <span className="btn-sprite sprite_button2">
                <i>发私信</i>
              </span>
            </button>
            <button className="btn-star sprite_button2">关注</button>
            <button href="/artist?id=10559" className="btn-artist sprite_button">
              <i className="sprite_button">查看歌手页</i>
            </button>
          </div>
        </div>
        <p className="djp">
          <i className="icon-tag sprite_icon3"></i>
          {profile.detailDescription}
        </p>

        <div className="tab-box">
          <a href={`/user/event?id=${profile.userId}`}>
            <strong>{profile.eventCount}</strong>
            <span>动态</span>
          </a>
          <a href={`/user/follows?id=${profile.userId}`}>
            <strong>{profile.follows}</strong>
            <span>关注</span>
          </a>
          <a href={`/user/fans?id=${profile.userId}`}>
            <strong>{profile.followeds}</strong>
            <span>粉丝</span>
          </a>
        </div>
        <p className="signature">个人介绍：{profile.signature}</p>
        <p className="province">
          所在地区：{cityCode[province] || ""} {cityCode[city] || ""}
        </p>
      </div>
    </Wrapper>
  );
});
