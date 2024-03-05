import type { Meta, StoryObj } from '@storybook/react';
import Title1 from './Title1';

const meta: Meta<typeof Title1> = {
  title: 'ui/Texts',
  component: Title1,
};

export default meta;

type Story = StoryObj<typeof Title1>;

export const Title1Story: Story = {
  name: 'Title1',
  render: () => <Title1>Chocolate covered pretzels</Title1>,
  parameters: {
    docs: {
      description: {
        story:
          'Title1 은 각 섹션의 제목을 표현합니다. (ex. Scoops, Toppings, ...)',
      },
    },
  },
};
