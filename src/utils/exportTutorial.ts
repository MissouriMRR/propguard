import { EditorStep } from "../types/editorTypes";

/**
 * Used to take the current state of the tutorial Editor and export it
 * into a JSON file that can be used to import a tutorial for the user.
 * Uses native JavaScript to build the JSON and then prompt the user
 * to download it.
 */
export const exportTutorial = async (
  tutName: string,
  tutDesc: string,
  tutSteps: EditorStep[]
): Promise<void> => {
  // First, convert the application state into the correct format
  // of the JSON files that we use to read in tutorials
  const newTutSteps = tutSteps.map((step: EditorStep) => {
    return {
      title: step.stepTitle,
      hint: step.stepHint,
      content: step.content,
      answer: step.answer
    };
  });

  const tutorialObject = {
    tutorialTitle: tutName,
    description: tutDesc,
    instructons: newTutSteps
  };

  const blob = new Blob([JSON.stringify(tutorialObject)], {
    type: "application/json"
  });
  const href = await URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", href);
  link.setAttribute("download", "my_data.json");
  // Apparently required to make it work on Firefox. Keeping this here
  // so we can maximize compatibility.
  document.body.appendChild(link);
  // This will prompt the user to download the exported tutorial
  link.click();
  document.body.removeChild(link);
};
