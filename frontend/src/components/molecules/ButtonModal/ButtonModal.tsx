import { ZoomIn } from '@carbon/icons-react'
import { IconButton } from '@carbon/react'

type TProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const ButtonModal: React.FC<TProps> = ({ onClick }) => (
  <IconButton kind="ghost" label="Show details" onClick={onClick}>
    <ZoomIn />
  </IconButton>
)
