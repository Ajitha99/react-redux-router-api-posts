import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
// applyMiddleware -- it lets us use middleware
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
//thunk- allows us to make asynchronous calls (to api's)
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
//importing reducers
import rootReducer from './reducers'
import App from './App';


// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

//first argument is reducer, composewith devTools(argument - we have to pass applyMiddleware method with thunk as an argument.)
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
ReactDOM.render(
  // root.render(
    /* passing global state to rest of the project as store ={store} */
    <Provider store = {store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



//in this react application:
// We creating a blog post page that populates data from an api call

