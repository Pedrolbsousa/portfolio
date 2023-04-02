import styled from "styled-components";

export const List = styled.ul`
  color: #fff;
  width: 375px;
  height: 100px;
  display: none;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 0px;
  margin-top: 0px;
  padding-left: 0px;
  &.False {
    display: flex;
    background-color: #3b2bb68d;
    width: 375px;
    height: 228px;
  }
  @media screen and (min-width: 750px) {
    width: 480px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    :before {
      top: 62px;
      content: "";
      position: absolute;
      width: 48px;
      height: 2px;
      background-color: #ffffff7f;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
    }
    :hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
`;
export const Card = styled.li`
  list-style: none;
  border-style: solid;
  background-color: #6928ff65;
  border-color: #ffffff26;
  border-width: 0px 1px;
  font-family: "League Gothic", sans-serif;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 192px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: #00000058;
  }
  @media screen and (min-width: 750px) {
    font-size: 1.3rem;
    width: 114px;
    height: 100px;
    border: none;
    background-color: #ffffff00;
  }
`;
export const Links = styled.a`
  text-decoration: none;
  color: #fff;
  border-style: solid;
  border-color: #ffffff26;
  border-width: 0px 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 750px) {
    font-size: 1.3rem;
    width: 120px;
  }
`;
export const MobileMenuIcon = styled.button`
  display: block;
  position: absolute;
  left: 88%;
  top: 71px;
  font-size: 27px;
  font-weight: bold;
  color: #fff;
  background-color: #00000000;
  border: 0;
  width: 0px;
  height: 0px;
  @media screen and (min-width: 750px) {
    display: none;
  }
`;
