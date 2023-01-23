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
`;
export const BlocoTitle = styled.div`
  font-family: "League Gothic", sans-serif;
  font-size: 1.8rem;
  display: flex;
  flex-direction: row;
  align-content: space-around;
  align-items: flex-end;
  justify-content: space-around;
  flex-wrap: wrap;
  color: #00000016;
  background-color: #000;
  padding-left: 6px;
  width: 2vw;
  height: 6vh;
  border-radius: 10px 10px 0 0;
  &:hover {
    color: #fff;
    width: 15vw;
    transform: 3s;
    justify-content: space-between;
  }
`;
export const PorjectTitleV = styled.div`
  width: 15vw;
  height: 70vh;
  color: #5242cc;
  font-size: 7rem;
  font-weight: bolder;
  background-color: #383838;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
