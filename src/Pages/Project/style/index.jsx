import styled from "styled-components";

export const MainPorject = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-end;
  align-items: stretch;
  border-radius: 10px 0 0 0;
  width: 100vw;
  height: 98vh;
  @media screen and (min-width: 750px) {
    height: 98vh;
  }
`;
export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;
  height: 92vh;
  background-color: #000000e0;
  @media screen and (min-width: 750px) {
    height: 92vh;
    width: 80vw;
  }
`;
export const BlocoTitle = styled.button`
  font-family: "League Gothic", sans-serif;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  align-content: space-around;
  align-items: flex-end;
  justify-content: space-around;
  flex-wrap: wrap;
  color: #fff;
  background-color: #000;
  border: none;
  padding-left: 6px;
  width: 55vw;
  height: 6vh;
  border-radius: 10px 10px 0 0;
  @media screen and (min-width: 750px) {
    font-size: 1.8rem;
    width: 15vw;
  }
`;
export const PorjectTitleV = styled.div`
  width: 15vw;
  height: 70vh;
  color: #5242cc;
  cursor: default;
  user-select: none;
  font-size: 7rem;
  font-weight: bolder;
  background-color: #383838;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  display: none;
  @media screen and (min-width: 750px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
