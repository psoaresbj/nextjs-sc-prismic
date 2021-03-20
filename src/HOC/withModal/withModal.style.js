import { colors } from '../../theme';
import { ease, mq, transitions } from 'styled-gen';
import { position, rgba, size } from 'polished';
import styled, { css } from 'styled-components';

const ModalBackdrop = styled.div`
  ${position('fixed', 0)};
  ${size('100%')};
  ${transitions(['opacity', 'visibility'], 250, ease.inOutSine)};

  background-color: ${rgba(colors.n07, 0.2)};
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  z-index: 0;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

const ModalCloseButton = styled.a`
  ${position('absolute', '1.5rem', '1.5rem', null, null)};
  ${size('2rem')};

  align-items: center;
  color: ${rgba(colors.n07, 0.32)};
  display: inline-flex;
  justify-content: center;
  z-index: 10;

  ${mq.tabletLandscape(css`
    &:hover {
      color: ${rgba(colors.n07, 0.5)};
    }
  `)}
`;

const ModalContent = styled.div`
  ${size('100%')}
  ${transitions(['opacity', 'transform', 'visibility'], 500, ease.inOutCubic)};

  background-color: ${colors.n01};
  box-shadow: 0 0 2rem ${rgba(colors.n07, 0.24)};
  margin: auto;
  opacity: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  transform: translate3d(0, 3rem, 0);
  visibility: hidden;
  z-index: 1;

  -webkit-overflow-scrolling: touch;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      transform: none;
      visibility: visible;
    `}

  ${mq.tablet(css`
    border-radius: 1rem;
    width: 25rem;
    height: auto;

    -webkit-overflow-scrolling: unset;
  `)}
`;

const ModalWrapper = styled.div`
  ${position('fixed', 0)};

  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 9999;
`;

export { ModalBackdrop, ModalCloseButton, ModalContent, ModalWrapper };
