import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/styles/globals.css'
import './components/styles/animations.css'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
