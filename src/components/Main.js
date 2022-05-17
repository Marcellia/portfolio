import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HomeButton from "../subComponents/HomeButton";
import LogoComponent from "../subComponents/LogoComponent";
import Social from "../subComponents/Social";
import { YinYang } from "./AllSvgs";
import { keyframes } from "styled-components";
import { useState } from "react";
import Intro from "./Intro";
import { motion } from "framer-motion";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
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
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  margin: 2rem;
`;

const BLOG = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  margin: 2rem;
`;
const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  margin: 2rem;
`;

const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  margin: 2rem;
`;

const MySkillsPage = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  margin: 2rem;
`;

const Center = styled.div`
  cursor: pointer;
  z-index: 3;
  color: ${(props) => (props.click ? "white" : "black")};
`;

const Contact = styled(NavLink)`
  position: absolute;
  bottom: 2rem;
  right: calc(1rem + 2vw);
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 2;
  padding: 2rem;
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 0;
  left: 0;
  width: ${(props) => (props.click ? "100% " : "0%")};
  height: ${(props) => (props.click ? "100% " : "0%")};
  transition: height 0.5s ease, width 1s ease 0.2s;
  z-index: 1;
`;

export const Main = () => {
  const [click, setclick] = useState(false);

  const handleClick = () => setclick(!click);

  return (
    <MainContainer>
      <Container>
        <Social theme={click ? "dark" : "light"}></Social>
        <Contact
          click={click}
          target="_blank"
          to={{ pathname: "mailto:ankitazaveri.dev@gmail.com" }}
        >
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say hello...
          </motion.h2>
        </Contact>

        <DarkDiv click={click} />

        <NavBar>
          <LogoComponent theme={click ? "dark" : "light"}></LogoComponent>
          <Menu>
            <Home to="/" click={click}>
              <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                Home
              </motion.h2>
            </Home>

            <BLOG to="/BlogPage" click={click}>
              <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                Blogs
              </motion.h2>
            </BLOG>
            <WORK to="/WorkPage" click={click}>
              <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                Work
              </motion.h2>
            </WORK>

            <About to="/AboutPage" click={click}>
              <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                About
              </motion.h2>
            </About>
            <MySkillsPage to="/MySkillsPage" click={click}>
              <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                MySkillsPage
              </motion.h2>
            </MySkillsPage>

            <Center click={click} onClick={() => handleClick()}>
              <YinYang
                height="45"
                width="45"
                fill={click ? "white" : "black"}
              ></YinYang>
            </Center>
          </Menu>
        </NavBar>
      </Container>
      <Intro theme={click ? "dark" : "light"}></Intro>
    </MainContainer>
  );
};
