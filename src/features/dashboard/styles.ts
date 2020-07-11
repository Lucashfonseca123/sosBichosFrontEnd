import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background: #400;
`;

export const Board = styled.div`
  box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  display: flex;
  height: 100%;
  width: 100%;
`;
export const Content = styled.div`
  flex: 1;
  background: #acacac;
  height: 100%;
  width: 100%;
`;
