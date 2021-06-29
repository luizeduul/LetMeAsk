import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: #050206;
  opacity: 0.6;
  position: absolute;
  align-items: center;
  transition: background-color 0.2s;

  > div {
    display: flex;
    flex-direction: column;
    background: #f8f8f8;
    border: 1px solid #000;
    border-radius: 8px;
    width: 30rem;
    height: 50vh;
    z-index: 10;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
  }
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;

  > button:first-child {
    background: #dbdcdd;
    color: #737380;
  }
  & button + button {
    background: #e73f5d;
    color: #fefefe;
  }
`;
