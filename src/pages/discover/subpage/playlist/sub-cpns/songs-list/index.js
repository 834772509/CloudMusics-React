import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Wrapper } from "./style";
import ThemeCover from "@/components/theme-cover";
import PageInation from "@/components/page-ination";
import { PER_PAGE_NUMBER } from "../../store/constants";

export default memo(function SongsList(props) {
  const { current, onPageChange } = props;
  // 获取数据
  const { categorySongs } = useSelector(
    (state) => ({
      categorySongs: state.getIn(["songlist", "categorySongs"]),
    }),
    shallowEqual
  );

  const playList = categorySongs.playlists || [];
  const total = categorySongs.total || 0;

  return (
    <Wrapper>
      <div className="play-list">
        {playList.map((item, index) => {
          return <ThemeCover key={index} info={item}></ThemeCover>;
        })}
      </div>
      <PageInation
        current={current}
        pageSize={PER_PAGE_NUMBER}
        total={total}
        onChange={onPageChange}
      ></PageInation>
    </Wrapper>
  );
});
