import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { NavigationButton, ReviewCard, ReviewsWrapper } from "./Reviews.styled";

import "swiper/css";
import "swiper/css/navigation";

import user1 from '../../images/user/user1.jpg';
import user2 from '../../images/user/user2.jpg';
import user3 from '../../images/user/user3.jpg';
import user4 from '../../images/user/user4.jpg';
import user5 from '../../images/user/user5.jpg';
import user6 from '../../images/user/user6.jpg';
import user7 from '../../images/user/user7.jpg';

const reviewsData = [
    {
        id: 1,
        name: "Ірина",
        rating: 5,
        text: "Замовляла набір кульок для святкування народження дитини. Доставили безкоштовно і дуже швидко прямо до пологового будинку! Кульки яскраві й дуже довго тримаються. Щиро дякую за такий сервіс!",
        photo: user1
    },
    {
        id: 2,
        name: "Олександр",
        rating: 4,
        text: "Кульки гарної якості, довго тримають форму. Єдине, що доставка за межі міста не безкоштовна, як я очікував, але загалом задоволений!",
        photo: user2
    },
    {
        id: 3,
        name: "Марина",
        rating: 5,
        text: "Залишилась у захваті! Замовлення оформили і доставили по Одесі швидко. Кульки просто ідеальні — надулися без проблем і трималися цілий тиждень.",
        photo: user3
    },
    {
        id: 4,
        name: "Василь",
        rating: 5,
        text: "Відмінний сервіс і якісні кульки! Замовляв декор на день народження дружини — приємно здивували швидкою доставкою і гарним пакуванням. Кульки протрималися більше тижня і не здулися. Дуже дякую!",
        photo: user4
    },
    {
        id: 5,
        name: "Ганна",
        rating: 4,
        text: "Все було добре: якісні кульки, яскраві кольори. Єдине, що могла б бути трохи нижчою ціна, але сервіс справді на високому рівні.",
        photo: user5
    },
    {
        id: 6,
        name: "Олег",
        rating: 5,
        text: "Замовив надувні кульки для корпоративу — доставка була вчасно, всі кульки якісні й трималися дуже довго. Дуже приємно мати справу з відповідальним магазином.",
        photo: user6
    },
    {
        id: 7,
        name: "Юлія",
        rating: 5,
        text: "Кульки шикарні! Замовляла набір для фотосесії — кольори ідеальні, виглядали дуже стильно. Рекомендую цей магазин усім знайомим!",
        photo: user7
    }
]

export const Reviews = () => {
    return (
        <ReviewsWrapper>
            <h2>Відгуки</h2>
            <Swiper
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }}
                modules={[Navigation]}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                }}
            >
                {reviewsData.map((review) => (
                <SwiperSlide key={review.id}>
                    <ReviewCard>
                        <img src={review.photo} alt={review.name} />
                        <h4>{review.name}</h4>
                        <div className="rating">{"★".repeat(review.rating)}</div>
                        <p>{review.text}</p> 
                    </ReviewCard>
                </SwiperSlide>
                ))}
            </Swiper>
            <NavigationButton className="swiper-button-next"></NavigationButton>
            <NavigationButton className="swiper-button-prev"></NavigationButton>
        </ReviewsWrapper>
    );
};
