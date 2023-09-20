import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import CounterApp from './CounterApp'
import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(<CounterApp />)

