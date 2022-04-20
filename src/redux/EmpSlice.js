import { createSlice } from "@reduxjs/toolkit";
import Employee from "../models/Employee";

const EmpSlice = createSlice({

    //  name is only one 
    name: 'emp',

    initialState: {
        empData: new Employee(),
        empList: []
        // , other objects in state 
    },

    reducers: {

        getEmpById: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.empData = action.payload;
        },
        getAllEmps: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.empList = action.payload;
        }
        // , more methods in reducers   
    }
});

export const { getEmpById, getAllEmps } = EmpSlice.actions;

export default EmpSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";
// import Employee from "../models/Employee";

// const EmpSlice = createSlice({

//     //  name is only one
//     name: 'emp',

//     initialState: {
//         empData: new Employee()
//         // , other objects in state
//     },

//     reducers: {

//         getEmpById: (state, action) => {
//             console.log(action.payload);
//             state.empData = action.payload;
//         },
//         getAllEmps: () => {
//             // code
//         }
//         // , more methods in reducers
//     }
// });

// export const { getEmpById, getAllEmps } = EmpSlice.actions;

// export default EmpSlice.reducer;
