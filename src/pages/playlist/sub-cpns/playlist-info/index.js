/* eslint-disable no-control-regex */
import { formatDate, getSizeImage } from "@/utils/format-utils";
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Wrapper, Left, Right } from "./style";
import SongOperationBar from "@/components/song-operation-bar";
import SongTag from "@/components/song-tag";

export default memo(function PlayListInfo() {
  // 获取数据
  const { playListDetail } = useSelector(
    (state) => ({
      playListDetail: state.getIn(["playlist", "playListDetail"]),
    }),
    shallowEqual
  );

  const playlist = playListDetail.playlist || {};
  const creator = playlist.creator || {};
  const tags = playlist.tags || [];

  // 创建时间
  const createTime = formatDate(new Date(playlist.createTime), "yyyy-MM-dd");

  // 介绍
  const showDescription = playlist.description || "";

  return (
    <Wrapper>
      {/* 左侧图片 */}
      <Left>
        <img src={getSizeImage(playlist.coverImgUrl, 200)} alt="" />
        <span className="msk sprite_covor"></span>
      </Left>
      {/* 右侧信息 */}
      <Right>
        {/* 标题 */}
        <div className="hand">
          <i className="icon-playlist sprite_icon2"></i>
          <h2 className="title">{playlist.name}</h2>
        </div>
        {/* 用户信息 */}
        <div className="user">
          <a className="avatar-img" href={`/user/home?id=${creator.userId}`}>
            <img src={getSizeImage(creator.avatarUrl, 40)} alt="" />
          </a>
          <a className="avatar-name" href={`/user/home?id=${creator.userId}`}>
            {creator.nickname}
          </a>
          <i className="icon-star sprite_icon2"></i>
          <span className="create-time">{createTime} 创建</span>
        </div>
        {/* 播放控制栏 */}
        <SongOperationBar
          className="song-operation-bar"
          favorTitle={`(${playlist.subscribedCount})`}
          shareTitle={`(${playlist.shareCount})`}
          downloadTitle="下载"
          commentTitle={`(${playlist.commentCount})`}
        ></SongOperationBar>
        {/* 标签 */}
        <div className="tags">
          <span>标签：</span>
          {tags.map((item, index) => {
            return (
              <SongTag
                key={index}
                title={item}
                href={`/discover/playlist/?cat=${item}&order=hot`}
              ></SongTag>
            );
          })}
        </div>
        <div className="album">
          <span>介绍： </span>
          {showDescription.split("\n").reduce((preValue, item) => {
            return (
              <span>
                {preValue}
                {item}
                <br />
              </span>
            );
          }, "")}
        </div>
      </Right>
    </Wrapper>
  );
});
