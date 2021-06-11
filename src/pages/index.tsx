import React, { useEffect, useGlobal } from "reactn";

import { initializeGlobalState } from "../utils/initializeGlobalState";
import { TutorialApp } from "../components/tutorialApp";
import { useLocalStorageView } from "../components/hooks/index";
import { defaultTutorial } from "../constants";

import "../styles/normalize.css";

initializeGlobalState();

const IndexPage = (): JSX.Element => {
  const [, setTutorialName] = useGlobal("tutorialName");
  const [, setTutorialStep] = useGlobal("tutorialStep");
  const [, setComponentView] = useGlobal("componentView");

  // Wrap all localStorage operations in a useEffect hook since Gatsby
  // is server-side rendered/generated
  useEffect(() => {
    const [componentViewSave] = useLocalStorageView();
    const localTutorialName =
      localStorage.getItem("tutName") || defaultTutorial;
    const localTutorialStep = parseInt(
      localStorage.getItem(localTutorialName) || "1",
      10
    );

    setTutorialName(localTutorialName);
    setTutorialStep(localTutorialStep);
    setComponentView(componentViewSave);
  }, []);

  return <TutorialApp />;
};

export default IndexPage;
