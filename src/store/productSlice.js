import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
// normal reducer
  reducers: {
    // setProducts(state, action) {
    //   // we never do async call inside reducer
    //   // for example : const res = await fetch("hhttp")
    //   // cause reducers are called synchronusly and they are pure functions
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  // Thunk Reducer 
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// for call any async we use thunk meddlewears

// thunks mean a piece of codes that does some delayed works
// Rather than  excute some logic  now we can write a function  body or  code that  can be used to perform the work later
// in redux toolkit thunks comes as inbuild no need to configer it

// its is a function which return a async function

// normal flow of thunk

// export function fetchProducts() {
//   // we have 2 parameters inside the return function dispatch and getState
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (err) {
//       console.log(err);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }

// Redux toolkit thunk example
// in toolkit function we have a function createAsyncThunk and in this we use 2 parameters 'Identifyer', async functionn

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});
