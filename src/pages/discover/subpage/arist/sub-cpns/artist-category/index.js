import { artistCategories } from "@/common/local-data";
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { getAristClassifyAreaAction, getAristClassifyTypeAction } from "../../store/actionCreators";
import { Wrapper } from "./style";

export default memo(function ArtistCategory(props) {
  const dispatch = useDispatch();

  function btn(event, area, type, url) {
    // 阻止默认事件
    event.preventDefault();

    dispatch(getAristClassifyAreaAction(area));
    dispatch(getAristClassifyTypeAction(type));

    // 跳转url
    props.history.push(url);
  }
  return (
    <Wrapper>
      {artistCategories.map((item, index) => {
        return (
          <div className="category-item" key={index}>
            <h2 className="title">{item.title}</h2>
            <ul>
              {item.artists.map((iten, indey) => {
                return (
                  <li key={indey} className="artist-list">
                    <i className="icon-subger sprite_singer"></i>
                    {/* <NavLink className="title-sub" exact to={iten.url}>
                      {iten.name}
                    </NavLink> */}
                    <a
                      className="title-sub"
                      onClick={(e) => btn(e, item.area, iten.type, iten.url)}
                      href={iten.url}
                    >
                      {iten.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </Wrapper>
  );
});
