import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TimesList from './TimesFutebol'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimesList/>
  </StrictMode>,
)
