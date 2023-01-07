import * as React from 'react';
import PropTypes from 'prop-types';

// we are passing the current state and function that changes the state.
// Here state is handled by parent component -- declarative thinking
function LanguagesNav({selected, onUpdateLanguage}){
    const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
        <select onChange= {(e) => (onUpdateLanguage(e.target.value))}
                selected = {selected} >
                    {languages.map((lang) => (
                        <option key = {lang} value = {lang}> 
                            {lang} 
                        </option>
                    ))}
        </select>
    );
}

// we defined the Proptypes for Component, Type Check 
LanguagesNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired,
}

export default class Popular extends React.Component {

    constructor(props){
        super(props);

        // set the state
        this.state = { selectedLanguage: "All"}

        // bind the method that update the object in the state.
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(selectedLanguage){
        // we need to use setState object form
        this.setState({selectedLanguage});
    }

    render(){
        // paramters for the functional component
        const {selectedLanguage} = this.state;
        const updateLanguage = this.updateLanguage;

        return(
            <main>
                <LanguagesNav 
                    selected = {selectedLanguage}
                    onUpdateLanguage = {updateLanguage}
                 />
                {JSON.stringify(this.state, null, 2)}
            </main>
        );
    }
}