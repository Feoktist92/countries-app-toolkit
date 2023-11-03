import { RootState } from 'store';

export const selectDetails = (state: RootState) => state.details;
export const selectCurrentCountry = (state: RootState) =>
    state.details.currentCountry;
export const selectNeighbors = (state: RootState) => state.details.neighbors;
