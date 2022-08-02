import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfo: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => { //action is when we make a dispatch from a Component to data layer
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInfo: (state, action) => {
            state.travelTimeInfo = action.payload;
        },
    },
});

export const { setDestination, setOrigin, setTravelTimeInfo } = navSlice.actions;

//selector
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfo = (state) => state.nav.travelTimeInfo;

export default navSlice.reducer;