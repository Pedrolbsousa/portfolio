import { SlGlobe } from "react-icons/sl";
import { ButtonLink, Span } from "./style";

function ButtonLinkCard() {
  return (
    <>
      <ButtonLink className="btn-two">
        <Span>
          <SlGlobe />
        </Span>
      </ButtonLink>
    </>
  );
}
export default ButtonLinkCard;
