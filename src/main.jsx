import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index'
import { Spin } from 'antd'
import './index.css'
import './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#ffffff' }}>
        <Spin size="large" />
      </div>
    }>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
)
