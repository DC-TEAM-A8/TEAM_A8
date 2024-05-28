// import { fn } from '@storybook/test';
import { TestTable } from './TestTable';

/**
 * @typedef {import("@storybook/react").Meta<typeof TestTable>} Meta
 * @typedef {import("@storybook/react").StoryObj<Meta>} Story
 * @type {Meta}
 */
export default {
  title: 'Components/TestTable',
  component: TestTable,
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
export const Primary = {
  args: {
    // コンポーネントに引数がある場合、以下に追加
    // backgroundColor: 'red',
    tests: [
      {
        name: "foo",
        url : "",
        time: 10,
        passing_score: 80,
        max_score: 100,
      },
      {
        name: "ber",
        url : "",
        time: 10,
        passing_score: 80,
        max_score: 100,
      },
      {
        name: "foo",
        url : "",
        time: 10,
        passing_score: 80,
        max_score: 100,
      },
    ]
  },
};
