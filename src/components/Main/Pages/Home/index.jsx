import React from "react";
import { PorjectTitleV, BlocoTitle, MainPorject } from "../project/style";
import Saldacoes from "../../../Main/Description";
import Cards from "./Cards";
import About from "../About";
import { Conteiner, Ketalow, MainPage, Section } from "./style";
import Header from "./Header";
import { Paragraph, Positiotext } from "./style";
import Contact from "../Contact";

function Main() {
  return (
    <MainPage>
      <Header />
      <Saldacoes />
      <MainPorject>
        <BlocoTitle>
          Projetos <Ketalow> &gt; </Ketalow>
        </BlocoTitle>
        <Conteiner>
          <Section>
            <Cards />
            <PorjectTitleV>PROJETOS</PorjectTitleV>
          </Section>
          <Positiotext>
            <Paragraph>
              Toda a tecnologia usada nestes projetos, foram aprendidas por meio
              do curso de Desenvolvedor full stack oferecido pela instituição
              Kenzie Academy Brasil. O curso que fiz tem foco em formar bons
              profissionais na área de desenvolvimento sempre nos incentivando a
              ter boas práticas na forma de desenvolver código. Todos os
              projetos foram feitos no período do curso que é de fevereiro de
              2022 á dezembro de 2022.
            </Paragraph>
          </Positiotext>
        </Conteiner>
      </MainPorject>
      <About />
      <Contact />
    </MainPage>
  );
}
export default Main;
