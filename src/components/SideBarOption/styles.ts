import styled, { css } from 'styled-components';

interface ISideBarOption {
  isOpen: boolean;
  isSelected: boolean;
}

export const Container = styled.div<ISideBarOption>`
  background: #222d33;
  margin: 0;
  padding: 5px 10px;
  height: 70px;
  display: flex;
  align-items: center;
  color: #8d8d8d;

  .icon > svg {
    ${(props) =>
      props.isOpen
        ? css`
            width: 24px;
            transition: width 500ms;
          `
        : css`
            width: 32px;
            color: ${props.isSelected && '#cf0808'};
            transition: width 500ms;
          `};
  }

  .title {
    background: 0%;
    display: flex;
    margin: 0 10px;
    min-width: 0;
    width: 100%;
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    > h3 {
      margin: 0;
      padding: 0;
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 23px;
      display: flex;
      align-items: center;
      height: 100%;
      text-indent: 10px;
    }
  }

  ${(props) =>
    props.isSelected
      ? css`
          padding-top: 0;
          padding-bottom: 0;
          box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25),
            inset 0px -5px 10px rgba(0, 0, 0, 0.25);
          color: #fff;

          .title h3 {
            color: #fff;
          }

          &::before {
            content: '';
            width: 5px;
            top: 0;
            height: 100%;
            position: relative;
            left: -10px;
            bottom: 0;
            background: #cf0808;
          }
        `
      : css`
          & .title::after {
            position: relative;
            content: '';
            height: 1px;
            width: 90%;
            left: 10px;
            bottom: -5px;
            background: #393939;
          }
        `};
`;
