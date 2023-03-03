import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      const { payload } = action;
      state.email = payload.email;
    },
  },
})

// Action creators are generated for each case reducer function
export const {setUserEmail } = userSlice.actions

export default userSlice.reducer