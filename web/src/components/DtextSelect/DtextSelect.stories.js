// import { fn } from '@storybook/test';
import { DtextSelect } from './DtextSelect';

/**
 * @typedef {import("@storybook/react").Meta<typeof DtextSelect>} Meta
 * @typedef {import("@storybook/react").StoryObj<Meta>} Story
 * @type {Meta}
 */
export default {
  title: 'Components/DtextSelect',
  component: DtextSelect,
  parameters: {
    layout: 'fullscreen',
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

    materials:[
      {
        name: "第一回",
        link: "/_1"
      },
      {
        name: "第二回",
        link: "/_2"
      },
      {
        name: "第三回",
        link: "/_3"
      },
      {
        name: "第四回",
        link: "/_4"
      },
      {
        name: "第五回",
        link: "/_5"
      },
      {
        name: "第六回",
        link: "/_6"
      },
    ],

    subjects: [
      {
        name: "研修名_1",
        link: "/ken1"
      },
      {
        name: "研修名_2",
        link: "/ken2"
      },
      {
        name: "研修名_3",
        link: "/ken3"
      },

    ]
  },
};
