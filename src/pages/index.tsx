import React, { setGlobal } from "reactn";
import { TutorialApp } from "../components/app";
import { useLocalStorageView } from "../components/hooks/index";

/*
  Initialize global state here. Define types/shape for global state in
  src/global.d.ts
  We also use localstorage if the user has already used the webapp before
  which overrides some of the default global state values

  TODO: Add a proper placeholder tutorial
*/

const [selectorView] = useLocalStorageView();

// TODO: Get tutorial step from localStorage
// FIXME: Fix the huge redundancy created by using both localstorage and global state
setGlobal({
  tutorialName: localStorage.getItem("tutName") || "Hello Data",
  tutorialStep: 1,
  selectorDisplay: selectorView === "true",
  tutorialDisplay: selectorView === "false",
  output: {
    status: "",
    correct: false,
    message: "",
    droneTask: ""
  }
});

const IndexPage = (): JSX.Element => <TutorialApp />;

export default IndexPage;
