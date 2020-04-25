import { Data } from "../types/index";

export const useLocalStorage = (
  data: Data
): [string, number, Function, Function] => {
  const tutName: string =
    localStorage.getItem("tutName") ||
    data.allExampleGqlJson.nodes[0].tutorial_title;

  const tutStepString: string = localStorage.getItem(tutName) || "1";
  const tutStep: number = parseInt(tutStepString, 10);

  const setCurrentTutorial = (title: string): void => {
    localStorage.setItem("tutName", title);
  };

  const setStep = (title: string, step: number): void => {
    localStorage.setItem(title, step.toString());
  };

  return [tutName, tutStep, setCurrentTutorial, setStep];
};

export const useLocalStorageView = (): [string, Function] => {
  const selectorView = localStorage.getItem("selectorView") || "true";

  const setSelectorView = (value: string): void => {
    localStorage.setItem("selectorView", value);
  };

  return [selectorView, setSelectorView];
};
