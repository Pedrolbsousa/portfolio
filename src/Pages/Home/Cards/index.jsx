import ButtonCardGits from "../../../components/Buttons/ButtonGitCard";
import ButtonLinkCard from "../../../components/Buttons/ButtonLinkCard";
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
            <ButtonLinkCard />
          </a>
          <a
            target="blank"
            href="https://github.com/Kenzie-Academy-Brasil-Developers/m1-entrega-capstone-ecommerce-Pedrolbsousa"
          >
            <ButtonCardGits />
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
            <ButtonLinkCard />
          </a>
          <a
            target="blank"
            href="https://github.com/Kenzie-Academy-Brasil-Developers/m2-entrega-kenzie-news-Pedrolbsousa"
          >
            <ButtonCardGits />
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
            <ButtonLinkCard />
          </a>
          <a
            target="blank"
            href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-formulario-de-cadastro-Pedrolbsousa"
          >
            <ButtonCardGits />
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
            <ButtonLinkCard />
          </a>
          <a
            target="blank"
            href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-Pedrolbsousa/tree/main/react-entrega-s1-hamburgueria-da-kenzie-pedrolbsousa"
          >
            <ButtonCardGits />
          </a>
        </div>
      </LPorject>
    </UlPorject>
  );
}
export default Cards;
