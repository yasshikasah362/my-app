import { createSlice } from '@reduxjs/toolkit';

const userDataSlice = createSlice({
  name: 'userData',
  initialState: { name: '', address: '', email: '', phone: '' },
  reducers: {
    setUserData: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
