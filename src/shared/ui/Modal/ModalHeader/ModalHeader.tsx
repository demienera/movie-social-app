import type { FC } from 'react';
import { BackButton } from '../../Buttons/BackButton';
import { CloseButton } from '../../Buttons/CloseButton';
import type { ModalHeaderProps } from './types';
import { ButtonsRow, LeftSection, ModalTitle, RightSection, Wrapper } from './styled';

export const ModalHeader: FC<ModalHeaderProps> = ({ title, showBack = false, id }) => {
  return (
    <Wrapper>
      <ButtonsRow>
        <LeftSection>{showBack && <BackButton />}</LeftSection>
        <RightSection>
          <CloseButton />
        </RightSection>
      </ButtonsRow>
      {title && <ModalTitle id={id}>{title}</ModalTitle>}
    </Wrapper>
  );
};
