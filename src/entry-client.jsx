import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App'

const initialState = window.__INITIAL_STATE__ || {};

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <App initialState={initialState} />
  </StrictMode>,
)