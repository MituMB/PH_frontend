import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { ITask } from '@/types';
// import { Checkbox } from '@radix-ui/react-checkbox';
import { Trash2 } from 'lucide-react'
import React from 'react'


interface IProps{
    task: ITask;
}

const TaskCard = ({task}:IProps) => {
  return (
    <div className={cn("p-4 bg-white border rounded-xl text-gray-800 space-y-2 flex justify-between",{
        "bg-green-100":task.priority ==="Low",
        "bg-yellow-100":task.priority ==="Medium",
        "bg-red-100":task.priority ==="High",
    })}>
        <div>

    <h3 className="font-bold hover:text-yellow-800 hover:underline"><div className={cn('size-3 rounded-full',{
        "bg-green-400":task.priority ==="Low",
        "bg-yellow-400":task.priority ==="Medium",
        "bg-red-400":task.priority ==="High",
    })}></div>{task.title}</h3>
    <p>{task.description}</p>
        </div>
        
    <div className="text-sm text-gray-600">
     <Button><Trash2/></Button>
     <Checkbox/>
     {/* <input type="checkbox" /> */}
    </div>
  </div>
  )
}

export default TaskCard