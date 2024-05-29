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
        name: "デジタル資料の活用方法",
        link: "/te"
      },
      {
        name: "エディタインストール方法",
        link: "/ts"
      },
      {
        name: "ホームページA",
        link: "/_s"
      },
      {
        name: "ホームページB",
        link: "/js"
      },
      {
        name: "ホームページC",
        link: "/ts"
      },
      {
        name: "JavaScript",
        link: "/_s"
      },
      {
        name: "Git",
        link: "/js"
      },
      {
        name: "JavaA",
        link: "/ts"
      },
      {
        name: "JavaB",
        link: "/_s"
      },
      {
        name: "ITリテラシー",
        link: "/_s"
      },
    ],

    materials:[
      {
        name: "研修資材_A",
        link: "/_a"
      },
      {
        name: "研修資材_B",
        link: "/_b"
      },
      {
        name: "研修資材_C",
        link: "/_c"
      },
      {
        name: "研修資材_D",
        link: "/_d"
      },
      {
        name: "研修資材_E",
        link: "/_e"
      },
      {
        name: "研修資材_F",
        link: "/_f"
      },
    ]
  },
};
