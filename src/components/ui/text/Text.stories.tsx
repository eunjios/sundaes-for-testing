import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'UI/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      description: '텍스트의 테마를 지정합니다.',
    },
    htmlFor: {
      table: {
        disable: true, // remove from UI
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '다양한 폰트 사이즈와 굵기로 일관된 텍스트를 만들 수 있는 컴포넌트 입니다.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Title1Story: Story = {
  name: 'Title 1',
  render: (arg) => <Text theme={arg.theme}>Toppings</Text>,
  args: {
    theme: 'title1',
  },
};

export const Text1Story: Story = {
  name: 'Text 1',
  args: { theme: 'text1' },
  render: (arg) => (
    <Text theme={arg.theme}>
      Grand Total <strong>$10.00</strong>
    </Text>
  ),
};

export const Text2Story: Story = {
  name: 'Text 2',
  args: { theme: 'text2' },
  render: (arg) => (
    <Text theme={arg.theme}>
      Toppings Total <strong>$3.00</strong>
    </Text>
  ),
};

export const Label1Story: Story = {
  name: 'Label 1',
  args: { theme: 'label1' },
  render: (arg) => <Text theme={arg.theme}>Chocolate covered pretzels</Text>,
};

export const Label2Story: Story = {
  name: 'Label 2',
  args: { theme: 'label2' },
  render: (arg) => <Text theme={arg.theme}>Chocolate covered pretzels</Text>,
};
