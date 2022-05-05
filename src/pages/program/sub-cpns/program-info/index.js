import React, { memo } from "react";
import { Wrapper } from "./style";
import { useSelector, shallowEqual } from "react-redux";
import { formatDate, getSizeImage } from "@/utils/format-utils";
import SongOperationBar from "@/components/song-operation-bar";

/**
 * 电台节目 - 基本信息
 */
export default memo(function ProgramInfo() {
  // 获取数据
  const { programDetail } = useSelector(
    (state) => ({
      programDetail: state.getIn(["program", "programDetail"]),
    }),
    shallowEqual
  );

  const program = programDetail.program || {};
  const radio = program.radio || {};

  return (
    <Wrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(program.coverUrl, 140)} alt="" />
        </div>
        <div className="info">
          <div className="title">
            <i className="icon-program sprite_icon3"></i>
            <h2>{program.name}</h2>
          </div>
          <p className="rdiname">
            <i className="icon-music sprite_icon3"></i>
            <span className="title">{radio.name}</span>
            <button className="btn-subscription sprite_button">
              <span className="btn-sprite sprite_button">
                <i className="icon-star sprite_icon3"></i>
                订阅({radio.subCount})
              </span>
            </button>
          </p>
        </div>
      </div>
      <SongOperationBar
        playTitle={`播放 ${formatDate(new Date(program.duration), "mm分ss秒")}`}
        shareTitle={`(${program.shareCount})`}
        commentTitle={`(${program.commentCount})`}
        downloadTitle="下载"
      ></SongOperationBar>
      <div className="prointr">
        <a className="tag" href={`/discover/djradio/category?id=${radio.categoryId}`}>
          {radio.category}
        </a>
        <strong className="title">
          {radio.name} 第{program.serialNum}期
        </strong>
        <span className="create-date">
          {formatDate(new Date(program.createTime), "yyyy-MM-dd")} 创建
        </span>
        <span className="listenerCount">
          播放：
          <em>{program.listenerCount}</em>次
        </span>
        <p className="description">
          介绍：
          {program.description &&
            program.description.split("\n").map((item, index) => {
              return (
                <span key={index}>
                  {item} <br />
                </span>
              );
            })}
        </p>
      </div>
    </Wrapper>
  );
});
