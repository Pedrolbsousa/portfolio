import {
  Contacts,
  Conteiner,
  LogoContact,
  TitleContact,
  IconsContact,
  TextContact,
  BaseboardContact,
  Baseboard,
  FigureBaseboard,
  ObjectBaseboard,
  LinkBase,
  FigureContact,
  FigureContactLogo,
} from "./style";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { TxtAbout } from "../About/style";
import { userData } from "../../ultils/userData";

function Contact() {
  return (
    <Contacts id="Contato">
      <Conteiner>
        <TitleContact>Contato</TitleContact>
        <LogoContact>
          <FigureContact />
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
            <LinkBase
              target="blank"
              href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
            >
              <AiFillLinkedin />
            </LinkBase>
            <LinkBase
              target="blank"
              href={`https://github.com/${userData.githubUser}`}
            >
              <AiOutlineGithub />
            </LinkBase>
            <LinkBase
              target="blank"
              href={`mailto${userData.email}@gmail.com`}
              onClick={() => (window.location.href = "mailto:pedrolima.com")}
            >
              <AiOutlineMail />
            </LinkBase>
            <LinkBase
              target="blank"
              href={`https://api.whatsapp.com/send?phone=${userData.whatsappNumber}&text=Ol%C3%A1,%20Sr.%20Pedro%20Lima,%20achei%20muito%20interessante%20seu%20portfolio,%20gostaria%20de%20saber%20mais.`}
            >
              <AiOutlineWhatsApp />
            </LinkBase>
          </IconsContact>
          <LogoContact>
            <FigureContactLogo />
          </LogoContact>
        </Baseboard>
      </BaseboardContact>
    </Contacts>
  );
}
export default Contact;
