import React, { memo } from "react";
import { Wrapper } from "./style";
import LeaderboardList from "./sub-cpns/leaderboard-list";
import RankingHeader from "./sub-cpns/toplist-header";
import { getQueryParam } from "@/utils/format-utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTopListAction, getTopListDetailAction } from "./store/actionCreators";
import TopList from "./sub-cpns/toplist-list";

/**
 * 排行榜
 */
export default memo(function Ranking(props) {
  const urlParam = (props.location.search && getQueryParam(props.location.search)) || {
    // 设置默认显示 云音乐飙升榜
    id: 19723756,
  };

  const listID = urlParam.id;

  // 请求数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTopListAction());
    dispatch(getTopListDetailAction(listID));
  }, [dispatch, listID]);

  return (
    <Wrapper>
      {/* 左侧内容 */}
      <div className="left">
        <LeaderboardList></LeaderboardList>
      </div>
      {/* 右侧内容 */}
      <div className="right">
        <RankingHeader listID={listID}></RankingHeader>
        <TopList></TopList>
      </div>
    </Wrapper>
  );
});
