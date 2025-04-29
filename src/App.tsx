import React from 'react'
import { Button } from './components/ui/button'

const App: React.FC = () => {
  return (
    <div>
      <div className='p-6'>
        <Button variant={"default"} size={"lg"}>Click Me</Button>
      </div>
    </div>
  )
}

export default App