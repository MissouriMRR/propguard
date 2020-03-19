import "reactn";

// This sets the shape of our global state since we want our global
// state to be typed.
declare module "reactn/default" {
  export interface State {
    step: number;
  }
}
