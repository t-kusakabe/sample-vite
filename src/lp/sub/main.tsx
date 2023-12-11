import React from 'react'
import ReactDOM from 'react-dom/client'

import { Header } from './Header'
import { Footer } from './Footer'
import { App } from './App'
import { Button } from '../../components/atoms/button'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <section className="container mx-auto p-4">
      <div>Sub Page.</div>
      <Button>button</Button>

      <App />
    </section>
    <Footer />
  </React.StrictMode>,
)
