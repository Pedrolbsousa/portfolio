import { LogoB, Line } from "../Home/Header/style";
import {
  Contacts,
  Conteiner,
  LogoContact,
  TitleContact,
  IconsContact,
  TextContact,
  BaseboardContact,
  Logo,
  Baseboard,
  FigureBaseboard,
  ObjectBaseboard,
} from "./style";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { TxtAbout } from "../About/style";

function Contact() {
  return (
    <Contacts>
      <Conteiner>
        <TitleContact>Contato</TitleContact>
        <LogoContact>
          <LogoB className="ContactLogo"> &lsaquo;PEDRO LIMA&rsaquo;</LogoB>
          <Line className="ContactLine" />
          <Logo className="Contactp">
            &lsaquo; /Desenvolvedor Front-end &rsaquo;
          </Logo>
        </LogoContact>
      </Conteiner>
      <ObjectBaseboard>
        <FigureBaseboard />
        <TxtAbout className="TxtConteiner">
          "Um pequeno passo para um homem, um salto gigantesco para a
          humanidade" - Neil Armstrong
        </TxtAbout>
      </ObjectBaseboard>
      <BaseboardContact>
        <Baseboard>
          <TextContact>Copyrigth Pedro Lima 2023</TextContact>
          <IconsContact>
            <AiFillLinkedin />
            <AiOutlineGithub />
            <AiOutlineMail />
            <AiOutlineWhatsApp />
          </IconsContact>
          <LogoContact>
            <LogoB className="BaseboardLogo"> &lsaquo;PEDRO LIMA&rsaquo;</LogoB>
            <Line className="BaseboardLine" />
            <Logo className="Baseboardp">
              &lsaquo; /Desenvolvedor Front-end &rsaquo;
            </Logo>
          </LogoContact>
        </Baseboard>
      </BaseboardContact>
    </Contacts>
  );
}
export default Contact;
