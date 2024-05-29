// import { fn } from '@storybook/test';
import { DailyReportEdit } from './DailyReportEdit';


export default {
  title: 'Components/DailyReportEdit',
  component: DailyReportEdit,
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
        text: 'テスト'
      },
      {
        title: '３',
        text: 'テキストです'
      },
    ],
    onSubmit: () => console.log('submit'),
    onEdit: () => console.log('edit'),
    onDelete: () => console.log('delete'),
    onDeleteConfirm : () => console.log("deleteConfirm"),
    onDeleteCancel : () => console.log("deleteCancel"),
  },
};
