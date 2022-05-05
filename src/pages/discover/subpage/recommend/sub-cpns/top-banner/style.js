import styled from "styled-components";

export const BannerWrapper = styled.div`
  background: url(${(props) => props.bgImage + "?imageView&blur=40x20"}) center
    center/6000px;

  .banner {
    position: relative;
    display: flex;

    height: 285px;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;

  .image {
    width: 730px;
    height: 285px;
  }
`;

export const BannerRight = styled.div`
  height: 285px;

  .download {
    display: inline-block;
    width: 254px;
    height: 285px;
    background: url(${require("@/assets/img/download.png")});

    .btn-down {
      display: inline-block;
      width: 215px;
      height: 56px;
      margin: 185px 0 0 19px;
      background-position: 0 9999px;

      &:hover {
        background: url(${require("@/assets/img/download.png")});
        background-position: 0 -289px;
      }
    }

    p {
      text-align: center;
      color: #8d8d8d;
    }
  }
`;

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;
