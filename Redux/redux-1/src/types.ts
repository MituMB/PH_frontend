 export interface ITask {
    id:          string;
    title:       string;
    description: string;
    dueDate:     number;
    priority:    'High' | 'Medium' | 'Low';
    isCompleted: boolean;
}
