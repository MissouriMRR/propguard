interface ResultType {
  message: string;
  correct: boolean;
}

// TODO: Documentation
const submitAnswer = (
  userInput: string,
  solutionList: Array<string>
): ResultType => {
  let index = 0;
  let line = 1;
  let col = 1;

  // Store user input into an array
  const userInputList = userInput.split("\n");

  // Iterate through each line of the solution and compare it to the user
  for (let i = 0; i < solutionList.length; i += 1) {
    // Lines that don't have any text in them (like newlines) in the user
    // input count as a line but do not get checked against the solution
    if (userInputList[i] === "") {
      line += 1;
      userInputList.splice(i, 1);
    }

    // In the case that the the user is correct line wise but doesn't have
    // the entire block of code finished
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
      // If we see a mismatch between the our input and the solution
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

  return {
    message: "",
    correct: true
  };
};

export { submitAnswer };
