import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    parkingsStore: [],
};

export const parkingsStore = createSlice({
    name: 'parkingsStore',
    initialState,
    reducers: {
        addToParkingsStore: (state, action) => {
            state.parkingsStore = action.payload;
        },
        removeItemFromParkingsStore: (state, action) => {
            const removeItem = state.parkingsStore.filter(
                (item) => item.id !== action.payload.id
            );
            state.parkingsStore = removeItem;
        },
    },
});

export const parkingsStoreReducer = parkingsStore.reducer;
export const parkingsStoreActions = parkingsStore.actions;
