import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '~utils/api.util';

export const dummyThunk = createAsyncThunk(
  'dummyThunk',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await api.get('/get-some-data');
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
