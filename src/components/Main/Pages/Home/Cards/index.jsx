import ButtonsCards from "../../../../Buttons/ButtonsCards";
import { LPorject, TitleCard, UlPorject } from "./style";

function Cards() {
  return (
    <UlPorject>
      <LPorject className="First">
        <TitleCard>
          Action Figure
          <ButtonsCards />
        </TitleCard>
      </LPorject>
      <LPorject className="Second">
        <TitleCard>
          Kenzie News
          <ButtonsCards />
        </TitleCard>
      </LPorject>
      <LPorject className="Third">
        <TitleCard>
          Kenzie Hub
          <ButtonsCards />
        </TitleCard>
      </LPorject>
      <LPorject className="Bedroom">
        <TitleCard>
          Kenzie Burger
          <ButtonsCards />
        </TitleCard>
      </LPorject>
    </UlPorject>
  );
}
export default Cards;
