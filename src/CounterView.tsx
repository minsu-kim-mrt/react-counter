import styled from '@emotion/styled';
import { useState } from 'react';
import InputView from './InputView';
import CounterButton from './CounterButton';

const CounterView = () => {
  const [inputNumber, setInputNumber] = useState(0);
  const [history, setHistory] = useState<number[]>([0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const count = history[currentIndex];

  const handlePlus = () => {
    const newCount = count + inputNumber;
    if (newCount === count) return;
    
    const newHistory = history.slice(0, currentIndex + 1);
    newHistory.push(newCount);
    setHistory(newHistory);
    setCurrentIndex(currentIndex + 1);
    setInputNumber(0);
  };

  const handleMinus = () => {
    const newCount = count - inputNumber;
    if (newCount === count) return;
    
    const newHistory = history.slice(0, currentIndex + 1);
    newHistory.push(newCount);
    setHistory(newHistory);
    setCurrentIndex(currentIndex + 1);
    setInputNumber(0);
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <Number>{count}</Number>
      <InputView value={inputNumber} onChange={setInputNumber} />
      <ButtonGroup>
        <CounterButton onClick={handleUndo} disabled={currentIndex === 0}>
          ◀
        </CounterButton>
        <CounterButton onClick={handlePlus}>+</CounterButton>
        <CounterButton onClick={handleMinus}>-</CounterButton>
        <CounterButton onClick={handleRedo} disabled={currentIndex === history.length - 1}>
          ▶
        </CounterButton>
      </ButtonGroup>
    </>
  );
};

export default CounterView;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Number = styled.span`
  font-size: 70px;
  font-weight: 700;
  color: blue;
`;
