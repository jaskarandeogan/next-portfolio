import React from "react";
import { Meta, Story } from "@storybook/react";
import CircularProgressBar from "../components/CircularProgressBar";
import { CircularProgressBarProps } from "@/types/components";

export default {
  title: "Components/CircularProgressBar",
  component: CircularProgressBar,
  layout: "fullscreen",
} as Meta;

const Template: Story<CircularProgressBarProps> = (args) => (
  <CircularProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <div className="flex items-center justify-center text-lg font-bold text-gray-700 rounded-full bg-white h-20 w-20 ">
      75%
    </div>
  ),
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  progressStart: 50,
  progressEnd: 75,
  barColor: "#10B981",
  className: "bg-white",
  children: (
    <div className="flex items-center justify-center text-lg font-bold text-gray-700 rounded-full bg-white h-20 w-20">
      75%
    </div>
  ),
};

export const SlowSpeed = Template.bind({});
SlowSpeed.args = {
  progressStart: 0,
  progressEnd: 90,
  speed: 50,
  barColor: "#F59E0B",
  children: (
    <div className="flex items-center justify-center text-lg font-bold text-gray-700 rounded-full bg-slate-400 h-20 w-20">
      {}
    </div>
  ),
};
