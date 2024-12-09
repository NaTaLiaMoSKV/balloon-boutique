import { Section, StepDescription, StepImage, StepItem, StepsList, StepTitle } from "./DeliverySteps.styled";

import step1Img from "../../images/steps/1.jpg";
import step2Img from "../../images/steps/2.jpg";
import step3Img from "../../images/steps/3.jpg";

export const DeliverySteps = () => {
    return (
        <Section>
            <h2>Доставка у три кроки</h2>
            <StepsList>
                <StepItem>
                    <StepImage src={step1Img} alt="Step 1" />
                    <StepTitle><span>1. </span>Оформіть замовлення за хвилини</StepTitle>
                    <StepDescription>
                        Просто оберіть товари та оформіть замовлення онлайн.
                    </StepDescription>
                </StepItem>
                <StepItem>
                    <StepImage src={step2Img} alt="Step 2" />
                    <StepTitle><span>2. </span>Миттєва обробка вашого замовлення</StepTitle>
                    <StepDescription>
                        Менеджери швидко зв’яжуться для підтвердження деталей.
                    </StepDescription>
                </StepItem>
                <StepItem>
                    <StepImage src={step3Img} alt="Step 3" />
                    <StepTitle><span>3. </span>Швидка доставка до вашого дому</StepTitle>
                    <StepDescription>
                        Отримайте своє замовлення в зручний для вас час.
                    </StepDescription>
                </StepItem>
            </StepsList>
        </Section>
    );
};
