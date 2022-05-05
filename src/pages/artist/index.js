import React, { memo } from "react";
import { Wrapper, Left, Right } from "./style";
import AristHot from "./sub-cpns/artist-hot";
import PlayerDown from "@/components/player-down";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import AristHeader from "./sub-cpns/artist-header";
import { getQueryParam } from "@/utils/format-utils";

export default memo(function Artist(props) {
  const param = getQueryParam(props.location.search);
  const id = param.id;

  return (
    <BrowserRouter>
      <Wrapper>
        <Left>
          <AristHeader id={id}></AristHeader>
          {renderRoutes(props.route.routes)}
        </Left>
        <Right>
          {/* 热门歌手 */}
          <AristHot></AristHot>
          {/* 网易云音乐多端下载 */}
          <PlayerDown></PlayerDown>
        </Right>
      </Wrapper>
    </BrowserRouter>
  );
});
