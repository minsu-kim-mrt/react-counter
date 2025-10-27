import styled from "@emotion/styled";

interface Props {
  value: string;
  onChange: (count: string) => void;
}

const InputView = ({ value, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // 빈 값 허용
    if (newValue === '') {
      onChange('');
      return;
    }
    
    // 첫 문자가 0이면 입력 차단
    if (newValue.startsWith('0')) {
      return;
    }
    
    // 숫자만 허용
    if (/^\d+$/.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <Input type="text" value={value} onChange={handleChange} />
  );
};

export default InputView;

const Input = styled.input`
  font-size: 30px;
`;
