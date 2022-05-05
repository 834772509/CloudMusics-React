import { getSizeImage } from "@/utils/format-utils";
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Wrapper } from "./style";

/**
 * 优秀新电台
 */
export default memo(function ExcellentDjradio() {
  // 获取数据
  const { excellentDjradio } = useSelector(
    (state) => ({
      excellentDjradio: state.getIn(["discoverDjradio", "excellentDjradio"]),
    }),
    shallowEqual
  );

  let djRadios = excellentDjradio.djRadios || [];
  // 取前5条数据
  if (djRadios.length !== 0) {
    djRadios = djRadios.slice(0, 5);
  }

  return (
    <Wrapper>
      {/* 头部标题 */}
      <div className="header">
        <h3>优秀新电台</h3>
      </div>
      {/* 优秀新电台列表 */}
      <div className="excellent-list">
        {djRadios.map((item, index) => {
          return (
            <div className="excellent-item" key={index}>
              <a href={`/djradio?id=${item.id}`}>
                <img src={getSizeImage(item.picUrl, 150)} alt="" />
              </a>
              <h3 className="title">
                <a title={item.name} href={`/djradio?id=${item.id}`}>
                  {item.name}
                </a>
              </h3>
              <p className="rcmdtext">{item.rcmdtext}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
});
