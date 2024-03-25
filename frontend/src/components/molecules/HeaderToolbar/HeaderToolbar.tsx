'use client'

import { Column, Grid, Search } from '@carbon/react'
import { PokemonTypes } from '@/components/molecules/PokemonTypes/PokemonTypes'
import { ListSwitcher } from '@/components/molecules/ListSwitcher/ListSwitcher'
import { useTransition } from 'react'
import { useUrlParams } from '@/hooks/useUrlParams'
import styles from './header-toolbar.module.scss'

export const HeaderToolbar: React.FC = () => {
  let [, startTransition] = useTransition()
  const { setUrlParams, searchParams } = useUrlParams()

  const handleSearch = (e: { target: HTMLInputElement; type: 'change' }) => {
    startTransition(() => {
      setUrlParams({
        offset: '0',
        page: '0',
        search: e.target.value,
      })
    })
  }

  return (
    <Grid condensed className={styles.container}>
      <Column sm={4} lg={7}>
        <Search
          closeButtonLabelText="Clear search input"
          defaultValue={searchParams.search || ''}
          id="search-1"
          labelText="Search"
          onChange={handleSearch}
          placeholder="Search pokemon"
          size="lg"
        />
      </Column>
      <Column sm={4} md={8} lg={7}>
        <PokemonTypes />
      </Column>
      <Column sm={4} md={8} lg={2} className={styles.listSwitcher}>
        <ListSwitcher />
      </Column>
    </Grid>
  )
}
