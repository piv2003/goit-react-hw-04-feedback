import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  gap: 30px;
  padding: 15px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 15px;
  border-radius: 15px;
  border-color: #531f4f;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  background-color: ${props => {
    switch (props.children) {
      case 'Good':
        return '#65f365';
      case 'Neutral':
        return '#faf6c1';
      case 'Bad':
        return 'red';
      default:
        return 'white';
    }
  }};
  color: ${props => {
    switch (props.children) {
      case 'Good':
        return '#f703d6';
      case 'Neutral':
        return '#5b73fa';
      case 'Bad':
        return '#131212';
      default:
        return 'white';
    }
  }};
  box-shadow: rgba(0, 0, 0, 0.45) 10px 10px 10px;
`;
