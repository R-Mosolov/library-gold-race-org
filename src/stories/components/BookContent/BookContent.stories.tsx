import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BookContent } from "..";

export default {
  title: "library.gold-race.org/BookContent",
  component: BookContent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BookContent>;

const Template: ComponentStory<typeof BookContent> = () => <BookContent />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Кнопка",
};
