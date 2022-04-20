import { createSlice } from "@reduxjs/toolkit";

const ParentSlice = createSlice({

    name: 'parent',

    initialState: {
        parentData: 'Initial data in parent slice'
    },

    reducers: {

        getParentData: (state, action) => {
            state.parentData = action.payload;
        }
    }
});

export const { getParentData } = ParentSlice.actions;

export default ParentSlice.reducer;


