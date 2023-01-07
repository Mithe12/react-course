import * as React from 'react';
import PropTypes from 'prop-types';
import { fetchPopularRepos } from '../utils/api';

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
        this.state = { 
            selectedLanguage: "All",
            repos: null,
            error: null,
        }

        // bind the method that update the object in the state.
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount(){
        // fetch the repos when the component is mounted
        this.updateLanguage(this.state.selectedLanguage);

    }
    updateLanguage(selectedLanguage){
        // we need to use setState object form
        this.setState({
            selectedLanguage,
            error: null // we are setting null to clear prev error
        });

        // whenever user changes the language, update the repos accordingly
        fetchPopularRepos(selectedLanguage)
            .then((repos) => this.setState({
                repos,
                error: null // update the error to null if we successfull
            }))
            .catch((error) => {
                console.warn("Error fetching repos:", error);
                this.setState({
                    error: `There was an error fecting repositories`, // only updating error state
                })
            })
    }

    render(){
        // paramters for the functional component
        const {selectedLanguage, repos, error} = this.state;

        return(
            <main className = "stack main-stack animate-in">
                <div className = "split">
                    <h1>Popular</h1> 
                    <LanguagesNav 
                        selected = {selectedLanguage}
                        onUpdateLanguage = {this.updateLanguage}
                    />
                 </div>
                
                { error && <p className = "text-center error">{error}</p> }
                { repos && <pre> {JSON.stringify(this.state, null, 2)} </pre>}
    
            </main>
        );
    }
}