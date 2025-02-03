 export interface ITask {
    id:          string;
    title:       string;
    description: string;
    dueDate:     number;
    priority:    'Low' | 'Medium' | 'High';
    isCompleted: boolean;
}
