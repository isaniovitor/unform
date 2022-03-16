import styled from 'styled-components';

interface InputSize {
  size?: number;
}

export const Container = styled.div<InputSize>`
  display: flex;
  flex-direction: column;

  width: ${({ size }) => size}px;
`;
