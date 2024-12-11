import { useEffect, useState } from "react";

import logo from "../../images/logo-balloons.png";
import basket from "../../images/basket.png";
import burger from "../../images/burger.png";
import close from "../../images/close.png";

import { BasketImage, LogoImage, MobileMenu, StyledNavLink } from "./Header.styled";
import "./header.css";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header>
      {isMobile ? (
        <div className="header-wrapper">
          <LogoImage src={logo} alt="logo" />
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
                  <StyledNavLink
                    to="/"
                    onClick={closeMenu}
                  >
                    Головна
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink
                    to="/balloons"
                    onClick={closeMenu}
                  >
                    Товари
                  </StyledNavLink>
                </li>
              </ul>
              <StyledNavLink
                to="/basket"
                onClick={closeMenu}
              >
                <BasketImage src={basket} alt="basket" />
              </StyledNavLink>
            </nav>
          </MobileMenu>
        </div>
      ) : (
        <div className="header-wrapper">
          <LogoImage src={logo} alt="logo" />
          <nav className="header-nav">
            <ul className="header-nav__list">
              <li>
                <StyledNavLink to="/">
                  Головна
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/balloons">
                  Товари
                </StyledNavLink>
              </li>
            </ul>
            <StyledNavLink to="/basket">
              <BasketImage src={basket} alt="basket" />
            </StyledNavLink>
          </nav>
        </div>
      )}
    </header>
  );
};
