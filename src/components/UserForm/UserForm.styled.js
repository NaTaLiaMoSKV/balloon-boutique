import styled from "styled-components";

export const FormContainer = styled.div`
  margin: 0 auto 40px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const UserSection = styled.div`
  border-bottom: 1px solid #2121216e;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const UserSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 30px;
    row-gap: 30px;

    .container {
      width: 300px;
    }
  }

  @media screen and (min-width: 1200px) {
    column-gap: 40px;

    .container {
      width: 350px;
    }

    &.user-data {
      flex-wrap: nowrap;

      input {
        width: 300px;
      }
    }
  }
`;

export const Title = styled.h2`
  font-size: 22px;
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;

  @media screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

export const Input = styled.input`
  width: calc(100% - 20px);
  padding: 8px 10px;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #ccc;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #5a3e3e;
  }

  &[type="radio"],
  &[type="checkbox"] {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    accent-color: #5a3e3e;
  }

  @media screen and (min-width: 768px) {
    width: 250px;
  }

  @media screen and (min-width: 1200px) {
    width: 350px;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px 10px;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 270px;
  }

  @media screen and (min-width: 1200px) {
    width: 370px;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const CheckboxLabel = styled.label`
  font-size: 1rem;
  color: #555;
  display: flex;
  align-items: center;
`;

export const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  font-family: "Lora", serif;
  border: none;
  padding: 13px 20px;
  text-align: center;
  font-size: 16px;
  color: #212121;
  font-weight: 500;
  letter-spacing: 0.03em;
  transition: all 0.3s ease-in-out;
  background-color: #fafafa;
  text-decoration: none;

  box-shadow: -3px -3px 3px 0px rgba(255, 255, 255, 0.8),
    3px 3px 3px 0px rgba(0, 0, 0, 0.2),
    inset -3px -3px 3px 0px rgba(255, 255, 255, 0.8),
    inset 3px 3px 3px 0px rgba(0, 0, 0, 0.2);

  -webkit-box-shadow: -3px -3px 3px 0px rgba(255, 255, 255, 0.8),
    3px 3px 3px 0px rgba(0, 0, 0, 0.2),
    inset -3px -3px 3px 0px rgba(255, 255, 255, 0.8),
    inset 3px 3px 3px 0px rgba(0, 0, 0, 0.2);

  -moz-box-shadow: -3px -3px 3px 0px rgba(255, 255, 255, 0.8),
    3px 3px 3px 0px rgba(0, 0, 0, 0.2),
    inset -3px -3px 3px 0px rgba(255, 255, 255, 0.8),
    inset 3px 3px 3px 0px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: -5px -5px 5px 0px rgba(255, 255, 255, 0.8),
      5px 5px 5px 0px rgba(0, 0, 0, 0.2),
      inset -5px -5px 5px 0px rgba(255, 255, 255, 0.8),
      inset 5px 5px 5px 0px rgba(0, 0, 0, 0.2);

    -webkit-box-shadow: -5px -5px 5px 0px rgba(255, 255, 255, 0.8),
      5px 5px 5px 0px rgba(0, 0, 0, 0.2),
      inset -5px -5px 5px 0px rgba(255, 255, 255, 0.8),
      inset 5px 5px 5px 0px rgba(0, 0, 0, 0.2);

    -moz-box-shadow: -5px -5px 5px 0px rgba(255, 255, 255, 0.8),
      5px 5px 5px 0px rgba(0, 0, 0, 0.2),
      inset -5px -5px 5px 0px rgba(255, 255, 255, 0.8),
      inset 5px 5px 5px 0px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
  }

  @media screen and (min-width: 768px) {
    padding: 15px 25px;
    font-size: 20px;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const HiddenBlock = styled.div`
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 3px;
`;

export const DeliveryTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #fefefe;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: left;
    gap: 35px;
    width: 330px;
  }

  @media (min-width: 1200px) {
    gap: 50px;
    width: 380px;
  }
`;

export const DeliveryOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #333;

  input[type="radio"] {
    margin-right: 8px;
    cursor: pointer;
    accent-color: #007bff;
  }
`;

export const SectionDivider = styled.div`
  height: 1px;
  background-color: #e0e0e0;
  margin: 16px 0;
`;

export const PayContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 15px;
  padding: 30px 10px 20px;

  p {
    font-weight: 500;
    font-size: 17px;
  }

  @media screen and (min-width: 768px) {
    margin-left: auto;

    p {
      font-size: 22px;
      font-weight: 700;
    }
  }
`;
