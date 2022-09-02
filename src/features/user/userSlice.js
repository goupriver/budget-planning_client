import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    currency: "$",
  },
  status: 'idle',
  error: null
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default userSlice.reducer

export const selectCurrency = state => state.user.user.currency