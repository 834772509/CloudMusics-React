import React, { memo } from "react";
import { Wrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import SongsComment from "@/components/songs-comment";
import PageInation from "@/components/page-ination";

/**
 * 歌曲评论
 */
export default memo(function PlayListComment(props) {
  const { currentPage, onPageChange } = props;
  const PAGE_SIZE = 20;

  // 获取数据
  const { playListComment } = useSelector(
    (state) => ({
      playListComment: state.getIn(["playlist", "playListComment"]),
    }),
    shallowEqual
  );
  const hotComments = playListComment.hotComments || [];
  const comments = playListComment.comments || [];
  const total = playListComment.total || 0;

  return (
    <Wrapper>
      {/* 评论标题 */}
      <div className="comment-title">
        <h3>评论</h3>
        <span className="comment-count">共{total}条评论</span>
      </div>
      {/* 评论输入 */}
      <div className="comment-input">
        <img className="head" src={require("@/assets/img/default_avatar.jpg")} alt="" />
        <div className="input">
          <textarea className="textarea" id="comment" placeholder="评论"></textarea>
          <div className="buttons">
            <div className="left">
              <i className="icon-expression sprite_icon2"></i>
              <i className="icon-at sprite_icon2"></i>
            </div>
            <div className="right">
              <button className="button-comment sprite_button2">评论</button>
            </div>
          </div>
        </div>
      </div>

      {/* 精彩评论 */}
      {hotComments.length > 0 && <h3 className="hot-comment-title">精彩评论</h3> &&
        hotComments.map((item, index) => {
          return <SongsComment key={index} commentData={item}></SongsComment>;
        })}

      {/* 最新评论 */}
      <h3 className="hot-comment-title">最新评论({total})</h3>
      {comments.map((item, index) => {
        return <SongsComment key={index} commentData={item}></SongsComment>;
      })}

      {/* 分页 */}
      <PageInation
        current={currentPage}
        pageSize={PAGE_SIZE}
        total={total}
        onChange={onPageChange}
      ></PageInation>
    </Wrapper>
  );
});
