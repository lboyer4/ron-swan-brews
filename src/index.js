import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
	<Provider store = { store }>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>, 
document.getElementById('root'));

serviceWorker.unregister();
