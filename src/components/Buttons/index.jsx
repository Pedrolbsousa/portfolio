import React from "react";
import { Card, Links, List } from "./style";

function Menu({ About, Contact, Project }) {
  return (
    <>
      <List>
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
    </>
  );
}
export default Menu;
