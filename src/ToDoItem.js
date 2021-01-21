import React, { useContext }  from 'react';
import PropTypes from 'prop-types';
import './index.css'
import Context from './context'


const styles = {
    input: {
        marginRight: '1rem'
    },
    done: {
        textDecoration: "line-through"
    }
}


function ToDoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context)
    const classes = []

    if(todo.completed) {
        classes.push('done')
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox" 
                checked={todo.completed}
                style={styles.input} 
                onChange={() => onChange(todo.id)}/>  
            <strong>{index + 1}</strong>
            &nbsp;{todo.title}
            </span>
            <button className="rm" onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li> 
    )
}
/*
ToDoItem.PropTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: Proptypes.func.isRequired

}*/

export default ToDoItem