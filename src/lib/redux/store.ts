import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '@/lib/redux/features/counter/counterSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counterReducer,
    },
  })
}

export const globalStore = makeStore()

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
