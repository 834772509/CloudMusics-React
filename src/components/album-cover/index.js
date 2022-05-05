/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";
import { Wrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";

export default memo(function AlbumCover(props) {
  const { title, info, size = 130, width = 153, bgp = "-845px", link = "" } = props;

  /**
   * 新碟上架 - 新碟组件
   */
  return (
    <Wrapper size={size} width={width} bgp={bgp} title={title}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <a href={link} className="img_cover cover"></a>
      </div>
      <div className="album-info">
        <div className="name">{info.name}</div>
        <div className="artist">{info.artist.name}</div>
      </div>
    </Wrapper>
  );
});
