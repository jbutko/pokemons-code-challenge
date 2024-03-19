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
        isFavorite
        types
        sound
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

export const GET_POKEMON_BY_NAME: TypedDocumentNode<{ pokemonByName: Pokemon }> = gql`
  query GetPokemonByName($name: String!) {
    pokemonByName(name: $name) {
      id
      name
      image
      types
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      isFavorite
      evolutions {
        id
        name
        image
      }
      maxCP
      maxHP
      types
      evolutions {
        name
        id
        image
      }
      sound
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
