import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "react-query";

import App from './App.tsx'
import './index.css'
import StreamDataProvider from './context/sourcesContext'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StreamDataProvider>
        <App />
      </StreamDataProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
