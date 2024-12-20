const API_URL = "http://localhost:5001/api/payment";

export const createPayment = async (paymentDetails) => {
  try {
    const response = await fetch(`${API_URL}/create-payment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paymentDetails),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Помилка при обробці платежу:", error);
  }
};
