import { useCart } from 'state/CartContext';
import cartImg from 'images/cart.png';
import styled from 'styled-components';

const CartButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5a3e3e;
  color: #fff;
  position: fixed;
  border: none;
  bottom: 10px;
  right: -2px;
  padding: 15px;
  padding-right: 17px;
  font-size: 20px;
  border-radius: 10px 0 0 10px;
  z-index: 100;

  img {
    margin-left: 8px;
    width: 30px;
    height: 30px;
  }

  &:hover {
    background-color: #c09e9e;

    span {
        background-color: #c09e9e;
        border: 1px solid #ac8282;
    }
  }

  span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #ac8282;
    border: 1px solid #674d4d;
    font-weight: 700;
    padding: 5px;
    border-radius: 50%;
    font-size: 17px;
    width: 20px;
    height: 20px;
    top: -15px;
    left: -15px;
  }

  @media screen and (min-width: 768px) {
    bottom: 40px;
  }
`;

export const CartButton = () => {
    const { cart } = useCart();

    const getTotalQuantity = (cart) => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const totalQuantity = getTotalQuantity(cart);
    
    return (
        <>
            <CartButtonStyled>
                {totalQuantity > 0 && <span>{totalQuantity}</span>}
                <img src={cartImg} alt="Кошик" />
            </CartButtonStyled>
           
        </>
    )

}