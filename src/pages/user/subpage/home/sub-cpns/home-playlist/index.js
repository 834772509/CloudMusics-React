import SongsCover from "@/components/songs-cover";
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Wrapper } from "./style";

export default memo(function HomePlayList(props) {
  // 获取数据
  const { userPlayList, userDetail } = useSelector(
    (state) => ({
      userPlayList: state.getIn(["userhome", "userPlayList"]),
      userDetail: state.getIn(["userhome", "userDetail"]),
    }),
    shallowEqual
  );

  const playlist = userPlayList.playlist || [];
  const profile = userDetail.profile || {};

  return (
    <Wrapper>
      <div className="header">
        <h2>
          {profile.nickname}创建的歌单({playlist.length})
        </h2>
      </div>
      <div className="playlist-list">
        {playlist.map((item, index) => {
          return (
            <div className="playlist-item" key={index}>
              <SongsCover info={item}></SongsCover>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
});
