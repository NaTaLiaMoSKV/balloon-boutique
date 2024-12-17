export const calculateTotalPrice = (cart) => {
  return cart.reduce((total, item) => {
    const { price } = item.balloon;
    const inscriptionCost = item.inscription ? 100 * item.quantity : 0;
    return total + price * item.quantity + inscriptionCost;
  }, 0);
};
