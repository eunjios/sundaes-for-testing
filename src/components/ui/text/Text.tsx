import Label1 from './Label1';
import Label2 from './Label2';
import Text1 from './Text1';
import Text2 from './Text2';
import Title1 from './Title1';

interface Props extends React.HTMLAttributes<HTMLElement> {
  theme: 'title1' | 'text1' | 'text2' | 'label1' | 'label2';
  children: React.ReactNode;
  htmlFor?: string; // only for label
}

function Text({ theme, children, ...props }: Props) {
  switch (theme) {
    case 'title1':
      return <Title1 {...props}>{children}</Title1>;
    case 'text1':
      return <Text1 {...props}>{children}</Text1>;
    case 'text2':
      return <Text2 {...props}>{children}</Text2>;
    case 'label1':
      return <Label1 {...props}>{children}</Label1>;
    case 'label2':
      return <Label2 {...props}>{children}</Label2>;
    default:
      return <p {...props}>{children}</p>;
  }
}

export default Text;
