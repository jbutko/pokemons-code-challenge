type TProps = {
  tags: string[]
}

export const PokemonTags: React.FC<TProps> = ({ tags }) => <>{tags.join(', ')}</>
