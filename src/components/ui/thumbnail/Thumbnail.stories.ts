import type { Meta, StoryObj } from '@storybook/react';
import Thumbnail from './Thumbnail';

const meta: Meta<typeof Thumbnail> = {
  title: 'UI/Thumbnail',
  component: Thumbnail,
  tags: ['autodocs'],
  argTypes: {
    src: {
      table: {
        disabled: true,
      },
    },
    size: {
      options: [80, 160, 200, 400],
      control: { type: 'radio' },
    },
    borderRadius: {
      options: ['0', '12px', '24px', '100%'],
      control: { type: 'radio' },
    },
    isPortrait: {
      description: '세로 방향 이미지 여부 (추후 삭제될 가능성 있음)',
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '이미지를 정방형으로 나타내는 썸네일 컴포넌트 입니다.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Topping: Story = {
  args: {
    src: 'https://hips.hearstapps.com/del.h-cdn.co/assets/15/29/delish-ice-cream-toppings38.jpg?crop=1xw:0.9991735537190083xh;center,top&resize=980:*',
    size: 160,
    alt: 'chocolate covered pretzels',
    borderRadius: '12px',
    isPortrait: true,
  },
};

export const CircularLandscapeThumbnail: Story = {
  args: {
    src: 'https://northernyum.com/wp-content/uploads/2023/08/Ice-Cream-Toppings_Blog-Image5_Fruit-1024x405.jpg',
    size: 80,
    alt: 'fresh fruit',
    borderRadius: '100%',
    isPortrait: false,
  },
};
