import styled from "styled-components";

export const Head = styled.header`
  border-style: solid;
  border-color: #ffffff3b;
  border-width: 1px;
  height: 100px;
  width: 99.881vw;
  background-color: #0003;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 749px) {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  }
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
  width: 100vw;
  height: 100px;
  @media screen and (min-width: 750px) {
    width: 20vw;
  }
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
  @media screen and (min-width: 750px) {
    font-size: auto;
  }
`;
export const Line = styled.hr`
  width: 200px;
  margin: 0px;
  #ContactLine {
    color: #ffffff;
  }
  #BaseboardLine {
    width: 7 0px;
  }
  @media screen and (min-width: 750px) {
    #BaseboardLine {
      width: 200px;
    }
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
