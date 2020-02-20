const checkInput = (userInput: string, solution: string): string => {
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
      return `You have an error on line ${line} and column ${col}`;
    }

    col += 1;
  }

  return `Your code is correct!`;
};

export { checkInput };
