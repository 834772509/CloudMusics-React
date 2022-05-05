import React, { memo } from "react";
import { useRef, useState, useCallback, useEffect } from "react";
import { Wrapper, Control, PlayInfo, Operator } from "./style";

import { Slider, message } from "antd";
import { getPlaySong } from "@/services/player";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  changePlayModeAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction,
} from "../store/actionCreators";
import { getSizeImage, formatDate } from "@/utils/format-utils";

import { NavLink } from "react-router-dom";

export default memo(function AppPlayerBar() {
  // 是否正在播放
  const [isPlaying, setIsPlaying] = useState(false);
  // 当前播放时间
  const [currentTime, setCurrentTime] = useState(0);
  // 当前进度
  const [progress, setProgress] = useState(0);
  // 是否正在拖动进度条
  const [isChanging, setIsChanging] = useState(false);

  // 获取Audio DOM
  const audioRef = useRef();

  // 请求数据
  const dispatch = useDispatch();
  // 请求默认歌曲
  // useEffect(() => {
  //   dispatch(getSongDetailAction(167876));
  // }, [dispatch]);

  // 获取数据
  const { currentSong, playMode, lyricList, currentLyricIndex, playList } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      playMode: state.getIn(["player", "playMode"]),
      lyricList: state.getIn(["player", "lyricList"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
      playList: state.getIn(["player", "playList"]),
    }),
    shallowEqual
  );

  // 设置歌曲链接
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
  }, [currentSong]);

  // 其他处理

  // 歌曲图片
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  // 歌手名
  const singName = (currentSong.ar && currentSong.ar[0].name) || "";
  // 歌曲总时长
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(new Date(duration), "mm:ss");
  // 当前播放时间（显示专用）
  const showCurrentTime = formatDate(new Date(currentTime), "mm:ss");

  // 事件: 播放按钮
  const playMusic = useCallback(() => {
    !isPlaying ? audioRef.current.play() : audioRef.current.pause();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // 事件: 播放时间发生更新
  const timeUpdate = (e) => {
    // const currentTime = e.target.currentTime;

    // 当前进度条是否在拖动
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress((currentTime / duration) * 100);
    }

    // 获取当前歌词
    let i = 0;
    for (i; i < lyricList.length; i++) {
      const lyricItem = lyricList[i];
      if (lyricItem.time >= e.target.currentTime * 1000) {
        break;
      }
    }

    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1));
      const content = lyricList[i - 1] && lyricList[i - 1].content;
      message.open({
        key: "lyric",
        content: content,
        duration: 0,
        className: "lyric",
      });
    }
  };

  // 事件: 进度条正在改变位置
  const sliderChange = useCallback(
    (value) => {
      // 进度最大值为100，需要设置当前歌曲的时间戳
      const currentTime = ((value / 100) * duration) / 1000;
      setIsChanging(true);
      setProgress(value);
      setCurrentTime(currentTime * 1000);
    },
    [duration]
  );

  // 事件: 进度条改变位置后
  const sliderAfterChange = useCallback(
    (value) => {
      // 进度最大值为100，需要设置当前歌曲的毫秒
      const currentTime = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = currentTime;
      setCurrentTime(currentTime * 1000);
      setIsChanging(false);

      if (!isPlaying) {
        playMusic();
      }
    },
    [duration, isPlaying, playMusic]
  );

  // 事件: 点击播放模式按钮
  const changeMode = () => {
    let currentPlayMode = playMode + 1;
    if (currentPlayMode > 2) {
      currentPlayMode = 0;
    }
    dispatch(changePlayModeAction(currentPlayMode));
  };
  // 事件: 点击上一首、下一首
  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag));
  };

  // 事件: 播放器播放完毕
  const handleMusicEnd = () => {
    if (playMode === 2) {
      // 单曲循环
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentIndexAndSongAction(1));
    }
  };

  // 事件：音量按钮被单击
  const btnVolume = () => {
    console.log("Aaa");
  };

  return (
    <Wrapper className="sprite_playerbar">
      <div className="content wrap-v2">
        {/* 播放按钮 */}
        <Control isPlay={isPlaying}>
          <button className="sprite_playerbar prev" onClick={(e) => changeMusic(-1)}></button>
          <button className="sprite_playerbar play" onClick={(e) => playMusic()}></button>
          <button className="sprite_playerbar next" onClick={(e) => changeMusic(1)}></button>
        </Control>

        {/* 播放信息、进度条 */}
        <PlayInfo>
          {/* 歌曲图片 */}
          <div className="image">
            <NavLink exact to={`/song?id=${currentSong.id}`}>
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>

          {/* 歌曲信息 */}
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">
                {singName}
              </a>
            </div>

            {/* 进度条 */}
            <div className="progress">
              <Slider
                className="slider"
                defaultValue={0}
                tipFormatter={null}
                value={progress}
                onChange={(e) => sliderChange(e)}
                onAfterChange={(e) => sliderAfterChange(e)}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>

        {/* 功能按钮 */}
        <Operator playMode={playMode}>
          {/* 收藏、分享 按钮 */}
          <div className="left">
            {/* 收藏按钮 */}
            <button className="sprite_playerbar btn favor"></button>
            {/* 分享按钮 */}
            <button className="sprite_playerbar btn share"></button>
          </div>

          {/* 音量播放选项 */}
          <div className="right sprite_playerbar">
            {/* 音量设置条 */}
            <div className="volume sprite_playerbar">
              <div className="slider">
                <Slider vertical defaultValue={100} tipFormatter={null} />
              </div>
            </div>
            {/* 音量 */}
            <button
              className="sprite_playerbar btn icon-volume"
              onClick={(e) => btnVolume()}
            ></button>
            {/* 循环 */}
            <button
              className="sprite_playerbar btn icon-loop"
              onClick={(e) => changeMode()}
            ></button>
            {/* 播放列表 */}
            <button className="sprite_playerbar btn icon-playlist">
              {playList && playList.length}
            </button>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => timeUpdate(e)}
        onEnded={(e) => handleMusicEnd()}
      ></audio>
    </Wrapper>
  );
});
