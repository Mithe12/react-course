import * as React from 'react'
import PropTypes from 'prop-types'


function Instructions(){
    return(
        <section className = "instructions-container">
            <h2>Instructions</h2>
            <ol>
                <li>Enter 2 Github users</li>
                <li>Battle</li>
                <li>See the winners</li>
            </ol>
        </section>
    );
}

class PlayerInput extends React.Component{

    constructor(props){
        super(props);
        // we need to define the state for input field username, all input field in the form need to define as state
        this.state = {
            username: "",
        }

        // we define the bind method for onChange and onSubmit
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit(event){
        // prevent sending data to server, instead send it to root
        event.preventDefault();

        // use the function that was given by root and update the root state, we only need to pass the value
        // because this high order function, the id is already defined by root
        this.props.onSubmit(this.state.username);
    }

    handleChange(event){
        // whenever user types the value in the input field, update the state for it
        this.setState({
            username: event.target.value,
        });
    }

    render(){
        return(
            <form className = "card bg-light" onSubmit={this.handleSubmit}>
                <label htmlFor = "username" className = "player-label">
                    {this.props.label}
                </label>
                <div className = "input-row">
                    {/* when the user types update the state and get it from there*/}
                    <input 
                        type = "text" 
                        id ="username"
                        className = "input-light"
                        placeholder = "github username" 
                        autoComplete = "off"
                        value = {this.state.username}
                        onChange = {this.handleChange} />
                    {/** If the username is null, disable the button */}
                    <button 
                        className = "btn link btn-dark" 
                        type ="submit" 
                        disabled = {!this.state.username}>
                            Submit
                    </button>
                </div>
            </form>
        );
    }
}

export default class Battle extends React.Component{
    // we need to define the state so we use constructor
    constructor(props){
        super(props)
        // this state will passed down to child and child will also able to change the state by functions
        this.state = {
            playerOne : null,
            playerTwo : null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // we are passing this function to the playerInput Componet, which will update the root component state
    // Id is either be playerOne or playerTwo and player is some user typed value
    handleSubmit(id,player){
        this.setState({
            [id] : player,
        });
    }

    // render the UI based on the state
    render(){
        // destruct the state and use to describe the state of the UI
        const { playerOne, playerTwo } = this.state;
        const disabled = !playerOne || !playerTwo 

        return (
            <main className = "stack main-stack animate-in">
                <div className = "split">
                    <pre> {JSON.stringify(this.state, null, 2)}</pre>
                    <h1> Players </h1>
                    <a href= "#" className = {`btn primary ${disabled ? "disabled": ""}`}> Battle</a>
                </div>
                <section className = "grid">
                    {playerOne === null ? (
                        <PlayerInput 
                            label = "Player One"
                            onSubmit = {(player) => this.handleSubmit("playerOne", player)} />
                    ): null}

                    {playerTwo === null ? (
                        <PlayerInput
                            label = "Player Two"
                            onSubmit = {(player) => this.handleSubmit("playerTwo", player)} />
                    ): null}
                </section>
                <Instructions/>

            </main>
        );

    }
}