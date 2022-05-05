/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useState, useEffect } from "react";
import { Wrapper } from "./style";
import SongsCategory from "./sub-cpns/songs-category";
import { useDispatch } from "react-redux";
import { changeCurrentCategoryAction, getCategory, getSongList } from "./store/actionCreators";
import PlayListHeader from "./sub-cpns/playlist-header";
import SongsList from "./sub-cpns/songs-list";
import { getQueryParam } from "@/utils/format-utils";

/**
 * 歌单
 */
export default memo(function Songs(props) {
  // 是否显示分类栏
  const [isShow, setIsShow] = useState(false);

  const param = getQueryParam(props.location.search);
  const [cat, setCat] = useState(param.cat || "全部");
  const [nowPage, setNowPage] = useState(param.page || 1);

  // 请求数据
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrentCategoryAction(cat));
    dispatch(getCategory());
    dispatch(getSongList(nowPage - 1));
  }, [cat, dispatch, nowPage]);

  // 分页按钮事件
  function onPageChange(page, pageSize) {
    // 回到顶部
    clearInterval(window.timer);
    window.timer = setInterval(function () {
      let step = (0 - window.pageYOffset) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      if (window.pageYOffset === 0) {
        clearInterval(window.timer);
      }
      window.scroll(0, window.pageYOffset + step);
    }, 10);
    setNowPage(page);
    props.history.push(`/discover/playlist?cat=${cat}&page=${page}`);
  }

  function selectCategory(name) {
    setIsShow(!isShow);
    dispatch(changeCurrentCategoryAction(name));
    dispatch(getSongList(0));
    setCat(name);
    setNowPage(1);
    props.history.push(`/discover/playlist?cat=${name}&page=1`);
  }

  return (
    <Wrapper>
      {/* 顶部标题 */}
      <PlayListHeader menuClick={(e) => setIsShow(!isShow)}></PlayListHeader>
      {/* 歌单分类 */}
      {isShow && <SongsCategory selectCategory={selectCategory}></SongsCategory>}
      {/* 歌单列表 */}
      <SongsList onPageChange={onPageChange} current={nowPage}></SongsList>
    </Wrapper>
  );
});
