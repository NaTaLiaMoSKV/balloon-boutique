import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  CollectionWrapper,
  Container,
  Link,
  List,
} from "./BalloonCollection.styled";

import "swiper/css";
import "swiper/css/autoplay";

import img1 from "../../images/collection/1.jpg";
import img2 from "../../images/collection/2.jpg";
import img3 from "../../images/collection/3.jpg";
import img4 from "../../images/collection/4.jpg";
import img5 from "../../images/collection/5.jpg";
import img6 from "../../images/collection/6.jpg";

export const BalloonCollection = () => {
  return (
    <Container>
      <section>
        <h2>Види шарів</h2>
        <CollectionWrapper>
          <List>
            <li>
              <Link to="/balloons#thematic">Для заходів</Link>
            </li>
            <li>
              <Link to="/balloons#latex">Латексні</Link>
            </li>
            <li>
              <Link to="/balloons#foil">Фольговані</Link>
            </li>
            <li>
              <Link to="/balloons#other">Літери та слова</Link>
            </li>
            <li>
              <Link to="/balloons#other">Арки з куль</Link>
            </li>
            <li>
              <Link to="/balloons#other">Набори</Link>
            </li>
            <li>
              <Link to="/balloons#other">Коробки-сюрпризи</Link>
            </li>
          </List>
          <div className="swiper-container">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              speed={1000}
            >
              <SwiperSlide>
                <img src={img1} alt="білі кульки" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="фольговані кульки" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="тематичні кульки" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} alt="кульки на день народження" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="арка з кульок" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img6} alt="коробка-сюрприз з кульками" />
              </SwiperSlide>
            </Swiper>
          </div>
        </CollectionWrapper>
      </section>
    </Container>
  );
};
