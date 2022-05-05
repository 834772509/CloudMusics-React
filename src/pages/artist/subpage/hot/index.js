/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useEffect, useState } from "react";
import { Wrapper } from "./style";
import { getArtists } from "@/services/arist";
import { formatDate, getQueryParam } from "@/utils/format-utils";
import { useDispatch } from "react-redux";
import { getSongDetailAction } from "@/pages/player/store";
import { addSongtoListAction } from "@/pages/player/store/actionCreators";
import { Menu, Button, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

/**
 * 热门作品
 */
export default memo(function AristHot(props) {
  const param = getQueryParam(props.location.search);
  const id = param.id;

  // 请求数据
  const dispatch = useDispatch();

  // 热门作品
  const [hotSongs, setHotSongs] = useState([]);

  useEffect(() => {
    getArtists(id).then((res) => {
      setHotSongs(res.data.hotSongs);
    });
  }, [id]);

  return (
    <Wrapper>
      <div className="header">
        <div className="operate">
          <span className="play">
            <a className="play-icon sprite_button">
              <span className="play sprite_button" title="播放">
                <i className="sprite_button"></i>
                <span>播放</span>
              </span>
            </a>
            <a className="add-icon sprite_button" title="增加到播放列表">
              +
            </a>
          </span>
          <a className="item sprite_button">
            <i className="icon favor-icon sprite_button">收藏热门{hotSongs.length}</i>
          </a>
        </div>
        {/* 下拉菜单 */}
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item>热门单曲</Menu.Item>
              <Menu.Item disabled>作词作品</Menu.Item>
              <Menu.Item disabled>作曲作品</Menu.Item>
            </Menu>
          }
        >
          <Button>
            热门单曲 <DownOutlined />
          </Button>
        </Dropdown>

        {/* <a className="item sprite_button">热门单曲</a> */}
      </div>
      {/* 热门作品 */}
      <div className="hotsong-list">
        <table>
          <tbody>
            {hotSongs.map((item, index) => {
              return (
                <tr key={index} className="hotsong-item">
                  <td className="td-1">
                    <span>{index + 1}</span>
                    <i
                      onClick={(e) => dispatch(getSongDetailAction(item.id))}
                      className="icon-play sprite_table"
                    ></i>
                  </td>
                  <td className="td-2">
                    <a className="text-nowrap" href={`/song?id=${item.id}`} title={item.name}>
                      {item.name}
                    </a>
                  </td>
                  <td className="td-3">
                    <span className="playlenght">{formatDate(new Date(item.dt), "mm:ss")}</span>
                    <div className="operate">
                      {/* 增加到播放列表按钮 */}
                      <button
                        className="btn sprite_icon2 addto"
                        title="增加到播放列表"
                        onClick={(e) => dispatch(addSongtoListAction(item.id))}
                      ></button>
                      {/* 收藏按钮 */}
                      <button className="btn sprite_table favor" title="收藏"></button>
                      {/* 分享按钮 */}
                      <button className="btn sprite_table share" title="分享"></button>
                      {/* 下载按钮 */}
                      <button className="btn sprite_table down" title="下载"></button>
                    </div>
                  </td>
                  <td className="td-4">
                    <a
                      className="text-nowrap"
                      href={`/album?id=${item.al.id}`}
                      title={item.al.name}
                    >
                      {item.al.name}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
});
