import styled from "styled-components";

export const DonationContainer = styled.div`
  background: linear-gradient(
    90deg,
    rgb(122 91 91) 0%,
    rgb(159 116 116) 60%,
    rgb(186 148 148) 100%
  );
  color: #fafafa;
  padding: 60px 15px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 60px 30px;
  }
`;

export const DonationTitle = styled.h2`
  font-size: 50px;
  line-height: 1.2;
`;

export const DonationText = styled.p`
  font-size: 20px;

  & span {
    font-size: 30px;
    letter-spacing: 0.04em;
    font-family: "Lobster", sans-serif;
    font-weight: 500;
    font-style: normal;
  }

  @media screen and (min-width: 768px) {
    font-size: 27px;
    max-width: 1070px;
    margin-bottom: 20px;

    & span {
      font-size: 37px;
    }
  }
`;
