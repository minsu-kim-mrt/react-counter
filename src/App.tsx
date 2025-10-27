// 과제 redo undo vercel

import styled from '@emotion/styled';
import { useState } from 'react';
// import CounterView from './CounterView';
import InputView from './InputView';

function App() {
  const [inputNumber, setInputNumber] = useState(0);
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount((prev) => prev + inputNumber);
    setInputNumber(0);
  };

  const handleMinus = () => {
    setCount((prev) => prev - inputNumber);
    setInputNumber(0);
  };

  return (
    <Container>
      <Header>This is React Counter</Header>
      <Number>{count}</Number>
      {/* <CounterView /> */}
      <InputView value={inputNumber} onChange={setInputNumber} />
      <Footer>
        <Button onClick={handlePlus}>+</Button>
        <Button onClick={handleMinus}>-</Button>
      </Footer>
    </Container>
  );
}

export default App

const Button = styled.button`
  font-size: 30px;
  border-radius: 50%;
  background-color: blue;
  width: 80px;
  height: 80px;
  color: white;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Header = styled.h1`
  font-size: 60px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const Number = styled.span`
  font-size: 70px;
  font-weight: 700;
  color: blue;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 30px;
  background-color: silver;
`;
