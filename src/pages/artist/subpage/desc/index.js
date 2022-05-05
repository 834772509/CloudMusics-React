import { getArtistDesc } from "@/services/arist";
import { getQueryParam } from "@/utils/format-utils";
import React, { memo, useState } from "react";
import { useEffect } from "react";
import { Wrapper } from "./style";

/**
 * 艺人介绍
 */
export default memo(function ArtistDesc(props) {
  const param = getQueryParam(props.location.search);
  const id = param.id;

  // 请求数据
  const [introduction, setIntroduction] = useState([]);
  const [briefDesc, setBriefDesc] = useState("");

  useEffect(() => {
    getArtistDesc(id).then((res) => {
      setIntroduction(res.data.introduction);
      setBriefDesc(res.data.briefDesc);
    });
  }, [id]);
  return (
    <Wrapper>
      <h2 className="title">
        <i className="icon-red"></i>
        简介
      </h2>
      <p className="brief-desc">{briefDesc}</p>
      <div className="introduction-list">
        {introduction.map((item, index) => {
          return (
            <>
              <h2>{item.ti}</h2>
              {item.txt.split("\n").map((item) => {
                return (
                  <p>
                    {item} <br />
                  </p>
                );
              })}
            </>
          );
        })}
      </div>
    </Wrapper>
  );
});
