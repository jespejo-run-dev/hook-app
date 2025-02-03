import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterWithCustomHook />
  </StrictMode>,
)
