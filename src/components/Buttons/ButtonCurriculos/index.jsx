import { useState } from "react";
import { MobileMenuIcon } from "../style";
import { AreaButtonCurriculo, ButtonCurriculo } from "./style";

function ButtonsCurriculo() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <AreaButtonCurriculo className={isMobile ? "False" : "True"}>
        <a
          target="blank"
          href="https://drive.google.com/file/d/15R40U1_jQEjIcpn4oMqZuDUcM4NjvFJ5/view"
        >
          <ButtonCurriculo>
            <spam>MEU CURRICULO</spam>
          </ButtonCurriculo>
        </a>
      </AreaButtonCurriculo>
      <MobileMenuIcon onClick={() => setIsMobile(isMobile)} />
    </>
  );
}
export default ButtonsCurriculo;
