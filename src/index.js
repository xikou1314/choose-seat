import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import route from './router';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(<Router>
    {route}
</Router>, document.getElementById('root'));
registerServiceWorker();