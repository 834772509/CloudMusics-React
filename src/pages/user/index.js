import React, { memo } from "react";
import { Wrapper } from "./style";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

export default memo(function User(props) {
  return (
    <BrowserRouter>
      <Wrapper>{renderRoutes(props.route.routes)}</Wrapper>
    </BrowserRouter>
  );
});
