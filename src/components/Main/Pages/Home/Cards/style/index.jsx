import styled from "styled-components";

export const UlPorject = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  list-style: none;
  height: 50vh;
  margin: 0;
  padding: 0;
  transition: 0.3s;

  .First {
    background-color: none;
    position: relative;
    transition: 0.3s;
    background-image: url(https://i.postimg.cc/7P4D1fLX/primeiro-projeto.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    border-radius: 10px 0 0 0;
    :hover {
      width: 20vw;
      transition: 1s linear;
      background-image: url(https://i.postimg.cc/7P4D1fLX/primeiro-projeto.png);
      background-size: cover;
    }
  }

  .Second {
    background-color: #333;
    background-image: url(https://i.postimg.cc/7qYHRW9b/primeiro-news.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    transition: 0.3s;
    :hover {
      width: 20vw;
      transition: 1s linear;
      background-image: url(https://i.postimg.cc/7qYHRW9b/primeiro-news.png);
      background-size: cover;
    }
  }
  .Third {
    background-color: #5163d3;
    background-image: url(https://i.postimg.cc/336sZSbs/primeiro-kenziehub-log.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    transition: 0.3s;
    :hover {
      width: 20vw;
      transition: 1s linear;
      background-image: url(https://i.postimg.cc/336sZSbs/primeiro-kenziehub-log.png);
      background-size: cover;
    }
    @media screen and (min-width: 750px) {
      height: 70vh;
      width: 15vw;
    }
  }
  .Bedroom {
    background-color: #333;
    background-image: url(https://i.postimg.cc/CwZtdCLm/primeiro-kenzie-Burger.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: 0.3s;
    :hover {
      width: 20vw;
      transition: 1s linear;
      background-image: url(https://i.postimg.cc/CwZtdCLm/primeiro-kenzie-Burger.png);
      background-size: cover;
    }
  }
`;
export const LPorject = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 0px solid;
  border-radius: 10px 0 0 0;
  width: 20vw;
  height: 50vh;
  @media screen and (min-width: 750px) {
    height: 70vh;
    width: 15vw;
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
    width: 15vw;
  }
`;
