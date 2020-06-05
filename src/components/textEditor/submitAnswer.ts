interface ResultType {
  message: string;
  correct: boolean;
}

// Checks to see if the user's solution from the TextEditor component matches
// the actual solution from the tutorial data files
const submitAnswer = (
  userInput: string,
  solutionList: Array<string>
): ResultType => {
  let index = 0;
  let line = 1;
  let col = 1;

  // Splits user input by line using regex for both Windows/Mac line endings
  const userInputList = userInput
    .split(/\r\n|\n/g)
    .filter(element => element !== "");

  for (let i = 0; i < solutionList.length; i += 1) {
    if (userInputList[i] === "") {
      line += 1;
      userInputList.splice(i, 1);
    }

    // Return if the user is correct so far but isn't fully finished
    if (i >= userInputList.length && i < solutionList.length) {
      return {
        message:
          "Your code looks good so far but you need a few more lines to complete it.",
        correct: false
      };
    }

    index = 0;
    col = 0;

    // Check current line of user input with current line of solution
    while (index < solutionList[i].length) {
      // Return if the user's answer differs from the tutorial file solution
      if (userInputList[i][index] !== solutionList[i][index]) {
        return {
          message: `You have an error on line ${line} and column ${col}.\nSolution Hint: '${solutionList[i]}'`,
          correct: false
        };
      }

      index += 1;
      col += 1;
    }
  }

  // No differences found in code. The output message will be determined
  // by the tutorial data files instead of this function.
  return {
    message: "",
    correct: true
  };
};

export { submitAnswer };
