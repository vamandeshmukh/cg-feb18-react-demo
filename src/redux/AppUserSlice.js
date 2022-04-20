import { createSlice } from "@reduxjs/toolkit";
import AppUser from '../models/AppUser';

const AppUserSlice = createSlice({

    name: 'appUser',

    initialState: {
        loggedInUser: new AppUser(),
    },

    reducers: {

        getAppUser: (state, action) => {
            console.log(action.payload);
            state.loggedInUser = action.payload;
        }
    }
});

export const { getAppUser } = AppUserSlice.actions;

export default AppUserSlice.reducer;

