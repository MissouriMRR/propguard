export interface Content {
  type: string;
  value: string;
}

export interface Instruction {
  step: number;
  title: string;
  type: string;
  content: Array<Content>;
}

export interface Tutorial {
  id: string;
  tutorial_title: string;
  instructions: Array<Instruction>;
}
