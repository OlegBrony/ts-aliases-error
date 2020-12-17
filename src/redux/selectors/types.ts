import type { RootStore } from '../store'

export type StoreSelector<T> = (store: RootStore) => T
