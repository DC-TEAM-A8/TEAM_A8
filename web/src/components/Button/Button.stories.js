//@ts-check

import { fn } from '@storybook/test';
import { Button } from './Button';

/**
 * @typedef { import("@storybook/react").Meta<typeof Button> } Meta
 * @typedef { import("@storybook/react").StoryObj<Meta> } Story
 * @type {Meta}
 */
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args: {
    // イベントがある場合、以下を追加
    onClick: fn()
  },
};

/** @type {Story} */
export const PrimaryButton = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

/** @type {Story} */
export const PrimaryLink = {
  args: {
    children: "Primary Link Button",
    variant: "primary",
    href: "#"
  },
};

/** @type {Story} */
export const SecondaryButton = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

/** @type {Story} */
export const SecondaryLink = {
  args: {
    children: "Secondary Link Button",
    variant: "secondary",
    href: "#"
  },
};

/** @type {Story} */
export const DisabledButton = {
  args: {
    children: "Disabled Button",
    variant: "disabled",
  },
};

/** @type {Story} */
export const DisabledLink = {
  args: {
    children: "Disabled Link Button",
    variant: "disabled",
    href: "#"
  },
};
