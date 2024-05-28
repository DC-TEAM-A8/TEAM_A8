import { fn } from '@storybook/test';
import { TestStart } from './TestStart';

export default {
  title: 'Components/TestStart',
  component: TestStart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    // イベントがある場合、以下を追加
    onTestReturned: fn(),
    onTestStarted: fn(),
  },
};

export const Primary = {
  args: {
    // コンポーネントに引数がある場合、以下に追加
    // backgroundColor: 'red',
    // subject,count
    examData: [
      {id: 1,
        questions: 5,
        timeLimit: '10分',
        passPercentage: '70%',
        retakeTime: '-時間' },
    ],
    title: "ホームページA第1回"

  },
};
