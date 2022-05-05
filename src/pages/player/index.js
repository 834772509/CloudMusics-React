import React, { memo, useEffect } from "react";
import { Wrapper, Left, Right } from "./style";
import { getQueryParam } from "@/utils/format-utils";
import { useDispatch } from "react-redux";
import { getSongDetailAction } from "./store";
import PlayerSongs from "./sub-cpns/similar-songs";
import PlayerInfo from "./sub-cpns/player-info";
import PlayerComment from "./sub-cpns/player-comment";
import PlayerRelevant from "./sub-cpns/player-relevant";
import PlayerDown from "../../components/player-down";
import { getCommentAction, getHotCommentAction, getSimiPlaylistAction, getSimiSongsAction } from "./store/actionCreators";
import { useState } from "react";

/**
 * 歌曲页面
 */
export default memo(function Player(props) {
  const param = getQueryParam(props.location.search);
  const id = param.id;

  // 请求数据
  const dispatch = useDispatch();
  useEffect(() => {
    // 歌曲基本信息
    dispatch(getSongDetailAction(id));
    // 歌曲评论
    dispatch(getHotCommentAction(id));
    dispatch(getCommentAction(id));
    // 相似歌曲
    dispatch(getSimiSongsAction(id));
    // 相似歌单
    dispatch(getSimiPlaylistAction(id));
  }, [dispatch, id]);

  // 当前评论页
  const [currentPage, setCurrentPage] = useState(1);

  // 分页按钮事件
  function onPageChange(page, pageSize) {
    setCurrentPage(page);
    dispatch(getCommentAction(id, pageSize, (page - 1) * pageSize));
  }

  return (
    <Wrapper>
      <div className="content wrap-v2">
        {/* 左侧内容 */}
        <Left>
          {/* 歌曲信息 */}
          <PlayerInfo></PlayerInfo>
          {/* 歌曲评论 */}
          <PlayerComment onPageChange={onPageChange} currentPage={currentPage}></PlayerComment>
        </Left>

        {/* 右侧内容 */}
        <Right>
          {/* 包含这首歌的歌单 */}
          <PlayerSongs></PlayerSongs>
          {/* 相似歌曲 */}
          <PlayerRelevant></PlayerRelevant>
          {/* 网易云音乐多端下载 */}
          <PlayerDown></PlayerDown>
        </Right>
      </div>
    </Wrapper>
  );
});
