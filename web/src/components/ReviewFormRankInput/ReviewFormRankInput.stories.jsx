import { fn } from '@storybook/test';
import { ReviewFormRankInput } from './ReviewFormRankInput';
import React from 'react';

/**
 * @typedef {import("@storybook/react").Meta<typeof ReviewFormRankInput>} Meta
 * @typedef {import("@storybook/react").StoryObj<Meta>} Story
 * @type {Meta}
 */
export default {
  title: 'Components/ReviewFormRankInput',
  component: (props) => <form><ReviewFormRankInput {...props} /></form>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    // イベントがある場合、以下を追加
    onChange: fn()
  },
};

/** @type {Story} */
export const Primary = {
  args: {
    // コンポーネントに引数がある場合、以下に追加
    // backgroundColor: 'red',
    title: "評価基準名"
  },
};
