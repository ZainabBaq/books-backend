import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  count: 0
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment: we're allowed to change the state directly, 
    // because RTK uses a library called immer makes it immutable under the hood
    increment(state){
      state.count++;
    },
    addAmount(state, action){
      state.count += action.payload;
    }
    // decrement

    // reset
  }
})


// if you dont have a payload, you dont need to cdefine an action 
// it's automatically defined!! Maaaaagic moment!!!
export const {increment, addAmount} = counterSlice.actions;
export default counterSlice.reducer;