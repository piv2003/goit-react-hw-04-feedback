import styled from 'styled-components';

export const StatisticsField = styled.div`
  padding: 10px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 25px;
  font-weight: 900;
  color: #f805d8;
  text-shadow: 1px 3px 3px rgba(0, 0, 0, 0.55);
`;

export const StatList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;

  & li {
    padding: 15px;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 5px 5px 15px;
  }
`;

export const StatGood = styled.li`
  background-color: #76fa76;
`;

export const StatNeutral = styled.li`
  background-color: #faf6c1;
`;

export const StatBad = styled.li`
  background-color: #fc4a4a;
`;

export const StatTotal = styled.li`
  background-color: #ee45ee;
`;

export const StatPositive = styled.li``;
