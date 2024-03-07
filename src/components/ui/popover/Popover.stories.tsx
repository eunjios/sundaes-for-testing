import type { Meta, StoryObj } from '@storybook/react';
import Popover from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'UI/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    background: {
      control: { type: 'color' },
    },
    color: {
      control: { type: 'color' },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '내부 `children` 요소에 마우스를 hover 시 툴팁을 보여주는 컴포넌트 입니다. <br />우선은 Tooltip의 사이즈와 배경 및 폰트 색상을 지정할 수 있도록 구현하였습니다.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallPopoverStory: Story = {
  name: 'Small',
  args: {
    text: 'tooltip text',
    size: 'small',
    hasIcon: false,
  },
  render: (arg) => (
    <Popover {...arg}>
      <p>Here!</p>
    </Popover>
  ),
};

export const MediumPopoverStory: Story = {
  name: 'Medium',
  args: {
    text: 'tooltip text',
    size: 'medium',
    hasIcon: false,
    background: '#000',
    color: '#fff',
  },
  render: (arg) => (
    <Popover {...arg}>
      <h2>Here!</h2>
    </Popover>
  ),
};

export const LargePopoverStory: Story = {
  name: 'Large',
  args: {
    text: 'tooltip text',
    size: 'large',
    hasIcon: true,
    background: '#ff6700',
    color: '#fff',
  },
  render: (arg) => (
    <Popover {...arg}>
      <h1>Here!</h1>
    </Popover>
  ),
};
