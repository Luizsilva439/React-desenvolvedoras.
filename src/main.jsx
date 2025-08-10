import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Approutes from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Approutes/>
  </StrictMode>
)
