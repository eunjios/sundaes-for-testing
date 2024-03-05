import type { Meta, StoryObj } from '@storybook/react';
import Label2 from './Label2';

const meta: Meta<typeof Label2> = {
  title: 'ui/Texts',
  component: Label2,
};

export default meta;

type Story = StoryObj<typeof Label2>;

export const Label2Story: Story = {
  name: 'Label2',
  render: () => <Label2>Chocolate covered pretzels</Label2>,
  parameters: {
    docs: {
      description: {
        story: 'Label2 는 토핑 제목과 같이 작고 굵은 텍스트를 표현합니다.',
      },
    },
  },
};
