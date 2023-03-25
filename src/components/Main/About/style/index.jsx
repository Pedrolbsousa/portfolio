import styled from "styled-components";

export const SkillMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #000000ab;
  color: #fff;
  width: 55vw;
  height: 28vh;
  padding-left: 12px;
  @media screen and (min-width: 750px) {
    padding-left: 0px;
  }
`;
export const SkillSpan = styled.span`
  font-family: "Khand", sans-serif;
  font-size: 2.5rem;
`;

export const SkillIcons = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: "Khand", sans-serif;
  font-size: 2.5rem;
  width: 56vw;
  height: 17vh;
  @media screen and (min-width: 750px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 55vw;
    height: 20vh;
  }
`;
export const CartSkills = styled.div`
  display: flex;
  height: 3vh;
  width: 16vw;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  .Logo {
    display: none;
  }
  .TitleSkills {
    font-size: 1rem;
  }
  .Rc:hover {
    font-size: 4rem;
    transition: 1s;
    color: #0216c7;
  }
  .Wp:hover {
    font-size: 4rem;
    transition: 1s;
    color: #207196;
  }
  .Js:hover {
    font-size: 4rem;
    transition: 1s;
    color: #f0d53c;
  }
  .H5:hover {
    font-size: 4rem;
    transition: 1s;
    color: #dd4b25;
  }
  .C3:hover {
    font-size: 4rem;
    transition: 1s;
    color: #2862e9;
  }
  .Gb:hover {
    font-size: 4rem;
    transition: 1s;
    color: #0d2534;
  }
  .Nj:hover {
    font-size: 4rem;
    transition: 1s;
    color: #7cb73f;
  }
  .Dj:hover {
    font-size: 4rem;
    transition: 1s;
    color: #2aa473;
  }
  .Ts:hover {
    font-size: 4rem;
    transition: 1s;
    color: #2f74c0;
  }
  .Pg:hover {
    font-size: 4rem;
    transition: 1s;
    color: #254a7f;
  }
  .Rx:hover {
    font-size: 4rem;
    transition: 1s;
    color: #7248b6;
  }
  .Ps:hover {
    font-size: 4rem;
    transition: 1s;
    color: #001d34;
  }
  .Ai:hover {
    font-size: 4rem;
    transition: 1s;
    color: #310000;
  }
  .Ail {
    margin-top: 20px;
  }
  @media screen and (min-width: 750px) {
    height: 20vh;
    width: 8vw;
    flex-wrap: nowrap;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    .Logo {
      display: flex;
    }
    .Ail {
      margin-top: 0px;
    }
  }
`;
