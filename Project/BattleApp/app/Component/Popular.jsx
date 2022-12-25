import * as React from 'react';

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
        const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
        return(
            <main>
                <select 
                    onChange= {(e) => (this.updateLanguage(e.target.value))}
                    selected = {this.state.selectedLanguage} >
                        {languages.map((lang) => (
                            <option key = {lang} value = {lang}> 
                                {lang} 
                            </option>
                        ))}
                </select>
                {JSON.stringify(this.state, null, 2)}
            </main>
        );
    }
}