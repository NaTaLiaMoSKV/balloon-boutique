import { AboutAdvantagesItem, AboutAdvantagesList, AboutSection, AboutUsContainer } from "./About.styled"

export const About = () => {
    return (
        <AboutSection>
            <AboutUsContainer>
                <h2>Про нас</h2>
                <p>
                    У нашому магазині ви знайдете унікальні та яскраві кулі для будь-якої події.
                    Ми пропонуємо широкий асортимент, швидку доставку та індивідуальний підхід,
                    щоб ваше свято було незабутнім!
                </p>
            </AboutUsContainer>
            <AboutAdvantagesList>
                <AboutAdvantagesItem>
                    <h3>650+</h3>
                    <p>клієнтів</p>
                </AboutAdvantagesItem>
                <AboutAdvantagesItem>
                    <h3>10 000+</h3>
                    <p>шариків</p>
                </AboutAdvantagesItem>
                <AboutAdvantagesItem>
                    <h3>3</h3>
                    <p>роки на ринку</p>
                </AboutAdvantagesItem>
                <AboutAdvantagesItem>
                    <h3>200+</h3>
                    <p>святкових арок</p>
                </AboutAdvantagesItem>
              
            </AboutAdvantagesList>
        </AboutSection>
    )
}