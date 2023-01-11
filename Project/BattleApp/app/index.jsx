import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import Popular from './Component/Popular';
import Battle from './Component/Battle';
import { Info } from './Component/Hoc';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="light">
        <div className="container">
          <Popular />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
