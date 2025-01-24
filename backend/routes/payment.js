const express = require("express");
const router = express.Router();
const generateSignature = require("../utils/signature");

// Фейковый секретный ключ
const SECRET_KEY = process.env.SECRET_KEY || "test_secret_key";

// Маршрут для обработки оплаты
router.post("/create-payment", (req, res) => {
  const { amount, currency, orderId } = req.body;

  // Данные для подписи
  const paymentData = {
    amount,
    currency,
    orderId,
    description: "Оплата замовлення",
  };

  // Генерация подписи
  const signature = generateSignature(paymentData, SECRET_KEY);

  // Ответ клиенту
  res.json({
    success: true,
    message: "Платіж оброблено",
    paymentData,
    signature,
  });
});

module.exports = router;
