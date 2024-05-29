import { fn } from '@storybook/test';
import { OldDailyReportForm } from './OldDailyReportForm';
import { userEvent, within, expect } from '@storybook/test';

/**
 * @typedef {import("@storybook/react").Meta<typeof OldDailyReportForm>} Meta
 * @typedef {import("@storybook/react").StoryObj<Meta>} Story
 * @type {Meta}
 */
export default {
  title: 'Components/OldDailyReportForm',
  component: OldDailyReportForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    // イベントがある場合、以下を追加
    // onClick: fn()
    onSubmit: event => {
      event.preventDefault();
      fn()(event)
    },
  },
};

/** @type {Story} */
export const Primary = {
  args: {
    // コンポーネントに引数がある場合、以下に追加
    // backgroundColor: 'red',
  },
  play: async ({ reviewForm }) => {
    const canvas = within(reviewForm);
    await userEvent.type(canvas.getByTestId('review-form-title'), '5/21（月）　日報');
    await userEvent.type(canvas.getByTestId('review-form-content'), '5/21（月）　日報');
  }
};
