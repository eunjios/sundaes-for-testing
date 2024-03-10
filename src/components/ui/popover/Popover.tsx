/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { IoMdInformationCircle } from 'react-icons/io';
import { container, tooltip } from './Popover.style';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  text: string;
  size?: 'small' | 'medium' | 'large';
  background?: string;
  color?: string;
  hasIcon?: boolean;
}

function Popover({
  children,
  text = '',
  size = 'small',
  hasIcon = false,
  background = 'lightgray',
  color = 'white',
  ...props
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      css={container}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      {...props}
    >
      {children}
      {isOpen && (
        <span css={tooltip(size, background, color)}>
          {hasIcon && <IoMdInformationCircle />}
          {text}
        </span>
      )}
    </div>
  );
}

export default Popover;
