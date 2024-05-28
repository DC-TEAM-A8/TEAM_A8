import { fn } from '@storybook/test';
import { Calendar } from './Calendar';

export default {
  title: 'Components/Calendar',
  description: 'クリック可能なカレンダーを表示するコンポーネント',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    // イベントがある場合、以下を追加
    // onClick: fn()
    onChange: fn()
  },
};

export const Primary = {
  args: {
    // コンポーネントに引数がある場合、以下に追加
    // backgroundColor: 'red',
    targetDate: new Date("2024-05-28"),
    status: [
      {
        date: new Date("2024-05-25"),
        status: [true, false]
      },
      {
        date: new Date("2024-05-26"),
        status: [true, false]
      },
      {
        date: new Date("2024-05-27"),
        status: [true, false]
      },
      {
        date: new Date("2024-05-28"),
        status: [true, false]
      },
    ]
  },
};
