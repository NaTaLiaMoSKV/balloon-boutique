import styled from "styled-components";

export const BalloonSectionWrapper = styled.section`
  padding: 40px 0 60px;
  color: #5a4d45;
  margin-bottom: 10px;
  border-bottom: 1px solid #e2e2e2;

  @media screen snd (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const BaloonSectionTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 35px;
  line-height: 1.2;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

export const BalloonSectionCardWrapper = styled.div`
  display: grid;
  gap: 45px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const BalloonSectionCard = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 15px;
  padding: 40px 30px;
  -webkit-box-shadow: 2px 4px 8px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 4px 8px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 4px 8px -4px rgba(0, 0, 0, 0.75);
  transition: all 0.3s ease;

  img {
    height: 350px;
    border-radius: 8px;
  }

  h3 {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover,
  &:focus {
    transform: scale(1.08);
  }

  @media screen and (min-width: 768px) {
    img {
      height: 300px;
    }
  }
`;

export const BalloonSectionNavigationButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  bottom: 50%;
  z-index: 100000;
  background-color: #925d5d;
  border: 1px solid transparent;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #925d5d66;
    border: 1px solid #925d5d;
  }

  &.swiper-button-prev {
    left: 0px;
  }

  &.swiper-button-prev::after {
    color: #fff;
    font-weight: 900;
    font-size: 25px;
  }

  &.swiper-button-next {
    right: 0px;
  }

  &.swiper-button-next::after {
    color: #fff;
    font-weight: 900;
    font-size: 25px;
  }

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;

    &.swiper-button-prev {
      left: 40px;
    }
    &.swiper-button-next {
      right: 40px;
    }
  }
`;
