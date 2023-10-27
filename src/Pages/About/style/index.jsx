import styled from "styled-components";

export const MainAbout = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  width: 100vw;
  height: 121vh;
  @media screen and (min-width: 750px) {
    height: 100vh;
  }
`;
export const ConteinerAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: flex-end;
  flex-wrap: wrap;
  width: 95vw;
  height: 146vh;
  background-color: #000000e0;
  @media screen and (min-width: 750px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 80vw;
    height: 120vh;
  }
`;
export const TxtAbout = styled.p`
  font-family: "Khand", sans-serif;
  font-size: 1rem;
  color: #fff;
  width: 73vw;
  height: 57vh;
  padding-right: 5vw;
  padding-left: 3vw;
  &.TxtConteiner {
    width: 27vw;
    height: 10vh;
    color: #000;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
  }
  @media screen and (min-width: 750px) {
    display: flex;
    font-size: 1.2rem;
    width: 43vw;
  }
`;
export const CntTitleAbout = styled.section`
  display: flex;
  width: 96vw;
  justify-content: space-between;
  @media screen and (min-width: 750px) {
    display: flex;
    width: 80vw;
  }
`;
export const TitleAbout = styled.h1`
  display: flex;
  align-items: center;
  font-family: "Khand", sans-serif;
  font-size: 2.5rem;
  color: #fff;
  background-color: #3b2bb6;
  width: 3vw;
  height: 22vh;
  padding-left: 1vw;
`;
export const PhotoAbout = styled.figure`
  background-color: #161616;
  width: 33vw;
  height: 30.7vh;
  margin-top: 190px;
  position: relative;
  display: none;
  left: 0px;
  @media screen and (min-width: 750px) {
    display: flex;
    position: absolute;
  }
`;
export const ReactPlayer = styled.video`
  background-color: azure;
  width: 35vw;
  height: 36vh;
  position: relative;
  display: flex;
  left: 0px;
`;
