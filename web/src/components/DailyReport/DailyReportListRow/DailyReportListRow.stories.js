// import { fn } from '@storybook/test';
import { DailyReportListRow } from './DailyReportListRow';
export default {
  title: 'Components/DailyReportListRow',
  component: DailyReportListRow,
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
    reportData: {
      title: '別のレポート',
      text: 'これは別のレポートです。',
    },
    onEdit: () => console.log('編集ボタンがクリックされました'),
    onDelete: () => console.log('削除ボタンがクリックされました'),
  },
};
