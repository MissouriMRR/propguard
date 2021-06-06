import "reactn";

import { EditorStep } from "./types/editorTypes";

/*
  This sets the shape of our global state since we want our global
  state to be typed. Should be the same shape as the global object
  initialized in src/pages/index.tsx

  Do note that there are various parts of the global state that can just
  be local if this ever gets too big
*/

export module "reactn/default" {
  export interface State {
    tutorialName: string;
    tutorialStep: number;
    componentView: string;
    output: {
      status: string;
      correct: boolean;
      message: string;
      droneTask: string;
    };
    hintModalOpen: boolean;
    showHintAnswer: boolean;
    editorState: {
      selectedTutorial: string;
      selectedTutorialDesc: string;
      step: number;
    };
    editorSteps: EditorStep[];
  }
}
