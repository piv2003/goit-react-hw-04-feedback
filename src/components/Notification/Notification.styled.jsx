import styled from 'styled-components';

export const NotificationBox = styled.div`
  padding: 10px;
  font-weight: bold;
  font-size: 30px;

  -webkit-animation: blink 3s linear infinite;
  animation: blink1 3s linear infinite;
  @-webkit-keyframes blink {
    0% {
      color: rgba(34, 34, 34, 1);
    }
    50% {
      color: rgba(34, 34, 34, 0);
    }
    100% {
      color: rgba(34, 34, 34, 1);
    }
  }
  @keyframes blink1 {
    0% {
      color: rgba(34, 34, 34, 1);
    }
    50% {
      color: rgba(34, 34, 34, 0);
    }
    100% {
      color: rgba(34, 34, 34, 1);
    }
  }
`;
