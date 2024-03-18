export interface Attack {
  name: string
  type: string
  damage: number
}

export interface PokemonDimension {
  minimum: string
  maximum: string
}

export interface PokemonAttack {
  fast: Attack[]
  special: Attack[]
}

export interface PokemonEvolutionRequirement {
  amount: number
  name: string
}

export interface Pokemon {
  id: string
  number: number
  name: string
  weight: PokemonDimension
  height: PokemonDimension
  classification: string
  types: string[]
  resistant: string[]
  attacks: PokemonAttack
  weaknesses: string[]
  fleeRate: number
  maxCP: number
  evolutions: Pokemon[]
  evolutionRequirements?: PokemonEvolutionRequirement
  maxHP: number
  image: string
  sound: string
  isFavorite: boolean
}

export interface PokemonConnection {
  limit: number
  offset: number
  count: number
  edges: Pokemon[]
}

export interface PokemonsQueryInput {
  limit?: number
  offset?: number
  search?: string
  filter?: PokemonFilterInput
}

export interface PokemonFilterInput {
  type?: string
  isFavorite?: boolean
  name?: string
}

export interface Query {
  pokemons(query: PokemonsQueryInput): PokemonConnection
  pokemonByName(name: string): Pokemon | null
  pokemonById(id: string): Pokemon | null
  pokemonTypes(): string[]
}

export interface Mutation {
  favoritePokemon(id: string): Pokemon | null
  unFavoritePokemon(id: string): Pokemon | null
}

export interface Root {
  query: Query
}
