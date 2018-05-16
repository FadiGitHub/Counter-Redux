import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
// import App from './components/App1';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

let store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#app')
);
