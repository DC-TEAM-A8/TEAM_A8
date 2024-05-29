import { fn } from '@storybook/test';
import { ReviewForm } from './ReviewForm';

/**
 * @typedef {import("@storybook/react").Meta<typeof ReviewForm>} Meta
 * @typedef {import("@storybook/react").StoryObj<Meta>} Story
 * @type {Meta}
 */
export default {
  title: 'Components/ReviewForm',
  component: ReviewForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    // イベントがある場合、以下を追加
    onSubmit: event => {
      event.preventDefault();
      fn()(event)
    }
  },
};

/** @type {Story} */
export const Primary = {
  args: {
    // コンポーネントに引数がある場合、以下に追加
    // backgroundColor: 'red',
    dateStr: "2024-05-24(金) 10:00:00 - 12:30:00",
    indexStr: "第12回",
    instructorName: "田中 太郎"
  },
};
