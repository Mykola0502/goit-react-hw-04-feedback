import styled from 'styled-components';

export const StatList = styled.ul`
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const StatItem = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
