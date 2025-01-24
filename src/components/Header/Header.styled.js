import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  background-color: #fff;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  ${(props) =>
    props.isHidden &&
    css`
      transform: translateY(-100%);
    `}

  ${(props) =>
    props.hasShadow &&
    css`
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `}

  @media (min-width: 768px) {
    transform: translateY(0) !important;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #212121;
  backgeround-color: #000;
  font-size: 18px;
  padding: 5px;

  &:hover {
    color: #5a3e3e;
    text-decoration: underline;
    text-underline-offset: 4px;
    color: #5a3e3e;
  }

  &.active {
    text-decoration: underline;
    text-underline-offset: 4px;
    color: #5a3e3e;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 60vw;
  height: 100vh;
  padding: 30px;
  background-color: #fafafa;
  z-index: 100;
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LogoImage = styled.img`
  max-width: 180px;
  max-height: 90px;
  cursor: pointer;

  @media screen and (min-width: 400px) {
    width: 240px;
    height: 70px;
  }

  @media screen and (min-width: 768px) {
    width: 240px;
    height: 90px;
  }
`;

export const CartImage = styled.img`
  width: 25px;
  height: 25px;
  padding: 12px;
  border-radius: 50%;

  &:hover {
    background-color: #dedede;
  }
`;
