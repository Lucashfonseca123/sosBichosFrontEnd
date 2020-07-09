import styled, {keyframes} from "styled-components";
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

export const Container = styled.div`
    padding: 160px 90px;
    animation: ${appearFromLeft} 1s;
`;

export const ContainerRight = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    strong{
        color: #6D6D6D;
        font-size: 20px;
        font-weight: 300;

        & + strong {
            margin-bottom: 32px;
        }
    }
`;

export const Title = styled.h1`
    font-size: 80px;
    color: white;
    padding-bottom: 100px;
`;

export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundImage}) no-repeat ;
    background-size: 700px;
    height: 757px;
`;

export const ContentMiddle = styled.div`
    /* padding: 0 16px 16px; */
`;

export const ButtonContainer = styled.div`
    padding-top: 16px;
`;