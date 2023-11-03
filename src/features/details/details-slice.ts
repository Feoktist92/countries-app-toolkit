import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Country, Extra, Status } from 'types';

export const loadCountryByName = createAsyncThunk<
    { data: Country[] },
    string,
    { extra: Extra; rejectValue: string }
>(
    '@@details/load-country-by-name',
    async (name, { extra: { client, api }, rejectWithValue }) => {
        try {
            return client.get(api.searchByCountry(name));
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue('Unknown error');
        }
    }
);

export const loadNeighborsByBorder = createAsyncThunk<
    { data: Country[] },
    string[],
    { extra: Extra }
>('@@details/load-neighbros', (borders, { extra: { client, api } }) => {
    return client.get(api.filterByCode(borders));
});

type DetailsSlice = {
    currentCountry: Country | null;
    neighbors: string[];
    status: Status;
    error: string | null;
};

const initialState: DetailsSlice = {
    currentCountry: null,
    neighbors: [],
    status: 'idle',
    error: null,
};

const detailsSlice = createSlice({
    name: '@@details',
    initialState,
    reducers: {
        clearDetails: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountryByName.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadCountryByName.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Cannot load country';
            })
            .addCase(loadCountryByName.fulfilled, (state, action) => {
                state.status = 'received';
                state.currentCountry = action.payload.data[0];
            })
            .addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
                state.neighbors = action.payload.data.map(
                    (country) => country.name
                );
            });
    },
});

export const { clearDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;
