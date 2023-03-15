import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import "./index.css";
import { PostApp } from './Components/UseState';

class App extends React.Component{
    render(){
        return <div> <PostApp/> </div>;
    }    
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App/>);