import styled from "styled-components";

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 65vh;
  width: 100vw;
`;
export const Conteiner = styled.div`
  height: 50vh;
  width: 80vw;
  color: #fff;
`;
export const TitleContact = styled.h1`
  display: flex;
  align-items: center;
  font-family: "Khand", sans-serif;
  font-size: 2.5rem;
  color: #fff;
  width: 3vw;
  height: 0vh;
  padding-left: 1vw;
`;
export const LogoContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TextContact = styled.h5`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 0.8rem;
  width: 50vw;
  font-weight: 400;
  margin: 0px;
  color: #000;
  padding-left: 10px;
  @media screen and (min-width: 750px) {
    width: 30vw;
    font-size: 1rem;
    width: auto;
  }
`;
export const BaseboardContact = styled.div`
  display: flex;
  align-items: flex-end;
  height: 34vh;
  margin: 0px;
`;
export const Logo = styled.p`
  font-family: "Tulpen One", cursive;
  font-size: 26px;
  color: #fff;
  margin: 0px;
  &.Baseboardp {
    color: #000;
    font-size: 12px;
  }
`;
export const IconsContact = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 68.8vw;
  height: 4vh;
  color: #000;
  font-size: 4ch;
  gap: 2vw;
  :hover {
    color: #3b2bb6;
    font-size: 2ch;
    transition: 0.5s;
    cursor: pointer;
  }
`;
export const ObjectBaseboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 29vh;
  width: 100vw;
  @media screen and (min-width: 750px) {
    align-items: normal;
  }
`;
export const Baseboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #72727239;
  height: 10vh;
  width: 100vw;
  position: relative;
  @media screen and (min-width: 750px) {
    height: 5vh;
  }
`;
export const FigureBaseboard = styled.figure`
  width: 34vw;
  height: 19vh;
  border-radius: 50%;
  background-size: cover;
  background-image: url(https://media.licdn.com/dms/image/C4D03AQHqtreTMuNMvA/profile-displayphoto-shrink_800_800/0/1660311963670?e=1680134400&v=beta&t=zGsAViKBs36PqE1pRkTKqioPT6izsCB_YzgFXjlEM_U);
  @media screen and (min-width: 750px) {
    width: 10vw;
    height: 19vh;
  }
`;
export const linkBaseboard = styled.a`
  color: #000;
  display: flex;
  @media screen and (min-width: 750px) {
    display: flex;
    width: 10vw;
    height: 19vh;
  }
`;
export const BaseboardLine = styled.hr`
  width: 70px;
  margin: 0px;
`;
