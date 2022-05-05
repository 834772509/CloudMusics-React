/* eslint-disable jsx-a11y/anchor-has-content */
import { getSizeImage } from "@/utils/format-utils";
import React, { memo } from "react";
import { Wrapper } from "./style";

/**
 * 歌单 展示组件
 */
export default memo(function ThemeCover(props) {
  const { info } = props;

  return (
    <Wrapper>
      <div className="cover">
        <img src={getSizeImage(info.coverImgUrl, 140)} alt="" />
        <a className="link sprite_covor" href={`/playlist?id=${info.id}`} title={info.name}></a>
        <div className="bottom sprite_covor">
          <div className="left">
            <i className="icon-listener sprite_icon"></i>
            <span className="play-count">{info.playCount}</span>
          </div>
          <div className="right">
            <i title="播放" className="icon-play sprite_icon"></i>
          </div>
        </div>
      </div>
      <p className="title">
        <a href={`/playlist?id=${info.id}`} title={info.name}>
          {info.name}
        </a>
      </p>
      <p className="user-title">
        <span className="by">by </span>
        <a href={`/user/home?id=${info.creator.userId}`}> {info.creator.nickname}</a>
      </p>
    </Wrapper>
  );
});
