import styled from "styled-components";
import { NavLink } from "react-router-dom";
import balloonImg from "../../images/balloon.png";

export const Container = styled.div`
  background-color: #5a3e3e;
  padding: 60px 30px;
  margin-left: auto;
  margin-right: auto;
  color: #fafafa;

  h2 {
    font-size: 50px;
    line-height: 1.2;
    margin-bottom: 35px;
    text-align: center;
  }
`;

export const CollectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .swiper-container {
    flex: 1;
    display: none;
    border-radius: 20px;

    @media (min-width: 768px) {
      display: block;
      width: 50%;
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }

  img {
    width: 100%;
    height: 400px;
    border-radius: 20px;
    object-position: top;
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }

  @media screen and (min-width: 1200px) {
    width: 1120px;
    gap: 70px;

    .swiper-container {
      max-width: 60%;
    }

    img {
      height: 550px;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 15px;
  flex-direction: column;

  @media screen and (min-width: 1200px) {
    gap: 25px;
  }
`;

export const Link = styled(NavLink)`
  color: #fafafa;
  font-size: 20px;
  text-decoration: none;

  &::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    background-image: url(${balloonImg});
    background-size: cover;
    background-position: center;
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  &:hover,
  &:focus {
    color: #fff;
    text-shadow: 0px 1px 3px #fff;

    &::before {
      transform: scale(1.05);
      filter: brightness(1.2);
    }
  }

  @media screen and (min-width: 1200px) {
    font-size: 27px;

    &::before {
      width: 25px;
      height: 25px;
      margin-right: 15px;
    }
  }
`;
