import type { FC } from 'react';
import { LinkRow, PromptText, StyledButtonLink } from './styled';
import type { PromptLinkProps } from './types';

export const PromptLink: FC<PromptLinkProps> = ({ text, linkText, onClick }) => (
  <LinkRow>
    <PromptText>{text}</PromptText>
    <StyledButtonLink onClick={onClick}>{linkText}</StyledButtonLink>
  </LinkRow>
);
