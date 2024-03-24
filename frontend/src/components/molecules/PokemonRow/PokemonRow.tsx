'use client'

import Image from 'next/image'
import { Pokemon } from '@/types/pokemons'
import { Column, Grid } from '@carbon/react'
import { Title } from '@/components/atoms/Title/Title'
import { ToggleFavorite } from '@/components/molecules/ToggleFavorite/ToggleFavorite'
import { PokemonTags } from '@/components/molecules/PokemonTags/PokemonTags'
import { ButtonModal } from '@/components/molecules/ButtonModal/ButtonModal'
import styles from './pokemon-row.module.scss'

type TProps = {
  data: Pokemon
  onShowModal?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const PokemonRow: React.FC<TProps> = ({ data, onShowModal }) => (
  <Grid narrow className={styles.container}>
    <Column lg={2}>
      <Image src={data.image} alt={data.name} width={100} height={100} priority className={styles.image} />
    </Column>
    <Column lg={12}>
      <Title level={4}>{data.name}</Title>
      {data.types && <PokemonTags tags={data.types} />}
    </Column>
    <Column lg={2} className={styles.icons}>
      <ToggleFavorite isFavorite={data.isFavorite} id={data.id} />
      {onShowModal && <ButtonModal onClick={onShowModal} />}
    </Column>
  </Grid>
)
