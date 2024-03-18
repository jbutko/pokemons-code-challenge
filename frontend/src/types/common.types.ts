import { PropsWithChildren, FC } from 'react'

export type TPropsWithChildren<T = unknown> = FC<PropsWithChildren<T>>

export type TObject<T = unknown> = Record<string, T>

export type TNullable<T> = T | null

export interface TRSCProps<SearchParams = TObject, Params = string> {
  params: Params
  searchParams: SearchParams
}

export enum EListType {
  GRID = 'grid',
  LIST = 'list',
}
