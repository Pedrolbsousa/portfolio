import styled from "styled-components";

export const Head = styled.header`
  border-style: solid;
  border-color: #ffffff3b;
  border-width: 1px;
  height: 100px;
  width: 100vw;
  background-color: #0003;
  display: flex;
  justify-content: flex-start;
`;

export const Figure = styled.figure`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0px;
  width: 15%;
  height: 100px;
`;
export const LogoB = styled.b`
  font-family: "Khand", sans-serif;
  font-size: 26px;
  #ContactLogo {
    color: #fff;
  }
  &.BaseboardLogo {
    font-size: 11px;
  }
`;
export const Line = styled.hr`
  width: 200px;
  margin: 0px;
  #ContactLine {
    color: #fff;
  }
`;
export const LogoP = styled.p`
  font-family: "Tulpen One", cursive;
  font-size: 26px;
  color: #3b2bb66c;
  margin: 0px;
  #Contactp {
    color: #fff;
  }
`;
export const Bloco = styled.div`
  background-color: #3b2bb6;
  width: 100px;
  height: 100px;
`;
export const Transparent = styled.div`
  background-color: #3b2bb68d;
  width: 200px;
  height: 95vh;
`;
