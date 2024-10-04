import { useContext } from 'react';
import { TaskContext, COMPLETE_TASK } from '../App';
import TaskRemove from "./TaskRemove";

const TasksList = (props) => {
    const { state, dispatch } = useContext(TaskContext);
    const handleCompleteTask = (id) => {
        dispatch({ type: COMPLETE_TASK, id });
    };
    return (
        <>
            {
                state.tasks.map((item) => {
                    return (
                        <div key={item.id} style={{textAlign:"left"}}>
                            <TaskRemove id={item.id}/><span> </span>
                            {item.text}
                            <input type="checkbox" checked={item.completed}
                            onChange={() => handleCompleteTask(item.id)}/>

                        </div>
                    );
                })

            }
        </>
    );
};

export default TasksList;