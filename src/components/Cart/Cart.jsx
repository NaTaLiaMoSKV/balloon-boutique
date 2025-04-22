import { useEffect, useState } from "react";
import { Header } from "components/Header/Header";
import { CartSection, CartTitle, DeleteButton, EmptyCartContainer, MobileCartItemWrapper, ProductImage, ProductNote, ProductPrice, ProductTitle, StyledCartLink, TableColumn, TableContainer, TableRow, TotalContainer, TotalWrapper } from "./Cart.styled";
import { BackButton, CounterButton, CounterDisplay, CounterWrapper } from "components/BalloonSubsection/BalloonSubsection.styled";
import { CloseButton, ModalButtonsWrapper, ModalContent, ModalInput, ModalOverlay, OpenModalButton } from "./Modal.styled";
import { useCart } from "state/CartContext";
import { calculateTotalPrice } from "utils/calculateTotalPrice";
import { formatNumber } from "utils/formatNumber";
import { truncateText } from "utils/truncateText";

import addImg from 'images/plus.png'
import editImg from 'images/edit.png'
import deleteImg from 'images/delete.png'
import closeImg from 'images/close.png'
import { useNavigate } from "react-router-dom";
import { formOrder } from "utils/formOrder";
import BalloonImageModal from "components/BalloonSubsection/BalloonImageModal";

export const Cart = () => {
    const { cart, dispatch } = useCart();
    const totalPrice = calculateTotalPrice(cart);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentInscription, setCurrentInscription] = useState('');
    const [selectedBalloonId, setSelectedBalloonId] = useState(null);
    const [counts, setCounts] = useState({});
    const navigate = useNavigate();
    const width = window.innerWidth;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const initialCounts = cart.reduce((acc, item) => {
            acc[item.balloon.id] = item.quantity || 1;
            return acc;
        }, {});
        setCounts(initialCounts);
    }, [cart]);

    const increment = (id) => {
        setCounts((prevCounts) => {
            const newQuantity = Math.min(prevCounts[id] + 1, 2000);
            handleQuantityChange(id, newQuantity);
            return { ...prevCounts, [id]: newQuantity };
        });
    };

    const decrement = (id) => {
        setCounts((prevCounts) => {
        const newQuantity = Math.max(prevCounts[id] - 1, 1);
            handleQuantityChange(id, newQuantity);
            return { ...prevCounts, [id]: newQuantity };
        });
    };

    const handleQuantityChange = (id, newQuantity) => {
        const itemToUpdate = cart.find((item) => item.balloon.id === id);
        if (itemToUpdate) {
            dispatch({
                type: "UPDATE_CART_QUANTITY",
                payload: { balloon: itemToUpdate.balloon, quantity: newQuantity },
            });
        }
    };
    
    const handleRemoveFromCart = (balloon) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: { id: balloon.id },
        });
    };

    const openInscriptionModal = (id, existingInscription = '') => {
        setSelectedBalloonId(id);
        setCurrentInscription(existingInscription);
        setModalOpen(true);
    };

    const closeInscriptionModal = () => {
        setModalOpen(false);
        setCurrentInscription('');
        setSelectedBalloonId(null);
    };

    const handleRemoveInscription = () => {
        dispatch({
            type: "REMOVE_INSCRIPTION",
            payload: { id: selectedBalloonId },
        });
        closeInscriptionModal();
    };


    const handleAddInscription = () => {
        dispatch({
            type: 'UPDATE_CART_INSCRIPTION',
            payload: { id: selectedBalloonId, inscription: currentInscription },
        });
        closeInscriptionModal();
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && currentInscription.trim() !== "") {
            handleAddInscription(); 
        }
    };

    const handleCardClick = (balloonImage) => {
        if (window.innerWidth > 768) {
        setSelectedImage(balloonImage);
        }
    };


    return (
        <>
            <Header />
            <CartTitle>Кошик</CartTitle>
            <section>
                {cart.length === 0 && (
                    <EmptyCartContainer>
                        <h2> Ваш кошик поки що порожній</h2>
                        <BackButton onClick={() => navigate("/balloons")}>
                            <span>&#x27F5;</span> Повернутися до товарів
                        </BackButton>
                    </EmptyCartContainer>
                )}
                {cart.length > 0 && (
                    <>
                        {width < 768 && cart.map((item) => ( 
                            <MobileCartItemWrapper key={item.balloon.id}>
                                <ProductImage src={item.balloon.image} alt={item.balloon.title} />
                                <div className="details-wrapper">
                                    <div>
                                         <ProductTitle>
                                            {item.balloon.title}
                                            {item.inscription && <span> ({truncateText(10, item.inscription)})</span>}
                                        </ProductTitle>
                                        {item.balloon.description && <p className="add-info"> {item.balloon.description}</p>}
                                   </div>
                                       
                                    <DeleteButton onClick={() => handleRemoveFromCart(item.balloon)}>
                                        <img src={deleteImg} alt="delete" />
                                    </DeleteButton>
                                   
                                </div>
                                {item.balloon.longDescription === "Додати індивідуальний напис - 100 грн" && (
                                    <OpenModalButton 
                                        onClick={() => openInscriptionModal(item.balloon.id, item.inscription)}
                                    >
                                        <img src={item.inscription ? editImg : addImg} alt="редагувати напис" />
                                        <span>{item.inscription ? "Змінити надпис" : "Додати надпис"}</span>
                                    </OpenModalButton>
                                )}
                                {item.pathname.match(/other|thematic/) && (
                                    <ProductNote
                                        type="text"
                                        placeholder="Додаткові побажання"
                                        value={item.note || ""}
                                        onChange={(e) =>
                                            dispatch({
                                            type: "UPDATE_CART_NOTE",
                                            payload: { id: item.balloon.id, note: e.target.value },
                                            })
                                        }
                                        />
                                )}
                                <div className="details-wrapper">
                                    <ProductPrice>
                                        {formatNumber(item.balloon.price * item.quantity)} ₴ 
                                        {item.inscription && <span> <br />+{formatNumber(item.quantity * 100)} ₴</span>}
                                        
                                    </ProductPrice>
                                     <CounterWrapper>
                                        <CounterButton onClick={() => decrement(item.balloon.id)}>-</CounterButton>
                                            <CounterDisplay>{counts[item.balloon.id]}</CounterDisplay>
                                        <CounterButton onClick={() => increment(item.balloon.id)}>+</CounterButton>
                                    </CounterWrapper>
                                </div>
                                {item.balloon.price === 0 && <p className="add-info">Менеджер повідомить вам про ціну</p>}
                            </MobileCartItemWrapper>                            
                        ))
                        }
                        
                        <CartSection>
                            <TableContainer>
                                {cart.map((item) => (
                                    <TableRow key={item.balloon.id}>
                                    <TableColumn className="photo-column">
                                        <ProductImage src={item.balloon.image} alt={item.balloon.title} onClick={() => handleCardClick(item.balloon.image)}  />
                                    </TableColumn>
                                    <TableColumn className="info-column">
                                        <div className="title-wrapper">
                                        <ProductTitle>
                                            {item.balloon.title}
                                            {item.inscription && <span> ({truncateText(22, item.inscription)})</span>}
                                                </ProductTitle>
                                                {item.balloon.description && <p>{item.balloon.description}</p>}
                                            </div>
                                            {item.balloon.longDescription === "Додати індивідуальний напис - 100 грн" && (
                                                <OpenModalButton 
                                                    onClick={() => openInscriptionModal(item.balloon.id, item.inscription)}
                                                >
                                                    <img src={item.inscription ? editImg : addImg} alt="редагувати напис" />
                                                    <span>{item.inscription ? "Змінити надпис" : "Додати надпис"}</span>
                                                </OpenModalButton>
                                            )}
                                            {item.pathname.match(/other|thematic/) && (
                                                <ProductNote
                                                    type="text"
                                                    placeholder="Додаткові побажання"
                                                    value={item.note || ""}
                                                    onChange={(e) =>
                                                        dispatch({
                                                        type: "UPDATE_CART_NOTE",
                                                        payload: { id: item.balloon.id, note: e.target.value },
                                                        })
                                                    }
                                                    />
                                            )}

                                        <div className="price-wrapper">
                                        <ProductPrice>
                                            {formatNumber(item.balloon.price * item.quantity)} ₴
                                            {item.inscription && <span> <br />+{formatNumber(item.quantity * 100)} ₴</span>}
                                        </ProductPrice>
                                        </div>
                                    </TableColumn>
                                    <TableColumn className="action-column">
                                        <div className="delete-wrapper">
                                        <DeleteButton onClick={() => handleRemoveFromCart(item.balloon)}>
                                            <img src={deleteImg} alt="Удалить" />
                                        </DeleteButton>
                                        </div>
                                        <div className="counter-wrapper">
                                        <CounterWrapper>
                                            <CounterButton onClick={() => decrement(item.balloon.id)}>-</CounterButton>
                                                <CounterDisplay>{counts[item.balloon.id]}</CounterDisplay>
                                            <CounterButton onClick={() => increment(item.balloon.id)}>+</CounterButton>
                                        </CounterWrapper>
                                        </div>
                                    </TableColumn>
                                    </TableRow>
                                ))}
                            </TableContainer>
                            {selectedImage && (
                                <BalloonImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
                            )}
                            <TotalContainer>
                                <TotalWrapper>
                                    <p>Всього: </p>
                                    <p>{formatNumber(totalPrice)} ₴ </p>
                                </TotalWrapper>
                                <StyledCartLink to="/order" onClick={() => formOrder(cart)}>
                                    Оформити замовлення
                                </StyledCartLink>
                                <p className="note">Вартість доставки розраховується при оформленні замовлення</p>
                            </TotalContainer>
                        </CartSection>   
                    </>
                )}
                {modalOpen && (
                    <ModalOverlay>
                        <ModalContent>
                            <CloseButton onClick={() => closeInscriptionModal()}>
                                <img src={closeImg} alt="закрити вікно" />
                            </CloseButton>
                            <h3>Додайте текст для шариків</h3>
                            <ModalInput 
                                type="text" 
                                // ref={inputRef}
                                value={currentInscription}
                                onChange={(e) => setCurrentInscription(e.target.value)} 
                                onKeyDown={handleKeyDown}
                                placeholder="Введіть текст..."
                                maxLength={30}
                            />

                            <ModalButtonsWrapper>
                                <OpenModalButton disabled={currentInscription.trim() === ''} onClick={() => handleRemoveInscription()}>Видалити текст</OpenModalButton>
                                <OpenModalButton disabled={currentInscription.trim() === ''} onClick={() => handleAddInscription()}>Додати</OpenModalButton>
                            </ModalButtonsWrapper>
                        </ModalContent>
                    </ModalOverlay>
                )}
            {/* </CartSection>  </> */}
           </section>
        </>
    );
};
