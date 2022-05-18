import React from "react";

import styled from "styled-components";


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

export const BlogPage = () => {


  return (
    <MainContainer>
     
      <h1>BlogPage</h1>
    </MainContainer>
  );
};
