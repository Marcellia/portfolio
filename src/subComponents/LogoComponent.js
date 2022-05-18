import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Logo = styled.h1`
  /* display: inline-block; */
  position: fixed;
  left: 1rem;
  top: 1rem;

  font-family: "Pacifico", cursive;
  z-index: 4;
  width: 25%;
`;

const LogoComponent = () => {
  return <Logo >ЛZ</Logo>;
};

export default LogoComponent;
