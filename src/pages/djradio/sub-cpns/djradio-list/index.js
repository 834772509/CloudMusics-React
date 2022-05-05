import { formatDate } from "@/utils/format-utils";
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Wrapper } from "./style";
import PageInation from "@/components/page-ination";

/**
 * 电台节目列表
 */
export default memo(function DjradioList(props) {
  const { currentPage, onPageChange } = props;
  const PAGE_SIZE = 100;

  // 获取数据
  const { djradioProgramList } = useSelector(
    (state) => ({
      djradioProgramList: state.getIn(["djradio", "djradioProgramList"]),
    }),
    shallowEqual
  );

  const programs = djradioProgramList.programs || [];
  const total = djradioProgramList.count || 0;

  return (
    <Wrapper>
      {/* 电台信息 */}
      <div className="header-title">
        <h3>
          节目列表<span className="song-count">共{total}期</span>
        </h3>
        <p className="header-button">
          <i className="icon-music sprite_icon2"></i>
          <a className="link-outchain" href={`https://music.163.com/#/outchain/4/${1}`}>
            生成外链播放器
          </a>
        </p>
      </div>
      <table className="song-list">
        <tbody className="table-body">
          {programs.map((item, index) => {
            return (
              <tr className="list-item" key={index}>
                {/* 序号 */}
                <td className="td-count">
                  <span>{item.serialNum}</span>
                  <i
                    className="icon-play sprite_02"
                    title="播放"
                    // onClick={(e) => dispatch(getSongDetailAction(item.id))}
                  ></i>
                </td>
                {/* 标题 */}
                <td className="td-title">
                  <a href={`/song?id=${item.id}`} title={item.name}>
                    {item.name}
                  </a>
                  <div className="operate">
                    {/* 增加到播放列表按钮 */}
                    <button
                      className="btn sprite_icon2 addto"
                      title="增加到播放列表"
                      // onClick={(e) => dispatch(addSongtoListAction(item.id))}
                    ></button>
                    {/* 分享按钮 */}
                    <button className="btn sprite_table share" title="分享"></button>
                    {/* 下载按钮 */}
                    <button className="btn sprite_table down" title="下载"></button>
                  </div>
                </td>
                {/* 播放量 */}
                <td className="td-listenerCount">
                  <span className="playcount">播放{item.listenerCount}</span>
                </td>
                {/* 点赞量 */}
                <td className="td-likedCount">
                  <span>赞{item.likedCount}</span>
                </td>
                {/* 创建时间 */}
                <td className="td-date">
                  <span>{formatDate(new Date(item.createTime), "yyyy-MM-dd")}</span>
                </td>
                {/* 歌曲时长 */}
                <td className="td-playlength">
                  <span>{formatDate(new Date(item.duration), "mm:ss")}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* 分页 */}
      <PageInation
        current={currentPage}
        pageSize={PAGE_SIZE}
        total={total}
        onChange={onPageChange}
      ></PageInation>
    </Wrapper>
  );
});
