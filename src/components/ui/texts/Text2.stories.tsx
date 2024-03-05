import type { Meta, StoryObj } from '@storybook/react';
import Text2 from './Text2';

const meta: Meta<typeof Text2> = {
  title: 'ui/Texts',
  component: Text2,
};

export default meta;

type Story = StoryObj<typeof Text2>;

export const Text2Story: Story = {
  name: 'Text2',
  render: () => (
    <Text2>
      Toppings Total <strong>$1.50</strong>
    </Text2>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Text2 는 각 섹션 별 총 금액을 나타낼 때 사용합니다. `<strong>금액</strong>` 으로 금액을 강조하여 사용합니다.',
      },
    },
  },
};
