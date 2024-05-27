// import { fn } from '@storybook/test';
import { Sample } from './Sample';

export default {
  title: 'Components/Sample',
  component: Sample,
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
    text: "Hello, World!"
  },
};
