import { getQueryParam } from "@/utils/format-utils";
import React, { memo, useState } from "react";
import { Wrapper, Left, Right } from "./style";
import PlayerDown from "@/components/player-down";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDjradioDetailAction, getDjradioProgramListAction } from "./store/actionCreators";
import DjradioInfo from "./sub-cpns/djradio-info";
import DjradioList from "./sub-cpns/djradio-list";

/**
 * 电台详细页面
 */
export default memo(function Djradio(props) {
  const PAGE_SIZE = 100;

  const param = getQueryParam(props.location.search);
  const id = param.id;

  // 请求数据
  const dispatch = useDispatch();
  useEffect(() => {
    // 电台的详情介绍
    dispatch(getDjradioDetailAction(id));
    // 电台节目列表
    dispatch(getDjradioProgramListAction(id, PAGE_SIZE));
  }, [dispatch, id]);

  // 当前节目页
  const [currentPage, setCurrentPage] = useState(1);

  // 分页按钮事件
  function onPageChange(page, pageSize) {
    setCurrentPage(page);
    dispatch(getDjradioProgramListAction(id, pageSize, (page - 1) * pageSize));
  }

  return (
    <Wrapper>
      {/* 左侧内容 */}
      <Left>
        {/* 电台基本信息 */}
        <DjradioInfo></DjradioInfo>
        {/* 节目列表 */}
        <DjradioList onPageChange={onPageChange} currentPage={currentPage}></DjradioList>
      </Left>
      {/* 右侧内容 */}
      <Right>
        {/* 你可能也喜欢 */}
        {/* 网易云音乐多端下载 */}
        <PlayerDown></PlayerDown>
      </Right>
    </Wrapper>
  );
});
