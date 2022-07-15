import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu } from "..";

export default {
  title: "library.gold-race.org/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = () => <Menu />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Поиск",
};
