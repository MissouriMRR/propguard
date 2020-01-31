export default [
  {
    type: "frame",
    step: 1,
    title: "Introduction",
    instructions: [
      {
        type: "text",
        content: "Welcome to the tutorial. Here is an example of a code block."
      },
      {
        type: "code",
        content: `
          This is a code block. We'll write some Python

          value = True
          if (value == True):
            print("Hello World!")
        `
      },
      {
        type: "text",
        content:
          "You can mix text and code blocks to make up a single tutorial frame."
      }
    ]
  },
  {
    type: "frame",
    step: 2,
    title: "Step 2",
    instructions: [
      {
        type: "text",
        content: "Instruction frames are used to separate each step."
      },
      {
        type: "text",
        content: "We ."
      }
    ]
  },
  {
    type: "frame",
    step: 3,
    title: "Step 3",
    instructions: [
      {
        type: "text",
        content: "Instruction frames are used to separate each step."
      },
      {
        type: "text",
        content: "We ."
      }
    ]
  },
  {
    type: "frame",
    step: 4,
    title: "Step 4",
    instructions: [
      {
        type: "text",
        content: "Instruction frames are used to separate each step."
      },
      {
        type: "text",
        content: "We ."
      }
    ]
  }
];
