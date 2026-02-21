import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// 1. Importamos el Provider y el store que creamos
import { Provider } from 'react-redux';
import store from './store/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Envolvemos App con el Provider para que Redux funcione */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)