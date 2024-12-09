import styled from "styled-components";

export const AboutSection = styled.section`
    color: #5a4d45;
    padding: 60px 0;

    display: flex;
    flex-direction: column;
    gap: 40px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

export const AboutUsContainer = styled.div`
    max-width: 480px;

    & h2 {
        position: relative;
        font-size: 60px;
        padding-bottom: 10px;
        margin-bottom: 25px;
    }

    & h2::after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 70%;
        height: 1px;
        background-color: #212121;

    }

    & p {
        line-height: 1.7;
    }

    @media screen and (min-width: 768px) {
        max-width: 300px;

        & h2 {
            font-size: 50px;
        }

        & h2::after {
            width: 100%;
        }
        
        & p {
            font-size: 14px;
        }
    }

    @media screen and (min-width: 1200px) {
        max-width: 500px;
    }

`

export const AboutAdvantagesList = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    
    @media screen and (min-width: 768px) {
        gap: 20px;
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media screen and (min-width: 1200px) {
        column-gap: 60px;
    }
    
`

export const AboutAdvantagesItem = styled.li`
    text-align: center;
    
    & h3 {
        font-size: 50px;
        letter-spacing: 0.04em;
        font-family: "Lobster", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    & p {
        font-style: italic;
        font-size: 20px;
        margin-top: 3px;
    }

    @media screen and (min-width: 768px) {
        & h3 {
            font-size: 45px;
        }

    }

`