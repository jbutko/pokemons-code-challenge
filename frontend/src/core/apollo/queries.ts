import { TypedDocumentNode, gql } from '@apollo/client'
import { PokemonConnection, Pokemon } from '@/types/pokemons'

export const GET_POKEMONS: TypedDocumentNode<{
  pokemons: PokemonConnection
}> = gql`
  query GetPokemons($query: PokemonsQueryInput!) {
    pokemons(query: $query) {
      limit
      offset
      count
      edges {
        id
        name
        image
      }
    }
  }
`

export const GET_POKEMON_BY_ID = gql`
  query GetPokemonById($id: ID!) {
    pokemonById(id: $id) {
      id
      name
    }
  }
`

export const GET_POKEMON_BY_NAME: TypedDocumentNode<Pick<Pokemon, 'id' | 'name'>> = gql`
  query GetPokemonByName($name: String!) {
    pokemonByName(name: $name) {
      id
      name
    }
  }
`

export const GET_POKEMON_TYPES: TypedDocumentNode<{
  pokemonTypes: string[]
}> = gql`
  query GetPokemonTypes {
    pokemonTypes
  }
`

export const FAVORITE_POKEMON = gql`
  mutation FavoritePokemon($id: ID!) {
    favoritePokemon(id: $id) {
      id
      name
    }
  }
`

export const UNFAVORITE_POKEMON = gql`
  mutation UnFavoritePokemon($id: ID!) {
    unFavoritePokemon(id: $id) {
      id
      name
    }
  }
`
