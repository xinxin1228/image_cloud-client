import { configureStore } from '@reduxjs/toolkit'

import themeSlice from './features/theme'

const store = configureStore({
  reducer: {
    theme: themeSlice
  }
})

export type StoreTypes = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
