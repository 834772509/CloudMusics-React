/* eslint-disable jsx-a11y/anchor-has-content */
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Wrapper } from "./style";
import ThemeHeader from "@/components/theme-header";
import { getSizeImage } from "@/utils/format-utils";

export default memo(function AristHot() {
  // 获取数据
  const { topPrtists } = useSelector(
    (state) => ({
      topPrtists: state.getIn(["arist", "topPrtists"]),
    }),
    shallowEqual
  );

  const artists = topPrtists.artists || [];

  return (
    <Wrapper>
      <ThemeHeader title="热门歌手"></ThemeHeader>
      <div className="artists-list">
        {artists.splice(0,10).map((item, index) => {
          return (
            <div key={index} className="cover">
              <div className="image">
                <img src={getSizeImage(item.img1v1Url, 130)} alt="" />
                <a
                  className="tesk sprite_covor"
                  href={`/artist?id=${item.id}`}
                  title={item.name}
                ></a>
              </div>
              <div className="info">
                <a href={`/artist?id=${item.id}`} title={`${item.name}的音乐`}>
                  {item.name}
                </a>
                <a href={`/user/home?id=${item.accountId}`} title={`${item.name}的个人主页`}>
                  <i className="icon-user sprite_icon2"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="artists-little-list">
        {artists.map((item, index) => {
          return (
            <div key={index} className="list-item">
              <a href={`/artist?id=${item.id}`} title={`${item.name}的音乐`}>
                {item.name}
              </a>
              <a href={`/user/home?id=${item.accountId}`} title={`${item.name}的个人主页`}>
                <i className="icon-user sprite_icon2"></i>
              </a>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
});
