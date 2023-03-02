import ButtonsCards from "../../../components/Buttons/ButtonsCards";
import { LPorject, TitleCard, UlPorject } from "./style";
import React from "react";

function Cards() {
  return (
    <UlPorject>
      <LPorject className="works First">
        <TitleCard>
          Action Figure
          <a
            target="blank"
            href="https://solid-doodle-bd318073.pages.github.io/"
          >
            <ButtonsCards />
          </a>
        </TitleCard>
      </LPorject>
      <LPorject className="works Second">
        <TitleCard>
          Kenzie News
          <a
            target="blank"
            href="https://ideal-telegram-9d586461.pages.github.io/"
          >
            <ButtonsCards />
          </a>
        </TitleCard>
      </LPorject>
      <LPorject className="works Third">
        <TitleCard>
          Kenzie Hub
          <a
            target="blank"
            href="https://react-entrega-s2-formulario-de-cadastro-pedrolbsousa.vercel.app/"
          >
            <ButtonsCards />
          </a>
        </TitleCard>
      </LPorject>
      <LPorject className="works Bedroom">
        <TitleCard>
          Kenzie Burger
          <a
            target="blank"
            href="https://react-entrega-s1-hamburgueria-da-kenzie-pedrolbsousa.vercel.app/"
          >
            <ButtonsCards />
          </a>
        </TitleCard>
      </LPorject>
    </UlPorject>
  );
}
export default Cards;
