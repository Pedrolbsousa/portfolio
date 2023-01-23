import {
  CntTitleAbout,
  ConteinerAbout,
  MainAbout,
  PhotoAbout,
  TitleAbout,
  TxtAbout,
} from "./style";
import ReactPlayer from "react-player";

function About() {
  return (
    <MainAbout>
      <ConteinerAbout>
        <CntTitleAbout>
          <TitleAbout>Sobre mim</TitleAbout>
        </CntTitleAbout>
        <TxtAbout>
          Meu contato com tecnologia começou com uma amigo que era técnico em
          informática, por conta do incentivo que ele me dava eu fiz o curso
          técnico em informática, e não parei, iniciei o curso de sistemas para
          internet a distância porém por falta de orientação eu acabei trancando
          o curso. Por conta própria continuei estudando HTML e CSS. A Partir
          disto me apaixonei pela área e iniciei o curso com a Kenzie Academy de
          desenvolvedor Full stack. Meu objetivo hoje é conquistar meu primeiro
          emprego como desenvolvedor front-end e aplicar de forma prática o
          conhecimento que venho absorvendo com o meu curso e contribuir de uma
          forma mais ampla com as minhas ideias.
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
