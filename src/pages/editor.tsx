import React from "react";
import styled from "styled-components";
import { Navbar } from "../components/navbar";
import "../components/app/normalize.css";

import { background, textPrimary, grey } from "../constants";

const StyledEditor = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-items: stretch;
  background: ${background};
  overflow: auto;
`;

const EditorPage = (): JSX.Element => {
  return (
    <StyledEditor>
      <Navbar />
    </StyledEditor>
  );
};

export default EditorPage;
