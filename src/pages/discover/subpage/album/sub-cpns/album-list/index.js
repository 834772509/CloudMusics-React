/* eslint-disable jsx-a11y/anchor-has-content */
import React, { memo } from "react";
import { Wrapper } from "./style";
import ThemeHeader from "@/components/theme-header";
import { getSizeImage } from "@/utils/format-utils";

/**
 * 全部新碟
 */
export default memo(function AlbumList(props) {
  const { albums } = props;

  const links = [
    {
      title: "全部",
      url: "/discover/album/?area=ALL",
    },
    {
      title: "华语",
      url: "/discover/album/?area=ZH",
    },
    {
      title: "欧美",
      url: "/discover/album/?area=EA",
    },
    {
      title: "韩国",
      url: "/discover/album/?area=KR",
    },
    {
      title: "日本",
      url: "/discover/album/?area=JP",
    },
  ];

  return (
    <Wrapper>
      <ThemeHeader title="全部新碟" links={links}></ThemeHeader>
      <div className="album-list">
        {albums.map((item, index) => {
          return (
            <div className="album-item" key={index}>
              <div className="image">
                <img src={getSizeImage(item.picUrl, 130)} alt="" />
                <a className="msk sprite_covor" href={`/album?id=${item.id}`} title={item.name}></a>
                <i className="icon-play sprite_icon"></i>
              </div>
              <p className="title">
                <a className="text-nowrap" href={`/album?id=${item.id}`} title={item.name}>
                  {item.name}
                </a>
              </p>
              <p className="artists text-nowrap">
                {item.artists.map((iten, indey) => {
                  return (
                    <span key={indey}>
                      <a key={indey} href={`/artist?id=${iten.id}`}>
                        {iten.name}
                      </a>
                      {indey < item.artists.length - 1 && <span> / </span>}
                    </span>
                  );
                })}
              </p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
});
