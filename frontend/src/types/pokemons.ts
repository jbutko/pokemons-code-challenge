export interface IAttack {
  name: string
  type: string
  damage: number
}

export interface IPokemonDimension {
  minimum: string
  maximum: string
}

export interface IPokemonAttack {
  fast: IAttack[]
  special: IAttack[]
}

export interface IPokemonEvolutionRequirement {
  amount: number
  name: string
}

export interface IPokemon {
  id: string
  number: number
  name: string
  weight: IPokemonDimension
  height: IPokemonDimension
  classification: string
  types: string[]
  resistant: string[]
  attacks: IPokemonAttack
  weaknesses: string[]
  fleeRate: number
  maxCP: number
  evolutions: IPokemon[]
  evolutionRequirements?: IPokemonEvolutionRequirement
  maxHP: number
  image: string
  sound: string
  isFavorite: boolean
}

export interface IPokemonConnection {
  limit: number
  offset: number
  count: number
  edges: IPokemon[]
}

export interface IPokemonsQueryInput {
  limit?: number
  offset?: number
  search?: string
  filter?: IPokemonFilterInput
}

export interface IPokemonFilterInput {
  type?: string
  isFavorite?: boolean
  name?: string
}

export interface IQuery {
  pokemons(query: IPokemonsQueryInput): IPokemonConnection
  pokemonByName(name: string): IPokemon | null
  pokemonById(id: string): IPokemon | null
  pokemonTypes(): string[]
}

export interface IMutation {
  favoritePokemon(id: string): IPokemon | null
  unFavoritePokemon(id: string): IPokemon | null
}

export interface IRoot {
  query: IQuery
}
