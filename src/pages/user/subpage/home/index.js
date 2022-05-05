import { getUserRecord } from "@/services/user";
import { getQueryParam } from "@/utils/format-utils";
import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserDetailAction, getUserPlayListAction } from "./store/actionCreators";
import { Wrapper } from "./style";
import UserHomeInfo from "./sub-cpns/home-info";
import HomeListen from "./sub-cpns/home-listen";
import HomePlayList from "./sub-cpns/home-playlist";

export default memo(function UserHome(props) {
  const param = getQueryParam(props.location.search);
  const id = param.id;

  // 请求数据
  const dispatch = useDispatch();
  useEffect(() => {
    // 用户基本信息
    dispatch(getUserDetailAction(id));
    // 创建的歌单
    dispatch(getUserPlayListAction(id));
  }, [dispatch, id]);

  const [userRecordWeekData, setuserRecordWeekData] = useState();
  const [userRecordAllData, setuserRecordAllData] = useState();

  useEffect(() => {
    // 听歌排行
    getUserRecord(id, 1).then((res) => {
      setuserRecordWeekData(res.data);
    });
    getUserRecord(id, 0).then((res) => {
      setuserRecordAllData(res.data);
    });
  }, [id]);

  return (
    <Wrapper>
      {/* 用户基本信息 */}
      <UserHomeInfo></UserHomeInfo>
      {/* 听歌排行 */}
      {userRecordAllData && (
        <HomeListen
          userRecordWeekData={userRecordWeekData}
          userRecordAllData={userRecordAllData}
        ></HomeListen>
      )}

      {/* 创建的歌单 */}
      <HomePlayList></HomePlayList>
    </Wrapper>
  );
});
