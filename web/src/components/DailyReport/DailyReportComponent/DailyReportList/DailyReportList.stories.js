// import { fn } from '@storybook/test';
import { DailyReportList } from './DailyReportList';

export default {
  title: 'Components/DailyReportComponent/DailyReportList',
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
        title: '',
        text: ''
      },
    ],
    onEdit: () => console.log(''),
    onDelete: () => console.log(''),
  },
};
