import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Component/Nav';
import Loading from "./Component/Loading";

const Popular =  React.lazy(() => import('./Component/Popular'));
const Battle = React.lazy(() => import('./Component/Battle'));
const Results = React.lazy(() => import('./Component/Results'));

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
              <React.Suspense fallback = {<Loading />} >
                <Routes>
                  <Route path = "/" element ={<Popular/> } />
                  <Route path = "/battle" element = {<Battle />} />
                  <Route path = "/results" element = {<Results />} />
                </Routes>
              </React.Suspense>
          </div>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
