// import { fn } from '@storybook/test';
import { DailyReportHome } from './DailyReportHome';

export default {
  title: 'Components/DailyReportHome',
  component: DailyReportHome,
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
        title: '２',
        text: 'home'
      },
      {
        title: '３',
        text: 'です'
      },
    ],
    onSubmit: () => console.log('submit'),
    onEdit: () => console.log('edit'),
    onDelete: () => console.log('delete'),
  },
};
