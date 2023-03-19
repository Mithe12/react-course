import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import "./index.css";
import { PostApp } from './Components/UseState';
import { WaitApp } from './Components/UseEffect';
import {ResizeApp} from './Components/CustomHooks';
import {RegisterApp} from './Components/Reducer';
import { CounterGame} from './Components/UseRef';
import { Home } from './Components/ContextH';

class App extends React.Component{
    render(){
        return <div> <Home/> </div>;
    }    
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App/>);