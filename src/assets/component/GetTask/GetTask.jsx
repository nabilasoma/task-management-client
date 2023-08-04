
import { useLoaderData } from 'react-router-dom';
import TaskTable from '../TaskTable/TaskTable';
import { useState } from 'react';

const GetTask = () => {
    const loadedTask = useLoaderData();
    const [tasks, setTasks] = useState(loadedTask);
    return (
        <div className='w-50 m-auto text-center mt-4'>
            <h3>Total Task is: {tasks.length}</h3>
            {
                tasks.map(task => <TaskTable key={task._id}
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                ></TaskTable>)
            }
        </div>
    );
};

export default GetTask;