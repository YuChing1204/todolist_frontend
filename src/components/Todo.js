import React, {useState} from "react";

const Todo = ({title, completed, romoveTodoItemProp, editTodoItemProp}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompleted] = useState(completed);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    };

    const handleInoutKeyDown = (e) => {
        const key = e.keyCode;

        if(key === 13) {
            editTodoItemProp({title: tempValue});
            setValue(tempValue)
            setIsEditing(false);
        } else if(key === 27){
            setTempValue(value)
            setIsEditing(false);
        }
    };

    const handleInoutOnChange = (e) => {
        setTempValue(e.target.value)
    }

    const handleButtonClick = () => {
        setCompleted((oldCompleted) => {
            const newState = !oldCompleted;
            editTodoItemProp({ completed: newState });
            return newState;
        });
    }

    return (
        <div className = "row" > 
            {
            isEditing?
            
                <div className="column seven wide">
                    <div className="ui input fuild">
                        <input 
                            onChange={handleInoutOnChange}
                            onKeyDown={handleInoutKeyDown}
                            autoFocus={true}
                            value={tempValue}
                        />
                    </div> 
                </div>:
                <>
                    <div className = "column five wide" onDoubleClick={handleDivDoubleClick}>
                        <h2 className={"ui header" + (completedState ? " green" : "")}>{value}</h2>
                    </div>

                    <div className = "column one wide">
                        <button type = "submit" 
                                className= { "ui button circular icon" + (completedState ? " blue" : " green")}
                                onClick={handleButtonClick}
                        > 
                                    <i className= "check icon white"></i> 
                        </button>
                    </div>

                    <div className = "column one wide">
                        <button 
                            type = "submit" 
                            onClick={romoveTodoItemProp}
                            className="ui button circular icon red"
                        > 
                            <i className= "remove icon white"></i> 
                        </button>
                    </div>
                </>
            }
        </div>
             
    );
};

export default Todo;