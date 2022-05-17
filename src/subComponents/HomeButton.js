import React from "react";
import styled from "styled-components";
import Homebttn from "../components/AllSvgs";

const Home = styled.button`
  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;
  &:hover {
    background-color: rgb(255, 219, 88);

    box-shadow: 0 0 8px rgb(255, 219, 88);
  }

  & > *:first child {
    text-decoration: none;
    color: inherit;
  }
`;

const HomeButton = () => {
  return (
    <Home>
      <Homebttn width={25} height={25} fill="currentColor" />
    </Home>
  );
};

export default HomeButton;
