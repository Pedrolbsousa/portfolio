import styled from "styled-components";

export const UlPorject = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  float: left;
  max-height: 80vh;
  height: 100%;
  max-width: 80vw;
  width: 100%;
  margin: 0;
  padding: 0;
  transition: 0.3s;
  :hover {
    filter: grayscale(0%);
    width: 100%;
    transition: 300ms;
  }
  @media screen and (min-width: 750px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    height: 70vh;
    max-width: 60vw;
    width: 100%;
    :hover {
      filter: grayscale(0%);
      width: 200%;
      transition: 300ms;
      .altTitle {
        font-size: 10rem;
        color: #ffffffc3;
      }
    }
  }
  .works {
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    position: 0.3s;
  }
  .First {
    background-color: #fa5c00c3;
    background-image: url(https://i.postimg.cc/7P4D1fLX/primeiro-projeto.png);
  }
  .Second {
    background-color: #333;
    background-image: url(https://i.postimg.cc/7qYHRW9b/primeiro-news.png);
  }
  .Third {
    background-color: #5163d3;
    background-image: url(https://i.postimg.cc/336sZSbs/primeiro-kenziehub-log.png);
  }

  .Bedroom {
    background-color: #333;
    background-image: url(https://i.postimg.cc/CwZtdCLm/primeiro-kenzie-Burger.png);
  }
`;
export const LPorject = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  transition: 300ms;
  filter: grayscale(100%);
  border: 0px solid;
  border-radius: 10px 0 0 0;
  width: 95vw;
  height: 100%;
  max-height: 17vw;
  .TitleSection {
    display: flex;
    border-radius: 10px 0 0 0;
    max-width: 20vw;
    width: 100%;
    height: 40vh;
    background-color: #00000068;
    flex-direction: column;
    justify-content: center;
  }
  .ButtonSection {
    display: flex;
    width: 100%;
    height: 30vh;
    background-color: #00000068;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      justify-content: center;
      height: 3vh;
      width: 8vw;
      :hover {
        height: 3vh;
        width: 8vw;
      }
    }
  }

  @media screen and (min-width: 750px) {
    max-height: 70vh;
    height: 100%;
    width: 100%;
    max-width: 20vw;
  }
`;
export const TitleCard = styled.p`
  font-family: "League Gothic", sans-serif;
  font-size: 2rem;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  @media screen and (min-width: 750px) {
    height: 40vh;
    max-width: 20vw;
    width: 100%;
  }
`;
