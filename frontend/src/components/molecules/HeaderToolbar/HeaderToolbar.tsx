import { Column, Grid, Search } from '@carbon/react'
import { PokemonTypes } from '@/components/molecules/PokemonTypes/PokemonTypes'
import { ListSwitcher } from '@/components/molecules/ListSwitcher/ListSwitcher'

export const HeaderToolbar: React.FC = () => (
  <Grid fullWidth>
    <Column lg={7}>
      <Search
        size="lg"
        placeholder="Find your items"
        labelText="Search"
        closeButtonLabelText="Clear search input"
        id="search-1"
        onChange={(e) => console.log(e.target.value)}
      />
    </Column>
    <Column lg={7}>
      <PokemonTypes />
    </Column>
    <Column lg={2}>
      <ListSwitcher />
    </Column>
  </Grid>
)
