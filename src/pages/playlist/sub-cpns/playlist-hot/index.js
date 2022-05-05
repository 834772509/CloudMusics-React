import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Wrapper } from "./style";
import ThemeHeaderSmall from "@/components/theme-header-small";
import { getSizeImage } from "@/utils/format-utils";

/**
 * 热门歌单
 */
export default memo(function PlayListHot() {
  // 获取数据
  const { relatedPlayList } = useSelector(
    (state) => ({
      relatedPlayList: state.getIn(["playlist", "relatedPlayList"]),
    }),
    shallowEqual
  );

  const playlists = relatedPlayList.playlists || [];

  return (
    <Wrapper>
      <ThemeHeaderSmall title="热门歌单"></ThemeHeaderSmall>
      {playlists.map((item, index) => {
        return (
          <div className="list" key={index}>
            <div className="image">
              <a href={`/playlist?id=${item.id}`}>
                <img src={getSizeImage(item.coverImgUrl, 50)} alt={item.name} />
              </a>
            </div>
            <div className="info">
              <p className="title">
                <a href={`/playlist?id=${item.id}`}>{item.name}</a>
              </p>
              <p className="author-info">
                <span className="by">by </span>
                <span className="author">
                  <a href={`/user/home?id=${item.creator.userId}`}>{item.creator.nickname}</a>
                </span>
                <i className="icon-star"></i>
              </p>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
});
