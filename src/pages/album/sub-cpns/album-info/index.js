import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Wrapper } from "./style";
import { formatDate, getSizeImage } from "@/utils/format-utils";
import SongOperationBar from "@/components/song-operation-bar";

/**
 * 专辑信息
 */
export default memo(function AlbumInfo() {
  // 获取数据
  const { album } = useSelector(
    (state) => ({
      album: state.getIn(["album", "album"]).album || {},
    }),
    shallowEqual
  );

  // 专辑描述
  const [alias, setAlias] = useState([]);

  // 专辑歌手
  const [artist, setArtist] = useState({});

  // 数量信息
  const [info, setInfo] = useState({});

  useEffect(() => {
    setAlias(album.alias || []);
    setArtist(album.artist || {});
    setInfo(album.info || {});
    // /
  }, [album.alias, album.artist, album.info]);

  return (
    <Wrapper>
      <div className="image">
        <img src={getSizeImage(album.picUrl, 177)} alt="" />
        <span className="msk sprite_covor"></span>
      </div>
      <div className="info">
        <div className="hand">
          <i className="icon-album sprite_icon2"></i>
          <div className="title">
            <h2>{album.name}</h2>
            {alias.map((item, index) => {
              return (
                <p key={index} className="alias-item">
                  {item}
                </p>
              );
            })}
          </div>
        </div>
        <div className="album-info">
          <p className="artist">
            歌手：
            <a href={`/artist?id=${artist.id}`} title={artist.name}>
              {artist.name}
            </a>
          </p>
          <p>发行时间：{formatDate(new Date(album.publishTime), "yyyy-MM-dd")}</p>
          <p>发行公司：{album.company}</p>
        </div>
        <SongOperationBar
          favorTitle="收藏"
          shareTitle={`(${info.shareCount})`}
          commentTitle={`(${info.commentCount})`}
          downloadTitle="下载"
        ></SongOperationBar>
      </div>
      {/* 专辑介绍 */}
      <div className="description">
        <h3 className="title">专辑介绍：</h3>
        <div>
          {album.description &&
            album.description.split("\n").map((item, index) => {
              return (
                <p className="text" key={index}>
                  {item} <br />
                </p>
              );
            })}
        </div>
      </div>
    </Wrapper>
  );
});
