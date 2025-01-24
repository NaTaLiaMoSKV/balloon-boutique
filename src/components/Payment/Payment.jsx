import { createPayment } from "api";
import { useEffect, useState } from "react";

export const Payment = () => {
    const [orderId, setOrderId] = useState("12345");
    const [amount, setAmount] = useState("100");
    const [currency, setCurrency] = useState("UAH");
    const [response, setResponse] = useState(null);

    const handlePayment = async () => {
        const paymentDetails = { orderId, amount, currency };
        const result = await createPayment(paymentDetails);
        setResponse(result);
    };

    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    }, []);
    
    return (
        <section style={{marginBottom: '50px'}}>
            <h1>Оплата замовлення</h1>
            <button onClick={handlePayment}>Оплатити</button>

            {response && (
                <div>
                <h3>Відповідь сервера:</h3>
                <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </section>
    )
}