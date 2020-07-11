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
          width: 315px;
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

  #content {
    height: auto;
    display: flex;
    flex-direction: column;
  }
`;
