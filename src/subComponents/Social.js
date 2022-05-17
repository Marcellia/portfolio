import React from "react";
import { NavLink } from "react-router-dom";
import { Github, Medium, LinkedIn, CV, YinYang } from "../components/AllSvgs";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";
import { useState } from "react";

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: scroll;
  position: absolute;
  bottom: 0;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const Social = (props) => {
  return (
    <div>
      <SocialIcons props={props}>
        <div>
          <NavLink
            style={{ color: "inherit" }}
            target="_blank"
            to={{
              pathname:
                "https://marcellia.github.io/AnkitaZaveri/Ankita%20Zaveri%20(1).docx.pdf",
            }}
          >
            <CV
              width={25}
              height={25}
              fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
            ></CV>
          </NavLink>
        </div>
        <div>
          <NavLink
            style={{ color: "inherit" }}
            target="_blank"
            to={{ pathname: "https://medium.com/@ankitazaveri.dev" }}
          >
            <Medium
              width={25}
              height={25}
              fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
            ></Medium>
          </NavLink>
        </div>
        <div>
          <NavLink
            style={{ color: "inherit" }}
            target="_blank"
            to={{ pathname: "https://github.com/Marcellia" }}
          >
            <Github
              width={25}
              height={25}
              fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
            ></Github>
          </NavLink>
        </div>
        <div>
          <NavLink
            style={{ color: "inherit" }}
            target="_blank"
            to={{ pathname: "https://www.linkedin.com/in/ankitazaveri/" }}
          >
            <LinkedIn
              width={25}
              height={25}
              fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
            ></LinkedIn>
          </NavLink>
        </div>
        <Line color={props.theme}></Line>
      </SocialIcons>
    </div>
  );
};

export default Social;
