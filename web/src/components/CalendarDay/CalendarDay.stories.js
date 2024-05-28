import { fn } from '@storybook/test';
import { CalendarDay } from './CalendarDay';

/**
 * @typedef {import("@storybook/react").Meta<typeof CalendarDay>} Meta
 * @typedef {import("@storybook/react").StoryObj<Meta>} Story
 * @type {Meta}
 */
export default {
  title: 'Components/CalendarDay',
  Description: "カレンダーコンポーネントの日付部分を表示するコンポーネント",
  component: CalendarDay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    // イベントがある場合、以下を追加
    onClick: fn()
  },
};

/** @type {Story} */
export const Primary = {
  args: {
    status: [true, false],
    date: new Date(),
    className: ""
  },
};
