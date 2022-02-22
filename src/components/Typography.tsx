import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {
  Caption as PaperCaption,
  Subheading as PaperSubheading,
  Headline as PaperHeadline,
  Title as PaperTitle,
  Paragraph as PaperParagraph,
} from 'react-native-paper';
interface IProps {
  type?: 'title' | 'headline' | 'subHeading' | 'caption' | 'paragraph';
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const Typography: React.FC<IProps> = ({
  style = {},
  type = 'title',
  children,
  ...props
}) => {
  switch (type) {
    case 'caption':
      return <Caption children={children} style={style} {...props} />;
    case 'headline':
      return <Headline children={children} style={style} {...props} />;
    case 'title':
      return <Title children={children} style={style} {...props} />;
    case 'paragraph':
      return <Paragraph children={children} style={style} {...props} />;
    case 'subHeading':
      return <SubHeading children={children} style={style} {...props} />;
  }
};

const Caption: React.FC<IProps> = ({children, ...props}) => {
  return <PaperCaption {...props}>{children}</PaperCaption>;
};
const Headline: React.FC<IProps> = ({children, ...props}) => {
  return <PaperHeadline {...props}>{children}</PaperHeadline>;
};
const Title: React.FC<IProps> = ({children, ...props}) => {
  return <PaperTitle {...props}>{children}</PaperTitle>;
};
const Paragraph: React.FC<IProps> = ({children, ...props}) => {
  return <PaperParagraph {...props}>{children}</PaperParagraph>;
};
const SubHeading: React.FC<IProps> = ({children, ...props}) => {
  return <PaperSubheading {...props}>{children}</PaperSubheading>;
};

export default Typography;
export {Caption, Headline, Paragraph, Title, SubHeading};
