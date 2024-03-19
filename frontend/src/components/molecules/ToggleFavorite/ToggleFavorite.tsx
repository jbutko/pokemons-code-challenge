import { IconButton } from '@carbon/react'
import { Star, StarFilled } from '@carbon/icons-react'
import { useMutation } from '@apollo/client'
import { FAVORITE_POKEMON, UNFAVORITE_POKEMON } from '@/core/apollo/queries'
import { reloadListData } from './actions'

type TProps = {
  id: string
  isFavorite: boolean
}

export const ToggleFavorite: React.FC<TProps> = ({ isFavorite, id }) => {
  const [favoritePokemon] = useMutation(FAVORITE_POKEMON)
  const [unFavoritePokemon] = useMutation(UNFAVORITE_POKEMON)

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (isFavorite) {
      unFavoritePokemon({ variables: { id } })
    } else {
      favoritePokemon({ variables: { id } })
    }

    reloadListData()
  }

  return (
    <div>
      <IconButton
        isSelected={isFavorite}
        kind="ghost"
        label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        onClick={handleToggle}
      >
        {isFavorite ? <StarFilled /> : <Star />}
      </IconButton>
    </div>
  )
}