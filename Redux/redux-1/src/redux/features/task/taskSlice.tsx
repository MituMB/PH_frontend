import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface InitialState{
    tasks:ITask[];
    filter:'all'|'high'|'medium'|'low'
}
const initialState:InitialState = {
    tasks:[  
    ],
    filter:'all'
}

const taskSlice = createSlice({
    name:'task',
    initialState,
    reducers:{
        addTask:(state,action:PayloadAction<ITask>)=>{
            // state.tasks.push(action.payload);
            const id = uuidv4();
            const taskData = {
                ...action.payload,
                id,
                isComplete:false,
            };
            state.tasks.push(taskData);
        }
    },
})

// export const {increment,decrement} = counterSlice.actions;
export const selectTask = (state:RootState) => {
    return state.todo.tasks
}
export const selectFilter = (state:RootState) => {
    return state.todo.filter
}
export const {addTask} = taskSlice.actions
export default taskSlice.reducer;