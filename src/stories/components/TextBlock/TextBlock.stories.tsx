import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextBlock } from "..";

export default {
  title: "Local Components/TextBlock",
  component: TextBlock,
} as ComponentMeta<typeof TextBlock>;

const Template: ComponentStory<typeof TextBlock> = () => <TextBlock />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Поиск",
};
