import React, { memo } from "react";
import { Wrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getSongDetailAction } from "@/pages/player/store";
import { addSongtoListAction } from "@/pages/player/store/actionCreators";

export default memo(function HomeListen(props) {
  const { userRecordAllData } = props;

  // 获取数据
  const { userDetail } = useSelector(
    (state) => ({
      userDetail: state.getIn(["userhome", "userDetail"]),
    }),
    shallowEqual
  );

  // 请求数据
  const dispatch = useDispatch();

  const id = userDetail.profile.userId;

  const allData = userRecordAllData.allData.splice(0, 10) || [];

  return (
    <Wrapper>
      <div className="header">
        <h2>听歌排行</h2>
      </div>
      <div className="song-list">
        {allData.map((item, index) => {
          const song = item.song;

          return (
            <div className="song-item" key={index}>
              <div className="hd">
                <span className="num">{index + 1}</span>
                <i
                  className="icon-play sprite_table"
                  onClick={(e) => dispatch(getSongDetailAction(song.id))}
                ></i>
              </div>
              <div className="song">
                <div className="ttc">
                  <a className="title" title={song.name} href={`/song/id=${song.id}`}>
                    {song.name}
                  </a>
                  {song.ar.map((iten, indey) => {
                    return (
                      <a className="artist" href={`/artist?id=${iten.id}`} key={indey}>
                        {" "}
                        - {iten.name}
                      </a>
                    );
                  })}
                </div>

                <div className="operate">
                  {/* 增加到播放列表按钮 */}
                  <button
                    className="btn sprite_icon2 addto"
                    title="增加到播放列表"
                    onClick={(e) => dispatch(addSongtoListAction(song.id))}
                  ></button>
                  {/* 收藏按钮 */}
                  <button className="btn sprite_table favor" title="收藏"></button>
                  {/* 分享按钮 */}
                  <button className="btn sprite_table share" title="分享"></button>
                  {/* 下载按钮 */}
                  <button className="btn sprite_table down" title="下载"></button>
                </div>
              </div>
              <div className="tops">
                <span className="top-progress" style={{ width: item.score + "%" }}></span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="more">
        <a href={`/user/songs/rank?id=${id}`}>查看更多&gt;</a>
      </div>
    </Wrapper>
  );
});
