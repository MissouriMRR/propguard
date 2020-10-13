import "reactn";

/*
  This sets the shape of our global state since we want our global
  state to be typed. Should be the same shape as the global object
  initialized in src/pages/index.tsx

  State object descriptions

  tutorialName - The name of the tutorial that the user has selected
  tutorialStep - The step of the tutorial the user is on.
  selectorDisplay: Whether or not the tutorial selector component is displayed
  tutorialDisplay: Whether or not the tutorial step component is displayed
  output - Object that represents the output state
    status - A string that is "", "Loading", "Failure", or "Successful" that
             gives the status of the output
    correct - Boolean for whether or not the user's answer was correct
    message - The text that gets displayed on the output console
    droneTask - String representing a function of what a drone should do
*/
export declare module "reactn/default" {
  interface State {
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
  }
}
