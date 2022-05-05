/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React, { memo } from "react";
import { Wrapper, SingerInfoWrapper } from "./style";
import { hotRadios } from "@/services/recommend";
import { getSizeImage } from "@/utils/format-utils";
import ThemeHeaderSmall from "@/components/theme-header-small";

export default memo(function SetitleSinger() {
  return (
    <Wrapper>
      <ThemeHeaderSmall title="入驻歌手" href="/discover/artist/signed/"></ThemeHeaderSmall>

      <div className="SingerList">
        {hotRadios.map((item, index) => {
          return (
            <SingerInfo
              key={item.name}
              className="item"
              url={item.url}
              img={getSizeImage(item.picUrl, 62)}
              author={item.name}
              text={item.position}
            ></SingerInfo>
          );
        })}
      </div>
      
      <a className="button-link" href="https://music.163.com/nmusician/web/index#/" target="_blank">
        申请成为网易音乐人
      </a>
    </Wrapper>
  );
});

const SingerInfo = memo(function (props) {
  const { url, img, author, text } = props;

  return (
    <SingerInfoWrapper>
      <a href={url} target="_blank" className="Singer">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="info">
          <h4>{author}</h4>
          <p>{text}</p>
        </div>
      </a>
    </SingerInfoWrapper>
  );
});
