import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/layout'
import { ThemeProvider } from "@/context/theme-provider"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout >
          <h1>Hello there</h1>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App