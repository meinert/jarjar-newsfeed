import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import { App } from './App'
import registerServiceWorker from './registerServiceWorker'

const rootElement = document.getElementById('root')
if (!rootElement) {
    throw new Error('No root element found')
}
const reactRoot = createRoot(rootElement)
reactRoot.render(<StrictMode>
    <App />
</StrictMode>)

registerServiceWorker()
