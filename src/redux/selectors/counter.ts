import type { StoreSelector } from './types'

export const selectCount: StoreSelector<number> = ({ counter }) => counter
