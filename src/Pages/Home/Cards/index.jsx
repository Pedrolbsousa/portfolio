import ButtonsCards from "../../../components/Buttons/ButtonsCards";
import { LPorject, TitleCard, UlPorject } from "./style";

function Cards() {
  return (
    <UlPorject>
      <LPorject className="works First">
        <TitleCard>
          Action Figure
          <ButtonsCards />
        </TitleCard>
      </LPorject>
      <LPorject className="works Second">
        <TitleCard>
          Kenzie News
          <ButtonsCards />
        </TitleCard>
      </LPorject>
      <LPorject className="works Third">
        <TitleCard>
          Kenzie Hub
          <ButtonsCards />
        </TitleCard>
      </LPorject>
      <LPorject className="works Bedroom">
        <TitleCard>
          Kenzie Burger
          <ButtonsCards />
        </TitleCard>
      </LPorject>
    </UlPorject>
  );
}
export default Cards;
