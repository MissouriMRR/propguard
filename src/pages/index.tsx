import React, { setGlobal } from "reactn";
import { TutorialApp } from "../components/app";

/*
  Initialize global state here. If you change the object's structure, such
  as adding new key value pairs pairs in the object, you will also have to
  modify the types/shape for the global object in src/global.d.ts to 
  reflect the global state object you have here.
*/
setGlobal({
  tutorialName: "Hello Data",
  tutorialStep: 1,
  selectorDisplay: "block",
  tutorialDisplay: "none"
});

const IndexPage = (): JSX.Element => <TutorialApp />;

export default IndexPage;
