import styled from "@emotion/styled";

interface Props {
  value: number;
  onChange: (count: number) => void;
}

const InputView = ({ value, onChange }: Props) => {
  return (
    <Input type="number" value={value} onChange={(e) => onChange(parseInt(e.target.value) || 0)}/>
  );
};

export default InputView;

const Input = styled.input`
  font-size: 30px;
`;
