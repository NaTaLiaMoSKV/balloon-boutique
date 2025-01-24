import { DetailsButton } from "components/BalloonSubsection/BalloonSubsection.styled";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  flex-direction: column;
  position: relative;
  gap: 15px;
  padding: 30px 15px;
  border-bottom: 2px solid #dedede;

  .details-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }

  p.add-info {
    color: #777;
    margin-top: 2px;
  }
`;

export const CartTitle = styled.h1`
  margin-top: 110px;
  font-size: 35px;
  text-align: center;
  color: #5a4d45;
  line-height: 1.2;
  margin-bottom: 25px;

  @media screen and (min-width: 768px) {
    margin-top: 130px;
    font-size: 45px;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 40px;
  }
`;

export const CartSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 30px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    gap: 40px;
    border: 1px solid #dedede;
    border-radius: 30px;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 50px;
    max-height: 63vh;
    overflow: scroll;
  }
`;

export const TableContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border-bottom: 1px solid #dedede;
  padding-bottom: 30px;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const TableColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 0 10px;
  text-align: left;

  &.photo-column {
    flex: 0 0 30%;
    justify-content: center;
    align-items: center;
  }

  &.info-column {
    flex: 1;
    gap: 10px;
  }

  &.action-column {
    flex: 0 0 10%;
    align-items: flex-end;
  }
`;

export const ProductImage = styled.img`
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    max-height: 200px;
    object-fit: cover;
  }
`;

export const ProductTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 19px;
  }
`;

export const ProductNote = styled.input`
  padding: 5px 10px;
  outline: none;
  border: none;
  border-bottom: 1px solid #dedede;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #555;
  margin: 0;

  span {
    font-size: 12px;
    color: #555;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const DeleteButton = styled(DetailsButton)`
  img {
    width: 20px;
    height: 20px;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .note {
    text-align: center;
  }

  @media screen and (min-width: 1200px) {
    position: sticky;
    top: 0;
    padding: 20px;
    background-color: #fff;
  }
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;

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
