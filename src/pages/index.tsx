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

setGlobal({
  tutorialName: localStorage.getItem("tutName") || "Hello Data",
  tutorialStep: localStorage.getItem(
    localStorage.getItem("tutName") || "Hello Data"
  ),
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
