import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeParking: [],
    parkingToDelete: [],
    isCreating: false,
};

export const activeParking = createSlice({
    name: 'activeParking',
    initialState,
    reducers: {
        addToActiveParking: (state, action) => {
            state.activeParking = [];
            state.activeParking.push(action.payload);
        },
        removeFromActiveParking: (state) => {
            state.activeParking = [];
        },
        addToDeleteParking: (state, action) => {
            state.parkingToDelete = [];
            state.parkingToDelete.push(action.payload);
        },
        removeFromDeleteParking: (state, action) => {
            state.parkingToDelete = [];
        },
        toggleNewLineForParking: (state, action) => {
            state.isCreating = !state.isCreating;
        },
    },
});

export const activeParkingReducer = activeParking.reducer;
export const activeParkingActions = activeParking.actions;
