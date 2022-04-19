// steps - 
// 1. create store (only one) 
// 2. provide the store to index.js 
// 3. create slices for components (one for each)
// 4. import methods from slices in components and use them 

import { configureStore } from "@reduxjs/toolkit";
import empReducer from './EmpSlice';

// note - redux store can be created in multiple different ways. 
// latest way 

// step 1 for redux  
console.log('store');
const store = configureStore(
    {
        reducer: {
            emp: empReducer
            // , more reducers 
        }
    }
);

export default store;