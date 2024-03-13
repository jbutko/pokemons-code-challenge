import { getApolloClient } from '@/core/apollo/client'
import { GET_POKEMON_TYPES } from '@/core/apollo/queries'

const Home = async () => {
  const {
    data: { pokemonTypes },
  } = await getApolloClient().query({
    query: GET_POKEMON_TYPES,
  })

  return (
    <main>
      <div>pokemon types:</div>
      <div>
        {pokemonTypes.map((type: string) => (
          <div key={type}>{type}</div>
        ))}
      </div>
    </main>
  )
}

export default Home
