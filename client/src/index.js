import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducers from './redux/reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><App url="http://localhost:8000/" /></Provider>, document.getElementById('root'));
registerServiceWorker();
