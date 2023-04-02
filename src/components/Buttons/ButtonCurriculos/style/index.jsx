import styled from "styled-components";

export const ButtonCurriculo = styled.button`
  border: none;
  font-family: "League Gothic", sans-serif;
  font-size: 2.5rem;
  color: #fff;
  transition: all 0.3s;
  position: relative;
  cursor: pointer;
  background-color: #6928ff65;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27vw;
  height: 77px;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 77px;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
  }
  :hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 77px;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.5);
    transform: scale(1.2, 1.2);
  }
  :hover::after {
    opacity: 1;
    transform: scale(1, 1);
  }
  @media screen and (min-width: 750px) {
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vw;
    height: 100px;
    ::before {
      height: 100px;
    }
    ::after {
      height: 100px;
    }
  }
`;
export const AreaButtonCurriculo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 52vw;
  height: 9vh;
  background-color: #3b2bb68d;

  &.false {
    display: none;
  }
  @media screen and (min-width: 750px) {
    font-size: 16px;
    display: flex;
    width: 22vw;
    height: 10.6vh;
    flex-direction: row-reverse;
    background-color: #ffffff10;
  }
`;
