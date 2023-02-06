import React from "react";
import {
  BlocoTitle,
  Conteiner,
  MainPorject,
  PorjectTitleV,
} from "./style/index";
import { Paragraph, Positiotext, Section } from "../Home/style";
import Cards from "../Home/Cards";

function Project() {
  return (
    <MainPorject id="Projetos">
      <MainPorject>
        <BlocoTitle>Projetos</BlocoTitle>
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
    </MainPorject>
  );
}
export default Project;
