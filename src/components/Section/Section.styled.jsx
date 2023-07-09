import styled from 'styled-components';

export const SectionFeedback = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  max-width: 700px;
  text-align: center;
  background-color: #fcfff6;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 75px 75px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 21px, rgba(0, 0, 0, 0.09) 0px -3px 2px;
`;

export const Title = styled.h1`
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 30px;
  color: #ee95f1;
  text-shadow: 2px 2px 0px #752929, 5px 4px 0px rgb(230, 50, 191);

  @-webkit-keyframes pulsate {
    50% {
      color: #fff;
      text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;
    }
  }
  @keyframes pulsate {
    50% {
      color: #fff;
      text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;
    }
  }
  color: rgb(245, 245, 245);
  text-shadow: 0 -1px rgba(0, 0, 0, 0.1);
  background: #da96fa;
  -webkit-animation: pulsate 2.2s linear infinite;
  animation: pulsate 2.2s linear infinite;
`;
