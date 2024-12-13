import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BackButton, BalloonSubsectionCard, BalloonSubsectionCardWrapper, BalloonSubsectionWrapper, BaloonSubsectionTitle, CounterWrapper, CounterButton, CounterDisplay, AddToCartButton, BalloonCardInfoWrapper, FilterButton, FilterWrapper, DetailsButton, BalloonTitleWrapper, StyledTooltip } from "./BalloonSubsection.styled";
import { Header } from "components/Header/Header";
import { useCart } from "state/CartContext";
import { CartButton } from "components/CartButton/CartButton";
import { Tooltip } from 'react-tooltip';

import data from 'data/balloons.json';
import { ukrTitles } from "data/ukrTitle";

import cartAddImg from 'images/cart-add.png';
import menuImg from 'images/menu.png';

export const BalloonSubsection = () => {
  const { section, title } = useParams();
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const dataArray = data[section]?.[title];
  const isFlatArray = Array.isArray(dataArray) && dataArray.every(item => !Array.isArray(item));

  const allBalloons = isFlatArray
    ? dataArray
    : Object.values(dataArray || {}).flat();

  const categories = isFlatArray ? [] : Object.keys(dataArray || {});

  const [activeFilter, setActiveFilter] = useState("all");
  const [counts, setCounts] = useState(
    allBalloons.reduce((acc, balloon) => {
      acc[balloon.id] = 1;
      return acc;
    }, {})
  );

  const filteredBalloons = activeFilter === "all"
    ? allBalloons
    : dataArray[activeFilter] || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    dispatch({
      type: "ADD_TO_CART",
      payload: { balloon, quantity: counts[balloon.id] },
    });
  };

  return (
    <>
      <Header />
      <BalloonSubsectionWrapper>
        <BackButton onClick={goBack}>
          <span>&#x27F5;</span> Назад
        </BackButton>
        <BaloonSubsectionTitle><span>&#9135;</span>{ukrTitles[title] || "Невідома секція"}<span>&#9135;</span></BaloonSubsectionTitle>

        {!isFlatArray && (
          <FilterWrapper>
            <FilterButton 
              active={activeFilter === "all"}
              onClick={() => setActiveFilter("all")}
            >
              Усі
            </FilterButton>
            {categories.map((category) => (
              <FilterButton
                key={category}
                active={activeFilter === category}
                onClick={() => setActiveFilter(category)}
              >
                {ukrTitles[category] || category}
              </FilterButton>
            ))}
          </FilterWrapper>
        )}

        <BalloonSubsectionCardWrapper>
          {filteredBalloons.map((balloon) => (
            <BalloonSubsectionCard key={balloon.id}>
              <img src={balloon.image} alt={balloon.title} />
              <div>
                <BalloonTitleWrapper>
                  <h5>{balloon.title}</h5>
                  {balloon.longDescription && (
                      <>
                        <DetailsButton 
                          data-tooltip-id="details-tooltip" 
                          data-tooltip-content={balloon.longDescription}
                        >
                          <img src={menuImg} alt="details" />
                        </DetailsButton>
                        <StyledTooltip id="details-tooltip" place="top" effect="solid" />
                      </>
                    )}
                </BalloonTitleWrapper>
                {balloon.description && <p>{balloon.description}</p>}
              </div>
              <BalloonCardInfoWrapper>
                <h6 className={balloon.price === 0 ? "transparent" : "" }>{balloon.price}<span>₴</span></h6>
                <CounterWrapper>
                  <CounterButton onClick={() => decrement(balloon.id)}>-</CounterButton>
                  <CounterDisplay>{counts[balloon.id]}</CounterDisplay>
                  <CounterButton onClick={() => increment(balloon.id)}>+</CounterButton>
                </CounterWrapper>
                <AddToCartButton
                  onClick={() => handleAddToCart(balloon)}
                  className={
                    cart.find(
                      (item) => item.balloon.id === balloon.id && item.quantity === counts[balloon.id]
                    )
                      ? "selected"
                      : ""
                  }
                >
                  {cart.find(
                    (item) => item.balloon.id === balloon.id && item.quantity === counts[balloon.id]
                  ) ? ('\u2714') : (<img src={cartAddImg} alt="\uff0b" />)}
                </AddToCartButton>
              </BalloonCardInfoWrapper>
            </BalloonSubsectionCard>
          ))}
        </BalloonSubsectionCardWrapper>
      </BalloonSubsectionWrapper>

      <CartButton />
    </>
  );
};
