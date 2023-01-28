import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  text-transform: capitalize;
`;

export const Button = styled.button`
  padding: 5px 20px;
  display: inline-flex;
  align-items: center;
  text-align: center;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.5;
  border: ${({ theme }) => `1px solid ${theme.colors.borderColor}`};
  border-radius: 5px;
  font-weight: 700;
  text-transform: capitalize;
  cursor: pointer;
  transition: background-color 250ms ease, box-shadow 250ms ease;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.hoverColor};
    box-shadow: ${({ theme }) =>
      `0px 4px 10px 4px ${theme.colors.shadowColor}`};
  }
`;
