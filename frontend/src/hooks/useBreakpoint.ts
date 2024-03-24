// check screen size and return if we are in XY breakpoint
// const { isLg } = useBreakpoint()
import { mediaQueries, useMatchMedia } from './useMatchMedia'

type TUseBreakpoints = {
  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXlg: boolean
  isMax: boolean
}

export const useBreakpoints = (): TUseBreakpoints => {
  const isLg = useMatchMedia(mediaQueries.lg)
  const isMd = useMatchMedia(mediaQueries.md)
  const isSm = useMatchMedia(mediaQueries.sm)
  const isXlg = useMatchMedia(mediaQueries.xlg)
  const isMax = useMatchMedia(mediaQueries.max)

  return { isSm, isMd, isLg, isXlg, isMax }
}
