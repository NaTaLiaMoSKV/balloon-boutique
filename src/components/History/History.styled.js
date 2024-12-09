import styled from "styled-components";

export const HistorySection = styled.section`
  padding: 40px 0;
  color: #5a4d45;

  & h2 {
    text-align: center;
    position: relative;
    font-size: 60px;
    padding-bottom: 10px;
    margin-bottom: 25px;
  }

  @media screen and (min-width: 768px) {
    padding: 60px 0;
  }
`;

export const HistoryMobileContainer = styled.section`
  display: flex;
  justufy-content: space-between;
`;

export const HistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const HistoryImg = styled.img`
  width: 30%;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const HistoryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;

  & h3 {
    font-size: 24px;
    font-style: italic;
  }

  & p {
    font-size: 13px;
  }

  @media screen and (min-width: 768px) {
    width: 155px;
  }

  @media screen and (min-width: 1200px) {
    width: 240px;
    gap: 15px;

    & h3 {
      width: 160px;
    }
  }
`;
