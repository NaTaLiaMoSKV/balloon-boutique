import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #5a3e3e;
  padding: 50px 0 20px;

  @media screen and (min-width: 768px) {
    padding: 60px 0 20px;
  }
`;

export const FooterSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  color: #fafafa;
  padding-bottom: 20px;
`;

export const LogoWrapper = styled.div`
  h2 {
    font-size: 40px;
    font-weight: 700;
    font-size: 70px;
    letter-spacing: 0.05em;
  }

  @media screen and (min-width: 1200px) {
    h2 {
      font-size: 50px;
    }
  }
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 160px;
  gap: 10px;
  font-size: 18px;

  a {
    position: relative;
    font-size: smaller;
    font-style: italic;
    padding-bottom: 2px;
  }

  a::after {
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: #fafafa;
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  a:hover,
  a:focus {
    color: #fff;
    text-shadow: 0px 1px 3px #fff;

    &::after {
      transform: scale(1.07);
      color: #fff;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
    min-width: 200px;
    gap: 20px;
  }
`;

export const CopyrightText = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #fafafa;
  font-size: 20px;
`;
