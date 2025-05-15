import styled from "styled-components";

import img1 from "../../images/advantages/1.png";
import img2 from "../../images/advantages/2.png";
import img3 from "../../images/advantages/3.png";

const AdvantagesSection = styled.section`
  padding: 40px 0;
  color: #5a4d45;

  & h2 {
    position: relative;
    font-size: 50px;
    padding-bottom: 10px;
    margin-bottom: 25px;
    line-height: 1.5;
  }

  & h2::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 70%;
    height: 1px;
    background-color: #5a4d45;
  }

  @media screen and (min-width: 768px) {
    padding: 60px 0;

    & h2 {
      font-size: 50px;
    }

    & h2::after {
      width: 100%;
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 80px 0;
  }
`;

const AdvantagesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Advantages = () => {
  return (
    <AdvantagesSection>
      <h2>Чому нас обирають?</h2>
      <AdvantagesContainer>
        <li>
          <img src={img1} alt="швидка доставка" />
        </li>
        <li>
          <img src={img2} alt="висока якість" />
        </li>
        <li>
          <img src={img3} alt="доступна ціна" />
        </li>
      </AdvantagesContainer>
    </AdvantagesSection>
  );
};
