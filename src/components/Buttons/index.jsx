import React, { useState } from "react";
import { Card, Links, List, MobileMenuIcon } from "./style";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Menu() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <List className={isMobile ? "False" : "True"}>
        <Card>Inicio</Card>
        <Links href="#Projetos">
          <Card>Projetos</Card>
        </Links>

        <Links href="#SobreMin">
          <Card>Sobre mim</Card>
        </Links>

        <Links href="#Contato">
          <Card>Contato</Card>
        </Links>
      </List>
      <MobileMenuIcon onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <AiOutlineClose /> : <AiOutlineMenu />}
      </MobileMenuIcon>
    </>
  );
}
export default Menu;
