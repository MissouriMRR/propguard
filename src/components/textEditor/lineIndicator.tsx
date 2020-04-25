import React, { useState, useEffect } from "react";
import styled, { AnyStyledComponent } from "styled-components";

import { grey } from "../../constants";

const NumberStrip: AnyStyledComponent = styled.div`
  height: calc(100vh - 8rem);
  width: 2rem;
  padding: 1rem 0;

  p {
    margin: 0;
    color: ${grey};
    line-height: 1.5;
    text-align: right;
    width: 1.5rem;
  }
`;

interface LineIndicatorProps {
  lineCount: number;
}

const LineIndicator: React.FC<LineIndicatorProps> = props => {
  const { lineCount } = props;
  const [numArr, setNumArr] = useState<number[]>([]);

  useEffect(() => {
    let counter = 2;
    const tempArr = [1];

    for (let i = 0; i < lineCount; i += 1) {
      tempArr.push(counter);
      counter += 1;
    }

    setNumArr(tempArr);
  }, [lineCount]);

  const numberIndicators = numArr.map(element => {
    return <p key={element}>{element}</p>;
  });

  return <NumberStrip>{numberIndicators}</NumberStrip>;
};

export { LineIndicator };
