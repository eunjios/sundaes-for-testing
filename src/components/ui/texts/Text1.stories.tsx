import type { Meta, StoryObj } from '@storybook/react';
import Text1 from './Text1';

const meta: Meta<typeof Text1> = {
  title: 'ui/Texts',
  component: Text1,
};

export default meta;

type Story = StoryObj<typeof Text1>;

export const Text1Story: Story = {
  name: 'Text1',
  render: () => (
    <Text1>
      Grand Total <strong>$10.00</strong>
    </Text1>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Text1 은 모든 섹션의 총합 금액을 나타낼 때 사용합니다. `<strong>금액</strong>` 으로 금액을 강조하여 사용합니다.',
      },
    },
  },
};
