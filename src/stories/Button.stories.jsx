import React from "react";
import { screen, userEvent, within } from "@storybook/testing-library";
import { Button } from "../Button";
import { expect } from "@storybook/jest";

export default {
  title: "Button",
  component: Button,
};

// export const Button1 = () => <Button label="Button1" />;
const Template = (args) => <Button {...args} />;
export const Button1 = Template.bind({});
Button1.args = {
  label: "Button1",
};

Button1.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const btn = await canvas.getByTestId("Button1");
  await userEvent.click(btn);
  // await expect(btn).toBeInTheDocument();
};
