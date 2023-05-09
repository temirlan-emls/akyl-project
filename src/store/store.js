import { configureStore } from '@reduxjs/toolkit';
import { activeParkingReducer } from './activeParking/activeParking.slice';
import { cartReducer } from './cart/cart.slice';
import { turaqApi } from './turaqApi/turaq.api';
import { parkingsStoreReducer } from './parkingsStore/parkingsStore.slice';

export const store = configureStore({
    reducer: {
        [turaqApi.reducerPath]: turaqApi.reducer,
        activeParking: activeParkingReducer,
        cart: cartReducer,
        parkingsStore: parkingsStoreReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(turaqApi.middleware),
});
