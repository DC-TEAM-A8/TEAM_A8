// import { fn } from '@storybook/test';
import { Home } from './Home';

/**
 * @typedef {import("@storybook/react").Meta<typeof Home>} Meta
 * @typedef {import("@storybook/react").StoryObj<Meta>} Story
 * @type {Meta}
 */
export default {
  title: 'Components/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen'
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
    attendanceData: [
      {
        date: new Date("2024-06-01"),
        status: [true, false]
      },
      {
        date: new Date("2024-06-02"),
        status: [false, true]
      }
    ],
    schedule: [
      {
        date: new Date("2024-05-29"),
        scheduleName: ["HTML", "Java応用"]
      },
      {
        date: new Date("2024-06-01"),
        scheduleName: ["JavaScript", "Java応用"]
      },
    ]
  },
};
