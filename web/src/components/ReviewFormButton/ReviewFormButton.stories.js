// import { fn } from '@storybook/test';
import { ReviewFormButton } from './ReviewFormButton';

/**
 * @typedef {import("@storybook/react").Meta<typeof ReviewFormButton>} Meta
 * @typedef {import("@storybook/react").StoryObj<Meta>} Story
 * @type {Meta}
 */
export default {
  title: 'Components/ReviewFormButton',
  component: ReviewFormButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    // イベントがある場合、以下を追加
    // onClick: fn()
  },
};

/** @type {Story} */
export const Default = {
  args: {
    // コンポーネントに引数がある場合、以下に追加
    // backgroundColor: 'red',
    submitted: false,
  },
};

/** @type {Story} */
export const Submitted = {
  args: {
    // コンポーネントに引数がある場合、以下に追加
    // backgroundColor: 'red',
    submitted: false,
  },
};
