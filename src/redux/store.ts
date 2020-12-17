import { combineReducers, configureStore, Action } from '@reduxjs/toolkit'
import type { ThunkAction } from 'redux-thunk'

import { counterSlice } from 'features/counter'

export const rootReducer = combineReducers({
  counter: counterSlice.reducer,
})
export type RootStore = Omit<ReturnType<typeof rootReducer>, '[unknown]'>

export const store = configureStore({
  reducer: rootReducer,
})

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('')
// }
export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootStore, null, Action<string>>
