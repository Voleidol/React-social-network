import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { Provider } from './StoreContext'; 
// import {addMessage, addPost, uppdateMessage, uppdateNewPostText} from './redux/state'

// addPost('Samurai')

// let rerenderEntireThree = () => {
  ReactDOM.render(
    // <React.StrictMode>
          <Provider store={store}>
            <App />
            {/* <App state={state} 
                dispatch={store.dispatch.bind(store)} 
                store={store} /> */}
          </Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
  );
// }
// rerenderEntireThree()
// store.subscribe(() => {
//   rerenderEntireThree();
// });
// rerenderEntireThree(store.getState())
// store.subscribe(() => {
//   let state = store.getState()
//   rerenderEntireThree(state);
// });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();