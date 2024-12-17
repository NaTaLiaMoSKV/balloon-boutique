import { DetailsButton } from "components/BalloonSubsection/BalloonSubsection.styled";
import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 150;
`

export const ModalContent = styled.div`
    position: relative;
    background: #fff;
    padding: 60px 40px 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 15px;

    h3 {
        font-size: 22px;
        color: #212121;
    }
`

export const CloseButton = styled(DetailsButton)`
    position: absolute;
    top: 10px;
    right: 10px;
`

export const OpenModalButton = styled(DetailsButton)`
    border-radius: 10px;
    border: 1px solid #eee;
    width: auto;
    height: auto;
    margin: 10px 0;

    span {
        margin-left: 8px;
    }

    @media screen and (min-width: 768px) {
        margin: 10px 0 0;
    }
`

export const ModalInput = styled.input`
    padding: 10px 12px;
    font-size: 16px;
    color: #333;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        box-shadow: 0 0 5px #ccc;
    }

    &::placeholder {
        color: #aaa;
        font-style: italic;
    }
`;

export const ModalButtonsWrapper = styled.div`
    display: flex;
    justify-content: right;
    gap: 20px;
`