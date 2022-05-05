import React, { memo } from "react";
import { Wrapper, Left, Right } from "./style";
import PlayerDown from "@/components/player-down";
import ProgramInfo from "./sub-cpns/program-info";
import ProgramComment from "./sub-cpns/program-comment";
import ProgramMore from "./sub-cpns/program-more";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getDjradioProgramListAction,
  getProgramCommentAction,
  getProgramDetailAction,
} from "./store/actionCreators";
import { useEffect } from "react";
import { getQueryParam } from "@/utils/format-utils";
import { useState } from "react";

/**
 * 电台节目 页面
 */
export default memo(function Program(props) {
  const program = getQueryParam(props.location.search);
  const id = program.id;

  // 获取数据
  const { programDetail } = useSelector(
    (state) => ({
      programDetail: state.getIn(["program", "programDetail"]),
    }),
    shallowEqual
  );

  const radioID =
    programDetail.program && programDetail.program.radio && programDetail.program.radio.id;

  // 请求数据
  const dispatch = useDispatch();
  useEffect(() => {
    // 电台节目详情
    dispatch(getProgramDetailAction(id));
    // 电台节目评论
    dispatch(getProgramCommentAction(id));

    // 更多节目
    radioID && dispatch(getDjradioProgramListAction(radioID, 5));
  }, [radioID, dispatch, id]);

  // 当前评论页
  const [currentPage, setCurrentPage] = useState(1);

  // 分页按钮事件
  function onPageChange(page, pageSize) {
    setCurrentPage(page);
    dispatch(getProgramCommentAction(id, pageSize, (page - 1) * pageSize));
  }

  return (
    <Wrapper>
      <Left>
        {/* 电台节目-基本信息 */}
        <ProgramInfo></ProgramInfo>
        {/* 电台节目-评论 */}
        <ProgramComment onPageChange={onPageChange} currentPage={currentPage}></ProgramComment>
      </Left>
      <Right>
        {/* 更多节目 */}
        <ProgramMore id={radioID}></ProgramMore>
        {/* 网易云音乐多端下载 */}
        <PlayerDown></PlayerDown>
      </Right>
    </Wrapper>
  );
});
