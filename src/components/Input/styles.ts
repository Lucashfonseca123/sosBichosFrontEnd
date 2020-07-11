import styled, {css} from "styled-components";

interface IContainer {
  focus: boolean | undefined;
  blur: boolean | undefined;
}

export const Container = styled.div<IContainer>`
  display: flex;
  align-items: center;
  flex: 0;
  background: #FFF;
  border-radius: 8px;
  padding: 16px 0px 16px 16px;
  width: 300px;

  border: 2px solid #9A9A9C;
  border-color: #9A9A9C;

  ${(props) =>
    props.focus &&
    css`
      border-color: #B20808;
    `}
  
  ${(props) =>
    props.blur &&
    css`
      color: #9A9A9C;
      border-color: #9A9A9C;
    `}

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    border: 0;
    width: 100%;
    color: #380803;
    font-family: 'SourceSansPro', sans-serif;
    font-weight: 800;

    &::placeholder {

    ${(props) =>
    props.focus && css`
      color: #B20808;
    `}
  
    ${(props) => props.blur && css`
      color: #9A9A9C;
    `}
    }
  }
`;