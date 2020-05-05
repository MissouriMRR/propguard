export interface Content {
  type: string;
  value: string;
}

export interface Instruction {
  step: number;
  title: string;
  hint: string;
  type: string;
  content: Array<Content>;
}

export interface Tutorial {
  id: string;
  tutorial_title: string;
  description: string;
  instructions: Array<Instruction>;
}

export interface Instructions {
  title: string;
  content: Array<Content>;
}

export interface Node {
  tutorial_title: string;
  description: string;
  instructions?: Array<Instructions>;
}

export interface AllExampleGqlJson {
  nodes: Array<Node>;
}

export interface Data {
  allExampleGqlJson: AllExampleGqlJson;
}
