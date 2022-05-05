/* eslint-disable no-unused-vars */
import React, { memo } from "react";
import { Pagination } from "antd";

/** 
 * 分页组件
 * @param {Number} current 当前页数
 * @param {Number} pageSize 每页条数
 * @param {Number} total 数据总数
 * @param {function(page, pageSize)} onChange 页码改变的回调，参数是改变后的页码及每页条数

 */
export default memo(function PageInation(props) {
  const { current, pageSize, total, onChange } = props;

  // 自定义页码结构
  function getItemRender(current, type, originalElement) {
    if (type === "prev") {
      return (
        <button className="control prev" title="上一页">
          &lt;上一页
        </button>
      );
    }
    if (type === "next") {
      return (
        <button className="control next" title="下一页">
          下一页 &gt;
        </button>
      );
    }
    return originalElement;
  }

  return (
    <Pagination
      // itemRender={getItemRender}
      showSizeChanger={false}
      current={current}
      defaultCurrent={1}
      pageSize={pageSize}
      total={total}
      onChange={onChange}
    />
  );
});
