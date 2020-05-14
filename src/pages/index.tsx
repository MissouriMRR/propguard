import React, { setGlobal } from "reactn";
import { TutorialApp } from "../components/app";
import { useLocalStorageView } from "../components/hooks/index";

const [selectorView] = useLocalStorageView();

/*
  Initialize global state here. Define types/shape for global state in
  src/global.d.ts

  TODO: Parameters documentation
*/
setGlobal({
  tutorialName: localStorage.getItem("tutName") || "Hello Data",
  tutorialStep: 1,
  selectorDisplay: selectorView === "true",
  tutorialDisplay: selectorView === "false",
  runOutput: false,
  output: {
    correct: false,
    string: "",
    droneTask: ""
  }
});

const IndexPage = (): JSX.Element => <TutorialApp />;

export default IndexPage;
