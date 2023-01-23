import styled from "styled-components";

export const List = styled.ul`
  color: #fff;
  width: 480px;
  height: 100px;
  display: flex;
  margin-top: 0px;
  padding-left: 0px;
  :hover {
    background-color: #0000007f;
    border: 2px solid #6828ff;
    color: #6828ff;
    box-shadow: 0px 0px 35px #6828ff, 0px 0px 15px #6928ff76 inset;
    text-shadow: 0 0 10px #6828ffcc, 0 0 3px #6828ff;
    font-weight: bold;
  }
`;
export const Card = styled.li`
  list-style: none;
  border-style: solid;
  border-color: #ffffff26;
  border-width: 0px 1px;
  font-family: "League Gothic", sans-serif;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 120px;
  cursor: pointer;
  transition: 0.5s;
`;
