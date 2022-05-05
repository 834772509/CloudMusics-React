import { getQueryParam } from "@/utils/format-utils";
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAristClassifyListAction, getTopPrtistsAction } from "./store/actionCreators";
import { Wrapper, Left, Right } from "./style";
import ArtistCategory from "./sub-cpns/artist-category";
import ArtistList from "./sub-cpns/artist-list";
import AristHot from "./sub-cpns/arist-hot";

/**
 * 歌手
 */
export default memo(function Arist(props) {
  const search = props.location.search;
  const param = getQueryParam(search);
  const id = param.id;

  // 获取数据
  const { aristClassifyArea, aristClassifyType } = useSelector(
    (state) => ({
      aristClassifyArea: state.getIn(["arist", "aristClassifyArea"]),
      aristClassifyType: state.getIn(["arist", "aristClassifyType"]),
    }),
    shallowEqual
  );

  // 请求数据
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      // 歌手分类列表
      dispatch(getAristClassifyListAction(aristClassifyArea, aristClassifyType,"",100));
    } else {
      // 热门歌手
      dispatch(getTopPrtistsAction(100));
    }
  }, [aristClassifyArea, aristClassifyType, dispatch, id]);

  return (
    <Wrapper>
      <Left>
        <ArtistCategory history={props.history}></ArtistCategory>
      </Left>
      <Right>{id ? <ArtistList></ArtistList> : <AristHot></AristHot>}</Right>
    </Wrapper>
  );
});
