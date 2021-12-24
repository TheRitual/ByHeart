import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        text: [],
    },
    reducers: {
        setText: (state, {payload: textArray}) => {
            state.text = textArray;
        },
    }
});

export const {
    setText,
} = mainSlice.actions;

export const selectMainStore = state => state.main;
export const selectText = state => selectMainStore(state).text;

export default mainSlice.reducer;