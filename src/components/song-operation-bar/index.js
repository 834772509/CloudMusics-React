/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";
import { OperationBarWrapper } from "./style";

/**
 * 音乐控制栏
 * @param {String} favorTitle 收藏标题
 * @param {String} shareTitle 分享标题
 * @param {String} downloadTitle 下载标题
 * @param {String} commentTitle 评论标题
 */
export default memo(function SongOperationBar(props) {
  const {
    playTitle = "播放",
    favorTitle = undefined,
    shareTitle,
    downloadTitle,
    commentTitle,
  } = props;

  return (
    <OperationBarWrapper>
      <span className="play">
        <a className="play-icon sprite_button">
          <span className="play sprite_button" title="播放">
            <i className="sprite_button"></i>
            <span>{playTitle}</span>
          </span>
        </a>
        <a className="add-icon sprite_button" title="增加到播放列表">
          +
        </a>
      </span>

      {favorTitle && (
        <a className="item sprite_button">
          <i className="icon favor-icon sprite_button">{favorTitle}</i>
        </a>
      )}

      <a className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareTitle}</i>
      </a>

      <a className="item sprite_button">
        <i className="icon download-icon sprite_button">{downloadTitle}</i>
      </a>

      <a className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentTitle}</i>
      </a>
    </OperationBarWrapper>
  );
});
