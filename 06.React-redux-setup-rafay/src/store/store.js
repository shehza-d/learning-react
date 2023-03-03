import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './reducers/register';
import userSlice  from './reducers/user';
export const store = configureStore({
  reducer: {
    register: registerSlice,
    user: userSlice,
  }
})