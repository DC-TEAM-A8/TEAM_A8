// import { fn } from '@storybook/test';
import { Dtext } from './Dtext';

/**
 * @typedef {import("@storybook/react").Meta<typeof Dtext>} Meta
 * @typedef {import("@storybook/react").StoryObj<Meta>} Story
 * @type {Meta}
 */
export default {
  title: 'Components/Dtext',
  component: Dtext,
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

/** @type {Story} */
export const Primary = {
  args: {
    // コンポーネントに引数がある場合、以下に追加
    // backgroundColor: 'red',
    subjects: [
      {
        name: "JS",
        link: "/js"
      },
      {
        name: "TS",
        link: "/ts"
      },
      {
        name: "?S",
        link: "/_s"
      },
      {
        name: "JS",
        link: "/js"
      },
      {
        name: "TS",
        link: "/ts"
      },
      {
        name: "?S",
        link: "/_s"
      },
      {
        name: "JS",
        link: "/js"
      },
      {
        name: "TS",
        link: "/ts"
      },
      {
        name: "?S",
        link: "/_s"
      },
    ]
  },
};
