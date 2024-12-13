import { useNavigate } from "react-router-dom";
import { BaloonSectionTitle, BalloonSectionWrapper, BalloonSectionCard, BalloonSectionCardWrapper } from "./BalloonSection.styled"

export const BalloonSection = ({ title, ukrTitle, array }) => {
    const navigate = useNavigate();

    const BalloonCardClick = (s) => {
        navigate(`${title}/${s.subsection}`);
    }

    // console.log(array);

    return (
        <BalloonSectionWrapper id={title}>
            <BaloonSectionTitle>{ukrTitle} кульки</BaloonSectionTitle>
            <BalloonSectionCardWrapper>
                {array.map((s, i) => (
                    <BalloonSectionCard key={i} onClick={() => BalloonCardClick(s)}>
                        <img src={s.image} alt={s.name} />
                        <h3>{s.name}</h3>
                    </BalloonSectionCard>
                ))}
            </BalloonSectionCardWrapper>
        </BalloonSectionWrapper>
    )
}