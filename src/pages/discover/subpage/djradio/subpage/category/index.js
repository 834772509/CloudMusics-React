import { getQueryParam } from "@/utils/format-utils";
import React, { memo } from "react";
import { Wrapper } from "./style";
import DjradioCate from "@/components/djradio-cate";
import {
  getDjradioCateListAction,
  getDjradioRecommendHotAction,
  getExcellentDjradioAction,
} from "../../store/actionCreators";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ExcellentDjradio from "./sub-cpns/excellent-djradio";
import DjradioTopList from "./sub-cpns/djradio-toplist";
import PageInation from "@/components/page-ination";

/**
 * 主播电台 分类信息页面
 */
export default memo(function DjradioCategory(props) {
  const PAGE_SIZE = 30;

  // 解析URL参数
  const param = getQueryParam(props.location.search);

  const id = param.id;
  const offset = param.offset || 0;

  // 当前页数
  const currentPage = offset / PAGE_SIZE + 1;

  // 请求数据
  const dispatch = useDispatch();
  useEffect(() => {
    // 电台分类
    dispatch(getDjradioCateListAction());
    // 优秀新电台
    dispatch(getExcellentDjradioAction(id));
    // 电台排行榜
    dispatch(getDjradioRecommendHotAction(id, PAGE_SIZE, offset));
  }, [dispatch, id, offset]);

  // 获取数据
  const { recommendHot } = useSelector(
    (state) => ({
      recommendHot: state.getIn(["discoverDjradio", "recommendHot"]),
    }),
    shallowEqual
  );

  // 分页按钮事件
  function onPageChange(page, pageSize) {
    props.history.push(`/discover/djradio/category?id=${id}&offset=${(page - 1) * pageSize}`);
    // 回到顶部
    clearInterval(window.timer);
    window.timer = setInterval(function () {
      let step = (0 - window.pageYOffset) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      if (window.pageYOffset === 0) {
        clearInterval(window.timer);
      }
      window.scroll(0, window.pageYOffset + step);
    }, 10);
  }

  return (
    <Wrapper>
      {/* 主播电台分类 */}
      <DjradioCate></DjradioCate>
      {/* 优秀新电台 */}
      <ExcellentDjradio></ExcellentDjradio>
      {/* 电台排行榜 */}
      <DjradioTopList></DjradioTopList>
      {/* 分页 */}
      <PageInation
        current={currentPage}
        pageSize={PAGE_SIZE}
        total={recommendHot.count}
        onChange={onPageChange}
      ></PageInation>
    </Wrapper>
  );
});
