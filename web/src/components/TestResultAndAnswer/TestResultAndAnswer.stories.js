import { fn } from '@storybook/test';
import { TestResultAndAnswer } from './TestResultAndAnswer';

/**
 * @typedef {import("@storybook/react").Meta<typeof TestResultAndAnswer>} Meta
 * @typedef {import("@storybook/react").StoryObj<Meta>} Story
 * @type {Meta}
 */
export default {
  title: 'Components/TestResultAndAnswer',
  component: TestResultAndAnswer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    // イベントがある場合、以下を追加
    // onClick: fn()
    onConfirmationTestTopReturned: fn(),
  },
};

/** @type {Story} */
export const Primary = {
  args: {
    // コンポーネントに引数がある場合、以下に追加
    // backgroundColor: 'red',
    resultData: [
      {
        id: 1,
        questions: 5,
        correctanswers: '5',
        yourscore: '100%'
      },
    ]
  },
};
