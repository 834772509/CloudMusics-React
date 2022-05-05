import React, { memo } from "react";
import { Wrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";

/**
 * 排行榜 导航 - 单一
 */
export default memo(function LeaderboardItem(props) {
  const { data } = props;

  return (
    <Wrapper>
      {/* activeClassName */}
      <a href={`/discover/toplist?id=${data.id}`} className="nav">  
        <div className="image">
          <img src={getSizeImage(data.coverImgUrl, 40)} alt="" />
        </div>
        <div className="info">
          <span className="title">{data.name}</span>
          <span className="updateFrequency">{data.updateFrequency}</span>
        </div>
      </a>
    </Wrapper>
  );
});
