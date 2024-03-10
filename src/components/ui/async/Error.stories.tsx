import type { Meta, StoryObj } from '@storybook/react';
import Error from './Error';

const meta: Meta<typeof Error> = {
  title: 'UI/Error',
  component: Error,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '에러 발생 시 렌더링하는 컴포넌트 입니다.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
