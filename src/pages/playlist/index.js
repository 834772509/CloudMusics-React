import { getQueryParam } from "@/utils/format-utils";
import React, { memo, useState } from "react";
import { Wrapper, Left, Right } from "./style";
import PlayerDown from "@/components/player-down";
import PlayListInfo from "./sub-cpns/playlist-info";
import PlayListHot from "./sub-cpns/playlist-hot";
import PlayListLike from "./sub-cpns/playlist-like";
import PlayListSongs from "./sub-cpns/playlist-list";
import {
  getPlayListCommentAction,
  getPlayListDetailAction,
  getPlayListSubscribersAction,
  getRelatedPlayListAction,
} from "./store/actionCreators";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import PlayListComment from "./sub-cpns/playlist-comment";

export default memo(function PlayList(props) {
  const search = props.location.search;
  // if (!search) return <AppNotFound></AppNotFound>;
  const param = getQueryParam(search);
  const id = param.id;

  // 请求数据
  const dispatch = useDispatch();
  useEffect(() => {
    // 歌单信息
    dispatch(getPlayListDetailAction(id));
    // 歌单评论
    dispatch(getPlayListCommentAction(id));
    // 相关推荐
    dispatch(getRelatedPlayListAction(id));
    // 喜欢这个歌单的人
    dispatch(getPlayListSubscribersAction(id));
  }, [dispatch, id]);

  // 当前评论页
  const [currentPage, setCurrentPage] = useState(1);

  // 分页按钮事件
  function onPageChange(page, pageSize) {
    setCurrentPage(page);
    dispatch(getPlayListCommentAction(id, pageSize, (page - 1) * pageSize));
  }

  return (
    <Wrapper>
      <Left>
        {/* 歌单信息 */}
        <PlayListInfo></PlayListInfo>
        {/* 歌曲列表 */}
        <PlayListSongs></PlayListSongs>
        {/* 歌单评论 */}
        <PlayListComment onPageChange={onPageChange} currentPage={currentPage}></PlayListComment>
      </Left>
      <Right>
        {/* 喜欢这个歌单的人 */}
        <PlayListLike></PlayListLike>
        {/* 热门歌单 */}
        <PlayListHot></PlayListHot>
        {/* 网易云音乐多端下载 */}
        <PlayerDown></PlayerDown>
      </Right>
    </Wrapper>
  );
});
