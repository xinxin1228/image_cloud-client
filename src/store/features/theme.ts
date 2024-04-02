import { createSlice } from '@reduxjs/toolkit'

export interface ThemeTypes {
  primaryColor: string
}

const initialState: ThemeTypes = {
  primaryColor: '#1890ff'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setPrimaryColor: (state, { payload }) => {
      state.primaryColor = payload
    }
  }
})

export const { setPrimaryColor } = themeSlice.actions

export default themeSlice.reducer
