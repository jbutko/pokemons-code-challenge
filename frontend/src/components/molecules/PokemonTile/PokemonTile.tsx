'use client'

import Image from 'next/image'
import { Pokemon } from '@/types/pokemons'
import { Column, FlexGrid, Grid, Row, Stack, Tile } from '@carbon/react'
import { Title } from '@/components/molecules/Title/Title'
import { ToggleFavorite } from '@/components/molecules/ToggleFavorite/ToggleFavorite'
import { PokemonTags } from '@/components/molecules/PokemonTags/PokemonTags'
import { PokemonPowerProfile } from '@/components/molecules/PokemonPowerProfile/PokemonPowerProfile'
import { PokemonSizeStats } from '@/components/molecules/PokemonSizeStats/PokemonSizeStats'
import { PokemonEvolutions } from '@/components/molecules/PokemonEvolutions/PokemonEvolutions'
import { PlaySound } from '@/components/molecules/PlaySound/PlaySound'
import styles from './pokemon-tile.module.scss'

type TProps = {
  data: Pokemon
  showDetails?: boolean
  showFavorite?: boolean
  showSimilar?: boolean
  showSound?: boolean
}

export const PokemonTile: React.FC<TProps> = ({
  data,
  showDetails = false,
  showFavorite = true,
  showSimilar = false,
  showSound = false,
}) => (
  <Tile className={styles.container}>
    <div className={styles.imageContainer}>
      <Image src={data.image} alt={data.name} fill priority className={styles.image} />
    </div>
    <Grid narrow fullWidth className={styles.containerInfo}>
      <Column>
        <Title level={4}>{data.name}</Title>
        {data.types && <PokemonTags tags={data.types} />}
      </Column>
      {showFavorite && (
        <Column className={styles.containerFavorite}>
          <ToggleFavorite isFavorite={data.isFavorite} id={data.id} />
        </Column>
      )}
    </Grid>

    {showDetails && (
      <>
        <PokemonPowerProfile maxCP={data.maxCP} maxHP={data.maxHP} />
        <PokemonSizeStats height={data.height} weight={data.weight} />
      </>
    )}
    {showSimilar && <PokemonEvolutions data={data.evolutions} />}

    {showSound && <PlaySound url={data.sound} />}
  </Tile>
)
