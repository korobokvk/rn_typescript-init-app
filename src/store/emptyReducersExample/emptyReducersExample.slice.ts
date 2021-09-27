import {createSlice} from '@reduxjs/toolkit';
import {dummyThunk} from './emptyReducersExample.thunk';

export type DummySate = {
  localData: string;
  data: string | null;
  pending: boolean;
};

const initialState: DummySate = {
  localData: '',
  data: null,
  pending: false,
};

const dummySlice = createSlice({
  name: 'dummy',
  initialState,
  reducers: {
    setSomeData: (state, action) => {
      state.localData = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(dummyThunk.pending, state => {
        state.pending = true;
      })
      .addCase(dummyThunk.rejected, state => {
        state.pending = false;
      })
      .addCase(dummyThunk.fulfilled, (state, action) => {
        state.pending = false;
        const {payload} = action;
        state.data = payload;
      });
  },
});

export const {setSomeData} = dummySlice.actions;
export default dummySlice;
