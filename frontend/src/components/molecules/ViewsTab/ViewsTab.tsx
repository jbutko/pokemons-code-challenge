'use client'

import { ContentSwitcher, Switch } from '@carbon/react'
import { useUrlParams } from '@/hooks/useUrlParams'

export const ViewsTab: React.FC = () => {
  const { setUrlParams, searchParams } = useUrlParams()
  const ACTIVE_INDEX = searchParams.viewTypeIndex || 0

  const handleChange = (index: number) => setUrlParams({ viewTypeIndex: String(index), offset: '0', page: '0' })

  return (
    <ContentSwitcher
      selectedIndex={Number(ACTIVE_INDEX)}
      onChange={(params) => handleChange(params.index || 0)}
      size="lg"
    >
      <Switch name="all" text="All" />
      <Switch name="favorites" text="Favorites" />
    </ContentSwitcher>
  )
}
