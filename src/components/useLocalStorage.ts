import { Data } from "./types/index";

export const useLocalStorage = (data: Data): [string, number] => {
  const tutName: string =
    localStorage.getItem("tutName") ||
    data.allExampleGqlJson.nodes[0].tutorial_title;

  const tutStepString: string = localStorage.getItem(tutName) || "1";
  const tutStep: number = parseInt(tutStepString, 10);

  return [tutName, tutStep];
};
