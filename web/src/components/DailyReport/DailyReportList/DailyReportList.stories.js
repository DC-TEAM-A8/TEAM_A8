// import { fn } from '@storybook/test';
import { DailyReportList } from './DailyReportList';

export default {
  title: 'Components/DailyReportList',
  component: DailyReportList,
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
    reportDataList: [
      {
        title: '1',
        text: 'これは'
      },
      {
        title: '2',
        text: '別の'
      },
      {
        title: '3',
        text: 'レポートです。'
      }
    ],
    onEdit: () => console.log('編集ボタンがクリックされました'),
    onDelete: () => console.log('削除ボタンがクリックされました'),
  },
};
