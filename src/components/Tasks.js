import PropTypes from "prop-types"
import Task from "./Task"

export const Tasks = ({tasks, onDelete, onToggle }) => {
    
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task}
                onDelete={onDelete}
                onToggle={onToggle}/>
            ))}
        </>
    )
}
Tasks.defaultProps = {
    tasks: []
}
Tasks.propTypes = {
    tasks:PropTypes.array.isRequired,
}
