import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import taskReducer from "./features/task/taskSlice";
import logger from "./middlewares/logger";


export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todo:taskReducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;





// // * redux steps
// // 1.create (one for all) store
// 2.connect with main apps and check if app is iconnected with redux 
// 3.then creat reducer and export and  import it into store