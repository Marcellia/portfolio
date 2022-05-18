import React from "react";
import { NavLink } from "react-router-dom";
import styled, { CSS } from "styled-components";
import HomeButton from "../subComponents/HomeButton";
import LogoComponent from "../subComponents/LogoComponent";
import Social from "../subComponents/Social";
import { YinYang } from "./AllSvgs";
import { keyframes } from "styled-components";
import { useState } from "react";
import Intro from "./Intro";
import { motion } from "framer-motion";


const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "karla", sans-serif;
    font-weight: 500;
  }
`;
const Container = styled.div`
  padding: 2rem;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
`;

const Menu = styled.div`
  width: auto;
  z-index: 1;
  display: flex;

  align-items: center;
`;

const Home = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  z-index: 1;
  margin: 2rem;
`;

const BLOG = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  z-index: 1;
  margin: 2rem;
`;
const WORK = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  z-index: 1;
  margin: 2rem;
`;

const About = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  z-index: 1;
  margin: 2rem;
`;

const SkillsPage = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  z-index: 1;
  margin: 2rem;
`;

const Contact = styled(NavLink)`
  position: absolute;
  bottom: 2rem;
  right: calc(1rem + 2vw);
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  z-index: 2;
  padding: 2rem;
`;

export const Main = () => {
  return (
    <MainContainer>
      <Container>
        <Social></Social>
        <Contact
          target="_blank"
          to={{ pathname: "mailto:ankitazaveri.dev@gmail.com" }}
        >
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say hello...
          </motion.h2>
        </Contact>

        <NavBar>
          <LogoComponent></LogoComponent>
          <Menu>
            <Home to="/">
              <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                Home
              </motion.h2>
            </Home>

            <BLOG to="/BlogPage">
              <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                Blogs
              </motion.h2>
            </BLOG>
            <WORK to="/WorkPage">
              <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                Work
              </motion.h2>
            </WORK>

            <About to="/AboutPage">
              <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                About
              </motion.h2>
            </About>
            <SkillsPage to="/MySkillsPage">
              <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                MySkillsPage
              </motion.h2>
            </SkillsPage>
          </Menu>
        </NavBar>
      </Container>

      <Intro ></Intro>
    </MainContainer>
  );
};
