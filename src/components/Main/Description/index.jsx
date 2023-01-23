import Typewriter from "typewriter-effect";
import { Congratulation, Description } from "./style";

function Saldacoes() {
  return (
    <Congratulation>
      <Description className="mainDescription" type="text">
        Eu sou o{" "}
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString("Desenvolverdor Pedro")

              .pauseFor(1000)
              .deleteAll()
              .typeString("Pedro Lima Desenvolvedor Front-end.")
              .start();
          }}
        />
      </Description>
    </Congratulation>
  );
}
export default Saldacoes;
