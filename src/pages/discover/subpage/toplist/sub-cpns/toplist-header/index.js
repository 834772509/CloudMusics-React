import React, { memo } from "react";
import { Wrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import { getSizeImage, formatDate } from "@/utils/format-utils";
import SongOperationBar from "@/components/song-operation-bar";

export default memo(function RankingHeader(props) {
  // const { listID } = props;

  // 获取数据
  const { topListDetail } = useSelector(
    (state) => ({
      topListDetail: state.getIn(["toplist", "topListDetail"]),
    }),
    shallowEqual
  );

  function getData(params) {
    return topListDetail.playlist && topListDetail.playlist[params];
  }

  const updateTimeShow = formatDate(new Date(getData("updateTime")), "MM月dd日");

  return (
    <Wrapper>
      <div className="header">
        {/* 左侧图片 */}
        <div className="image">
          <img src={getSizeImage(getData("coverImgUrl"), 150)} alt="" />
        </div>
        {/* 右侧信息 */}
        <div className="info">
          <h2 className="title">{getData("name")}</h2>
          {/* 更新时间 */}
          <div className="update-time">
            <i className="icon-time sprite_icon2"></i>
            <span>最近更新：{updateTimeShow}</span>
          </div>
          <SongOperationBar
            favorTitle={`(${getData("subscribedCount")})`}
            shareTitle={`(${getData("shareCount")})`}
            downloadTitle="下载"
            commentTitle={`(${getData("commentCount")})`}
          ></SongOperationBar>
        </div>
      </div>
    </Wrapper>
  );
});
