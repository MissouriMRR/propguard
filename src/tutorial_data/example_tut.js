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
        content: "* Figure out a better way to store code blocks with newlines."
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
        content:
          "This is the last step. We're gonna test out the scrolling feature."
      },
      {
        type: "text",
        content:
          "Ghost flathead warbonnet, cowfish ghost knifefish oceanic flyingfish Jack Dempsey! Black prickleback glassfish bonytongue, moonfish, duckbill eel cusk-eel goby kappy Atlantic saury eagle ray arrowtooth eel loach goby ray. Pilot fish sucker, golden loach cornetfish x-ray tetra wolf-eel blacktip reef shark."
      },
      {
        type: "code",
        content: `
codeBlock = True
while (codeBlock = True):
  renderCodeBlock();
        `
      },
      {
        type: "text",
        content: `Featherback slipmouth taimen tiger shark eulachon hillstream loach sixgill ray featherfin knifefish kissing gourami moray eel yellowtail kingfish. Dory yellowhead jawfish searobin zebra danio dusky grouper. Longnose lancetfish panga; jewfish blue shark, flat loach round stingray bigscale ghost pipefish tiger barb Bitterling Pacific salmon. Chubsucker nase, woody sculpin sailfish ling cod large-eye bream Atlantic trout deepwater cardinalfish yellowmargin triggerfish driftfish grunion, northern squawfish. Straptail stickleback Old World rivuline, "mullet dab cornetfish," ghost pipefish. Flat loach kanyu pipefish northern sea robin merluccid hake, damselfish armoured catfish, mako shark herring smelt menhaden Razorback sucker bowfin straptail guppy zebra bullhead shark.`
      }
    ]
  }
];
