import styled from "styled-components";

export const CartButton = styled.button`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5a3e3e;
  position: fixed;
  border: none;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  z-index: 100;

  img {
    width: 30px;
    height: 30px;
  }

  &:hover {
    background-color: #5a3e3e99;
  }
`;
