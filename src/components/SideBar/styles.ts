import styled, { css } from 'styled-components';

interface ISideBar {
  isOpen: boolean;
}

export const Container = styled.div<ISideBar>`
  background: #222d33;
  margin: 0;
  padding: 0;

  ${(props) =>
    props.isOpen
      ? css`
          width: 25%;
          transition: width 500ms;
        `
      : css`
          width: 52px;
          transition: width 500ms;
        `};

  .header {
    height: 70px;
    background: #ce2020;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-shadow: inset -4px 0px 4px rgba(0, 0, 0, 0.25);
  }

  button {
    width: 52px;
    height: 52px;
    background: 0%;
    border: 0;
  }

  .title {
    height: 60px;
    width: 100%;
    background: #1a2225;
    margin: 0;
    padding: 0;

    > h3 {
      height: auto;
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 23px;
      text-align: justify;
      color: #9e9e9e;
      padding: 18px 0 18px 34px;
    }
  }

  #content {
    height: auto;
    display: flex;
    flex-direction: column;
  }
`;
