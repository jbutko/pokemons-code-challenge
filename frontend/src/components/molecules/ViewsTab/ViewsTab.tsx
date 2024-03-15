'use client'

import { useState } from 'react'
import { ContentSwitcher, Switch } from '@carbon/react'

export const ViewsTab: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <ContentSwitcher selectedIndex={activeIndex} onChange={(params) => setActiveIndex(params.index || 0)} size="lg">
      <Switch name="all" text="All" />
      <Switch name="favorites" text="Favorites" />
    </ContentSwitcher>
  )
}
