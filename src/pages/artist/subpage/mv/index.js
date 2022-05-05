/* eslint-disable jsx-a11y/anchor-has-content */
import { getQueryParam, getSizeImage } from "@/utils/format-utils";
import React, { memo } from "react";
import { useEffect } from "react";
import { Wrapper } from "./style";
import PageInation from "@/components/page-ination";
import { getArtistMV, getArtists } from "@/services/arist";
import { useState } from "react";

/**
 * 相关MV
 */
export default memo(function ArtistMV(props) {
  // 每页数据量
  const PAGE_SIZE = 12;

  const param = getQueryParam(props.location.search);
  const id = param.id;
  const offset = param.offset || 0;

  // 当前页数
  const currentPage = offset / PAGE_SIZE + 1;

  // MV数据
  const [mvs, setMvs] = useState([]);

  // 总数据大小
  const [mvSize, setMvSize] = useState(0);

  useEffect(() => {
    // 获取数据
    getArtistMV(id, PAGE_SIZE, offset).then((res) => {
      setMvs(res.data.mvs);
    });
  }, [id, offset]);

  // 获取总数据大小
  getArtists(id).then((res) => {
    setMvSize(res.data.artist.mvSize);
  });

  // 分页按钮事件
  function onPageChange(page, pageSize) {
    props.history.push(`/artist/mv?id=${id}&offset=${(page - 1) * pageSize}`);
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
      <div className="mv-list">
        {mvs.map((item, index) => {
          return (
            <div className="mv-item" key={index}>
              <div className="image">
                <img src={getSizeImage(item.imgurl, 137, 103)} alt="" />
                <a className="msk sprite_covor" href={`/mv?id=${item.id}}`}></a>
                <a href={`/mv?id=${item.id}`} className="icon-play sprite_icon"></a>
              </div>
              <p className="title">
                <a className="" href={`/mv?id=${item.id}}`} title={item.name}>
                  {item.name}
                </a>
              </p>
            </div>
          );
        })}
      </div>

      {/* 分页 */}
      <PageInation
        current={currentPage}
        pageSize={PAGE_SIZE}
        total={mvSize}
        onChange={onPageChange}
      ></PageInation>
    </Wrapper>
  );
});
