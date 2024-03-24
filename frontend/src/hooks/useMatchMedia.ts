// check if the screen size matches the media query
// export const useIsMobile = () => useMatchMedia(mediaQueries.sm)
// source: https://github.com/carbon-design-system/carbon-platform/blob/20420cda36e073ab4a155c9716c34aa15bedbd40/packages/mdx-components/src/main/utils.ts
import { breakpoints } from '@carbon/layout'
import { useEffect, useState } from 'react'

export const mediaQueries = {
  sm: `(min-width: ${breakpoints.sm.width})`,
  md: `(min-width: ${breakpoints.md.width})`,
  lg: `(min-width: ${breakpoints.lg.width})`,
  xlg: `(min-width: ${breakpoints.xlg.width})`,
  max: `(min-width: ${breakpoints.max.width})`,
}

const getMatchMedia = (query: string) => (typeof window !== 'undefined' ? window.matchMedia(query) : null)

export const useMatchMedia = (query: string): boolean => {
  const [matches, setMatches] = useState(getMatchMedia(query)?.matches)

  useEffect(() => {
    const matchMediaResult = getMatchMedia(query)
    const updateMatch = (e: MediaQueryListEventMap['change']) => setMatches(e.matches)

    matchMediaResult?.addEventListener('change', updateMatch)

    return () => {
      matchMediaResult?.removeEventListener('change', updateMatch)
    }
  }, [query])

  return !!matches
}
