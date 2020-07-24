import { action } from "@storybook/addon-actions";
import React from "react";
import { NameForm } from "./NameForm";

export default { title: "Name Form Component" };

export const NameFormStory: React.FC<{}> = () => {
  return (
    <NameForm
      userName={"Bob"}
      onUserNameChange={action("onChange")}
      onNameSubmit={action("onSubmit")}
    />
  );
};