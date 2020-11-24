import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import { UserProvider } from './Context/UserContext';
import './index.css';

const app = <UserProvider>
              <App />
            </UserProvider>

ReactDOM.render(app, document.getElementById('root'));
