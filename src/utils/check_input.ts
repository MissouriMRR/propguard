// TODO: Function should probably return line and col of error rather
// than just console.log it
const checkInput = (userInput: string, solution: string): boolean => {
  const index = 0;
  let line = 1;
  let col = 1;

  while (index < userInput.length && index < solution.length) {
    // Increment line count and reset column every time we see a newline
    if (userInput[index] === "\n") {
      line += 1;
      col = 1;
    }

    if (userInput[index] !== solution[index]) {
      console.error(`You have an error on line ${line} and column ${col}`);
      return false;
    }

    col += 1;
  }

  // console.log(line, col);

  return true;
};

export { checkInput };
