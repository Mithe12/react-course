import React from 'react';
import { newUser } from './api'

function reducer(state, action){
    if(action.type === 'UpdatePreset'){
        return {
            count: state.count,
            step: action.preset
        }
    }
    else if(action.type === 'Increment'){
        return {
            count: state.count + state.step,
            step: state.step
        }
    } else if(action.type === 'Decrement'){
        return {
            count: state.count - state.step,
            step: state.step
        }
    } else if(action.type === 'Reset'){
        return {
            count: 0,
            step: state.step
        }
    } else {
        throw new Error('Action is not supported');
    }
    
}

export function CounterApp(){
    const [count, dispatch] = React.useReducer(reducer, {
        count: 0,
        step: 1
    });
    return (<React.Fragment>
        <h1>{count.count}</h1>
        <button onClick={() => dispatch({type: 'Increment'})}> Increment </button>
        <button onClick={() => dispatch({ type: 'Decrement'})}> Decrement </button>
        <button onClick={() => dispatch({type: 'Reset'})}>Reset</button>
        <button onClick={() => dispatch({type: 'UpdatePreset', preset: 5})}>Update Preset</button>
    </React.Fragment>)
}

const initialState = {
    username: "",
    email: "",
    password: "",
    loading: false,
    error: null,
    registered: false
}

function registerReducer(state, action){
    if(action.type === 'input'){
        return {
            ...state,
            [action.key]: action.value
        }
    } else if(action.type === 'login'){
        return{
            ...state,
            loading:true,
            error: null
        }
    } else if(action.type === 'success'){
        return{
            ...state,
            registered:true,
            loading: false,
            error: null 
        }
    } else if(action.type === 'error'){
        return{
            ...state,
            registered: false,
            loading: false,
            error: action.error
        }
    } else {
        throw new Erro('Action not supported')
    }
}

export function RegisterApp(){
    
    const [state, dispatch] = React.useReducer(registerReducer, initialState);

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch({type: 'login'})

        newUser({ username: state.username, email: state.email, password: state.password })
            .then(dispatch( {type: 'success'} ))
            .catch((e) => dispatch({ type:'error', error}))
    }

    if(state.registered === true){
        return <p> ReDirect to DashBoard</p>
    }

   if(state.loading === true){
        return <p>Loading</p>
   }

    return(
        <React.Fragment>
            {state.error && <p> {state.error} </p>}
            <form onSubmit={handleSubmit}>
                <input type ="text" 
                    placeholder="Email" 
                    value={state.email} 
                    onChange={(e) => dispatch({
                        type: "input",
                        key: "email",
                        value: e.target.value,
                    })}
                    />
                
                <input type="text" 
                    placeholder="Username"
                    value={state.username}
                    onChange={(e) => dispatch({
                        type:"input",
                        key:"username",
                        value:e.target.value,
                    })}
                />

                <input type="text"
                    placeholder="Passowrd"
                    value={state.password}
                    onChange={(e) => dispatch({
                        type: "input",
                        key: "password",
                        value: e.target.value,
                    })}
                    />
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}