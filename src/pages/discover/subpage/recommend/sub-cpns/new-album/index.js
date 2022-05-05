import React, { memo, useEffect, useRef } from "react";
import { NewAlbumWrapper } from "./style";
import ThemeHeaderRCM from "@/components/theme-header-rcm";
import { Carousel } from "antd";

import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { getNewAlbumAction } from "../../store/actionCreators";
import { NEW_ALBUM_PER_PAGE } from "@/common/contants";

import AlbumCover from "@/components/album-cover";

/**
 * 新碟上架 组件
 */
export default memo(function NewAlbum() {
  // redux hoooks

  // 请求数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumAction());
  }, [dispatch]);

  // 获取数据
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );

  const pageRef = useRef();

  return (
    <NewAlbumWrapper>
      {/* 标题栏 */}
      <ThemeHeaderRCM title="新碟上架" moreLink="/discover/album/"></ThemeHeaderRCM>

      <div className="content">
        <button
          onClick={(e) => pageRef.current.prev()}
          className="arrow arrow-left sprite_02"
        ></button>
        <div className="album">
          <Carousel ref={pageRef} dots={false}>
            {[0, 1].map((item) => {
              return (
                <div className="page" key={item}>
                  {newAlbums
                    .slice(item * NEW_ALBUM_PER_PAGE, (item + 1) * NEW_ALBUM_PER_PAGE)
                    .map((iten, indey) => {
                      return (
                        <AlbumCover
                          key={iten.id}
                          info={iten}
                          title={iten.name}
                          size={100}
                          width={118}
                          bgp="-570px"
                          link={`/album?id=${iten.id}`}
                        >
                          {iten.name}
                        </AlbumCover>
                      );
                    })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          onClick={(e) => pageRef.current.next()}
          className="arrow arrow-right sprite_02"
        ></button>
      </div>
    </NewAlbumWrapper>
  );
});
