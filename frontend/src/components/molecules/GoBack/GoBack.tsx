'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from '@carbon/icons-react'
import { IconButton } from '@carbon/react'

export const GoBack: React.FC = () => {
  const { back } = useRouter()

  return (
    <IconButton kind="ghost" label="Go back" onClick={back}>
      <ArrowLeft />
    </IconButton>
  )
}
