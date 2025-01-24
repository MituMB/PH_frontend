import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState{
    tasks:ITask[];
    filter:'all'|'high'|'medium'|'low'
}
const initialState:InitialState = {
    tasks:[
        {
            id:'222',
            title:'Blog and social posts',
            description:'fgdfgsgsg',
            dueDate:2025/11,
            priority:'High',
            isCompleted:false,
        },
        {
            id:'222',
            title:'bla bla',
            description:'fgdfgsgsg',
            dueDate:2025/11,
            priority:'Medium',
            isCompleted:false,
        }
    ],
    filter:'all'
}

const taskSlice = createSlice({
    name:'task',
    initialState,
    reducers:{},
})

// export const {increment,decrement} = counterSlice.actions;
export const selectTask = (state:RootState) => {
    return state.todo.tasks
}
export const selectFilter = (state:RootState) => {
    return state.todo.filter
}
export default taskSlice.reducer;