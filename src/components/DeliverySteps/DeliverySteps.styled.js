import styled from "styled-components";

export const Section = styled.section`
  padding: 40px 0px;
  color: #5a4d45;

  h2 {
    text-align: center;
    font-size: 35px;
    margin-bottom: 35px;
    line-height: 1.2;
  }

  @media screen and (min-width: 768px) {
    padding: 60px 0;

    h2 {
      margin-bottom: 50px;
      font-size: 50px;
    }
  }
`;

export const StepsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const StepItem = styled.li`
  display: flex;
  align-items: center;
  gap: 40px;

  &:nth-child(2) {
    flex-direction: row-reverse;

    @media screen and (max-width: 767px) {
      border-bottom: 1px solid #5a4d45;
      border-top: 1px solid #5a4d45;
      border-radius: 0;
      padding: 40px 0;
    }

    @media (min-width: 768px) {
      flex-direction: column;
    }
  }

  span {
    font-size: 28px;
    letter-spacing: 0.04em;
    font-family: "Lobster", sans-serif;
    font-weight: 500;
    font-style: normal;
  }

  @media (min-width: 768px) {
    flex: 1;
    flex-direction: column;
    max-width: 300px;
    gap: 20px;
  }

  @media (min-width: 1200px) {
    gap: 15px;
  }
`;

export const StepTitle = styled.h3`
  font-size: 20px;
  margin: 0;

  @media (min-width: 1200px) {
    font-size: 22px;
  }
`;

export const StepImage = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  @media (min-width: 1200px) {
    width: 80%;
    height: 80%;
    border-radius: 40px;
    margin-bottom: 15px;
  }
`;

export const StepDescription = styled.p`
  font-size: 17px;
  color: #555;
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }
`;
