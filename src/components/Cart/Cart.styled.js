import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CartSection = styled.section`
  margin-top: 130px;
`;

export const EmptyCartContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  h2 {
    text-align: center;
    font-size: 30px;
  }
`;

export const MobileCartItemWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: top;
  gap: 15px;
  padding: 30px 15px;
  border-bottom: 1px solid #dedede;
  border-top: 1px solid #dedede;

  .details-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const CartTitle = styled.h1`
  font-size: 35px;
  text-align: center;
  color: #5a4d45;
  line-height: 1.2;
  margin-bottom: 25px;

  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  display: none;

  @media screen and (min-width: 768px) {
    display: table;
  }
`;

export const TableRow = styled.div`
  display: table-row;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableColumn = styled.div`
  display: table-cell;
  padding: 10px 5px;
  vertical-align: middle;
  text-align: center;

  @media screen and (min-width: 1200px) {
    padding: 30px 10px;
  }
`;

export const ProductImage = styled.img`
  width: 35%;
  object-fit: cover;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media screen and (min-width: 1200px) {
    width: 240px;
    height: 240px;
  }
`;

export const ProductTitle = styled.p`
  font-size: 14px;
  margin: 0;
  font-weight: 500;
  color: #333;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ProductQuantity = styled.p`
  font-size: 14px;
  margin: 0;
  color: #666;
`;

export const ProductPrice = styled.p`
  font-size: 14px;
  margin: 0;
  color: #000;
  font-weight: bold;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    white-space: nowrap;
  }
`;

export const TotalContainer = styled.div`
  border-top: 1px solid black;
  padding: 30px 10px 50px;
  display: flex;
  flex-direction: column;

  .note {
    text-align: center;
    font-size: 13px;
    color: gray;
  }
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;

export const StyledCartLink = styled(NavLink)`
  font-family: "Lora", serif;
  border: none;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  color: #212121;
  font-weight: 500;
  letter-spacing: 0.03em;
  transition: all 0.3s ease-in-out;
  background-color: #fafafa;
  text-decoration: none;
  margin-bottom: 15px;

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

  &:hover,
  &:focus {
    text-decoration: none;
    color: #212121;
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
    max-width: 250px;
    margin-left: auto;
    padding: 15px 20px;
    font-size: 17px;
  }
`;
