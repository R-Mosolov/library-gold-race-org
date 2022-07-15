import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Selector } from "../";

export default {
  title: "Local Components/Selector",
  component: Selector,
} as ComponentMeta<typeof Selector>;

const Template: ComponentStory<typeof Selector> = () => <Selector />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Кнопка",
};
