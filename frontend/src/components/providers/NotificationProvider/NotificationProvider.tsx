'use client'

import React, { createContext, useState } from 'react'
import { InlineNotification, InlineNotificationProps, Layer } from '@carbon/react'
import { TPropsWithChildren } from '@/types/common.types'
import styles from './notification-provider.module.scss'

type TKind = InlineNotificationProps['kind']

export type TNotificationProvider = {
  notifyError: (text: string) => void
  notifyInfo: (text: string) => void
  notifySuccess: (text: string) => void
  notifyWarning: (text: string) => void
}

export const NotificationContext = createContext({} as TNotificationProvider)

let timeoutId: NodeJS.Timeout | null = null

export const NotificationProvider: TPropsWithChildren = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [kind, setKind] = useState<TKind>('info')
  const [closing, setClosing] = useState(false)
  const DEFAULT_DELAY = 3000

  const showNotification = (text: string) => {
    setTitle(text)
    setOpen(true)
    setClosing(false)
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      setOpen(false)
    }, DEFAULT_DELAY)
  }

  const notifySuccess = (text: string) => {
    setKind('success')
    showNotification(text)
  }

  const notifyError = (text: string) => {
    setKind('error')
    showNotification(text)
  }

  const notifyWarning = (text: string) => {
    setKind('warning')
    showNotification(text)
  }

  const notifyInfo = (text: string) => {
    setKind('info')
    showNotification(text)
  }

  const handleClose = () => {
    setClosing(true)
    setOpen(false)
  }

  return (
    <NotificationContext.Provider value={{ notifySuccess, notifyError, notifyWarning, notifyInfo }}>
      {open && (
        <Layer className={`${styles.container} ${closing ? styles.hide : ''}`}>
          <InlineNotification kind={kind} onClose={handleClose} onCloseButtonClick={handleClose} title={title} />
        </Layer>
      )}
      {children}
    </NotificationContext.Provider>
  )
}
