import ThemeHeader from "@/components/theme-header";
import { getDjradioRecommendType } from "@/services/djradio";
import { getSizeImage } from "@/utils/format-utils";
import React, { memo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Wrapper } from "./style";

export default memo(function DjradioClass(props) {
  const { title, id } = props;

  const [recommendData, setRecommendData] = useState({});

  // 请求数据
  useEffect(() => {
    getDjradioRecommendType(id).then((res) => {
      setRecommendData(res.data);
    });
  }, [id]);

  let djRadios = recommendData.djRadios || [];

  if (djRadios.length !== 0) {
    djRadios = djRadios.slice(0, 4);
  }

  return (
    <Wrapper>
      <ThemeHeader title={title} moreLink={`/discover/djradio/category?id=${id}`}></ThemeHeader>
      <div className="class-list">
        {djRadios.map((item, index) => {
          return (
            <div className="class-item" key={index}>
              <div className="image">
                <a href={`/djradio?id=${item.id}`}>
                  <img src={getSizeImage(item.picUrl, 120)} alt="" />
                </a>
              </div>
              <div className="info">
                <h3 className="title" title={item.name}>
                  <a href={`/djradio?id=${item.id}`}>{item.name}</a>
                </h3>
                <p className="rcmdtext">{item.rcmdtext}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
});
