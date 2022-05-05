/* eslint-disable jsx-a11y/anchor-has-content */
import { getArtistAlbum } from "@/services/arist";
import { formatDate, getQueryParam, getSizeImage } from "@/utils/format-utils";
import React, { memo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Wrapper } from "./style";
import PageInation from "@/components/page-ination";

/**
 * 所有专辑
 */
export default memo(function ArtistAlbum(props) {
  // 每页数据量
  const PAGE_SIZE = 12;

  const param = getQueryParam(props.location.search);
  const id = param.id;
  const offset = param.offset || 0;

  // 当前页数
  const currentPage = offset / PAGE_SIZE + 1;

  // 总数据大小
  const [albumSize, setAlbumSize] = useState(0);

  const [hotAlbums, setHotAlbums] = useState([]);

  useEffect(() => {
    getArtistAlbum(id, PAGE_SIZE, offset).then((res) => {
      setAlbumSize(res.data.artist.albumSize);
      setHotAlbums(res.data.hotAlbums);
    });
  }, [id, offset]);

  // 分页按钮事件
  function onPageChange(page, pageSize) {
    props.history.push(`/artist/album?id=${id}&offset=${(page - 1) * pageSize}`);
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
      <div className="album-list">
        {hotAlbums.map((item, index) => {
          return (
            <div key={index} className="album-item">
              <div className="image">
                <img src={getSizeImage(item.picUrl, 120)} alt="" />
                <a className="msk sprite_covor" href={`/album?id=${item.id}`} title={item.name}></a>
                <i className="icon-play sprite_icon"></i>
              </div>
              <p className="title">
                <a href={`/album?id=${item.id}`} title={item.name}>
                  {item.name}
                </a>
              </p>
              <p className="date">{formatDate(new Date(item.publishTime), "yyyy-MM-dd")}</p>
            </div>
          );
        })}
      </div>
      {/* 分页 */}
      <PageInation
        current={currentPage}
        pageSize={PAGE_SIZE}
        total={albumSize}
        onChange={onPageChange}
      ></PageInation>
    </Wrapper>
  );
});
