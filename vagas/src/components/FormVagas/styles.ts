import styled from 'styled-components';

export const FormContainer = styled.form`
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 40px auto;
  max-width: 800px;
  padding: 24px;
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  color: #333333;
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  padding: 8px 12px;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 12px 24px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;