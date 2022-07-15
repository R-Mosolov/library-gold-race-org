import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Pagination } from "..";

export default {
  title: "Local Components/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = () => <Pagination />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Поиск",
};
