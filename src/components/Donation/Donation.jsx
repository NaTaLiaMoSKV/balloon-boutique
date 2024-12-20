import { DonationContainer, DonationLink, DonationText, DonationTitle } from "./Donation.styled"

export const Donation = () => {
    return (
        <DonationContainer>
            <DonationTitle>Разом до перемоги!</DonationTitle>
            <DonationText><span>10%</span> від кожного вашого замовлення йде на підтримку ЗСУ — допомагаємо разом, купуючи радість і захист для України!</DonationText>
            <DonationLink to="/balloons">
                Замовити
            </DonationLink>
        </DonationContainer>
    )
}