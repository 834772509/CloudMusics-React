import React, { memo } from "react";
import { Wrapper } from "./style";

export default memo(function ThemeHeader(props) {
  const { title = "标题", links = [], moreLink } = props;

  // const links = [
  //   {
  //     title: "aaa",
  //     url: "/aaa",
  //   },
  //   {
  //     title: "bbb",
  //     url: "/bbb",
  //   },
  // ];

  return (
    <Wrapper>
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            links.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <a href={item.url}>{item.title}</a>
                  <span className="divider">|</span>
                </div>
              );
            })
          }
        </div>
      </div>
      {moreLink && (
        <div className="right">
          <a href={moreLink}>更多&gt;</a>
        </div>
      )}
    </Wrapper>
  );
});
