import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  strong {
    color: #b20808;
    font-size: 22px;
  }

  img {
    margin: 32px 0;
    width: 250px;
    height: 180px;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    pointer-events: none;
  }

  strong + div {
    margin-top: 8px;
  }
`;

export const DivMiddle = styled.div`
  div {
    margin-bottom: 16px;
  }
`;

export const ImageFooter = styled.div`
  img {
    margin-top: 24px;
    width: 320px;
    height: 180px;
  }
`;
