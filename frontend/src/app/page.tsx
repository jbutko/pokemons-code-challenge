import { PokemonsList } from '@/components/organisms/PokemonsList/PokemonsList'
import { Header } from '@/components/organisms/Header/Header'
import type { NextPage } from 'next'
import { TRSCProps } from '@/types/common.types'

export const dynamic = 'force-dynamic'

const Home: NextPage<TRSCProps> = ({ searchParams }) => (
  <>
    <Header />
    <PokemonsList searchParams={searchParams} />
  </>
)

export default Home
