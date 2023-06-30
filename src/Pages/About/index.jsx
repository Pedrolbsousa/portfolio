import {
  CntTitleAbout,
  ConteinerAbout,
  MainAbout,
  PhotoAbout,
  TitleAbout,
  TxtAbout,
} from "./style";
import ReactPlayer from "react-player";
import Skills from "../../components/Main/About";

function About() {
  return (
    <MainAbout id="SobreMin">
      <ConteinerAbout>
        <CntTitleAbout>
          <TitleAbout>Sobre mim</TitleAbout>
          <Skills />
        </CntTitleAbout>
        <TxtAbout>
          Gostaria de compartilhar com o(a) senhor(a) que minha afinidade com a
          área de tecnologia se iniciou por meio do contato com um amigo que era
          técnico em informática. Através de sua influência positiva, decidi me
          matricular no curso técnico de informática e, desde então, não parei
          de estudar e aprimorar minhas habilidades. Inicialmente, decidi
          iniciar um curso de sistemas para internet a distância. No entanto,
          por falta de orientação, acabei por interromper o curso.
          Posteriormente, comecei a estudar HTML e CSS por conta própria e me
          apaixonei pela área de desenvolvimento web. Dessa forma, decidi
          ingressar na Kenzie Academy para o curso de desenvolvedor Full Stack.
          Hoje, meu objetivo é conseguir uma oportunidade como desenvolvedor
          front-end para aplicar o conhecimento que tenho absorvido durante o
          curso e contribuir com minhas ideias de forma mais ampla. Agradeço
          pelo seu tempo e atenção, e coloco-me à disposição para eventuais
          esclarecimentos.
        </TxtAbout>
      </ConteinerAbout>
      <PhotoAbout>
        <videoAbout>
          <ReactPlayer controls={false} url="https://youtu.be/F57EG1LK9kI" />
        </videoAbout>
      </PhotoAbout>
    </MainAbout>
  );
}
export default About;
