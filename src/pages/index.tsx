import React, { setGlobal } from "reactn";
import { TutorialApp } from "../components/app";
import { useLocalStorageView } from "../components/hooks/index";
import { defaultTutorial } from "../constants";

/*
  Initialize global state here. Define types/shape for global state in
  src/global.d.ts
  We also use localstorage if the user has already used the webapp before
  which overrides some of the default global state values
*/

const [componentViewSave] = useLocalStorageView();
const tutName = localStorage.getItem("tutName") || defaultTutorial;

// Tutorialstep is stored with the key being the name of the tutorial and
// the value being the step that the user was last on.
setGlobal({
  tutorialName: tutName,
  tutorialStep: parseInt(localStorage.getItem(tutName) || "1", 10),
  componentView: componentViewSave || "TutorialComponent",
  output: {
    status: "",
    correct: false,
    message: "",
    droneTask: ""
  }
});

const IndexPage = (): JSX.Element => <TutorialApp />;

export default IndexPage;
