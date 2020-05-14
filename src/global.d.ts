import "reactn";

/*
  This sets the shape of our global state since we want our global
  state to be typed. Should be the same shape as the global object
  initialized in src/pages/index.tsx
*/
declare module "reactn/default" {
  export interface State {
    tutorialName: string;
    tutorialStep: number;
    selectorDisplay: boolean;
    tutorialDisplay: boolean;
    runOutput: boolean;
    output: {
      correct: boolean;
      message: string;
      droneTask: string;
    };
  }
}
