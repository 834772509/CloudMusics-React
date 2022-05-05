/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { memo } from "react";
import { Wrapper } from "./style";
import { getSizeImage, formatDate, getCount } from "@/utils/format-utils";

export default memo(function SongsComment(props) {
  const { commentData } = props;

  const date = new Date(commentData.time);
  const showDate = formatDate(date, "yyyy年MM月dd日");

  // 点赞数量
  const showLikedCount = getCount(commentData.likedCount);

  return (
    <Wrapper>
      <div className="image">
        <a href={`/user/home?id=${commentData.user.userId}`}>
          <img src={getSizeImage(commentData.user.avatarUrl, 50)} />
        </a>
      </div>
      <div className="info">
        {/* 评论 */}
        <div className="comment-box">
          <a href={`/user/home?id=${commentData.user.userId}`}>{commentData.user.nickname}</a>
          <span>：{commentData.content}</span>
        </div>
        {/* 日期、右下角功能区 */}
        <div className="bottom">
          <div className="left">
            <span className="date">{showDate}</span>
          </div>
          <div className="right">
            {/* 点赞图标 */}
            <i className="zan sprite_icon3"></i>
            <span>{showLikedCount}</span>
            <span className="sep">|</span>
            <a>回复</a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
});
