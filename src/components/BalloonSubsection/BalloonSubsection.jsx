import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import {
  BackButton,
  BalloonSubsectionCard,
  BalloonSubsectionCardWrapper,
  BalloonSubsectionWrapper,
  BaloonSubsectionTitle,
  CounterWrapper,
  CounterButton,
  CounterDisplay,
  AddToCartButton,
  BalloonCardInfoWrapper,
  FilterButton,
  FilterWrapper,
  DetailsButton,
  BalloonTitleWrapper,
  StyledTooltip,
} from "./BalloonSubsection.styled";
import { Header } from "components/Header/Header";
import { useCart } from "state/CartContext";

import data from "data/balloons.json";
import { ukrTitles } from "data/ukrTitle";

import cartAddImg from "images/cart-add.png";
import menuImg from "images/menu.png";
import { formatNumber } from "utils/formatNumber";
import BalloonImageModal from "./BalloonImageModal";

export const BalloonSubsection = () => {
  const { section, title } = useParams();
  const { cart, dispatch } = useCart();
  const [selectedImage, setSelectedImage] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const dataArray = data[section]?.[title];
  const isFlatArray =
    Array.isArray(dataArray) && dataArray.every((item) => !Array.isArray(item));

  const allBalloons = useMemo(
    () =>
      isFlatArray ? dataArray || [] : Object.values(dataArray || {}).flat(),
    [dataArray, isFlatArray]
  );

  const categories = useMemo(
    () => (isFlatArray ? [] : Object.keys(dataArray || {})),
    [dataArray, isFlatArray]
  );

  const [activeFilter, setActiveFilter] = useState("all");
  const [counts, setCounts] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setCounts((prevCounts) => {
      const newCounts = {};
      allBalloons.forEach((balloon) => {
        const cartItem = cart.find((item) => item.balloon.id === balloon.id);
        newCounts[balloon.id] = cartItem
          ? cartItem.quantity
          : prevCounts[balloon.id] || 1;
      });
      return newCounts;
    });
  }, [cart, allBalloons]);

  const filteredBalloons = useMemo(
    () =>
      activeFilter === "all" ? allBalloons : dataArray?.[activeFilter] || [],
    [activeFilter, allBalloons, dataArray]
  );

  const goBack = () => {
    navigate("/balloons");
    if (window.history.state === null) {
      navigate("/");
    }
  };

  const increment = (id) => {
    setCounts((prev) => ({ ...prev, [id]: Math.min(prev[id] + 1, 2000) }));
  };

  const decrement = (id) => {
    setCounts((prev) => ({ ...prev, [id]: Math.max(prev[id] - 1, 1) }));
  };

  const handleAddToCart = (balloon) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { balloon, quantity: counts[balloon.id], pathname },
    });
  };

  const handleCardClick = (balloonImage) => {
    if (window.innerWidth > 768) {
      setSelectedImage(balloonImage);
    }
  };

  return (
    <>
      <Header />
      <BalloonSubsectionWrapper>
        <BackButton onClick={goBack}>
          <span>&#x27F5;</span> Назад
        </BackButton>
        <BaloonSubsectionTitle>
          <span>&#9135;</span>
          {ukrTitles[title] || "Невідома секція"}
          <span>&#9135;</span>
        </BaloonSubsectionTitle>

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
            <BalloonSubsectionCard key={balloon.id} id={balloon.id}>
              <img
                src={balloon.image}
                alt={balloon.title}
                onClick={() => handleCardClick(balloon.image)}
              />
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
                      <StyledTooltip
                        id="details-tooltip"
                        place="top"
                        effect="solid"
                      />
                    </>
                  )}
                </BalloonTitleWrapper>
                {balloon.description && <p>{balloon.description}</p>}
              </div>
              <BalloonCardInfoWrapper>
                <h6 className={balloon.price === 0 ? "transparent" : ""}>
                  {formatNumber(balloon.price)}
                  <span>₴</span>
                </h6>
                <CounterWrapper>
                  <CounterButton onClick={() => decrement(balloon.id)}>
                    -
                  </CounterButton>
                  <CounterDisplay>{counts[balloon.id] || 1}</CounterDisplay>
                  <CounterButton onClick={() => increment(balloon.id)}>
                    +
                  </CounterButton>
                </CounterWrapper>
                <AddToCartButton
                  onClick={() => handleAddToCart(balloon)}
                  disabled={cart.some(
                    (item) =>
                      item.balloon.id === balloon.id &&
                      item.quantity === counts[balloon.id]
                  )}
                  className={
                    cart.some(
                      (item) =>
                        item.balloon.id === balloon.id &&
                        item.quantity === counts[balloon.id]
                    )
                      ? "selected"
                      : ""
                  }
                >
                  {cart.some(
                    (item) =>
                      item.balloon.id === balloon.id &&
                      item.quantity === counts[balloon.id]
                  ) ? (
                    "\u2714"
                  ) : (
                    <img src={cartAddImg} alt="\uff0b" />
                  )}
                </AddToCartButton>
              </BalloonCardInfoWrapper>
            </BalloonSubsectionCard>
          ))}
          {selectedImage && (
            <BalloonImageModal
              image={selectedImage}
              onClose={() => setSelectedImage(null)}
            />
          )}
        </BalloonSubsectionCardWrapper>
      </BalloonSubsectionWrapper>
    </>
  );
};
