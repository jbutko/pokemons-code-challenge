import { Modal } from '@/components/molecules/Modal/Modal'
import { PokemonTile } from '@/components/molecules/PokemonTile/PokemonTile'
import { TNullable } from '@/types/common.types'
import { IPokemon } from '@/types/pokemons'

type TProps = {
  data?: TNullable<IPokemon>
  onClose: () => void
  launcherButtonRef: React.RefObject<HTMLButtonElement>
}

export const PokemonModal: React.FC<TProps> = ({ data, onClose, launcherButtonRef }) => (
  <Modal
    aria-label="Pokemon details"
    id="pokemon-details"
    headerProps={{
      title: 'Pokemon details',
    }}
    launcherButtonRef={launcherButtonRef}
    onClose={onClose}
    onSubmit={onClose}
    open={!!data}
  >
    {!!data && <PokemonTile data={data} key={data.id} showDetails showFavorite={false} showSimilar showSound />}
  </Modal>
)
