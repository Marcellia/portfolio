import React from "react";
import { NavLink } from "react-router-dom";
import { Github, Medium, LinkedIn, CV } from "../components/AllSvgs";
import styled, { useTheme } from "styled-components";
import { withTheme } from "styled-components";


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
`

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${({ theme }) => theme.text};
`



const Social = () => {

  const theme = useTheme()

  return (
    <div>
      <SocialIcons>
        <div>
          <NavLink
          style={{ fill: theme.text }}
            target="_blank"
            to={{
              pathname:
                "https://marcellia.github.io/AnkitaZaveri/Ankita%20Zaveri%20(1).docx.pdf",
            }}
          >
            <CV  width={25} height={25}></CV>
          </NavLink>
        </div>
        <div>
          <NavLink
           style={{ fill: theme.text }}
            target="_blank"
            to={{ pathname: "https://medium.com/@ankitazaveri.dev" }}
          >
            <Medium width={25} height={25}></Medium>
          </NavLink>
        </div>
        <div>
          <NavLink
          style={{ fill: theme.text }}
            target="_blank"
            to={{ pathname: "https://github.com/Marcellia" }}
          >
            <Github width={25} height={25}></Github>
          </NavLink>
        </div>
        <div>
          <NavLink
          style={{ fill: theme.text }}
            target="_blank"
            to={{ pathname: "https://www.linkedin.com/in/ankitazaveri/" }}
          >
            <LinkedIn width={25} height={25}></LinkedIn>
          </NavLink>
        </div>
        <Line></Line>
      </SocialIcons>
    </div>
  );
};

export default Social;
