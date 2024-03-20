'use client'

import { TPropsWithChildren } from '@/types/common.types'
import { ComposedModal, ComposedModalProps, ModalBody, ModalHeader, ModalHeaderProps } from '@carbon/react'
import { createPortal } from 'react-dom'

type TProps = ComposedModalProps & {
  headerProps?: ModalHeaderProps
}

export const Modal: TPropsWithChildren<TProps> = ({ open, children, headerProps, ...props }) =>
  open
    ? createPortal(
        <ComposedModal open={open} size="md" {...props}>
          <ModalHeader {...headerProps} />
          <ModalBody>{children}</ModalBody>
        </ComposedModal>,
        document.body,
      )
    : null
