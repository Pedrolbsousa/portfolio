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
  background-image: url("https://images2.imgbox.com/28/39/lorVTtto_o.png");
  background-size: 57%;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0px 0px 0px 10px;
  width: 100vw;
  height: 100%;
  @media screen and (min-width: 750px) {
    width: 20vw;
  }
`;
export const Bloco = styled.div`
  background-color: #3b2bb6;
  width: 100px;
  height: 100%;
  display: none;
  @media screen and (min-width: 750px) {
    display: block;
  }
`;
export const Transparent = styled.div`
  background-color: #3b2bb68d;
  width: 200px;
  height: 95vh;
  display: none;
  @media screen and (min-width: 750px) {
    display: block;
  }
`;
