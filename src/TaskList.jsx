import { useEffect, useState } from "react";
import Task from "./Task";

const TaskList = () => {
    const [ tasks, setTasks ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect (() => {
        const fetchTasks = () => {
            setTimeout(() => {
                const data = [
                    {id: 1, text: 'Hacer la compra' },
                    {id: 2, text: 'Hacer ejercicio' },
                    {id: 3, text: 'Leer un libro' }
                ];
                setTasks(data);
                setLoading(false);
            }, 2000)
        };

        fetchTasks();
    }, []);

    if (loading) {
        return <div>Cargando tareas...</div>
    }

    return(
        <div>
            <h2>Lista de tareas</h2>
            <ul>
                {tasks.map(task => (
                    <Task key={task.id} task={task}/>
                ))}
            </ul>
        </div>
    )
};

export default TaskList;