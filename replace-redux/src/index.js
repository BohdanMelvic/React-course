import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import ProductsProvider from './context/product-context';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
//mport productReducer from './store/reducers/products';

// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);

// const app = <Provider store={store}>
//               <BrowserRouter>
//                 <App />
//               </BrowserRouter>
//             </Provider>;

const app = <ProductsProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ProductsProvider>;

ReactDOM.render(app, document.getElementById('root'));
