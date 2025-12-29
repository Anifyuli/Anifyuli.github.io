import { StrictMode } from 'preact/compat'
import { createRoot } from 'preact/compat/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
