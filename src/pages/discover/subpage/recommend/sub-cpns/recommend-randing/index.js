import React, { memo, useEffect } from "react";
import { RecommendRandingWrapper } from "./style";
import ThemeHeaderRCM from "@/components/theme-header-rcm";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTopListAction } from "../../store/actionCreators";
import TopRanking from "@/components/top-ranking";

/**
 * 榜单组件
 */
export default memo(function RecommendRanding() {
  // 请求数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

  // 获取数据
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    }),
    shallowEqual
  );

  return (
    <RecommendRandingWrapper>
      {/* 小标题栏 */}
      <ThemeHeaderRCM title="榜单" moreLink="/discover/toplist"></ThemeHeaderRCM>
      <div className="tops">
        
        {/* 云音乐飙升榜 */}
        <TopRanking info={originRanking} link={`/discover/toplist?id=19723756`}></TopRanking>

        {/* 云音乐新歌榜 */}
        <TopRanking info={upRanking} link={`/discover/toplist?id=3779629`}></TopRanking>

        {/* 网易原创歌曲榜 */}

        <TopRanking info={newRanking} link={`/discover/toplist?id=2884035`}></TopRanking>
      </div>
    </RecommendRandingWrapper>
  );
});
