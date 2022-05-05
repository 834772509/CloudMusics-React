import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const Friend = lazy(() => import("@/pages/friend"));
const Player = lazy(() => import("@/pages/player"));
const Mine = lazy(() => import("@/pages/mine"));
const Discover = lazy(() => import("@/pages/discover"));
const PlayList = lazy(() => import("@/pages/playlist"));
const Djradio = lazy(() => import("@/pages/djradio"));
const Album = lazy(() => import("@/pages/album"));
const Program = lazy(() => import("@/pages/program"));

// 歌手详情
const Artist = lazy(() => import("@/pages/artist"));
const AristHot = lazy(() => import("@/pages/artist/subpage/hot"));
const ArtistAlbum = lazy(() => import("@/pages/artist/subpage/album"));
const ArtistMV = lazy(() => import("@/pages/artist/subpage/mv"));
const ArtistDesc = lazy(() => import("@/pages/artist/subpage/desc"));

// 用户页面
const User = lazy(() => import("@/pages/user"));
const UserHome = lazy(() => import("@/pages/user/subpage/home"));

// 发现音乐
const Discover_Album = lazy(() => import("@/pages/discover/subpage/album"));
const Discover_Arist = lazy(() => import("@/pages/discover/subpage/arist"));
const Discover_Djradio = lazy(() => import("@/pages/discover/subpage/djradio/subpage/djradio"));
const Discover_Djradio_Category = lazy(() =>
  import("@/pages/discover/subpage/djradio/subpage/category")
);
const Discover_TopList = lazy(() => import("@/pages/discover/subpage/toplist"));
const Discover_Recommend = lazy(() => import("@/pages/discover/subpage/recommend"));
const Discover_PlayList = lazy(() => import("@/pages/discover/subpage/playlist"));

// 404
const AppNotFound = lazy(() => import("@/pages/app-notfound"));

const routes = [
  // 根路由自动跳转到推荐页面
  { path: "/", exact: true, render: () => <Redirect to={"/discover"} /> },
  // 发现音乐
  {
    path: "/discover",
    component: Discover,
    routes: [
      { path: "/discover", exact: true, render: () => <Redirect to={"/discover/recommend"} /> },
      // 推荐
      { path: "/discover/recommend", component: Discover_Recommend },
      // 新碟上架
      { path: "/discover/album", component: Discover_Album },
      // 歌手
      { path: "/discover/artist", component: Discover_Arist },
      // 主播电台
      { path: "/discover/djradio", exact: true, component: Discover_Djradio },
      { path: "/discover/djradio/category", component: Discover_Djradio_Category },
      // 排行榜
      { path: "/discover/toplist", component: Discover_TopList },
      // 歌单
      { path: "/discover/playlist", component: Discover_PlayList },
    ],
  },
  // 我的音乐
  { path: "/my", component: Mine },
  // 朋友
  { path: "/friend", component: Friend },
  // 歌曲详情
  { path: "/song", component: Player },
  // 歌单
  { path: "/playlist", component: PlayList },
  // 主播电台
  { path: "/djradio", component: Djradio },
  // 歌手详情
  {
    path: "/artist",
    // 热门作品
    component: Artist,
    routes: [
      // 热门作品
      { path: "/artist", exact: true, component: AristHot },
      // 所有专辑
      { path: "/artist/album", exact: true, component: ArtistAlbum },
      // 相关MV
      { path: "/artist/mv", exact: true, component: ArtistMV },
      // 艺人介绍
      { path: "/artist/desc", exact: true, component: ArtistDesc },
    ],
  },
  // 专辑详情
  { path: "/album", component: Album },
  // 电台节目
  { path: "/program", component: Program },
  // 用户页面
  {
    path: "/user",
    component: User,
    routes: [
      // 用户首页
      { path: "/user/home", exact: true, component: UserHome },
    ],
  },
  // 404
  { component: AppNotFound },
];

export default routes;
