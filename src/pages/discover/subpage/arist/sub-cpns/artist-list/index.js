/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { memo } from "react";
import { Wrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import ThemeHeader from "@/components/theme-header";
import { getSizeImage } from "@/utils/format-utils";

export default memo(function ArtistList() {
  // 获取数据
  const { aristClassifyList } = useSelector(
    (state) => ({
      aristClassifyList: state.getIn(["arist", "aristClassifyList"]),
    }),
    shallowEqual
  );

  const artists = aristClassifyList.artists || [];

  const letterList = [];
  for (let i = 0; i < 26; i++) {
    letterList.push(String.fromCharCode(65 + i));
  }

  return (
    <Wrapper>
      <ThemeHeader title="热门歌手"></ThemeHeader>
      {/* 字母导航 */}
      <div className="letter-list">
        <a className="letter-item" href="">
          热门
        </a>
        {letterList.map((item, index) => {
          return (
            <a className="letter-item" key={index}>
              {item}
            </a>
          );
        })}
        <a className="letter-item" href="">
          其他
        </a>
      </div>

      <div className="artists-list">
        {artists.splice(0, 10).map((item, index) => {
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
