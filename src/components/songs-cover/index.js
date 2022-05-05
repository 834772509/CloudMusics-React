/* eslint-disable jsx-a11y/anchor-has-content */
import React, { memo } from "react";
import { SongsCoverWrapper } from "./style";
import { getCount, getSizeImage } from "@/utils/format-utils";

/**
 * 歌单 展示组件
 */
export default memo(function SongsCover(props) {
  const { info } = props;

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt={info.name} />
        <a className="msk sprite_covor" href={`/playlist?id=${info.id}`} title={info.name}></a>
        <div className="cover">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play" title="播放"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        <a href={`/playlist?id=${info.id}`} title={info.name}>
          {info.name}
        </a>
      </div>
      <div className="cover-source text-nowrap">by {info.copywriter || info.creator.nickname}</div>
    </SongsCoverWrapper>
  );
});
