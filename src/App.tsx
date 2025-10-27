// 과제 redo undo vercel

import styled from '@emotion/styled';
import CounterView from './CounterView';

function App() {
  return (
    <Container>
      <Header>This is React Counter</Header>
      <CounterView />
    </Container>
  );
}

export default App

const Header = styled.h1`
  font-size: 60px;
  font-weight: 700;
  margin: 0;
  padding: 0;
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
