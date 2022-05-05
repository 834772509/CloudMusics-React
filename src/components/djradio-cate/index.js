import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Wrapper, CateItem } from "./style";
import { Carousel } from "antd";
import { useRef } from "react";

/**
 * 主播电台分类
 */
export default memo(function DjradioCate() {
  // 获取数据
  const { cateList } = useSelector(
    (state) => ({
      cateList: state.getIn(["discoverDjradio", "cateList"]),
    }),
    shallowEqual
  );
  const categories = cateList.categories || [];
  const PAGE_SIZE = 18;

  const pageRef = useRef();

  return (
    <Wrapper>
      <i className="icon-last radio_slide" onClick={(e) => pageRef.current.prev()}></i>
      <div className="cate-list">
        <Carousel ref={pageRef} dots={false}>
          {[1, 2].map((item, index) => {
            return (
              <div className="page" key={index}>
                {categories.slice((item - 1) * PAGE_SIZE, PAGE_SIZE * item).map((iten, indey) => {
                  return (
                    <CateItem cateIcon={iten.picWebUrl} key={indey}>
                      <a className="cate-link" href={`/discover/djradio/category?id=${iten.id}`}>
                        <i className="icon"></i>
                        <p className="title">{iten.name}</p>
                      </a>
                    </CateItem>
                  );
                })}
              </div>
            );
          })}
        </Carousel>
      </div>
      <i className="icon-next radio_slide" onClick={(e) => pageRef.current.next()}></i>
    </Wrapper>
  );
});
