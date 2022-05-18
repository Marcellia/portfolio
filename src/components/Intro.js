import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/profile-img.png";
import { DarkTheme } from "./Themes";

const Box = styled(motion.div)`
  position: absolute;
  left: 25%;
  top: 25%;

  width: 65vw;
  height: 45vh;
  display: flex;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border: 2px solid;
  
  z-index: 1;
`;
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 130%;
  }
`;

const Text = styled(motion.div)`
  font-size: calc(0.5em + 1vw);

  padding: 3rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > *:nth-last-child(2) {
    margin-top: 2rem;
  }
  & > *:last-child {
    margin-top: 2rem;
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = (props) => {
  return (
    <Box
     
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          
        >
          
          <h1>Hi,</h1>
          <h3>My name is Ankita </h3>
          <h6>
            I'm a Full-Stack Developer, specializing in user experience, and
            designing simple responsive websites
          </h6>
        </Text>
      </SubBox>

      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
