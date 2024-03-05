import type { Meta, StoryObj } from '@storybook/react';
import Label1 from './Label1';

const meta: Meta<typeof Label1> = {
  title: 'ui/Texts',
  component: Label1,
};

export default meta;

type Story = StoryObj<typeof Label1>;

export const Label1Story: Story = {
  name: 'Label1',
  render: () => <Label1>Chocolate covered pretzels</Label1>,
  parameters: {
    docs: {
      description: {
        story:
          'Label1 은 스쿱 제목과 같이 일반 크기에 굵은 텍스트를 표현합니다.',
      },
    },
  },
};
