import { AddressText } from "components/About/About.styled"
import { ContactsWrapper, CopyrightText, FooterContainer, FooterSection, LogoWrapper } from "./Footer.styled"


export const Footer = () => {
    return (
        <FooterContainer>
            <FooterSection>
                <LogoWrapper>
                    <h2>The Balloon Boutique</h2>
                    <AddressText>вул. Рішельєвська, 67, Одеса</AddressText>
                </LogoWrapper>
                <ContactsWrapper>
                    <p>Менеджер Аліна</p>
                    <a href="tel:+380972885835">+380 (97) 288 58 35</a> 
                </ContactsWrapper>
            </FooterSection>
            <hr />
            <CopyrightText>Copyright 2021</CopyrightText>
        </FooterContainer>
    )
}