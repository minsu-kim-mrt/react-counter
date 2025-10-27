import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={css`
      ${emotionReset}
    `} />
    <App />
  </StrictMode>,
)
