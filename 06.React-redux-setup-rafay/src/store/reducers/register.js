import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  email: "",
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      const { payload } = action;
      state.email = payload.email;
    },
 
  },
});

// Action creators are generated for each case reducer function
export const { setUserEmail } = registerSlice.actions;

export default registerSlice.reducer;
