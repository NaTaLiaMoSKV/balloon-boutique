import styled from "styled-components";
import backgroundImage from "../../images/hero.jpeg";
import backgroundImageMobile from "../../images/hero-mobile.jpg";
import { NavLink } from "react-router-dom";

export const HeroSection = styled.section`
  position: relative;
  font-size: 2.5rem;
  color: #212121;
  width: 100%;
  height: 80vh;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 40%
    ),
    url(${backgroundImageMobile}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;

  @media (min-width: 768px) {
    height: 600px;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 40%
      ),
      url(${backgroundImage}) center/cover no-repeat;
  }
`;

export const ContentWrapper = styled.div`
  z-index: 2;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
  margin-top: 130px;
  font-size: 60px;
  letter-spacing: 0.05em;
  text-align: right;
  margin-right: 30px;

  color: #664242;

  @media (min-width: 768px) {
    font-size: 80px;
  }
`;

export const HeroSlogan = styled.p`
  font-style: italic;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 70px;
  color: #664242;
  text-align: right;
  margin-right: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e63939;
  }
`;

export const Link = styled(NavLink)`
  font-family: "Lora", serif;
  border: none;
  border-radius: 50px;
  padding: 20px 50px;
  font-size: 20px;
  color: #664242;
  font-weight: 500;
  letter-spacing: 0.03em;
  transition: all 0.3s ease-in-out;
  background-color: #fafafa;
  text-decoration: none;

  box-shadow: -3px -3px 3px 0px rgba(255, 255, 255, 0.8),
    3px 3px 3px 0px rgba(0, 0, 0, 0.2),
    inset -3px -3px 3px 0px rgba(255, 255, 255, 0.8),
    inset 3px 3px 3px 0px rgba(0, 0, 0, 0.2);

  -webkit-box-shadow: -3px -3px 3px 0px rgba(255, 255, 255, 0.8),
    3px 3px 3px 0px rgba(0, 0, 0, 0.2),
    inset -3px -3px 3px 0px rgba(255, 255, 255, 0.8),
    inset 3px 3px 3px 0px rgba(0, 0, 0, 0.2);

  -moz-box-shadow: -3px -3px 3px 0px rgba(255, 255, 255, 0.8),
    3px 3px 3px 0px rgba(0, 0, 0, 0.2),
    inset -3px -3px 3px 0px rgba(255, 255, 255, 0.8),
    inset 3px 3px 3px 0px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: -5px -5px 5px 0px rgba(255, 255, 255, 0.8),
      5px 5px 5px 0px rgba(0, 0, 0, 0.2),
      inset -5px -5px 5px 0px rgba(255, 255, 255, 0.8),
      inset 5px 5px 5px 0px rgba(0, 0, 0, 0.2);

    -webkit-box-shadow: -5px -5px 5px 0px rgba(255, 255, 255, 0.8),
      5px 5px 5px 0px rgba(0, 0, 0, 0.2),
      inset -5px -5px 5px 0px rgba(255, 255, 255, 0.8),
      inset 5px 5px 5px 0px rgba(0, 0, 0, 0.2);

    -moz-box-shadow: -5px -5px 5px 0px rgba(255, 255, 255, 0.8),
      5px 5px 5px 0px rgba(0, 0, 0, 0.2),
      inset -5px -5px 5px 0px rgba(255, 255, 255, 0.8),
      inset 5px 5px 5px 0px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
  }

  @media screen and (min-width: 768px) {
  }
`;
