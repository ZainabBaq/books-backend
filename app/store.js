import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { booksSlice } from "../features/books/booksSlice";
// configureStore automagically:
// - turns on the redux dev tools
// - sets up thunk
// - turns on some development checks that catches common mistakes
// - it will combine reducers if we pass an object
export default configureStore({
  reducer: {
    counter: counterReducer,
    [booksSlice.reducerPath]: booksSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(booksSlice.middleware)
  }
});
