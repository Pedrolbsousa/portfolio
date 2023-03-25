import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiCss3,
  SiDjango,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTsnode,
  SiWordpress,
} from "react-icons/si";
import { CartSkills, SkillIcons, SkillMain, SkillSpan } from "./style";

function Skills() {
  return (
    <SkillMain>
      <SkillSpan>Minhas Skills</SkillSpan>
      <SkillIcons>
        <CartSkills>
          <SiReact className="Logo Rc" />
          <span className="TitleSkills">React JS</span>
        </CartSkills>
        <CartSkills>
          <SiWordpress className="Logo Wp" />
          <span className="TitleSkills">Wordpress</span>
        </CartSkills>
        <CartSkills>
          <SiJavascript className="Logo Js" />
          <span className="TitleSkills">Javascript</span>
        </CartSkills>
        <CartSkills>
          <SiHtml5 className="Logo H5" />
          <span className="TitleSkills">Html5</span>
        </CartSkills>
        <CartSkills>
          <SiCss3 className="Logo C3" />
          <span className="TitleSkills">Css3</span>
        </CartSkills>
        <CartSkills>
          <SiGithub className="Logo Gb" />
          <span className="TitleSkills">Github</span>
        </CartSkills>
        <CartSkills>
          <SiDjango className="Logo Dj" />
          <span className="TitleSkills">Django</span>
        </CartSkills>
        <CartSkills>
          <SiNodedotjs className="Logo Nj" />
          <span className="TitleSkills">Node JS</span>
        </CartSkills>
        <CartSkills>
          <SiTsnode className="Logo Ts" />
          <span className="TitleSkills">TypeScript</span>
        </CartSkills>
        <CartSkills>
          <SiPostgresql className="Logo Pg" />
          <span className="TitleSkills">Postgresql</span>
        </CartSkills>
        <CartSkills>
          <SiRedux className="Logo Rx" />
          <span className="TitleSkills">Redux</span>
        </CartSkills>
        <CartSkills>
          <SiAdobephotoshop className="Logo Ps" />
          <span className="TitleSkills Ap">Adobe Photoshop</span>
        </CartSkills>
        <CartSkills>
          <SiAdobeillustrator className="Logo Ai" />
          <span className="TitleSkills Ail">Adobe illustrator</span>
        </CartSkills>
      </SkillIcons>
    </SkillMain>
  );
}
export default Skills;
