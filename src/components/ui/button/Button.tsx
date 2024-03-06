import PrimaryButton from './Primary';
import SecondaryButton from './Secondary';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  theme: 'primary' | 'secondary';
  children: React.ReactNode;
}

function Button({ theme, children, ...props }: Props) {
  switch (theme) {
    case 'primary':
      return <PrimaryButton {...props}>{children}</PrimaryButton>;
    case 'secondary':
      return <SecondaryButton {...props}>{children}</SecondaryButton>;
  }
}

export default Button;
