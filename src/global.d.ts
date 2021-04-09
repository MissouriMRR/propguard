import "reactn";

import { EditorStep } from "./types/editorTypes";

/*
  This sets the shape of our global state since we want our global
  state to be typed. Should be the same shape as the global object
  initialized in src/pages/index.tsx
  TODO: Perhaps it's time to simplify this down back into local state
  or to use something like React Context
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
      step: number;
      saved: boolean;
    };
    editorSteps: EditorStep[];
  }
}
