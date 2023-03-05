import ButtonsCards from "../../../components/Buttons/ButtonsCards";
import { LPorject, TitleCard, UlPorject } from "./style";
import React, { useState } from "react";

function Cards() {
  const [altCard, setAltCard] = useState("works First");
  const [altSecond, setAltSecond] = useState("works Secondt");
  const [altThird, setAltThird] = useState("works Third");
  const [alBedroom, setAltBedroom] = useState("works Bedroom");

  return (
    <UlPorject>
      <LPorject
        className={altCard ? "works First" : "TrueFirst"}
        onMouseOver={() => setAltCard(!altCard)}
        onMouseOut={() => setAltCard(!altCard)}
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
        className={altSecond ? "works Second" : "TrueSecond"}
        onMouseOver={() => setAltSecond(!altSecond)}
        onMouseOut={() => setAltSecond(!altSecond)}
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
        className={altThird ? "works Third" : "TrueThird"}
        onMouseOver={() => setAltThird(!altThird)}
        onMouseOut={() => setAltThird(!altThird)}
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
        className={alBedroom ? "works Bedroom" : "TrueBedroom"}
        onMouseOver={() => setAltBedroom(!alBedroom)}
        onMouseOut={() => setAltBedroom(!alBedroom)}
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
