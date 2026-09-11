import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root')

if (!rootElement) {
  console.error('❌ Root element (#root) not found in HTML!')
  document.body.innerHTML = '<h1>Error: Root element not found</h1>'
} else {
  try {
    console.log('✅ Creating React root...')
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
    console.log('✅ React app mounted successfully!')
  } catch (error) {
    console.error('❌ Error rendering app:', error)
    document.body.innerHTML = `<h1>Error: ${error.message}</h1><p>${error.stack}</p>`
  }
}
