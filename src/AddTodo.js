import { func } from 'prop-types';
import React, { useState } from 'react';
import './App.css';
//import PropTypes from 'prop-types';

function useInputValue(defaultValue ='') {
    const [value, setValue] = useState(defaultValue)
    
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    } 
}


function AddTodo({onCreate}) {
    //const [value, setValue] = useState('')
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if(input.value().trim()) {
            onCreate(input.value())
            input.clear()
            //setValue('')
        }
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <input className="input" {...input.bind} placeholder="Введите тест"></input>
            <button className="button" type="submit">Добавить задачу</button>
        </form>

    )
/*
    AddTodo.PropTypes = {
        onCreate: PropTypes.func.isRequired
    }*/
}


export default AddTodo