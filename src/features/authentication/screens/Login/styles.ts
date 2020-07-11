import styled, { keyframes } from "styled-components";
import BackgroundImage from "../../../../assets/background.png";

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
`

export const ContainerLeft = styled.div`
    flex: 1;
    background: url(${BackgroundImage}) no-repeat ;
    width: 100%;
    animation: ${appearFromLeft} 1s;

    h1 {
      height: 50%;
      padding-top: 170px;
      padding-left: 90px;
    }
`;

export const ContainerRight = styled.div`
    flex: 0.7;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 350px;
      height: 280px;
    }

    strong{
        color: #6D6D6D;
        font-size: 20px;
        font-weight: 300;

        & + strong {
            /* margin-bottom: 32px; */
        }
    }
`;

export const Title = styled.h1`
    font-size: 80px;
    color: white;
`;

export const ContentMiddle = styled.div`
    padding: 0px 90px;

    div{
      padding-top: 16px;
    }
`;
