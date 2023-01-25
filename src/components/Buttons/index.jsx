import { Card, List } from "./style/index";
import React from "react";

function Menu({ Main, Contact, About, project }) {
  return (
    <List>
      <Card onClick={Main}>Inicio</Card>
      <Card onClick={Contact}>Projetos</Card>
      <Card onClick={About}>Sobre mim</Card>
      <Card onClick={project}>Contato</Card>
    </List>
  );
}
export default Menu;
