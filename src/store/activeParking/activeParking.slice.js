import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeParking: [],
    parkingToDelete: [],
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
    },
});

export const activeParkingReducer = activeParking.reducer;
export const activeParkingActions = activeParking.actions;
