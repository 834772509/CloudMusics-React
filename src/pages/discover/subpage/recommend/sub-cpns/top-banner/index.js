/* eslint-disable jsx-a11y/anchor-has-content */
import React, { memo, useState, useEffect, useRef, useCallback } from "react";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTopBannerAction } from "../../store/actionCreators";
import { Carousel } from "antd";
import { getSizeImage } from "@/utils/format-utils";

/**
 * 顶部 组件
 */
export default memo(function TopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 组件和redux关联，获取数据和操作
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  // 其他hooks
  const beforeChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);

  // 其他业务逻辑
  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl;

  const bannerRef = useRef(null);

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          {/* 左侧轮播图 */}
          <Carousel ref={bannerRef} effect="fade" autoplay="true" beforeChange={beforeChange}>
            {topBanners.map((item, index) => {
              const url = item.url || `/song?id=${item.encodeId}`;

              return (
                <div className="banner-item" key={item.imageUrl}>
                  <a href={url} target={item.url ? "blank" : ""}>
                    <img
                      className="image"
                      src={getSizeImage(item.imageUrl, 730)}
                      alt={item.typeTitle}
                    />
                  </a>
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        {/* 右侧下载客户端 */}
        <BannerRight>
          <div className="download">
            <a className="btn-down" href="https://music.163.com/download"></a>
            <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          </div>
          {/* <a href="https://music.163.com/download"></a> */}
        </BannerRight>
        <BannerControl>
          <button className="btn left" onClick={(e) => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={(e) => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
