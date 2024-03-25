'use client'

import { Column, Grid, Tile } from '@carbon/react'
import type { ImageProps } from 'next/image'
import { Title } from '@/components/atoms/Title/Title'
import { ToggleFavorite } from '@/components/molecules/ToggleFavorite/ToggleFavorite'
import { PokemonTags } from '@/components/molecules/PokemonTags/PokemonTags'
import { PokemonPowerProfile } from '@/components/molecules/PokemonPowerProfile/PokemonPowerProfile'
import { PokemonSizeStats } from '@/components/molecules/PokemonSizeStats/PokemonSizeStats'
import { PokemonEvolutions } from '@/components/molecules/PokemonEvolutions/PokemonEvolutions'
import { PlaySound } from '@/components/molecules/PlaySound/PlaySound'
import { ButtonModal } from '@/components/molecules/ButtonModal/ButtonModal'
import { Image } from '@/components/atoms/Image/Image'
import { Pokemon } from '@/types/pokemons'
import styles from './pokemon-tile.module.scss'

type TProps = {
  data: Pokemon
  showDetails?: boolean
  showFavorite?: boolean
  showSimilar?: boolean
  showSound?: boolean
  imgHeight?: ImageProps['height']
  onShowModal?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const PokemonTile: React.FC<TProps> = ({
  data,
  showDetails = false,
  showFavorite = true,
  showSimilar = false,
  showSound = false,
  imgHeight = 250,
  onShowModal,
}) => (
  <Tile className={styles.container}>
    <div className={styles.imageContainer}>
      <Image src={data.image} alt={data.name} fill priority className={styles.image} height={imgHeight} />
    </div>

    <Grid narrow fullWidth className={styles.containerInfo}>
      <Column>
        <Title level={4}>{data.name}</Title>
        {data.types && <PokemonTags tags={data.types} />}
      </Column>
      {(showFavorite || onShowModal || showSound) && (
        <Column className={styles.containerFavorite}>
          <ToggleFavorite isFavorite={data.isFavorite} id={data.id} />
          {onShowModal && <ButtonModal onClick={onShowModal} />}
          {showSound && <PlaySound url={data.sound} />}
        </Column>
      )}
    </Grid>

    {showDetails && (
      <Column sm={4} lg={16} className={styles.detailContainer}>
        <PokemonPowerProfile maxCP={data.maxCP} maxHP={data.maxHP} />
        <PokemonSizeStats height={data.height} weight={data.weight} />
      </Column>
    )}
    {showSimilar && !!data.evolutions.length && <PokemonEvolutions data={data.evolutions} />}
  </Tile>
)
