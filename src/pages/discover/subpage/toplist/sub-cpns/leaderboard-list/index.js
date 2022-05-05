/* eslint-disable array-callback-return */
import React, { memo } from "react";
import { Wrapper } from "./style";
import { useSelector, shallowEqual } from "react-redux";
import LeaderboardItem from "../leaderboard-item";

/**
 * 排行榜 导航列表
 */
export default memo(function LeaderboardList() {
  // 获取数据
  const { allTopList } = useSelector(
    (state) => ({
      allTopList: state.getIn(["toplist", "allTopList"]),
    }),
    shallowEqual
  );

  return (
    <Wrapper>
      <h2 className="title">云音乐特色榜</h2>
      {allTopList.list &&
        allTopList.list.map((item, index) => {
          if (index < 4) {
            return <LeaderboardItem key={index} data={item}></LeaderboardItem>;
          }
        })}
      <h2 className="title">全球媒体榜</h2>
      {allTopList.list &&
        allTopList.list.map((item, index) => {
          if (index >= 4) {
            return <LeaderboardItem key={index} data={item}></LeaderboardItem>;
          }
        })}
    </Wrapper>
  );
});
