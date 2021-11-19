import {useState} from 'react';


const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
        
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(text)
        if (!text) {
            alert("Please add a task")
            return
        }
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={(e) => {onSubmit(e)}}>
            <div className="form-control">
                <label>Task</label>
                <input value={text} onChange={(e) => setText(e.target.value)}
                  type='text' placeholder="Add Task"/>
            </div>
            <div className="form-control">
                <label>Day Time</label>
                <input value={day}  onChange={(e) => setDay(e.target.value)}
                type='text' placeholder="Add Day & Time"/>
            </div>
            <div className="form-control-checkbox">
                <label>Set Reminder </label>
                <input 
                checked={reminder}
                value={reminder}
                onChange={(e) => setReminder(e.target.value)}
                type='checkbox'/>
            </div>
            <input type="submit" value="Save Task" 
            className="btn btn-block"/>
        </form>
    )
}

export default AddTask
