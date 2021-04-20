export interface EditorStep {
  [key: string]: string | {};
  stepTitle: string;
  stepHint: string;
  stepSuccess: string;
  content: {
    type: string;
    value: string;
  }[];
  answer: string;
}
