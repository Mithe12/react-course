import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import Popular from './Component/Popular';
import Battle from './Component/Battle';
import Results from './Component/Results';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Component/Nav';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      theme: "light",
    }

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme(){
    this.setState(({theme}) => ({
      theme: theme == "light" ? "dark" : "light",
    }));
  }


  render() {
    return (
      <Router>
        <div className= {this.state.theme}>
          <div className="container">
              <Nav theme = {this.state.theme} toggleTheme = {this.toggleTheme}/>
              <Routes>
                <Route path = "/" element ={<Popular/> } />
                <Route path = "/battle" element = {<Battle />} />
                <Route path = "/results" element = {<Results />} />
              </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
