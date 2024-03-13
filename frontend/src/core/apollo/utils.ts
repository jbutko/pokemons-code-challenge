import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev'

export const enableDevLogging = () => {
  if (process.env.NODE_ENV !== 'development') return
  loadDevMessages()
  loadErrorMessages()
}
