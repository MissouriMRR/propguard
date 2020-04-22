export const useLocalStorage = (data: any): any => {
  const tutName: string =
    localStorage.getItem("tutName") ||
    data.allExampleGqlJson.nodes[0].tutorial_name;

  const tutStepString: string = localStorage.getItem(tutName) || "1";
  const tutStep: number = parseInt(tutStepString, 10);

  return [tutName, tutStep];
};
