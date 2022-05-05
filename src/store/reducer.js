import { combineReducers } from "redux-immutable";

import { reducer as playReducer } from "@/pages/player/store";
import { reducer as playlistReducer } from "@/pages/playlist/store";
import { reducer as djradioReducer } from "@/pages/djradio/store";
import { reducer as albumReducer } from "@/pages/album/store";
import { reducer as programReducer } from "@/pages/program/store";

// 发现
import { reducer as recommendReducer } from "@/pages/discover/subpage/recommend/store";
import { reducer as rankingReducer } from "@/pages/discover/subpage/toplist/store";
import { reducer as songlistReducer } from "@/pages/discover/subpage/playlist/store";
import { reducer as discoverDjradioReducer } from "@/pages/discover/subpage/djradio/store";
import { reducer as discoverAristReducer } from "@/pages/discover/subpage/arist/store";

// 用户
import { reducer as userHomeReducer } from "@/pages/user/subpage/home/store";

const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playReducer,
  djradio: djradioReducer,
  album: albumReducer,
  program: programReducer,

  // 发现
  toplist: rankingReducer,
  songlist: songlistReducer,
  playlist: playlistReducer,
  discoverDjradio: discoverDjradioReducer,
  arist: discoverAristReducer,

  // 用户
  userhome: userHomeReducer,
});

export default cReducer;
