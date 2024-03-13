import { gql } from '@apollo/client'

export const GET_POKEMONS = gql`
  query GetPokemons($query: QueryInput) {
    pokemons(query: $query) {
      limit
      offset
      count
      edges {
        id
        name
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

export const GET_POKEMON_BY_NAME = gql`
  query GetPokemonByName($name: String!) {
    pokemonByName(name: $name) {
      id
      name
    }
  }
`

export const GET_POKEMON_TYPES = gql`
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
