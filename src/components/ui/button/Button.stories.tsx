import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      description: '버튼의 테마를 지정합니다.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: '다양한 크기의 버튼 컴포넌트 입니다.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryButtonStory: Story = {
  name: 'Primary',
  args: {
    theme: 'primary',
  },
  render: (arg) => <Button theme={arg.theme}>Order</Button>,
};

export const PrimaryLongButtonStory: Story = {
  name: 'Primary (Long Text)',
  args: {
    theme: 'primary',
  },
  render: (arg) => (
    <Button theme={arg.theme}>{`Let's Create New Order Now`}</Button>
  ),
};

export const SecondaryButtonStory: Story = {
  name: 'Secondary',
  args: {
    theme: 'secondary',
  },
  render: (arg) => <Button theme={arg.theme}>Back</Button>,
};
