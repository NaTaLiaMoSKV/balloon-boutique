const crypto = require("crypto");

// Функция для создания подписи
const generateSignature = (data, secretKey) => {
  const stringifiedData = JSON.stringify(data);
  return crypto
    .createHmac("sha256", secretKey)
    .update(stringifiedData)
    .digest("hex");
};

module.exports = generateSignature;
