import React, { memo } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getDjradioCateListAction,
  getDjradioProgramRecommendAction,
  getDjradioProgramTopListAction,
} from "../../store/actionCreators";
import { Wrapper } from "./style";
import DjradioCate from "@/components/djradio-cate";
import RecommPrograms from "./sub-cpns/recomm-programs";
import DjradioTopList from "./sub-cpns/djradio-toplist";
import DjradioClass from "./sub-cpns/djradio-class";

/**
 * 主播电台
 */
export default memo(function Djradio() {
  // 请求数据
  const dispatch = useDispatch();
  useEffect(() => {
    // 电台分类
    dispatch(getDjradioCateListAction());
    // 推荐节目
    dispatch(getDjradioProgramRecommendAction());
    // 节目排行榜
    dispatch(getDjradioProgramTopListAction(10));
  }, [dispatch]);

  return (
    <Wrapper>
      {/* 主播电台分类 */}
      <DjradioCate></DjradioCate>
      <div className="recommend-toplist">
        {/* 推荐节目 */}
        <RecommPrograms></RecommPrograms>
        {/* 节目排行榜 */}
        <DjradioTopList></DjradioTopList>
      </div>
      <div className="rdimore">
        <DjradioClass title="音乐故事·电台" id="2"></DjradioClass>
        <DjradioClass title="美文读物·电台" id="6"></DjradioClass>
        <DjradioClass title="脱口秀·电台" id="5"></DjradioClass>
        <DjradioClass title="情感调频·电台" id="3"></DjradioClass>
        <DjradioClass title="创作|翻唱·电台" id="2001"></DjradioClass>
        <DjradioClass title="人文历史·电台" id="11"></DjradioClass>
      </div>
    </Wrapper>
  );
});
