// import { fn } from '@storybook/test';
import { TopDate } from './TopDate';

export default {
  title: 'Components/TopDate',
  component: TopDate,
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
    today: ''
  },
};
