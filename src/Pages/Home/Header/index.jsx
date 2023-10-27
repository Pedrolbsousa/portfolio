import Menu from "../../../components/Buttons";
import ButtonsCurriculo from "../../../components/Buttons/ButtonCurriculos";

import { Bloco, Figure, Head, Transparent } from "./style/index";

function Header() {
  return (
    <Head>
      <Figure />
      <Bloco />
      <Menu />
      <Transparent />
      <ButtonsCurriculo />
    </Head>
  );
}
export default Header;
