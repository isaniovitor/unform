import styled from 'styled-components';

interface InputSize {
  size?: number;
}

export const Container = styled.div<InputSize>`
  display: flex;
  flex-direction: column;

  width: ${({ size }) => size}px;
`;

export const InputTitle = styled.label`
  font-size: 16px;
`;

export const Select = styled.select`
  height: 30px;

  margin-top: 4px;
  padding-left: 5px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

export const error = styled.span`
  padding-top: 5px;
  font-size: 12px;
  color: red;
`;
