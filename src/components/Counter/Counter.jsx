import { useState } from "react";
import {
  CounterWrapper,
  CounterButton,
  CounterDisplay,
} from "../BalloonSubsection/BalloonSubsection.styled";

export const Counter = ({ initialCount = 1, onChange }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => {
      const newValue = Math.min(prev + 1, 2000);
      onChange(newValue);
      return newValue;
    });
  };

  const decrement = () => {
    setCount((prev) => {
      const newValue = Math.max(prev - 1, 1);
      onChange(newValue);
      return newValue;
    });
  };

  return (
    <CounterWrapper>
      <CounterButton onClick={decrement}>-</CounterButton>
      <CounterDisplay>{count}</CounterDisplay>
      <CounterButton onClick={increment}>+</CounterButton>
    </CounterWrapper>
  );
};
