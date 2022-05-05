import React, { memo } from "react";
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";
import TopBanner from "./sub-cpns/top-banner";
import HostRecommend from "./sub-cpns/hot-recommend";
import NewAlbum from "./sub-cpns/new-album";
import RecommendRanding from "./sub-cpns/recommend-randing";
import UserLogin from "./sub-cpns/user-login";
import SetitleSinger from "./sub-cpns/setitle-singer";
import HotAnchor from "./sub-cpns/hot-anchor";

/**
 * 首页推荐
 */
export default memo(function Recommend() {
  return (
    <RecommendWrapper>
      {/* 轮播图 */}
      <TopBanner></TopBanner>
      <Content className="wrap-v2">
        {/* 左侧内容 */}
        <RecommendLeft>
          {/* 热门推荐 */}
          <HostRecommend></HostRecommend>
          {/* 新碟上架 */}
          <NewAlbum></NewAlbum>
          {/* 榜单 */}
          <RecommendRanding></RecommendRanding>
        </RecommendLeft>
        {/* 右侧内容 */}
        <RecommendRight>
          {/* 用户登陆 */}
          <UserLogin></UserLogin>
          {/* 入驻歌手 */}
          <SetitleSinger></SetitleSinger>
          {/* 热门主播 */}
          <HotAnchor></HotAnchor>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
});
