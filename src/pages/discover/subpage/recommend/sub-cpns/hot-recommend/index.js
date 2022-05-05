import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { HotRecommendWrapper } from "./style";
import ThemeHeaderRCM from "@/components/theme-header-rcm";
import { getHotRecommendAction } from "../../store/actionCreators";
import { HOT_RECOMMEND_LIMIT } from "@/common/contants";
import SongsCover from "@/components/songs-cover";

/**
 * 热门推荐 组件
 */
export default memo(function HostRecommend() {
  // Redux Hooks

  // 获取数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  // 请求数据
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/playlist/"
      ></ThemeHeaderRCM>
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <SongsCover key={item.id} info={item}></SongsCover>;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
