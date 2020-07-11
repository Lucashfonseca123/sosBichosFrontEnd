import styled, { keyframes } from 'styled-components';
import BackgroundImage from '../../../../assets/background.png';

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ContainerGlobal = styled.div`
  display: flex;
`;

export const DivTitle = styled.div`
  position: absolute;
  top: 180px;
  left: 500px;
  height: 20px;
`;

export const ContainerLeft = styled.div`
  flex: 1;
  background: url(${BackgroundImage});
  /* background-size: cover; */
  background-repeat: no-repeat;
  /* width: 100%; */
  animation: ${appearFromLeft} 1s;

  img {
    width: 100px;
    height: 90px;
  }

  h1 {
    height: 50%;
    padding-top: 170px;
    padding-left: 90px;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  flex: 0.7;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 64px;
  padding-bottom: 64px;

  img {
    width: 300px;
    height: 280px;
    padding-top: 32px;
  }

  strong + img {
    width: 510;
    height: 220px;
  }

  strong {
    color: #6d6d6d;
    font-size: 20px;
    font-weight: 300;
    padding-top: 32px;

    & + strong {
      padding-top: 0px;
      padding-bottom: 90px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 80px;
  color: white;
`;

export const ContentMiddle = styled.div`
  padding: 0px 90px;
  height: 90px;

  div {
    padding-top: 16px;
  }
`;
