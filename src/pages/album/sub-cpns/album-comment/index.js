import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Wrapper } from "./style";
import SongsComment from "@/components/songs-comment";
import PageInation from "@/components/page-ination";
import { useState } from "react";
import { useEffect } from "react";

export default memo(function AlbumComment(props) {
  const { currentPage, onPageChange } = props;

  const PAGE_SIZE = 20;

  // 获取数据
  const { albumComment } = useSelector(
    (state) => ({
      albumComment: state.getIn(["album", "albumComment"]) || {},
    }),
    shallowEqual
  );

  const [hotComments, setHotComments] = useState([]);
  const [comments, setComments] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setHotComments(albumComment.hotComments || []);
    setComments(albumComment.comments || []);
    setTotal(albumComment.total || 0);
  }, [albumComment.comments, albumComment.hotComments, albumComment.total]);

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
      <h3 className="hot-comment-title">最新评论({comments.length})</h3>
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
