import styled from '@emotion/styled';

interface Props {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const CounterButton = ({ onClick, disabled = false, children }: Props) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default CounterButton;

const Button = styled.button`
  font-size: 30px;
  border-radius: 50%;
  background-color: blue;
  width: 80px;
  height: 80px;
  color: white;
  border: none;
  cursor: pointer;
  
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  &:hover:not(:disabled) {
    background-color: darkblue;
  }
`;

