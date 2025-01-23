import { selectFilter, selectTask } from '@/redux/features/task/taskSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
// import React from 'react'

const Tasks = () => {
const tasks = useAppSelector(selectTask)
const fliters = useAppSelector(selectFilter)
console.log(tasks);
console.log(fliters);

const dispatch = useAppDispatch()
  return (
    <div>Tasks</div>
  )
}

export default Tasks