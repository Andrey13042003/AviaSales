import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './components/store/index';
import App from './components/app';

const root = ReactDOM.createRoot(document.querySelector('.aviasales'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
