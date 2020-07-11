import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  width: 300px;

  button {
    display: flex;
    height: 50px;
    background: #b20808;
    margin: 0;
    padding: 16px 0px;
    width: 300px;
    color: #fff;
    border: 0;
    border-radius: 8px;
    font-size: 16px;
    transition: background-color 0.2s;
    justify-content: center;

    &:hover {
      background: #8a0707;
    }
  }
`;
