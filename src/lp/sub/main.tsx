import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from '@mui/joy/Button'

import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <section>
      <div>Sub Page.</div>
      <Button variant="solid">button</Button>

      <App />
    </section>
  </React.StrictMode>,
)
