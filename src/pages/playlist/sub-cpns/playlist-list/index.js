import { getSongDetailAction } from "@/pages/player/store";
import { addSongtoListAction } from "@/pages/player/store/actionCreators";
import { formatDate } from "@/utils/format-utils";
import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./style";

export default memo(function PlayListSongs() {
  // 获取数据
  const { playListDetail } = useSelector(
    (state) => ({
      playListDetail: state.getIn(["playlist", "playListDetail"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const playlist = playListDetail.playlist || {};
  const tracks = playlist.tracks || [];


  return (
    <Wrapper>
      {/* 歌单信息 */}
      <div className="header-title">
        <h3>
          歌单列表<span className="song-count">{tracks.length}首歌</span>
        </h3>
        <p className="play-count">
          播放：<span className="count">{playlist.playCount}</span> 次
        </p>
      </div>

      {/* 歌曲列表 */}
      <table className="song-list">
        <thead>
          <tr className="header">
            <th className="ranking"></th>
            <th className="title">歌曲标题</th>
            <th className="duration">时长</th>
            <th className="singer">歌手</th>
            <th className="album">专辑</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {tracks.map((item, index) => {
            return (
              <tr className="list-item" key={index}>
                {/* 序号 */}
                <td className="td-count">
                  <span>{index + 1}</span>
                  <i
                    className="icon-play sprite_02"
                    title="播放"
                    onClick={(e) => dispatch(getSongDetailAction(item.id))}
                  ></i>
                </td>
                {/* 标题 */}
                <td className="td-title">
                  <a href={`/song?id=${item.id}`} title={item.name}>
                    {item.name}
                  </a>
                </td>
                {/* 时长 */}

                <td style={{ width: "180px" }}>
                  <span className="playlenght">{formatDate(new Date(item.dt), "mm:ss")}</span>
                  <div className="operate">
                    {/* 增加到播放列表按钮 */}
                    <button
                      className="btn sprite_icon2 addto"
                      title="增加到播放列表"
                      onClick={(e) => dispatch(addSongtoListAction(item.id))}
                    ></button>
                    {/* 收藏按钮 */}
                    <button className="btn sprite_table favor" title="收藏"></button>
                    {/* 分享按钮 */}
                    <button className="btn sprite_table share" title="分享"></button>
                    {/* 下载按钮 */}
                    <button className="btn sprite_table down" title="下载"></button>
                  </div>
                </td>
                {/* 歌手 */}
                <td className="td-artist">
                  {item.ar.map((iten, indey) => {
                    return (
                      <span className="artist-info" key={iten.name}>
                        <a href={`/artist?id=${iten.id}`} title={iten.name}>
                          {iten.name}
                        </a>
                        {/* 增加中间/间隔符号 */}
                        {indey < item.ar.length - 1 && <span>/</span>}
                      </span>
                    );
                  })}
                </td>
                {/* 专辑 */}
                <td className="td-album">
                  <a href={`/album?id=${item.al.name}`}>{item.al.name}</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
});
