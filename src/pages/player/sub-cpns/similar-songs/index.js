import React, { memo } from "react";
import { PlayerSongsWrapper } from "./style";
import ThemeHeaderSmall from "@/components/theme-header-small";
import { shallowEqual, useSelector } from "react-redux";
import { getSizeImage } from "@/utils/format-utils";

/**
 * 包含这首歌的歌单
 */
export default memo(function PlayerSongs() {
  // 获取数据
  const { simiPlaylist } = useSelector(
    (state) => ({
      simiPlaylist: state.getIn(["player", "simiPlaylist"]),
    }),
    shallowEqual
  );

  const playlists = simiPlaylist.playlists || [];

  return (
    <PlayerSongsWrapper>
      <ThemeHeaderSmall title="包含这首歌的歌单" />
      <div className="playlist-list">
        {playlists.map((item, index) => {
          return (
            <div className="playlist-item" key={index}>
              <div className="image">
                <a href={`/playlist?id=${item.id}`} title={item.name}>
                  <img src={getSizeImage(item.coverImgUrl, 50)} alt="" />
                </a>
              </div>
              <div className="info">
                <h2 className="title">
                  <a className="text-nowrap" href={`/playlist?id=${item.id}`} title={item.name}>
                    {item.name}
                  </a>
                </h2>
                <p className="auchor">
                  <span className="by">by </span>
                  <a className="nickname" href={`/user/home?id=${item.creator.userId}`}>
                    {item.creator.nickname}
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </PlayerSongsWrapper>
  );
});
