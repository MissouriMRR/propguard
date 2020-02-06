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
        content:
          "Text frames render as normal text. Code blocks are specially formatted"
      },
      {
        type: "code",
        content: `
codeBlock = True
while (codeBlock = True):
  renderCodeBlock();
        `
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
        content:
          "There's not much left to this tutorial. But we do have some todos."
      },
      {
        type: "text",
        content: "* Figure out a way to store code blocks with newlines."
      },
      {
        type: "text",
        content: "* Implement scrolling for content that is too long."
      },
      {
        type: "text",
        content: "* Allow images to be used"
      },
      {
        type: "text",
        content: "* Syntax highlighting for code blocks?"
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
        content: "This is the last step."
      }
    ]
  }
];
