import styled from "styled-components";

export const MainPage = styled.main`
  width: 100vw;
  height: 130vh;
  background-position: right;
  background-image: url("https://i.imgur.com/dbsa3vQ.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #383838;
  @media screen and (min-width: 750px) {
    background-position: center;
  }
`;

export const TitleCard = styled.p`
  font-family: "Khand", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-star;
  width: 122px;
`;
export const Section = styled.section`
  display: flex;
`;
export const Paragraph = styled.small`
  display: flex;
  font-family: "Khand", sans-serif;
  font-size: 1rem;
  color: #fff;
  width: 73vw;
  height: 20vh;
  padding-left: 3vw;
  @media screen and (min-width: 750px) {
    font-size: 1.2rem;
    height: 18vh;
  }
`;
export const Positiotext = styled.section`
  display: flex;
  align-items: center;
  height: 22vh;
`;
