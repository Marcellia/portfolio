import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Logo = styled.h1`
  /* display: inline-block; */
  position: fixed;
  left: 2rem;
  top: 1rem;
  color: ${(props) => (props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;
  z-index: 4;
  width: 25%;
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme}>ЛZ</Logo>;
};

export default LogoComponent;
