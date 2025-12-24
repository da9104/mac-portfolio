import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App'

const initialPosts = window.__INITIAL_STATE__?.posts || [];

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <App initialPosts={initialPosts} />
  </StrictMode>,
)