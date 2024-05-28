// import { fn } from '@storybook/test';
import  TestSubjectSelect  from './TestSubjectSelect';

export default {
  title: 'Components/TestSubjectSelect',
  component: TestSubjectSelect,
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
    // backgroundColor: 'red',
  },
};
