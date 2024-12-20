import React from "react";
import { ContentWrapper,  HeroSection, HeroSlogan, HeroTitle, Link } from "./Hero.styled";

export const Hero = () => {
  return (
    <HeroSection>
      <ContentWrapper>
        <HeroTitle>The Balloon Boutique</HeroTitle>
        <HeroSlogan>Радість у кожній кульці, щастя в кожній доставці!</HeroSlogan>
        <Link className="hero" to="/balloons">
          Замовити
        </Link>
      </ContentWrapper>
    </HeroSection>
  );
};
