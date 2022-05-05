import React, { memo } from "react";
import { Wrapper } from "./style";
import { useSelector, shallowEqual } from "react-redux";
import { getSizeImage } from "@/utils/format-utils";
import ThemeHeaderSmall from "@/components/theme-header-small";

/**
 * 电台节目 - 更多节目
 */
export default memo(function ProgramMore(props) {
  const { id } = props;
  // 获取数据
  const { djradioProgramList } = useSelector(
    (state) => ({
      djradioProgramList: state.getIn(["program", "djradioProgramList"]),
    }),
    shallowEqual
  );

  const programs = djradioProgramList.programs || [];

  return (
    <Wrapper>
      <ThemeHeaderSmall title="更多节目" href={`/djradio?id=${id}`}></ThemeHeaderSmall>
      <div className="list">
        {programs.map((item, index) => {
          return (
            <div className="item">
              <div className="image">
                <a href={`/program?id=${item.id}`}>
                  <img src={getSizeImage(item.coverUrl, 50)} alt="" />
                </a>
              </div>
              <div className="info">
                <p className="title">
                  <a className="text-nowrap" href={`/program?id=${item.id}`} title={item.name}>
                    {item.name}
                  </a>
                </p>
                <p className="serialNum">Vol {item.serialNum}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
});
