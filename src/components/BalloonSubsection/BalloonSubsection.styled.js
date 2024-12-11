import styled from "styled-components";

export const BalloonSubsectionWrapper = styled.section`
  position: relative;
  padding: 0px 0 60px;
  color: #5a4d45;
  margin-bottom: 10px;
  border-bottom: 1px solid #e2e2e2;

  @media screen snd (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const BackButton = styled.button`
  position: relative;
  border: none;
  padding: 10px 10px 3px;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 20px;
  color: #5a3e3e;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: padding 0.3s ease;

  span {
    position: absolute;
    left: -20px;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover,
  &:focus {
    padding-left: 30px;

    span {
      left: 0;
      opacity: 1;
    }
  }
`;

export const BaloonSubsectionTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 35px;
  line-height: 1.2;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

export const BalloonSubsectionCardWrapper = styled.div`
  display: grid;
  gap: 45px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const BalloonSubsectionCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 40px 30px;
  background-color: #fafafa;
  -webkit-box-shadow: 2px 4px 8px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 4px 8px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 4px 8px -4px rgba(0, 0, 0, 0.75);

  color: #212121;
  transition: all 0.3s ease;

  img {
    height: 350px;
    border-radius: 12px;
  }
  p {
    font-weight: 700;
    color: #212121;
    font-size: 23px;
    letter-spacing: 0.05em;
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

export const BalloonCardInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CounterWrapper = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 50px;
  overflow: hidden;
  max-width: 150px;
`;

export const CounterButton = styled.button`
  background-color: #fff;
  border: none;
  font-size: 20px;
  font-weight: 500;
  padding: 6px 10px;
  cursor: pointer;
  transition: background-color 0.2s;
`;

export const CounterDisplay = styled.div`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #fff;
  text-align: center;
`;

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ac8282;
  color: #fff;
  border: none;
  width: 35px;
  height: 35px;
  margin-left: 15px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: background-color 0.3s ease;

  &.selected {
    background-color: #eee;
    color: #ac8282;
  }

  &:hover {
    background-color: #4a2e2e;
  }

  img {
    width: 20px;
    height: 20px;
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
