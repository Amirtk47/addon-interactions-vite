import React from "react";
import { screen, userEvent, within } from "@storybook/testing-library";
import Inputs from "../Inputs";
import { expect } from "@storybook/jest";

export default {
  title: "Inputs",
  component: Inputs,
};

const Template = (args) => <Inputs />;
export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const name = await canvas.getByTestId("name");
  await userEvent.type(name, "Amir", {
    delay: 100,
  });
  const lastName = await canvas.getByTestId("lastName");
  await userEvent.type(lastName, "Torkani", {
    delay: 100,
  });
  //   await expect(name).toBeInTheDocument();
  //   await expect(lastName).toBeInTheDocument();
};
