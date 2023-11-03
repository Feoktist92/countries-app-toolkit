import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './features/theme/theme-slice';
import { controlsReducer } from './features/controls/controls-slice';
import { countryReducer } from './features/countries/countries-slice';
import { detailsReducer } from './features/details/details-slice';

import axios from 'axios';
import * as api from './config';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        controls: controlsReducer,
        countries: countryReducer,
        details: detailsReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddlware) =>
        getDefaultMiddlware({
            thunk: {
                extraArgument: {
                    client: axios,
                    api: api,
                },
            },
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
