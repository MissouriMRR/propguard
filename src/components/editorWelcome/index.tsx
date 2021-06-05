import React, { useGlobal, useRef } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";

import { Navbar } from "../navbar";

import {
  accent,
  background,
  codeColor,
  grey,
  textPrimary,
  textSecondary
} from "../../constants";
import { Instruction } from "../../types";
import { EditorStep } from "../../types/editorTypes";

const StyledEditorContainer: AnyStyledComponent = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-items: stretch;
  background: ${background};
  overflow: auto;
`;

const StyledWelcomeContainer: AnyStyledComponent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    color: ${textPrimary};
    font-size: 24px;
    margin: 0 0 0.5rem 0;
  }
`;

const StyledWelcomeHeader: AnyStyledComponent = styled.header`
  padding: 1rem;
  border: 1px solid ${grey};
  border-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWelcomeSection: AnyStyledComponent = styled.main`
  padding: 4rem 4rem;
  display: flex;
  flex-direction: row;
  justify-content: stretch;

  h1 {
    color: ${textPrimary};
    font-size: 48px;
    margin-bottom: 1rem;
  }

  p,
  ul {
    color: ${textSecondary};
  }
`;

const StyledWelcomeInfo: AnyStyledComponent = styled.div`
  flex: 2;
  padding-right: 2rem;
`;

const StyledLink: AnyStyledComponent = styled.a`
  color: ${accent};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const StyledCard: AnyStyledComponent = styled.div`
  max-width: 800px;
  margin: 2rem 4rem 2rem 0;
  padding: 1rem;
  background: ${codeColor};
  border-radius: 2px;
`;

const StyledWelcomeSidebar: AnyStyledComponent = styled.div`
  flex: 1;
`;

// TODO: Drag and drop support
const EditorWelcome: React.FC = () => {
  const [editorState, setEditorState] = useGlobal("editorState");
  const [, setEditorSteps] = useGlobal("editorSteps");
  const uploadInput = useRef<HTMLInputElement>(null);

  const createNewTutorial = (): void => {
    // Change the view from the editor welcome screen to the tutorial editor
    setEditorState({ ...editorState, selectedTutorial: "New Tutorial" });
  };

  const uploadNewTutorial = (): void => {
    if (uploadInput.current !== null) {
      uploadInput.current.click();
    }
  };

  const handleUpload = async (): Promise<void> => {
    if (uploadInput.current?.files !== null) {
      // Lazy way of making sure that no errors occur due to improperly
      // formatted JSON files
      try {
        const uploadedText = await uploadInput.current?.files[0].text();

        if (!uploadedText) {
          throw Error("Looks like your file is empty");
        }

        const jsonifiedData = JSON.parse(uploadedText);

        // Load in the instructions of the tutorial file into the tutorial editor
        const convertedInstructions = jsonifiedData.instructions.map(
          (instruction: Instruction): EditorStep => ({
            stepTitle: instruction.title,
            stepHint: instruction.hint,
            stepSuccess: instruction.output.successMessage,
            content: instruction.content,
            answer: instruction.answer.join("\n")
          })
        );
        setEditorSteps(convertedInstructions);
        // Load in the basic information of the tutorial file into the editor
        // Also change the view to the tutorial editor
        setEditorState({
          ...editorState,
          selectedTutorial: jsonifiedData.tutorialTitle,
          selectedTutorialDesc: jsonifiedData.description
        });
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <StyledEditorContainer>
      <Navbar />
      <StyledWelcomeContainer>
        <StyledWelcomeHeader>
          <h2>Tutorial Editor</h2>
        </StyledWelcomeHeader>
        <StyledWelcomeSection>
          <StyledWelcomeInfo>
            <h1>Propguard Editor</h1>
            <p>Pass the torch to the next generation by writing tutorials.</p>
            <StyledCard>
              <h2>Modify</h2>
              <p>Modification features are coming soon!</p>
            </StyledCard>
            <StyledCard>
              <h2>Create</h2>
              <StyledLink onClick={createNewTutorial}>
                Create a brand new tutorial from scratch
              </StyledLink>
            </StyledCard>
            <StyledCard>
              <h2>Upload</h2>
              <StyledLink onClick={uploadNewTutorial}>
                Upload an existing JSON tutorial.
              </StyledLink>
              <input
                type="file"
                // style={{ display: "none" }}
                accept=".json"
                ref={uploadInput}
                onChange={handleUpload}
              />
            </StyledCard>
          </StyledWelcomeInfo>
          <StyledWelcomeSidebar>
            <h2>Need to update propguard?</h2>
            <p>
              <StyledLink
                href="https://github.com/MissouriMRR/propguard/blob/master/contributing-tutorials.md"
                target="blank"
              >
                Click here
              </StyledLink>{" "}
              for instructions on updating the live Propguard instance or
              contact one of the maintainers below.
            </p>
            <ul>
              <li>Tommy Dong</li>
              <li>Henri Evjen</li>
              <li>Jack Novatny</li>
            </ul>
          </StyledWelcomeSidebar>
        </StyledWelcomeSection>
      </StyledWelcomeContainer>
    </StyledEditorContainer>
  );
};

export { EditorWelcome };
