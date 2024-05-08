import React from 'react'
import ReactDOM from 'react-dom/client'
import Canvas from './components/Canvas/Canvas.tsx'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Canvas />
  </React.StrictMode>,
)
