import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Searcher } from "..";

export default {
  title: "Local Components/Searcher",
  component: Searcher,
} as ComponentMeta<typeof Searcher>;

const Template: ComponentStory<typeof Searcher> = () => <Searcher />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Поиск",
};
