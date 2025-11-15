import React from 'react'
import Card from './Card'
import './App.css'

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <Card 
        title="React Basics" 
        description="Learn props, state, and components easily." 
        color="blue"
      />
      <Card 
        title="Tailwind CSS" 
        description="Build beautiful UI with utility classes." 
        color="green"
      />
      <Card 
        title="Vite Fast Reload" 
        description="Instant feedback with Vite dev server." 
        color="purple"
      />
    </div>
  )
}

export default App
