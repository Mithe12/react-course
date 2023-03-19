import React from 'react';

/*
  Instructions:
    You're given the UI for a basic form. Your task is to
    hook it all up using refs.

    The `Focus X Input` buttons should focus that specific input
    field.

    The `Submit` button should log `name`, `email`, and `password`
    to the console.

    The `Reset` button should result all of the input fields to
    empty strings.
*/


export function UnControlledFormApp(){

    const nameRef = React.useRef()
    const emailRef = React.useRef()
    const passwordRef = React.useRef()

    const handleSubmit = e => {
        e.preventDefault()
        console.log(`Values are ${nameRef.current.value}, ${emailRef.current.value} and ${passwordRef.current.value}.`)
    }

    const handleReset = () => {
        nameRef.current.value=''
        emailRef.current.value=''
        passwordRef.current.value=''
    }

    return(
        <React.Fragment>
            <label> Name: <input type="text" placeholder='name' ref={nameRef}></input></label>
            <label> Email: <input type="text" placeholder='email' ref={emailRef}></input></label>
            <label> Password: <input type="text" placeholder='password' ref={passwordRef}></input></label>

            <hr/>
            <button onClick={() => nameRef.current.focus()}>Focus on Name input</button>
            <button onClick={() => emailRef.current.focus()}> Focus on Email input</button>
            <button onClick={() => passwordRef.current.focus()}> Focus on Password input</button>
            <hr/>

            <button onClick={handleSubmit}> Submit </button>
            <button onClick={handleReset}> Reset </button>
        </React.Fragment>
    )
}


/*
  Instructions:
    You're building an app to see how many times you can click
    a button in 10 seconds.

    The UI has three parts, a button, a timer counting down from 10,
    and a count of how many times you've clicked the button.

    Once the timer reaches 0, remove the button from the UI.

    Step1: Use simple counter 
    Step2: Add timer functionality to the counter along with remove option
            -- we need to set up a timmer for 1000 sec every time Id should be presisted

*/

export function CounterGame(){

    const [count, setCounter] = React.useState(0);
    const [timeLeft, setTimeLeft] = React.useState(10);
    const id = React.useRef(null);
    const increment = () => setCounter(count => count + 1);
    const clear = () => window.clearInterval(id.current)

    React.useEffect(()=>{
        id.current = window.setInterval(()=>setTimeLeft(timeLeft => timeLeft - 1),1000)
        return clear
    },[])

    React.useEffect(() => {
        if(timeLeft === 0){
            clear()
        }
    },[timeLeft])

    return(
        <React.Fragment>
            <h1>{count}</h1>
            <h2>{`Remaing Time: ${timeLeft}`}</h2>
            {timeLeft !== 0 && <button onClick={increment}>+</button>}
        </React.Fragment>
    );
}