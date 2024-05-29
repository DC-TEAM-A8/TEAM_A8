// import { fn } from '@storybook/test';
import { DailyReportDeleteComfirm } from './DailyReportDeleteComfirm';

export default {
  title: 'Components/DailyReportDeleteComfirm',
  component: DailyReportDeleteComfirm,
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

export const Primary = {
  args: {
    // コンポーネントに引数がある場合、以下に追加
    // backgroundColor: 'red',
  },
};
