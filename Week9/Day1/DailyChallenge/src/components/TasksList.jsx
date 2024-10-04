import { useContext, useState } from 'react';
import { TaskContext, COMPLETE_TASK, EDIT_TASK, TOGGLE_EDIT } from '../App';
import TaskRemove from "./TaskRemove";

const TasksList = (props) => {
    const { state, dispatch } = useContext(TaskContext);
    const handleCompleteTask = (id) => {
        dispatch({ type: COMPLETE_TASK, id });
    };
    const { tasks, filter } = state;
    const [editText, setEditText] = useState("");

    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "active") return !task.completed;
        return true;
    });

    const handleToggleEdit = (id, currentText) => {
        setEditText(currentText);
        dispatch({ type: TOGGLE_EDIT, id });
    };

    const handleSaveEdit = (id) => {
        if (editText.trim() === "") return;
        dispatch({ type: EDIT_TASK, id, newText: editText });
        setEditText("");
    };

    return (
        <>
            {
                filteredTasks.map((item) => {
                    return (
                        <div key={item.id} style={{ textAlign: "left" }}>
                            <TaskRemove id={item.id} /><span> </span>
                            <input type="checkbox" checked={item.completed}
                                onChange={() => handleCompleteTask(item.id)} />
                            {item.isEditing ? (
                                <>
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        onBlur={() => handleSaveEdit(item.id)}
                                    />
                                    <button onClick={() => handleSaveEdit(item.id)}>Save</button>
                                </>
                            ) : (
                                <>
                                    {item.text}
                                    <button onClick={() => handleToggleEdit(item.id, item.text)}>
                                        Edit
                                    </button>
                                </>
                            )}
                        </div>
                    );
                })
            }
        </>
    );
};

export default TasksList;