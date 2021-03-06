import { colors } from "@/styles/colors";
import styled from "@emotion/styled";

export const Form = styled.form`
  padding: 10px 10px 10px 10px;

  border: solid 1px black;
  background-color: ${colors.mainForm};

  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Legend = styled.legend`
  color: ${colors.mainGreen};
  font-family: Inconsolata, monospace;
`;

export const FieldSet = styled.fieldset`
  border-color: ${colors.mainGreen};
`;
