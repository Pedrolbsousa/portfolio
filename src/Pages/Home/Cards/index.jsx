import ButtonsCards from "../../../components/Buttons/ButtonsCards";
import { LPorject, TitleCard, UlPorject } from "./style";

function Cards() {
  return (
    <UlPorject>
      <LPorject className="works First">
        <div className="TitleSection">
          <TitleCard className="altTitle">Action Figure</TitleCard>
        </div>
        <div className="ButtonSection">
          <a
            target="blank"
            href="https://kenzie-academy-brasil-developers.github.io/m1-entrega-capstone-ecommerce-Pedrolbsousa/"
          >
            <ButtonsCards />
          </a>
        </div>
      </LPorject>
      <LPorject className="works Second">
        <div className="TitleSection">
          <TitleCard className="altTitle">Kenzie News</TitleCard>
        </div>
        <div className="ButtonSection">
          <a
            target="blank"
            href="https://kenzie-academy-brasil-developers.github.io/m2-entrega-kenzie-news-Pedrolbsousa/"
          >
            <ButtonsCards />
          </a>
        </div>
      </LPorject>
      <LPorject className="works Third">
        <div className="TitleSection">
          <TitleCard className="altTitle">Kenzie Hub</TitleCard>
        </div>
        <div className="ButtonSection">
          <a
            target="blank"
            href="https://react-entrega-s2-formulario-de-cadastro-pedrolbsousa.vercel.app/"
          >
            <ButtonsCards />
          </a>
        </div>
      </LPorject>
      <LPorject className="works Bedroom">
        <div className="TitleSection">
          <TitleCard className="altTitle">Kenzie Burger</TitleCard>
        </div>
        <div className="ButtonSection">
          <a
            target="blank"
            href="https://react-entrega-s1-hamburgueria-da-kenzie-pedrolbsousa.vercel.app/"
          >
            <ButtonsCards />
          </a>
        </div>
      </LPorject>
    </UlPorject>
  );
}
export default Cards;
