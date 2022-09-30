import styled from "styled-components";

export const SliderElem = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

export const SliderElemBottom = styled.div`
  width: 85%;
  margin: 20px auto 0;
  @media screen and (max-width: 870px) {
    width: 80%;
  }
`;

export const FeatureSection = styled.section`
  .offer-top-margin {
    width: 85%;
    margin: 30px auto 0;
  }
  h2 {
    width: 85%;
    color: rgb(68, 68, 68);
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    padding: 40px 0 8px;
    margin: 5px auto 15px;
    border-bottom: 1px solid #eaeaea;
  }
  .wrapperer {
    width: 85%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 870px) {
      width: 90%;
    }

    > div {
      width: 273px;
      border: 1px solid #e1e1e1;
      margin-bottom: 10px;
      @media screen and (max-width: 870px) {
        width: 48%;
      }

      > img {
        width: 100%;
      }
    }
  }

  .staples {
    > div {
      width: 15%;
    }

    @media screen and (max-width: 870px) {
      > div {
        width: 48%;
      }
    }
  }

  .wrapperer.fruits-veg {
    > div {
      width: 48%;
    }
    > div:nth-child(2) {
      border: none;
    }

    > .small-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      > div {
        width: 48%;
        border: 1px solid #e1e1e1;
        margin-bottom: 5px;
        > img {
          width: 100%;
        }
      }
    }

    @media screen and (max-width: 870px) {
      > div {
        width: 100%;
      }
    }
  }

  #carouselExampleControls,
  #carouselExample2Controls {
    width: 85%;
    margin: 50px auto 0;
    border: 1px solid #e1e1e1;
    @media screen and (max-width: 870px) {
      margin: 50px 30px 0;
    }

    a.carousel-control-prev,
    a.carousel-control-next {
      width: 20px;
      height: 20px;
      top: 45%;
      color: #e1e1e1;
      padding: 15px 10px;
      background-color: #777;
      border: 1px solid #dedede;
      opacity: 0.5;

      :hover {
        opacity: 0.7;
      }
    }

    a.carousel-control-prev {
      left: -15px;
    }
    a.carousel-control-next {
      right: -15px;
    }
    .prev-icon-car {
      border: solid transparent;
    }
  }

  #carouselExample2Controls.featured-slide {
    margin: 0 auto;
    @media screen and (max-width: 870px) {
      margin: 0 30px;
    }
  }

  ul.best-sellers {
    width: 85%;
    min-height: 470px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: start;
    // overflow-x: scroll;
    overflow-x: hidden;
    overflow-y: hidden;

    @media screen and (max-width: 870px) {
      min-height: 320px;

      li.best-seller-product {
        min-width: 150px;
        max-width: 150px;
        width: 150px;
        background-color: orange;
      }
    }

    li.best-seller-product {
      min-width: 220px;
      width: 220px;
      max-height: 450px;
      margin: 0 4.5px;
      border: 1px solid #f2f2f2;
      background: #fff;

      @media screen and (max-width: 870px) {
        min-width: 198px;
        max-width: 198px;
        width: 198px;
      }
    }

    .product-display {
      height: 100%;

      .name {
        min-height: 30px !important;
      }

      .price-details {
        min-height: 90px;
      }
    }
  }

  .store-info-box {
    width: 85%;
    margin: 30px auto 0;
    padding: 0 15px;
    color: #333;
    border: 1px solid #dfdada;

    h3 {
      margin-top: 20px;
      font-size: 30px;
    }
    h4 {
      font-size: 24px;
    }
    p {
      color: #6b6868;
      font-size: 13px;
      line-height: 1.4;
    }
    b {
      color: #50c71f;
    }
    ul {
      li {
        margin-left: 40px;
        list-style-type: disc;
        font-size: 13px;
        line-height: 1.4;
      }
    }
    button {
      margin-bottom: 10px;
      color: #6b6868;
      border: 1px solid rgb(0, 0, 0, 0.3);
      border-radius: 5px;
      font-size: 13px;
      padding: 5px 8px;
      outline: none;
    }

    .read-more {
      display: none;
      transition: all 1s ease;
    }
  }
`;


export const Error = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const SliderDown = styled.div`
  width: 8px;
  height: 8px;
  position: relative;
  top: ${(props) => props.top};
  margin-left: 8px;
  border: solid ${(props) => props.color};
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
  transition: all 0.2s ease-out;
`



