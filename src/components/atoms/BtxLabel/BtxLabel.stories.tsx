import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BtxLabel } from "./BtxLabel";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Btx/Interactive/BtxLabel",
  component: BtxLabel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BtxLabel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BtxLabel> = (args) => (
  <BtxLabel {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Subsection = Template.bind({});
Subsection.args = {
  size: "small",
  label: "Button",
  level: "subsection",
};

export const Section = Template.bind({});
Section.args = {
  size: "small",
  label: "Button",
  level: "section",
};
