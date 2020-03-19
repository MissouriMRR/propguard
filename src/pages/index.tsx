import React, { setGlobal } from "reactn";

import { TutorialApp } from "../components/app";

setGlobal({
  step: 1
});

const IndexPage = (): JSX.Element => <TutorialApp />;

export default IndexPage;
