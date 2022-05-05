import React, { memo } from "react";
import { DiscoverWrapper, TopMentu } from "./style";
import { dicoverMenu } from "@/common/local-data";
import { BrowserRouter, NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

/**
 * 发现页面
 */
export default memo(function Discover(props) {
  return (
    <BrowserRouter>
      <DiscoverWrapper>
        <div className="top">
          <TopMentu className="wrap-v2">
            {dicoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              );
            })}
          </TopMentu>
        </div>
        {renderRoutes(props.route.routes)}
      </DiscoverWrapper>
    </BrowserRouter>
  );
});
