import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useCart } from "state/CartContext";
import cartImg from "images/basket.png";

const CartButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 15px;
  font-size: 20px;
  border-radius: 10px 0 0 10px;

  img {
    margin-left: 8px;
    width: 30px;
    height: 30px;
  }

  span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #212121;
    background-color: #dedede;
    border: 1px solid #fff;
    font-weight: 700;
    padding: 5px;
    border-radius: 50%;
    font-size: 14px;
    width: 15px;
    height: 15px;
    top: 2px;
    left: 5px;
  }

  &:hover {
    span {
      background-color: #888;
      color: #fff;
    }
  }

  @media screen and (min-width: 768px) {
    bottom: 40px;
  }
`;

const StyledLink = styled(NavLink)`
  position: relative;
`;

export const CartButton = () => {
  const { cart } = useCart();

  const getTotalQuantity = (cart) => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const totalQuantity = getTotalQuantity(cart);

  return (
    <>
      <StyledLink to="/cart">
        <CartButtonStyled>
          {totalQuantity > 0 && <span>{totalQuantity}</span>}
          <img src={cartImg} alt="Кошик" />
        </CartButtonStyled>
      </StyledLink>
    </>
  );
};
