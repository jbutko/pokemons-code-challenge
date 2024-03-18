import { TObject } from '@/types/common.types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

type TUseUrlParams = {
  pathname: string
  searchParams: TObject<string>
  setUrlParams: (data: TObject<string>) => void
}

export const useUrlParams = (): TUseUrlParams => {
  const { replace } = useRouter()
  const currentSearchParams = useSearchParams()
  const pathname = usePathname()

  const createUrlParams = useCallback((data: TObject<string>) => {
    const params = new URLSearchParams(currentSearchParams)
    Object.entries(data).forEach(([key, value]) => {
      params.set(key, value)
    })
    return params
  }, [])

  const setUrlParams = useCallback(
    (data: TObject<string>) => {
      const params = createUrlParams({
        ...Object.fromEntries(currentSearchParams),
        ...data,
      })
      replace(`${pathname}?${params.toString()}`)
    },
    [currentSearchParams, pathname, replace],
  )

  return { setUrlParams, searchParams: Object.fromEntries(currentSearchParams), pathname }
}
