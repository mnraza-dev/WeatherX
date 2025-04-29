import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import { ThemeProvider } from "@/context/theme-provider"
import WeatherDashboard from './components/WeatherDashboard'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout >
       
       <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/weather-dashboard" element={<WeatherDashboard/>} />
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/" element={<h1>Home</h1>} />
       </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App