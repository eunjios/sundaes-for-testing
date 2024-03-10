import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ margin: '24px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '로고 (직접 만든) 를 포함한 헤더 컴포넌트 입니다.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
