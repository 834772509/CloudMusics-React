/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";
import { Wrapper } from "./style";
import { useSelector, shallowEqual } from "react-redux";

/**
 * 歌单分类选项卡
 */
export default memo(function SongsCategory(props) {
  const { selectCategory } = props;

  // 获取数据
  const { category } = useSelector(
    (state) => ({
      category: state.getIn(["songlist", "category"]),
    }),
    shallowEqual
  );

  return (
    <Wrapper>
      {/* 顶部图标 */}
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <button className="link sprite_button2">全部风格</button>
      </div>

      {/* 歌单分类 */}
      <div className="category">
        {category.map((item, index) => {
          return (
            <dl key={item.name} className={"item" + index}>
              <dt>
                <i className="icon sprite_icon2"></i>
                <span>{item.name}</span>
              </dt>
              <dd>
                {item.subs.map((sItem) => {
                  return (
                    <div className="item" key={sItem.name}>
                      <a className="link" onClick={(e) => selectCategory(sItem.name)}>
                        {sItem.name}
                      </a>
                      <span className="divider">|</span>
                    </div>
                  );
                })}
              </dd>
            </dl>
          );
        })}
      </div>
    </Wrapper>
  );
});
