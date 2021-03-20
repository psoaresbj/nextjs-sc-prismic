import { Icon } from '../../theme/components';
import { ModalBackdrop, ModalCloseButton, ModalContent, ModalWrapper } from './withModal.style';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export const withModal = (ModalInnerContent, options = {}) =>
  class Modal extends Component {
    static propTypes = {
      controller: PropTypes.object
    };

    state = {};

    componentDidMount() {
      this.setState({ options: { ...this.state.options, ...options } });

      document.addEventListener('keydown', this.handleKeyDown, false);
    }

    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown, false);
    }

    handleClose = () => {
      const { onClose } = this.props.controller;

      return onClose();
    };

    handleKeyDown = event => {
      if (event.keyCode === 27) {
        this.handleClose();
      }
    };

    render() {
      const isActive = this.props?.controller?.isActive;

      return (
        <ModalWrapper>
          <ModalBackdrop isActive={isActive} />
          <ModalContent isActive={isActive}>
            <ModalCloseButton onClick={this.handleClose}>
              <Icon h={1} icon="close" />
            </ModalCloseButton>
            <ModalInnerContent {...this.props} />
          </ModalContent>
        </ModalWrapper>
      );
    }
  };
