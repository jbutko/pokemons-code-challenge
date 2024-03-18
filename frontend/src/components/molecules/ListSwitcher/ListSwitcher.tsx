'use client'

import { ShowDataCards, Thumbnail_2 } from '@carbon/icons-react'
import { Column, IconButton } from '@carbon/react'
import styles from './ListSwitcher.module.scss'
import { useUrlParams } from '@/hooks/useUrlParams'
import { EListType } from '@/types/common.types'

export const ListSwitcher: React.FC = () => {
  const { setUrlParams, searchParams } = useUrlParams()
  const SELECTED_LIST_TYPE = searchParams.listType || EListType.GRID

  return (
    <Column className={styles.container}>
      <IconButton
        isSelected={SELECTED_LIST_TYPE === EListType.GRID}
        kind="ghost"
        label="Grid"
        onClick={() => setUrlParams({ listType: EListType.GRID })}
      >
        <Thumbnail_2 />
      </IconButton>
      <IconButton
        isSelected={SELECTED_LIST_TYPE === EListType.LIST}
        kind="ghost"
        label="List"
        onClick={() => setUrlParams({ listType: EListType.LIST })}
      >
        <ShowDataCards />
      </IconButton>
    </Column>
  )
}
