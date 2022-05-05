import { getQueryParam } from "@/utils/format-utils";
import React, { memo } from "react";
import { Wrapper, Left, Right } from "./style";
import PlayerDown from "@/components/player-down";
import AlbumInfo from "./sub-cpns/album-info";
import AlbumList from "./sub-cpns/album-list";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAlbumAction, getAlbumCommentAction } from "./store/actionCreators";
import AlbumComment from "./sub-cpns/album-comment";
import { useState } from "react";

/**
 * 专辑详细页面
 */
export default memo(function Djradio(props) {
  const param = getQueryParam(props.location.search);
  const id = param.id;

  // 请求数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbumAction(id));
    dispatch(getAlbumCommentAction(id));
  }, [dispatch, id]);

  // 当前评论页
  const [currentPage, setCurrentPage] = useState(1);
  
  // 分页按钮事件
  function onPageChange(page, pageSize) {
    setCurrentPage(page);
    dispatch(getAlbumCommentAction(id, pageSize, (page - 1) * pageSize));
  }

  return (
    <Wrapper>
      {/* 左侧内容 */}
      <Left>
        <AlbumInfo></AlbumInfo>
        <AlbumList></AlbumList>
        <AlbumComment onPageChange={onPageChange} currentPage={currentPage}></AlbumComment>
      </Left>
      {/* 右侧内容 */}
      <Right>
        {/* 喜欢这张专辑的人 */}
        {/* Ta的其他热门专辑 */}
        {/* 网易云音乐多端下载 */}
        <PlayerDown></PlayerDown>
      </Right>
    </Wrapper>
  );
});
