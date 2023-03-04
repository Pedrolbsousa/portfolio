import ButtonsCards from "../../../components/Buttons/ButtonsCards";
import { LPorject, TitleCard, UlPorject } from "./style";
import React from "react";
let card = document.querySelectorAll(".works");

function AltCard() {
  console.log("chegeu ate aqui 01");
}

function Cards() {
  console.log("chegei aqui");
  return (
    <UlPorject>
      <LPorject
        className="works First"
        onMouseOver={() => AltCard()}
        onMouseOut={() => {
          console.log("sair01");
        }}
      >
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
      <LPorject
        className="works Second"
        onMouseOver={() => {
          console.log("chegeu ate aqui 02");
        }}
        onMouseOut={() => {
          console.log("sair02");
        }}
      >
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
      <LPorject
        className="works Third"
        onMouseOver={() => {
          console.log("chegeu ate aqui 03");
        }}
        onMouseOut={() => {
          console.log("sair03");
        }}
      >
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
      <LPorject
        className="works Bedroom"
        onMouseOver={() => {
          console.log("chegeu ate aqui 04");
        }}
        onMouseOut={() => {
          console.log("sair04");
        }}
      >
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
