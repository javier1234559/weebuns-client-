import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App.tsx'
import { AppThemeProvider } from './theme'

import './assets/css/index.scss'
import './assets/css/responsive.scss'

import { globalConfig } from '~/config.ts'
import { persistor, store } from '~/store/store'

const CLIENT_ID = globalConfig.GOOGLE_CLIENT_ID

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppThemeProvider>
          <GoogleOAuthProvider clientId={CLIENT_ID}>
            <App />
            <Toaster />
          </GoogleOAuthProvider>
        </AppThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
)
