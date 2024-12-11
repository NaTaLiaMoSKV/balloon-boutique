import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from 'data/balloons.json';
import { BackButton, BalloonSubsectionCard, BalloonSubsectionCardWrapper, BalloonSubsectionWrapper, BaloonSubsectionTitle, CounterWrapper, CounterButton, CounterDisplay, AddToCartButton, BalloonCardInfoWrapper } from "./BalloonSubsection.styled";
import { Header } from "components/Header/Header";

import cartImg from 'images/cart.png';
import { CartButton } from "styles/CartButton.styled";

export const BalloonSubsection = () => {
    const { section, title } = useParams();
    const navigate = useNavigate();

    const { balloons } = data[section]?.[title];
    let ukrTitle;

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    switch (title) {
        case "birthday":
            ukrTitle = 'На День народження';
            break;
        case "discharge":
            ukrTitle = 'На виписку';
            break;
        case "new-year":
            ukrTitle = 'На Новий рік';
            break;
        case "valentine":
            ukrTitle = 'На День закоханих та 8 березня';
            break;
        case "gender-party":
            ukrTitle = 'На гендер-паті';
            break;
        default:
            break;
    }

    const [counts, setCounts] = useState(
        balloons.reduce((acc, balloon) => {
            acc[balloon.id] = 1;
            return acc;
        }, {})
    );

    const [cart, setCart] = useState([]);

    const goBack = () => {
        navigate(-1);
        if (window.history.state === null) {
            navigate("/"); 
        }
    };

    const increment = (id) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: Math.min(prevCounts[id] + 1, 2000),
        }));
    };

    const decrement = (id) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: Math.max(prevCounts[id] - 1, 1),
        }));
    };

     const handleAddToCart = (balloon) => {
         const newCart = [...cart];
         console.log(newCart);
        const existingProductIndex = newCart.findIndex(item => item.balloon.id === balloon.id);

        if (existingProductIndex > -1) {
            newCart[existingProductIndex].quantity = counts[balloon.id];
        } else {
            newCart.push({ balloon: { ...balloon }, quantity: counts[balloon.id] });

            // newCart.push({ ...balloon, quantity: counts[balloon.id] });
        }

        setCart(newCart);
        //  console.log(newCart); 
         
     };
    
    // const handleAddToCart = () => {
    //     const cartItems = getCartItems();
    //     console.log(cartItems); 
    // };

    
    // const getCartItems = () => {
    //     console.log(cart);
    //     return cart.map((item) => ({
    //         balloon: item.balloon,  
    //         quantity: item.quantity 
    //     }));
    // };

    

    return (
        <>
            <Header />
            <BalloonSubsectionWrapper>
                <BackButton onClick={goBack}><span>&#x27F5;</span> Назад</BackButton>
                <BaloonSubsectionTitle>{ukrTitle}</BaloonSubsectionTitle>
                <BalloonSubsectionCardWrapper>
                    {balloons.map((balloon) => (
                        <BalloonSubsectionCard key={balloon.id}>
                            <img src={balloon.image} alt={balloon.title} />
                            <h5>{balloon.title}</h5>
                            <BalloonCardInfoWrapper>
                                <p>{balloon.price} ₴</p>
                                <CounterWrapper>
                                    <CounterButton onClick={() => decrement(balloon.id)}>-</CounterButton>
                                    <CounterDisplay>{counts[balloon.id]}</CounterDisplay>
                                    <CounterButton onClick={() => increment(balloon.id)}>+</CounterButton>
                                </CounterWrapper>
                                <AddToCartButton 
                                    onClick={() => handleAddToCart(balloon)} className={cart.find(item => (item.balloon.id === balloon.id) && (item.quantity === counts[balloon.id])) ? 'selected' : ''}>
                                    {cart.find(item => (item.balloon.id === balloon.id) && (item.quantity === counts[balloon.id])) ? '\u2714' : 
                                    <img src={cartImg} alt='\uff0b'/>}
                                </AddToCartButton>
                            </BalloonCardInfoWrapper>
                        </BalloonSubsectionCard>
                    ))}
                </BalloonSubsectionCardWrapper>
            </BalloonSubsectionWrapper>
            <CartButton><img src={cartImg} alt="cart" /></CartButton>
        </>
    );
};
