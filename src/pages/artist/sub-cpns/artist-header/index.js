/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { getArtists } from "@/services/arist";
import { getSizeImage } from "@/utils/format-utils";
import React, { memo, useEffect, useState } from "react";
import { Wrapper } from "./style";

/**
 * 歌手基本信息
 */
export default memo(function AristHeader(props) {
  const { id } = props;

  // 歌手基本信息
  const [artist, setArtist] = useState({});
  // 歌手别名
  const [alias, setAlias] = useState([]);

  useEffect(() => {
    getArtists(id).then((res) => {
      setArtist(res.data.artist);
      setAlias(res.data.artist.alias);
    });
  }, [id]);

  return (
    <Wrapper>
      {/* 歌手基本信息 */}
      <div className="info">
        <h2>{artist.name}</h2>
        <h3 className="alias">
          {alias.map((item, index) => {
            return (
              <span key={index}>
                {item}
                {index < alias.length - 1 ? ";" : ""}
              </span>
            );
          })}
        </h3>
      </div>
      <div className="image">
        <img src={getSizeImage(artist.picUrl, 640, 300)} alt="" />
        <a className="artist-home sprite_icon" href={`/user/home?id=${artist.id}`}></a>
        <a className="artist-collect sprite_icon" href=""></a>
      </div>
      {/* 导航 */}
      <div className="nav">
        <a href={`/artist?id=${artist.id}`}>热门作品</a>
        <a href={`/artist/album?id=${artist.id}`}>所有专辑</a>
        <a href={`/artist/mv?id=${artist.id}`}>相关MV</a>
        <a href={`/artist/desc?id=${artist.id}`}>艺人介绍</a>
      </div>
    </Wrapper>
  );
});
