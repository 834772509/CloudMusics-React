import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Wrapper } from "./style";
import ThemeHeaderSmall from "@/components/theme-header-small";
import { getRandomNumber } from "@/utils/math-utils";
import { getSizeImage } from "@/utils/format-utils";

/**
 * 喜欢这个歌单的人
 * 注意：随机展示8条数据
 * 注意：随机展示8条数据
 * 注意：随机展示8条数据
 */
export default memo(function PlayListLike() {
  // 获取数据
  const { playListSubscribers } = useSelector(
    (state) => ({
      playListSubscribers: state.getIn(["playlist", "playListSubscribers"]),
    }),
    shallowEqual
  );

  const subscribers = playListSubscribers.subscribers || [];

  // 取随机8条数据（使用Set集合）
  const subscribersSet = new Set();
  if (subscribers.length !== 0) {
    while (subscribersSet.size <= 7) {
      const randNum = getRandomNumber(subscribers.length);
      subscribersSet.add(subscribers[randNum]);
    }
  }
  const arrSubscribers = Array.from(subscribersSet);

  return (
    <Wrapper>
      <ThemeHeaderSmall title="喜欢这个歌单的人"></ThemeHeaderSmall>
      <div className="like-list">
        {arrSubscribers.map((item, index) => {
          return (
            <div className="like-item" key={index}>
              <a href={`/user/home?id=${item.userId}`}>
                <img src={getSizeImage(item.avatarUrl, 40)} alt={item.nickname} />
              </a>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
});
