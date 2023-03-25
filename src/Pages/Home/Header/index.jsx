import Menu from "../../../components/Buttons";
import ButtonsCurriculo from "../../../components/Buttons/ButtonCurriculos";

import {
  Bloco,
  Figure,
  Head,
  Line,
  LogoB,
  LogoP,
  Transparent,
} from "./style/index";

function Header() {
  return (
    <Head>
      <Figure>
        <LogoB> &lsaquo;PEDRO LIMA&rsaquo;</LogoB>
        <Line />
        <LogoP> &lsaquo; /Desenvolvedor Front-end &rsaquo;</LogoP>
      </Figure>
      <Bloco />
      <Menu />
      <Transparent />
      <ButtonsCurriculo />
    </Head>
  );
}
export default Header;
