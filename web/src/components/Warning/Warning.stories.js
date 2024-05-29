import { fn } from '@storybook/test';
import { Warning } from './Warning';

/**
 * @typedef {import("@storybook/react").Meta<typeof Warning>} Meta
 * @typedef {import("@storybook/react").StoryObj<Meta>} Story
 * @type {Meta}
 */
export default {
  title: 'Components/Warning',
  component: Warning,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    // イベントがある場合、以下を追加
    onClick: event => {
      event.preventDefault();
      fn()(event)
    }
  },
};

/** @type {Story} */
export const Primary = {
  args: {
    // コンポーネントに引数がある場合、以下に追加
    title: "未提出の日報があります",
    subtitle: "6月7日",
    description: "ここをクリックして提出",
  },
};
