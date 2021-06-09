import React, { useGlobal } from "reactn";

import { initializeGlobalState } from "../utils/initializeGlobalState";
import { EditorWelcome } from "../components/editorWelcome";
import { TutEditor } from "../components/tutorialEditor";

import "../styles/normalize.css";

initializeGlobalState();

const EditorPage = (): JSX.Element => {
  const [editorState] = useGlobal("editorState");

  return (
    <>
      {editorState.selectedTutorial === "" ? <EditorWelcome /> : <TutEditor />}
    </>
  );
};

export default EditorPage;
