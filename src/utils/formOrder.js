import { calculateTotalPrice } from "./calculateTotalPrice";

// MESSAGE FOR TELEGRAM BOT

export const formOrder = (cart) => {
  if (!cart || !cart.length) return "<b>Кошик порожній</b>";

  let message = "<b>📦 Замовлення:</b>\n\n";

  cart.forEach((item, index) => {
    const { balloon, quantity, inscription, note } = item;

    const title = balloon?.title || "Назва товару не вказана";
    const pricePerUnit = balloon?.price
      ? `${balloon.price.toFixed(2)} ₴`
      : "Ціна не вказана";

    const inscriptionCost = inscription ? 100 : 0;
    const totalPrice = (balloon?.price || 0) * quantity + inscriptionCost;

    message += `<b>${index + 1}. 🛒 Товар:</b> ${title}\n`;
    message += `📦 <i>Кількість:</i> ${quantity}\n`;
    message += `💰 <i>Ціна за одиницю:</i> ${pricePerUnit}\n`;

    if (inscription) {
      message += `🖋️ <i>Напис:</i> "${inscription}" (+100 ₴)\n`;
    }
    if (note) {
      message += `📝 <i>Додаткові побажання:</i> "${note}"\n`;
    }

    message += `💵 <i>Загальна вартість:</i> ${totalPrice} ₴\n\n`;
  });

  const totalSum = calculateTotalPrice(cart);

  message += `<b>💳 Загальна сума до оплати:</b> ${totalSum} ₴`;
  return message;
};
