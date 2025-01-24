import { AddTaskModal } from "@/components/module/task/AddTaskModal";
import TaskCard from "@/components/module/task/TaskCard";
import { selectFilter, selectTask } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
// import React from 'react'

const Tasks = () => {
  const tasks = useAppSelector(selectTask);
  // const fliters = useAppSelector(selectFilter);
  // console.log(tasks);
  // console.log(fliters);

  // const dispatch = useAppDispatch();
  return (
    <div className="space-y-4 w-6/12 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your tasks today</h2>
<AddTaskModal/>
      <div className="space-y-4">
        {
          tasks.map(task =><TaskCard task={task}/>)
        }
       
      </div>
    </div>
  );
};

export default Tasks;
