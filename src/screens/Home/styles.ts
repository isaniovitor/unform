import { Form } from '@unform/web';
import styled from 'styled-components';

export const Main = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;

  margin: 100px;
  padding: 50px;

  background-color: #ADD8E6;
  border: 1px solid #ababab;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  margin-top: 30px;
`;

export const FormContainercol = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;

  width: 100%;
  padding-bottom: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SubmitButton = styled.button`
  padding: 8px 20px;
  border-radius: 6px;
  color: white;

  background-color: #008442;
`;

export const CheckBoxConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

  height: 60px;
`;
