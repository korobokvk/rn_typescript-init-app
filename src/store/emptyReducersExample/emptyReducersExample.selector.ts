import {createSelector} from 'reselect';
import {RootState} from '../index';

const dummySelector = (store: RootState) => store.dummy;

export const selectData = createSelector(dummySelector, ({data}) => data);
export const selectPending = createSelector(
  dummySelector,
  ({pending}) => pending,
);
