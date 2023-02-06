import styled from "styled-components";

export const ButtonCard = styled.button`
  font-family: "League Gothic", sans-serif;
  color: #fff;
  background-color: #ffffff14;
  font-size: 15px;
  height: 40px;
  width: 60px;
  border-radius: 5px 0 0 0;
  border: solid #ffffffc8 2px;
  cursor: pointer;
  &:hover {
    color: #500cf0d8;
    background-color: #000000a7;
    transition: 0.5s;
  }
  @media screen and (min-width: 750px) {
    width: 110px;
  }
`;
