import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "../redux/counter/counterSlice";
import postSliceReducer from "../redux/posts/postSlice";


const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
        posts: postSliceReducer
        
    }
})

export default store;