import React, { memo, useState } from "react";
import { Wrapper } from "./style";
import { useEffect } from "react";
import { getAlbumTop } from "@/services/album";
// import AlbumHot from "./sub-cpns/album-hot";
import AlbumList from "./sub-cpns/album-list";
import PageInation from "@/components/page-ination";
import { getQueryParam } from "@/utils/format-utils";

/**
 * 新碟上架
 */
export default memo(function Album(props) {
  // 每页数据量
  const PAGE_SIZE = 35;

  const param = getQueryParam(props.location.search);

  // 当前页数
  const index = param.index || 1;
  const area = param.area || "ALL";

  // 总数据大小
  const [total, setTotal] = useState(0);

  // 请求数据
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    getAlbumTop(area, "new", PAGE_SIZE, index * PAGE_SIZE).then((res) => {
      setAlbums(res.data.albums);
      setTotal(res.data.total);
    });
  }, [area, index]);

  // 分页按钮事件
  function onPageChange(page, pageSize) {
    // setAlbums([]);
    props.history.push(`/discover/album/?area=${area}&index=${page}`);
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
  }

  return (
    <Wrapper>
      {/* 热门新碟 */}
      {/* <AlbumHot></AlbumHot> */}
      {/* 全部新碟 */}
      <AlbumList albums={albums}></AlbumList>
      {/* 分页 */}
      <PageInation
        current={index}
        pageSize={PAGE_SIZE}
        total={total}
        onChange={onPageChange}
      ></PageInation>
    </Wrapper>
  );
});
