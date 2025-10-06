import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Navegacao from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegacao />
  </StrictMode>,
)
