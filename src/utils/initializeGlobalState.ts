import { setGlobal } from "reactn";

/*
  Initialize global state here. Define types/shape for global state in
  src/global.d.ts
  We also use localstorage if the user has already used the webapp before
  which overrides some of the default global state values
*/

// Tutorialstep is stored with the key being the name of the tutorial and
// the value being the step that the user was last on.
export const initializeGlobalState = async (): Promise<void> => {
  await setGlobal({
    tutorialName: "",
    tutorialStep: 1,
    componentView: "",
    output: {
      status: "",
      correct: false,
      message: "",
      droneTask: ""
    },
    hintModalOpen: false,
    showHintAnswer: false,
    editorState: {
      selectedTutorial: "",
      selectedTutorialDesc: "",
      step: 0
    },
    editorSteps: [
      {
        stepTitle: "Step 1",
        stepHint: "",
        stepSuccess: "",
        content: [
          {
            type: "text",
            value: ""
          }
        ],
        answer: ""
      }
    ]
  });
};
