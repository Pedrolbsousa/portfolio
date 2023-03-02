import styled from "styled-components";

export const UlPorject = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  float: left;
  max-height: 80vh;
  height: 100%;
  max-width: 80vw;
  width: 100%;
  margin: 0;
  padding: 0;
  transition: 0.3s;
  @media screen and (min-width: 750px) {
    height: 70vh;
    max-width: 60vw;
    width: 100%;
  }
  .First {
    background-color: none;
    position: relative;
    transition: 0.3s;
    background-image: url(https://i.postimg.cc/7P4D1fLX/primeiro-projeto.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    border-radius: 10px 0 0 0;
  }
  .Second {
    background-color: #333;
    background-image: url(https://i.postimg.cc/7qYHRW9b/primeiro-news.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    transition: 0.3s;
  }
  .Third {
    background-color: #5163d3;
    background-image: url(https://i.postimg.cc/336sZSbs/primeiro-kenziehub-log.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    transition: 0.3s;
  }
  .Bedroom {
    background-color: #333;
    background-image: url(https://i.postimg.cc/CwZtdCLm/primeiro-kenzie-Burger.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    position: 0.3s;
  }
`;
export const LPorject = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: 300ms;
  filter: grayscale(100%);
  border: 0px solid;
  border-radius: 10px 0 0 0;
  width: 20vw;
  height: 50vh;
  @media screen and (min-width: 750px) {
    height: 70vh;
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
  border-radius: 10px 0 0 0;
  width: 20vw;
  height: 50vh;
  background-color: #00000068;
  @media screen and (min-width: 750px) {
    height: 70vh;
    max-width: 15vw;
    width: 100%;
  }
`;
