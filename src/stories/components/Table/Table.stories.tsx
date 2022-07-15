import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table } from "..";

export default {
  title: "Local Components/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = () => <Table />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Таблица",
};
