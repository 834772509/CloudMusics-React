/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";
import { Wrapper } from "./style";
import ThemeHeaderSmall from "@/components/theme-header-small";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { getSongDetailAction } from "../../store/actionCreators";
import { addSongtoListAction } from "@/pages/player/store/actionCreators";

/**
 * 相似歌曲
 */
export default memo(function PlayerRelevant() {
  // 请求数据
  const dispatch = useDispatch();

  // 获取数据
  const { simiSongs } = useSelector(
    (state) => ({
      simiSongs: state.getIn(["player", "simiSongs"]),
    }),
    shallowEqual
  );

  return (
    <Wrapper>
      <ThemeHeaderSmall title="相似歌曲"></ThemeHeaderSmall>

      {simiSongs.map((item, index) => {
        return (
          <div className="simi-list" key={index}>
            {/* 左侧信息 */}
            <div className="left">
              {/* 相似歌曲名 */}
              <div className="song-info">
                <a className="text-nowrap" href={`/song?id=${item.id}`} title={item.name}>
                  {item.name}
                </a>
              </div>
              {/* 相似歌曲 歌手 */}
              <div className="artist-list">
                {item.artists.map((iten, indey) => {
                  return (
                    <span className="artist-info" key={iten.name}>
                      <a href={`/artist?id=${iten.id}`} title={iten.name}>
                        {iten.name}
                      </a>
                      {/* 增加中间/间隔符号 */}
                      {indey < item.artists.length - 1 && <span>/</span>}
                    </span>
                  );
                })}
              </div>
            </div>
            {/* 右侧按钮 */}
            <div className="right">
              {/* 播放按钮 */}
              <a
                className="play sprite_icon3"
                onClick={() => dispatch(getSongDetailAction(item.id))}
                title="播放"
              ></a>
              {/* 增加到播放列表按钮 */}
              <a
                className="add-list sprite_icon3"
                title="增加到播放列表"
                onClick={(e) => dispatch(addSongtoListAction(item.id))}
              ></a>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
});
