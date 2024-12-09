import styled from "styled-components";

export const ReviewsWrapper = styled.section`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;

  h2 {
    color: #5a4d45;
    font-size: 35px;
    line-height: 1.2;
    margin-bottom: 35px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    padding: 40px 0 60px;

    h2 {
      font-size: 50px;
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 60px 0 80px;
  }
`;

export const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  img {
    border: 3px solid #412e2e;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  h4 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }

  .rating {
    margin: 10px 0;
    font-size: 16px;
    color: #c39898;
  }

  p {
    display: block;
    height: 135px;
    font-size: 13px;
    color: #555;
    height: ;
  }

  @media screen and (min-width: 350px) {
    p {
      height: 120px;
    }
  }

  @media screen and (min-width: 380px) {
    p {
      height: 95px;
    }
  }

  @media screen and (min-width: 480px) {
    p {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 768px) {
    p {
      height: 120px;
    }
  }
`;

export const NavigationButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  bottom: 50%;
  transform: translateY(50%);
  z-index: 10;
  background-color: #fafafa;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #e1e1e1;
  }

  &.swiper-button-prev {
    left: 10px;
  }

  &.swiper-button-prev::after {
    color: #c39898;
    font-weight: 900;
    font-size: 25px;
  }

  &.swiper-button-next {
    right: 10px;
  }

  &.swiper-button-next::after {
    color: #c39898;
    font-weight: 900;
    font-size: 25px;
  }
`;
