import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  background-color: #dedede;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #212121;
  font-size: 18px;
  padding: 5px;

  &:hover {
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
  width: 240px;
  height: 90px;
`;

export const BasketImage = styled.img`
  width: 20px;
  height: 20px;
  background-color: #5a3e3e66;
  padding: 12px;
  border-radius: 50%;
`;
