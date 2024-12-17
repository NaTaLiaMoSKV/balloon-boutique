import { useEffect, useState } from "react";
import logo from "../../images/logo-balloons.png";
import cart from "../../images/basket.png";
import burger from "../../images/burger.png";
import close from "../../images/close.png";

import {
  CartImage,
  HeaderWrapper,
  LogoImage,
  MobileMenu,
  StyledNavLink,
} from "./Header.styled";
import "./header.css";
import { Link } from "react-router-dom";
import { CartButton } from "components/CartButton/CartButton";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      if (currentScrollY > 100) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderWrapper isHidden={isHidden} hasShadow={hasShadow}>
      {isMobile ? (
        <div className="header-wrapper">
          <Link to="/">
            <LogoImage src={logo} alt="logo" />
          </Link>
          <button className="mobile-menu__button" onClick={toggleMenu}>
            <img src={burger} alt="open menu" />
          </button>

          <MobileMenu isOpen={isMenuOpen}>
            <button className="mobile-menu__close" onClick={closeMenu}>
              <img src={close} alt="close menu" />
            </button>
            <nav>
              <ul className="header-nav__list">
                <li>
                  <StyledNavLink to="/" onClick={closeMenu}>
                    Головна
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to="/balloons" onClick={closeMenu}>
                    Товари
                  </StyledNavLink>
                </li>
              </ul>
              <StyledNavLink to="/cart" onClick={closeMenu}>
                <CartImage src={cart} alt="cart" />
              </StyledNavLink>
            </nav>
          </MobileMenu>
        </div>
      ) : (
        <div className="header-wrapper">
          <Link to="/">
            <LogoImage src={logo} alt="logo" />
          </Link>
          <nav className="header-nav">
            <ul className="header-nav__list">
              <li>
                <StyledNavLink to="/">Головна</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/balloons">Товари</StyledNavLink>
              </li>
            </ul>
            <CartButton />
          </nav>
        </div>
      )}
    </HeaderWrapper>
  );
};
