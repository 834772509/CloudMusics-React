import React, { memo } from "react";
import { getSizeImage } from "@/utils/format-utils";
import { Wrapper } from "./style";
import SongOperationBar from "@/components/song-operation-bar";
import { shallowEqual, useSelector } from "react-redux";

/**
 * 歌曲信息
 */
export default memo(function PlayerInfo(props) {
  // 获取数据
  const { currentSong, lyricList } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      lyricList: state.getIn(["player", "lyricList"]),
    }),
    shallowEqual
  );

  // 歌曲图片
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "未知歌曲";
  // 歌手名
  const singName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  // 所属专辑
  const alName = (currentSong.al && currentSong.al.name) || "未知专辑";

  return (
    <Wrapper>
      {/* 左侧图片 */}
      <div className="image">
        <div className="image-box">
          <img src={getSizeImage(picUrl, 130)} alt="" />
          <span className="cover sprite_covor"></span>
        </div>

        <div className="createPlayer">
          <i className="icon-music sprite_icon2"></i>
          <a href={`https://music.163.com/#/outchain/2/${currentSong.id}`}>生成外链播放器</a>
        </div>
      </div>

      {/* 右侧信息 */}
      <div className="dnt">
        <div className="title">
          <i className="sprite_icon2 icon-type"></i>
          <h2>{currentSong.name}</h2>
          {/* <a title="播放mv" href={`https://music.163.com/#/mv?id=${currentSong.id}`}>
            <i className="icon-mv sprite_icon2"></i>
          </a> */}
        </div>
        <p className="des">
          歌手：<span>{singName}</span>
        </p>
        <p className="des">
          所属专辑：<span>{alName}</span>
        </p>

        {/* 按钮组 */}
        <SongOperationBar
          favorTitle="收藏"
          shareTitle="分享"
          downloadTitle="下载"
          commentTitle="(167366)"
        ></SongOperationBar>

        {/* 歌词 */}
        <div className="lyricList">
          {lyricList.map((item, index) => {
            if (item.content !== "") {
              return <p key={index}>{item.content}</p>;
            } else {
              return <br key={index} />;
            }
          })}
        </div>
      </div>
    </Wrapper>
  );
});
