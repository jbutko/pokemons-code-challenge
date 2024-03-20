import { useContext } from 'react'

import {
  NotificationContext,
  TNotificationProvider,
} from '@/components/providers/NotificationProvider/NotificationProvider'

export const useNotification = (): TNotificationProvider => {
  const context = useContext(NotificationContext)
  if (!context) throw new Error('useNotification must be used within an NotificationProvider')
  return context
}
