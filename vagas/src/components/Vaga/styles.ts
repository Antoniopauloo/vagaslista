import styled from 'styled-components';

export const VagaContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  padding: 24px;
`;

export const VagaTitle = styled.h3`
  color: #333333;
  font-size: 18px;
  margin-bottom: 12px;
`;

export const VagaCompany = styled.p`
  color: #666666;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const VagaLink = styled.a`
  color: #4CAF50;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;