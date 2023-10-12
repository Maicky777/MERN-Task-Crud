import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppTask } from './AppTask'
import { ProyectoProvider } from './context/ProyectoContext'
import { TareasProvider } from './context/TareasContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProyectoProvider>
      <TareasProvider>
        <AppTask />
      </TareasProvider>
    </ProyectoProvider>
  </React.StrictMode>
)
