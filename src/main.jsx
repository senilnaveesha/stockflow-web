import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'

//import Card from './components/card.jsx'
import Home from './pages/home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    
  </StrictMode>,
)
